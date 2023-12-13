<?php

namespace Database\Factories;

use App\Models\Tour;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Tour>
 */
class TourFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->city,
            'description' => $this->faker->text,
            'price' => $this->faker->randomFloat(2, 0, 999999.99),
            'image' => $this->faker->imageUrl(),

            'user_id' => User::factory()->create()->id,

            'start_date' => $this->faker->dateTimeBetween('now', '+1 months'),
            'end_date' => $this->faker->dateTimeBetween('+1 months', '+2 months'),
            'total_duration' => $this->faker->numberBetween(1, 30),

            'max_people' => $this->faker->numberBetween(1, 100),
            'min_people' => $this->faker->numberBetween(1, 100),
            'current_people' => $this->faker->numberBetween(1, 100),
            'status' => $this->faker->randomElement(['public', 'private']),
        ];
    }
}
