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

Route::get('/', function () {
	if ( Auth::check() ) return 'Welcome back, ' . Auth::user()->username;
    return 'Hi guest ' . link_to('login', 'login with githiub');
});