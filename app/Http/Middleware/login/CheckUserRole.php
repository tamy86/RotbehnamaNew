<?php

namespace App\Http\Middleware\login;

use App\ModelLogin\Loginphone;
use Closure;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;

class CheckUserRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $userkind=$request->input('usertype');

        if(((preg_match("/[^A-Za-z ]+/",$userkind)))or($userkind===null))
        {
            return response()->json([
                'message'=>'درخواست شما مطابق با استاندارد تعیین شده نمیباشد. جهت ورود به سیستم از دکمه های وروود در صفحه استفاده نمایید',
                'statusCode'=>400,
                'isSuccess'=>false,
                ]);
        }
//    else
//        {
//            $ip = $request->ip();
//            $checkSginin=Loginphone::select('signin')->where('ipaddress',$ip)->first()->signin;
//            if($checkSginin==1)
//            {
//
////               return response()->json([
////                   'ip'=>$ip,
////                   'signin'=>$checkSginin,
////                   'url'=>'user/home',
////               ]);
//
////                return redirect()->route('homeuser');
////              Route::get('user/home','HomeController@userHome');
////                return view('user/home');
//                return Redirect::route('homeuser');
//
//            }
            else {
                return $next($request);
            }
        }

}
