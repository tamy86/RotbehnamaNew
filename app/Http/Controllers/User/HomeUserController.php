<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\ModelLogin\Loginphone;

class HomeUserController extends Controller
{

    public function homeUser(Request $request){

/**Middleware CheckPhone check validate before here**/


$phone=$request->input('phone');

        $ip = $request->ip();
        $roleid = Session::get('roleid');

        $signinStatus = Loginphone::where('phone', $phone)->where('ipaddress',$ip)->Where('signin', 1)->where('role_id',$roleid)->exists();

if ($signinStatus==true) {

    $phoneId = Loginphone::select('id')->where('phone', $phone)->where('ipaddress',$ip)->Where('signin', 1)->where('role_id',$roleid)->first()->id;

    return response()->json([
        'isSuccess' => true,
        'statusCode' => 200,
        'phone' => $phone,
        'id'=>$phoneId,
    ]);
}
else{
    return response()->json([
        'isSuccess' => false,
        'statusCode' => 400,

    ]);
}

    }

    public function showHomeUser($id){

        $roleid = Session::get('roleid');
        $ip=$_SERVER['REMOTE_ADDR'];

        $phone=Loginphone::select('phone')->where('id',$id)->first()->phone;

     $signinip = Loginphone::where('phone', $phone)->Where('signin', 1)->where('ipaddress',$ip)->where('role_id',$roleid)->exists();

     if($signinip==true) {
         return view('user.home', compact('phone'));
     }else
     {
//         return response()->json([
//         'isSuccess' => false,
//         'statusCode' => 400,
//         'message'=>'لاگین نیستی',
//      ]);

         return view('auth.userLogin');
     }


    }


}
