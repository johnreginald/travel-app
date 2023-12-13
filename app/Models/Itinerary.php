<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Itinerary extends Model
{
    use HasFactory;

    protected $fillable = [
        'tour_id',

        'days_number',
        'order',

        'destination',
        'eat',
        'leisure',
        'travel_by',

        'start_at',
        'end_at',

        'location',
        'activities',
        'other_details',
    ];
}
