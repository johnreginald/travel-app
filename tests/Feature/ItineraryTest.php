<?php

use App\Models\Itinerary;
use App\Models\Tour;
use App\Models\User;

test('Create Itinerary', function () {
    $user = User::factory()->create();

    $tour = Tour::factory()->create([
        'user_id' => $user->id,
    ]);

    $itinerary = Itinerary::factory()->make([
        'tour_id' => $tour->id,
    ]);

    $this->response = $this->actingAs($user)->post(route('itineraries.store', $tour->id), $itinerary->toArray());

    $this->response->assertRedirect(route('tours.show', $tour->id));

    $this->assertDatabaseHas('itineraries', $itinerary->toArray());
});

test('Update Itinerary', function () {
    $user = User::factory()->create();

    $tour = Tour::factory()->create([
        'user_id' => $user->id,
    ]);

    $itinerary = Itinerary::factory()->create([
        'tour_id' => $tour->id,
    ]);

    $this->response = $this->actingAs($user)->put(route('itineraries.update', [
        'tour' => $tour->id,
        'itinerary' => $itinerary->id,
    ]), $itinerary->toArray());

    $this->response->assertRedirect(route('tours.show', $tour->id));

    $this->assertDatabaseHas('itineraries', $itinerary->toArray());
});

test('Delete Itinerary', function () {
    $user = User::factory()->create();

    $tour = Tour::factory()->create([
        'user_id' => $user->id,
    ]);

    $itinerary = Itinerary::factory()->create([
        'tour_id' => $tour->id,
    ]);

    $this->response = $this->actingAs($user)->delete(route('itineraries.destroy', [
        'tour' => $tour->id,
        'itinerary' => $itinerary->id,
    ]));

    $this->response->assertRedirect(route('tours.show', $tour->id));

    $this->assertDatabaseMissing('itineraries', $itinerary->toArray());
});
