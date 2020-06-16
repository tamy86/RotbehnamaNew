<?php

namespace App\Http\Controllers\Business;

use App\Http\Controllers\Controller;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\ModelLogin\Loginphone;

class HomeBusinessController extends Controller
{
    public function showHomeBusiness($id){

        $roleidSession = Session::get('roleid');
        $ip=$_SERVER['REMOTE_ADDR'];

        $phone=Loginphone::select('phone')->where('id',$id)->first()->phone;
        $roleid=Loginphone::select('role_id')->where('id',$id)->first()->role_id;

        $signinip = Loginphone::where('phone', $phone)->Where('signin', 1)->where('ipaddress',$ip)->where('role_id',$roleidSession)->exists();

        if(($signinip==true)) {
            return view('business.home', compact('phone'));

        }else  if($signinip==false)
        {
            return view('auth.businessLogin');
        }
        else if($roleid!=$roleidSession)
        {
//            return response()->json([
//                'isSuccess' => false,
//                'statusCode' => 400,
//                'message'=>'شما اجازه دسترسی با این نقش را ندارید ',
//            ]);


            return redirect()->route('userLogin');
        }


    }

}
