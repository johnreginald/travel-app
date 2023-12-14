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
        Schema::create('itineraries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tour_id')->constrained()->onDelete('cascade');

            $table->unsignedInteger('days_number')->default(1);

            $table->text('destination')->nullable();
            $table->text('eat')->nullable();
            $table->text('leisure')->nullable();
            $table->text('travel_by')->nullable();

            $table->timeOnly('start_at')->nullable();
            $table->time('end_at')->nullable();

            $table->text('location')->nullable();
            $table->text('activities')->nullable();
            $table->text('other_details')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('itineraries');
    }
};
