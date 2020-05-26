<?php

namespace App\Http\Middleware\login;

use Closure;

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
                'message'=>'درخواست شما مطابق با استاندارد تعیین شده نمیباشد مجدد تلاش نمایید',
                'statusCode'=>400,
                'isSuccess'=>false,
                ]);
        }
    else
        {
            return $next($request);
        }
    }
}
