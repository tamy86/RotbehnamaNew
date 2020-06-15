<?php

namespace App\Http\Middleware\business;

use App\ModelLogin\Loginphone;
use Closure;
use Illuminate\Support\Facades\Session;

class CheckBusinessHome
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

        $phoneExist=Loginphone::where('id',$id)->where('signin',1)->exists();

        $roleid=Loginphone::select('role_id')->where('id',$id)->first()->role_id;

        if (($roleidSession==$roleid)and($phoneExist==true))
        {

//            $phone = Loginphone::select('phone')->where('id', $id)->where('signin',1)->first()->phone;

            return $next($request);
        }
        else
            {
            return redirect()->route('userBussines');

        }
    }
}
