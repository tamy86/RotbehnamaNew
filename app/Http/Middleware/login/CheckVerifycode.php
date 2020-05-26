<?php

namespace App\Http\Middleware\login;

use Closure;


use Illuminate\Auth\Middleware\Authenticate as Middleware;


class CheckVerifycode extends Middleware
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

        if(!(preg_match("/\b\d{5}\b/",$request->input('verifycode'))))
        {

            return response()->json(['message' => 'کد وارد شده صحیح نمی باشد مجدد تلاش نمایید', 'isSuccess' => false, 'statusCode' => 400]);


        }
        else{

            return $next($request);


        }


    }

//protected function redirectTo($request)
//{
//    if($request->input('verifycode')=='12345')
//    {
//        return route('home');
//    }
//
//}
}
