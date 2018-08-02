@extends('signatures.master')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <signatures></signatures>
                <ul>
                    <li v-for="signature in signatures">
                        @{{ signature.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!--<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://unpkg.com/vue@2.1.6/dist/vue.js"></script>
    <script type="text/javascript" src="/js/script.js"></script>-->
@endsection