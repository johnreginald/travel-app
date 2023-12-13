<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
        'total_duration',

        'max_people',
        'min_people',
        'current_people',
        'status',
    ];
}
