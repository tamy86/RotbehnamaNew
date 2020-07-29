<?php

namespace App\Http\Controllers\login;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\ModelLogin\Loginphone;
use App\ModelLogin\Role;
use Carbon\Carbon;


class LoginBusinessController extends Controller
{
    public function validateUserBusinessPhone(Request $request)
    {

        /**middleware check validate phone no**/

        $verifyCode = rand(10000, 99999);

        /**sms delivery code**/

        $ip = $request->ip();

        $roleid = Session::get('roleid');


        $phone = $request->input('phone');

        if($roleid==null){
            return response()->json([
                'statusCode' => 400,
                'isSuccess' => false,
                'message' => 'درخواست شما مطابق با استاندارد تعیین شده نمیباشد. جهت وروود به سیستم از دکمه های وروود در صفحه استفاده نمایید'
            ]);
        }
else {

    $roletype = Role::select('role_name')->where('id', $roleid)->first()->role_name;
}
        if ($roletype != 'business') {
            return response()->json([
                'statusCode' => 400,
                'isSuccess' => false,
                'message' => 'خطا در تغییر آدرس بار لطفا از دکمه های ورود جهت لاگین استفاده نمایید'
            ]);
        } else {

            /**check phone exists and roleid is new or exits if new insert else update**/
            $phoneexist = Loginphone::where('phone', $phone)->Where('role_id', $roleid)->exists();

            //insert to DB
            $userphone = new Loginphone();
            $userphone->verify = $verifyCode;
            $userphone->signin = 0;
            $userphone->role_id = $roleid;
            $userphone->ipaddress = $ip;
            $userphone->created_at = new \DateTime();
            $userphone->updated_at = new \DateTime();
            $userphone->phone = $request->input('phone');

        }

        if ($phoneexist == false) {

            $userphone->save();

            return response()->json([
                'isSuccess' => true,
                'message' => '  کد اعتبار سنجی به شماره همراه شما ارسال شد',
                'statusCode' => 200,
                'signin'=>false,
            ]);

        } else if ($phoneexist == true) {

            $signin = Loginphone::where('phone', $phone)->where('signin', 0)->where('role_id', $roleid)->exists();

          if ($signin == true) {

                $updatedate = Loginphone::select('updated_at')->where('phone', $phone)->where('role_id', $roleid)->first()->updated_at;
                $now = Carbon::now();
                $differentMin = $updatedate->diffInMinutes($now);

                if ($differentMin > 3) {

                    Loginphone::where('phone', $phone)->where('role_id', $roleid)->update(['verify' => $verifyCode]);


                    return response()->json([
                        'isSuccess' => true,
                        'message' => 'کد اعتبار سنجی مجددا به شماره همراه شما ارسال شد',
                        'statusCode' => 200,
                        'signin' => false,
                    ]);
                } else {
                    return response()->json([
                        'isSuccess' => false,
                        'message' => 'شما جهت دریافت کد مجدد باید  بیشتر از 3 دقیقه صبر کنید',
                        'statusCode' => 400,
                    ]);
                }

          }
          else {
              return response()->json([
                  'isSuccess' => true,
                  'signin'=>true,
                  'statusCode' => 200,
                  'phone'=>$phone,
              ]);
          }
        }


    }


    public function validateUserBussinessVerifycode(Request $request)
    {
        /**middleware check validate verfiy code**/


        $roleid = Session::get('roleid');
        $verify= $request->input('verifycode');
        $phone=$request->input('phone');


        $verifyExist=Loginphone::Where('phone',$phone)->Where('verify',$verify)->Where('role_id',$roleid)->exists();


        if ($verifyExist==true)
        {
            Loginphone::where('phone',$phone)->Where('verify',$verify)->where('role_id', $roleid)->update(['signin' => 1]);

            return response()->json([
                'isSuccess' => true,
                'statusCode' => 200,
                'signin'=>$verifyExist,
                'phone'=>$phone,

            ]);
        }
        else {
            return response()->json([
                'isSuccess' => false,
                'message' => 'کد اعتبار سنجی صحیح وارد نشده است',
                'statusCode' => 400,
                'signin'=>$verifyExist,
            ]);
        }


    }


}
