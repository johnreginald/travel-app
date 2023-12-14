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

    protected $casts = [
        'start_at' => 'datetime:Y-m-d H:i:s',
        'end_at' => 'datetime:Y-m-d H:i:s',
    ];

    protected $appends = [
        'human_readable_days_number',
        'human_readable_start_at',
        'human_readable_end_at',
    ];

    protected function getHumanReadableDaysNumberAttribute($value)
    {
        return 'DAY '.$this->days_number;
    }

    protected function getHumanReadableStartAtAttribute($value)
    {
        return $this->start_at->format('H:i');
    }

    protected function getHumanReadableEndAtAttribute($value)
    {
        return $this->end_at->format('H:i');
    }
}
