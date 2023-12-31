<?php

namespace Database\Factories;

use App\Models\Tour;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\UploadedFile;

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
        $maxPeople = $this->faker->numberBetween(1, 100);
        $minPeople = $this->faker->numberBetween(1, $maxPeople);

        return [
            'name' => $this->faker->city,
            'description' => $this->faker->text,
            'price' => $this->faker->numberBetween(100, 10000),
            'image' => UploadedFile::fake()->image('image.jpg')->hashName(),

            'user_id' => User::factory()->create()->id,

            'start_date' => $this->faker->dateTimeBetween('now', '+1 months')->format('Y-m-d'),
            'end_date' => $this->faker->dateTimeBetween('+1 months', '+2 months')->format('Y-m-d'),

            'max_people' => $maxPeople,
            'min_people' => $minPeople,

            'status' => $this->faker->randomElement(['public', 'private']),
        ];
    }
}
