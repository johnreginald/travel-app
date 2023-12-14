<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class ItineraryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'days_number' => 'required|numeric',

            'destination' => 'required|string',
            'eat' => 'required|string',
            'leisure' => 'required|string',
            'travel_by' => 'required|string',

            'start_at' => 'required|date_format:H:i',
            'end_at' => 'required|date_format:H:i',

            'location' => 'required|string',
            'activities' => 'required|string',
            'other_details' => 'required|string',
        ];
    }
}
