<?php

use App\Models\Booking;
use App\Models\Tour;
use App\Models\User;

test('Create booking for a tour', function () {
    $tour = Tour::factory()->create();
    $user = User::factory()->create();

    $booking = Booking::factory()->make([
        'tour_id' => $tour->id,
        'user_id' => $user->id,
    ]);

    $response = $this->actingAs($user)->post(route('bookings.store', $tour->id), $booking->toArray());

    $response->assertRedirect(route('bookings.index', [
        'tour' => $tour->id,
    ]));

    $this->assertDatabaseHas('bookings', [
        'user_id' => $user->id,
        'tour_id' => $tour->id,
        'number_of_people' => $booking->number_of_people,
        'total_price' => $tour->price * $booking->number_of_people,
    ]);
});

test('Update booking for a tour', function () {
    $tour = Tour::factory()->create();
    $user = User::factory()->create();

    $booking = Booking::factory()->create([
        'tour_id' => $tour->id,
        'user_id' => $user->id,
    ]);

    $response = $this->actingAs($user)->put(route('bookings.update', [
        'tour' => $tour->id,
        'booking' => $booking->id,
    ]), [
        'number_of_people' => 5,
    ]);

    $response->assertRedirect(route('bookings.index', [
        'tour' => $tour->id,
    ]));

    $this->assertDatabaseHas('bookings', [
        'id' => $booking->id,
        'number_of_people' => 5,
    ]);
});

test('Delete a booking from a tour', function () {
    $tour = Tour::factory()->create();
    $user = User::factory()->create();

    $booking = Booking::factory()->create([
        'tour_id' => $tour->id,
        'user_id' => $user->id,
    ]);

    $response = $this->actingAs($user)->delete(route('bookings.destroy', [
        'tour' => $tour->id,
        'booking' => $booking->id,
    ]));

    $response->assertRedirect(route('bookings.index', [
        'tour' => $tour->id,
    ]));

    $this->assertDatabaseMissing('bookings', [
        'id' => $booking->id,
    ]);
});
