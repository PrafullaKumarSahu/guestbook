@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <a href="{{ url('auth/google') }}" class="btn btn-lg btn-primary btn-block">
                        <strong>Login With Google</strong>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
