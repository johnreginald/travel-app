<?php

namespace Database\Factories;

use App\Models\Model;
use App\Models\Tour;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Model>
 */
class ItinerarySeederFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'tour_id' => Tour::factory()->make()->id,

            'days_number' => $this->faker->numberBetween(1, 10),
            'order' => $this->faker->numberBetween(1, 10),

            'destination' => $this->faker->text(100),
            'eat' => $this->faker->text(100),
            'leisure' => $this->faker->text(100),
            'travel_by' => $this->faker->text(100),

            'start_at' => $this->faker->dateTime(),
            'end_at' => $this->faker->dateTime(),

            'location' => $this->faker->text(100),
            'activities' => $this->faker->text(100),
            'other_details' => $this->faker->text(100),
        ];
    }
}
