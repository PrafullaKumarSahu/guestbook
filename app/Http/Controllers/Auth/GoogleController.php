<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Socialite;
use Exception;
use Auth;

class GoogleController extends Controller
{
	protected $redirectTo = '/home';

	/**
	* Logout and Redirect to login page if guest
	*/
	// public function __construct()
	// {
	// 	$this->middleware('guest')->expects('logout');
	// }

    /**
    * Redirect to google
    * @return void
    */
    public function redirectToGoogle()
    {
    	return Socialite::driver('google')->scopes(['profile','email'])->redirect();
    }

    /**
    * Handle google callback
    */
    public function handleGoogleCallback()
    {
    	//dump(Socialite::driver('google')->user());
    	try{
    		$user = Socialite::driver('google')->stateless()->user();
    		$create['name'] = $user->getName();
    		$create['email'] = $user->getEmail();
    		$create['google_id'] = $user->getId();

    		$user = new User;
    		$createUser = $user->addNew($create);
    		Auth::loginUsingId($createUser->id);

    		return redirect()->route('home');

    	} catch (Exception $e){
    		//var_dump($e->getMessage());exit;
    		return redirect('auth/google');
    	}
    }
}
