<?php

namespace App\Http\Controllers\login;

use App\Http\Controllers\Controller;
use App\ModelLogin\Role;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    public function kindOfUser(Request $request)
    {
        $typeuser = $request->input('usertype');

        $roleid = Role::select('id')->where('role_name', $typeuser)->first()->id;

        Session::put('roleid', $roleid);

        $ip = $request->ip();

        if (($roleid != null)){


        return response()->json([
                'statusCode' => 200,
                'isSuccess' => true,
            ]);


        }else if(($roleid == null))
        {
            return response()->json([
                'message' => 'نوع کاربر انتخاب شده در سیستم وجود ندارد',
                'statusCode' => 400,
                'isSuccess' => false,
            ]);
        }

    }
}
