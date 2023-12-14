<?php

namespace Database\Factories;

use App\Models\Model;
use App\Models\Tour;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Model>
 */
class ItineraryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $tour = Tour::factory()->create();

        $start_time = $tour->start_date->addHours(1);
        $end_time = $tour->start_date->addHours(8);

        return [
            'tour_id' => $tour->id,

            'days_number' => $this->faker->numberBetween(1, 10),

            'destination' => $this->faker->text(100),
            'eat' => $this->faker->text(100),
            'leisure' => $this->faker->text(100),
            'travel_by' => $this->faker->text(100),

            'start_at' => $start_time->format('H:i'),
            'end_at' => $end_time->format('H:i'),

            'location' => $this->faker->text(100),
            'activities' => $this->faker->text(100),
            'other_details' => $this->faker->text(100),
        ];
    }
}
