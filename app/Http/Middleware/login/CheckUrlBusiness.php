<?php

namespace App\Http\Middleware\login;

use Closure;
use Illuminate\Support\Facades\Session;
use App\ModelLogin\Role;

class CheckUrlBusiness
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
        $id=$request->route()->parameter('id');
        $roleidSession = Session::get('roleid');

        $roleName = Role::select('role_name')->where('id', $roleidSession)->first()->role_name;
        if($roleName=='business'){
            return $next($request);
        }else
        {
            return response()->json([
                'message'=>'تغییر در ادرس و نقش کاربری لطفا از دکمه های لاگین جهت ورود استفاده نمایید',
                'statusCode'=>400,
                'isSuccess'=>false,
            ]);
        }

    }
}
