<?php

namespace App\Http\Controllers\login;

use App\Http\Controllers\Controller;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\ModelLogin\Loginphone;
use App\ModelLogin\Role;
use Carbon\Carbon;

class LoginUserController extends Controller
{
    public function validateUserPhone(Request $request)
    {
        /** middleware check validate phone no**/

        $verifyCode = rand(10000, 99999);

        /**sms delivery code**/


        $ip = $request->ip();

        $roleid = Session::get('roleid');

        $phone = $request->input('phone');

        $roletype = Role::select('role_name')->where('id', $roleid)->first()->role_name;



        if ($roletype != 'user') {
            return response()->json([
                'statusCode' => 400,
                'isSuccess' => false,
                'message' => 'خطا در تغییر آدرس بار لطفا از دکمه های ورود جهت لاگین استفاده نمایید'
            ]);
        } else {

            /** check phone exists and roleid is new or exits if new insert else update**/
            $phoneexist = Loginphone::where('phone', $phone)->Where('role_id', $roleid)->exists();


            /**fields to insert in DB**/
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
                'message' => 'کد اعتبار سنجی به شماره همراه شما ارسال شد',
                'statusCode' => 200,
                'signin'=>false,
            ]);
        } else if ($phoneexist == true) {

                $updatedate = Loginphone::select('updated_at')->where('phone', $phone)->where('role_id', $roleid)->first()->updated_at;
                $now = Carbon::now();
                $differentMin = $updatedate->diffInMinutes($now);

                if ($differentMin > 3) {

                    Loginphone::where('phone', $request->input('phone'))->where('role_id', $roleid)->update(['verify' => $verifyCode]);
                    return response()->json([
                        'isSuccess' => true,
                        'message' => 'کد اعتبار سنجی مجددا به شماره همراه شما ارسال شد',
                        'statusCode' => 200,
                        'signin'=>false,
                    ]);
                } else {
                    return response()->json([
                        'isSuccess' => false,
                        'message' => 'شما جهت دریافت کد مجدد باید  بیشتر از 3 دقیقه صبر کنید',
                        'statusCode' => 400,
                    ]);
                }
            }

    }


    public function validateUserVerifycode(Request $request)
    {

        /**middleware CheckVerifycode check validate verfiy code**/



        $roleid = Session::get('roleid');
       $verify= $request->input('verifycode');
       $phone=$request->input('phone');

       $verifyExist=Loginphone::Where('phone',$phone)->Where('verify',$verify)->Where('role_id',$roleid)->exists();
//       $signin=Loginphone::Where('phone',$phone)->where('role_id',$roleid)->where('verify',$verify)->where('signin',0)->exists();

        if ($verifyExist==true)
        {
            Loginphone::where('phone',$phone)->Where('verify',$verify)->where('role_id', $roleid)->update(['signin' => 1]);

            return response()->json([
                'isSuccess' => true,
//                'message' => 'کد اعتبار سنجی درست وارد شده است',
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
