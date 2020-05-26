<?php

namespace App\Http\Controllers\login;

use App\Http\Controllers\Controller;
use App\ModelLogin\Loginphone;
use App\ModelLogin\Role;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;


class LoginController extends Controller
{
    public function kindOfUser(Request $request)
    {
        $typeuser = $request->input('usertype');
        $roleid = Role::select('id')->where('role_name', $typeuser)->first()->id;

        if ($roleid != null) {
            Session::put('roleid', $roleid);

            return response()->json([
                'statusCode' => 200,
                'isSuccess' => true,

            ]);

        } else {
            return response()->json([
                'message' => 'نوع کاربر انتخاب شده در سیستم وجود ندارد',
                'statusCode' => 400,
                'isSuccess' => false,
            ]);
        }
    }


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
            ]);
        } else if ($phoneexist == true) {


            Loginphone::where('phone', $request->input('phone'))->where('role_id', $roleid)->update(['verify' => $verifyCode]);


            return response()->json([
                'isSuccess' => true,
                'message' => 'کد اعتبار سنجی مجددا به شماره همراه شما ارسال شد',
                'statusCode' => 200,
            ]);

        }
    }


    public function validateUserBusinessPhone(Request $request)
    {

        /**middleware check validate phone no**/

        $verifyCode = rand(10000, 99999);

        /**sms delivery code**/

        $ip = $request->ip();

        $roleid = Session::get('roleid');


        $phone = $request->input('phone');


        $roletype = Role::select('role_name')->where('id', $roleid)->first()->role_name;

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
            ]);

        } else if ($phoneexist == true) {

            Loginphone::where('phone', $request->input('phone'))->where('role_id', $roleid)->update(['verify' => $verifyCode]);


            return response()->json([
                'isSuccess' => true,
                'message' => 'کد اعتبار سنجی مجددا به شماره همراه شما ارسال شد',
                'statusCode' => 200,
            ]);

        }
    }


    public function validateUserVerifycode(Request $request)
    {

        /**middleware check validate verfiy code**/

        return response()->json([
            'isSuccess' => true,
            'message' => 'کد اعتبار سنجی درست وارد شده است',
            'statusCode' => 200,
            'url' => route('home')
        ]);

    }

    public function validateUserBussinessVerifycode()
    {

    }

}
