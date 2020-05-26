<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InsertPhoneVerifycode extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loginphones', function (Blueprint $table) {
            $table->id();
            $table->smallInteger('role_id')->unsigned();
            $table->foreign('role_id')->references('id')->on('roles');
            $table->string('ipaddress')->index();
            $table->string('phone')->index();
            $table->integer('verify');
            $table->boolean('signin');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('loginphones');
    }
}
