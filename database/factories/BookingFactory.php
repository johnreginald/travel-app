<?php

namespace Database\Factories;

use App\Models\Model;
use App\Models\Tour;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Model>
 */
class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory()->make()->id,
            'tour_id' => Tour::factory()->make()->id,

            'payment_status' => $this->faker->randomElement(['pending', 'paid']),

            'booked_at' => $this->faker->dateTimeBetween('-1 months', 'now'),
        ];
    }
}
