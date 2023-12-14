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
        $tour = Tour::factory()->create();
        $numberOfPeople = $this->faker->numberBetween(1, 10);

        return [
            'user_id' => User::factory()->create()->id,
            'tour_id' => $tour->id,
            'number_of_people' => $numberOfPeople,
            'total_price' => $tour->price * $numberOfPeople,
        ];
    }
}
