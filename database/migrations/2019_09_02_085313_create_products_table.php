<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->longText('about');
            $table->longText('description');
            $table->string('image')->nullable();
            $table->timestamps();

        });

        Schema::create('grind_product', function (Blueprint $table) {
            $table->unsignedBigInteger('grind_id');
            $table->unsignedBigInteger('product_id');

            $table->primary(['grind_id', 'product_id']);
            $table->foreign('grind_id')->references('id')->on('grinds')->onDelete('cascade');
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
        });

        Schema::create('product_size', function (Blueprint $table) {
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('size_id');
            $table->float('price', 8,2);

            $table->primary(['size_id', 'product_id']);
            $table->foreign('size_id')->references('id')->on('sizes')->onDelete('cascade');
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
        Schema::dropIfExists('grind_product');
        Schema::dropIfExists('product_size');
    }
}
