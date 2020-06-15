<?php

namespace App\Http\Controllers\Business;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\ModelLogin\Loginphone;

class HomeBusinessController extends Controller
{
    public function showHomeBusiness($id){

        $roleid = Session::get('roleid');
        $ip=$_SERVER['REMOTE_ADDR'];

        $phone=Loginphone::select('phone')->where('id',$id)->first()->phone;

        $signinip = Loginphone::where('phone', $phone)->Where('signin', 1)->where('ipaddress',$ip)->where('role_id',$roleid)->exists();

        if($signinip==true) {
            return view('business.home', compact('phone'));
        }else
        {
//         return response()->json([
//         'isSuccess' => false,
//         'statusCode' => 400,
//         'message'=>'لاگین نیستی',
//      ]);

            return view('auth.businessLogin');
        }


    }

}
