<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('order_no');
            $table->string('name');
            $table->string('country');
            $table->string('province');
            $table->string('city');
            $table->string('address');
            $table->string('zip_code')->nullable();
            $table->string('phone');
            $table->string('courier');
            $table->string('courier_type');
            $table->float('courier_fee', 8,2);
            $table->string('email');
            $table->string('payment_method');
            $table->boolean('confirmed');
            $table->string('note')->nullable();
            $table->timestamps();
        });

        Schema::create('order_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('order_id');
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('grind_id');
            $table->unsignedBigInteger('size_id');
            $table->integer('quantity');
            $table->integer('price');
            $table->integer('subtotal');
            $table->timestamps();

            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
        Schema::dropIfExists('order_details');
    }
}
