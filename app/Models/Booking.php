<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'tour_id',
        'user_id',
        'number_of_people',
        'total_price',
    ];

    protected $appends = [
        'human_readable_booking_date',
    ];

    public function tour()
    {
        return $this->belongsTo(Tour::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getHumanReadableBookingDateAttribute(): string
    {
        return $this->created_at->format('d M, Y');
    }

    public function getTotalPriceAttribute($value): string
    {
        return '$'.number_format($value);
    }
}
