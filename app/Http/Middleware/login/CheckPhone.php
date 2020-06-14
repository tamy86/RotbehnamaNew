<?php

namespace App\Http\Middleware\login;

use Closure;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class CheckPhone extends Middleware
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
        if ((!(preg_match("/(0|\+98)?([ ]|,|-|[()]){0,2}9[1|2|3|4]([ ]|,|-|[()]){0,2}(?:[0-9]([ ]|,|-|[()]){0,2}){8}/",$request->input('phone')))))
        {
            return response()->json(['message' => 'لطفا شماره همراه خود را به درستی وارد نمایید', 'isSuccess' => false, 'statusCode' => 400]);

        }
        else
        {
        return $next($request);
        }
    }
}
