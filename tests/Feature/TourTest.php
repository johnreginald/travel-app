<?php

use App\Models\Tour;
use App\Models\User;

test('Create Tour', function () {
    $user = User::factory()->create();

    $tour = Tour::factory()->make([
        'user_id' => $user->id,
    ]);

    $this->response = $this->actingAs($user)->post(route('tours.store'), $tour->toArray());

    $this->response->assertStatus(302);

    $this->assertDatabaseHas('tours', $tour->toArray());
});
