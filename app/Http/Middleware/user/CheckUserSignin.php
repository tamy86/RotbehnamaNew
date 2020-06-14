<?php

namespace App\Http\Middleware\user;

use Closure;
use App\ModelLogin\Loginphone;
use Illuminate\Support\Facades\Session;

class CheckUserSignin
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
        $phone=$request->input('phone');
        $roleid = Session::get('roleid');
        $checkphone=Loginphone::where('phone',$phone)->where('signin','1')->where('role_id',$roleid)->exists();

        if (($checkphone==true))
        {
            return response()->json([
                'isSuccess'=>true,
                'statusCode'=>200,
                'signin'=>$checkphone,
                'phone'=>$phone,
            ]);

        }
//        else if ($phone==null){
//            return response()->json([
//                'isSuccess'=>false,
//                'statusCode'=>400,
//                'phone'=>$phone,
//                'message'=>'شما اجازه دسترسی به این صفحه را ندارید',
//            ]);
//        }else{
        return $next($request);
        }


}
