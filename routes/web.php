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
    return view('welcome');
});


use Utils\Twilio;

Route::get('/sms', function () {
    $from = '+12057079391';
    $to   = '+6285862419809';
    $body = 'Hello!';
    $twilio = new Twilio;
    try {
        return $twilio->sendSMS($from, $body, $to);
    } catch (\Throwable $th) {
        dd($th);
    }

});


Route::get('/whatsapp', function () {
    $from = '+12057079391'; //
    $to   = '+6285862419809';
    $body = 'Hello! From Laravel Application';
    $twilio = new Twilio;
    try {
        return $twilio->sendWhatsAppSMS($from, $to, $body);
    } catch (\Throwable $th) {
        dd($th);
    }

});
