<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Storage;

class Tour extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'image',

        'user_id',
        'start_date',
        'end_date',

        'max_people',
        'min_people',

        'status',
    ];

    protected $casts = [
        'start_date' => 'datetime:Y-m-d',
        'end_date' => 'datetime:Y-m-d',
    ];

    protected $appends = [
        'human_readable_status',
        'human_readable_price',
        'human_readable_start_date',
        'human_readable_end_date',
        'image_url',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function itineraries(): HasMany
    {
        return $this->hasMany(Itinerary::class);
    }

    public function getHumanReadableStatusAttribute(): string
    {
        return ucfirst($this->status);
    }

    public function getHumanReadablePriceAttribute(): string
    {
        return '$'.number_format($this->price);
    }

    public function getHumanReadableStartDateAttribute(): string
    {
        return $this->start_date->format('d M, Y');
    }

    public function getHumanReadableEndDateAttribute(): string
    {
        return $this->end_date->format('d M, Y');
    }

    public function getImageUrlAttribute(): string
    {
        return Storage::url($this->image);
    }

    public function bookings(): HasMany
    {
        return $this->hasMany(Booking::class);
    }
}
