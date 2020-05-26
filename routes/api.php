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

Route::post('user/login/phone','login\LoginController@validateUserPhone')->middleware('phone');

Route::post('business/login/phone','login\LoginController@validateUserBusinessPhone')->middleware('phone');

Route::post('user/login/verify','login\LoginController@validateUserVerifycode')->middleware('code');

Route::post('business/login/verify','login\LoginController@validateUserBussinessVerifycode')->middleware('code');
