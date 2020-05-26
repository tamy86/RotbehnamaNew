<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('welcome');
    }


    public function userLogin()
    {
        return view('auth.userLogin');
    }

    public function businessLogin()
    {
        return view('auth.businessLogin');
    }
    public function userHome()
    {
    return view('user.home');
    }

    public function userSubcategory()
    {
        return view('user.subcategory');
    }
}
