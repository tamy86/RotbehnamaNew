<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/', 'HomeController@index')->name('home');

Route::get('user/login','HomeController@userLogin')->name('userLogin');

Route::get('business/login','HomeController@businessLogin')->name('userBussines');

Route::get('user/home','HomeController@userHome')->middleware('usersignin');

Route::get('user/subcategory','HomeController@userSubcategory');
