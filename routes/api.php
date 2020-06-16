<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::get('/', 'HomeController@index')->name('home');
//
//Route::get('user/login','HomeController@login')->name('userLogin');
//
//Route::get('business/login','HomeController@businessLogin')->name('userBussines');

Route::post('user/login','login\LoginController@kindOfUser')->middleware('role');

Route::post('business/login','login\LoginController@kindOfUser')->middleware('role');

Route::post('user/login/phone','login\LoginUserController@validateUserPhone')->middleware('phone','usersignin');

Route::post('business/login/phone','login\LoginBusinessController@validateUserBusinessPhone')->middleware('phone');

Route::post('user/login/verify','login\LoginUserController@validateUserVerifycode')->middleware('code');

Route::post('business/login/verify','login\LoginBusinessController@validateUserBussinessVerifycode')->middleware('code');

Route::post('user/home','User\HomeUserController@homeUser')->middleware('phone');

Route::get('user/home/{id}','User\HomeUserController@showHomeUser')->middleware('userurl');

Route::get('business/home/{id}','business\HomeBusinessController@showHomeBusiness')->middleware('businesshome','businessurl');


//Route::get('user/home/logined','User\HomeUserController@showHomeUser');