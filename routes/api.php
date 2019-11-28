<?php

use Illuminate\Http\Request;

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

Route::group(['middleware' => 'api'], function ($router) {
    Route::get('provinces', 'Api\RajaOngkirController@provinces');
    Route::get('cities/{province_id}', 'Api\RajaOngkirController@cities');
    Route::get('cekongkir/{city_id}', 'Api\RajaOngkirController@cekongkir');

    Route::get('grinds', 'Api\GrindController@index');
    Route::post('grinds', 'Api\GrindController@store');
    Route::patch('grinds/{grind}', 'Api\GrindController@update');
    Route::delete('grinds/{grind}', 'Api\GrindController@destroy');

    Route::get('sizes', 'Api\SizeController@index');
    Route::post('sizes', 'Api\SizeController@store');
    Route::patch('sizes/{size}', 'Api\SizeController@update');
    Route::delete('sizes/{size}', 'Api\SizeController@destroy');

    Route::post('add-images', 'Api\Admin\ProductController@addImages');
    Route::post('remove-images', 'Api\Admin\ProductController@removeImages');

    Route::group(['prefix'=>'admin', 'as'=>'admin.'], function(){
        Route::resource('products', 'Api\Admin\ProductController');
        Route::resource('orders', 'Api\OrderController');
    });

});
