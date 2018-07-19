<?php

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
/*
Route::get('/', function () {
	if ( Auth::check() ) return 'Welcome back, ' . Auth::user()->username;
    return 'Hi guest! <a href="' . url('login') .  '">login</a> with githiub';
});
*/
Route::get('/', function () {
	return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('google', function(){
	return view('auth.google');
});

Route::get('auth/google', 'Auth\GoogleController@redirectToGoogle');
Route::get('auth/google/callback', 'Auth\GoogleController@handleGoogleCallback');

Route::resource('signatures', 'Api\SignatureController')->only(['index', 'store', 'show']);
Route::put('signatures/{signature}/report', 'Api\ReportSignature@update');