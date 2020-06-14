@extends('layout.LayoutUserHome')

@section('header')
    <div id="headeruser" data-phone="{!! $phone !!}">

    </div>



    <div id="logoutbutton"></div>

    @stop

@section('content')



<div id="userhome"></div>

    {{--<div onclick="location.href='/';" style=" background-image:url('../images/cinema-sm.png');color:#FFFFFF;">فرهنگ و سینما</div>--}}
    {{--<div style="background-image:url('../images/pizza-sm.png');color:#1d2124;">رستوران ها</div>--}}
    {{--<div style=" background-image:url('../images/cafe-sm2.png');color: #1d2124;">کافی شاپ ها</div>--}}
    {{--<div style=" background-image:url('../images/bakery-sm.png');color:#1d2124;">شیرینی فروشی ها</div>--}}
    {{--<div style=" background-image:url('../images/doctor-sm.png');color:#1d2124;">پزشکان</div>--}}
    {{--<div style=" background-image:url('../images/hotel-sm.png');color:#1d2124;">هتل ها</div>--}}
    {{--<div style=" background-image:url('../images/shopping-sm.png');color: #FFFFFF;">مراکز خرید</div>--}}
    {{--<div style=" background-image:url('../images/webshop-sm.png');color:#1d2124;">خدمات انلاین</div>--}}
    {{--<div style=" background-image:url('../images/shop-sm.png');color: #FFFFFF;">فروشگاه های لباس</div>--}}
    {{--<div style=" background-image:url('../images/beautysalone-sm1.png');color: #FFFFFF;">ارایشگاه ها</div>--}}

@stop