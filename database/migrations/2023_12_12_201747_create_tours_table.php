<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tours', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->unsignedBigInteger('price');
            $table->string('image');

            $table->foreignId('user_id')->constrained()->onDelete('cascade');

            $table->timestamp('start_date');
            $table->timestamp('end_date');

            $table->unsignedInteger('max_people');
            $table->unsignedInteger('min_people');

            $table->text('status')->default('public');

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tours');
    }
};
