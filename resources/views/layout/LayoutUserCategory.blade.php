<!DOCTYPE html>
<script type="text/javascript" src="/js/app.js"></script>
{{--<script type="text/javascript" src="/js/app.js"></script>--}}

<link rel="stylesheet" type="text/css" href="/css/userStyleCategory.css">


<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" />


    <title>Laravel</title>


</head>
<body>
<div>


    <div id="headeruser">

    </div>





    {{--@if(Route::has('login'))--}}




    <div id="logoutbutton"></div>



</div>


<div>
    @yield('header')

</div>

<div class="flex-container">
    @yield('content')
</div>

<div>


    @yield('footer')

    <footer class="footer">
        <div>

        </div>
    </footer>
</div>


</body>
<script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
</html>

