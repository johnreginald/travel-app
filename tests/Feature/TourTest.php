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

test('Edit Tour', function () {
    $user = User::factory()->create();

    $tour = Tour::factory()->create([
        'user_id' => $user->id,
    ]);

    $tour->name = $tour->name.' Edited';

    $this->response = $this->actingAs($user)->put(route('tours.update', $tour->id), $tour->toArray());

    $this->response->assertStatus(302);

    $this->assertDatabaseHas('tours', $tour->toArray());
});

test('Delete Tour', function () {
    $user = User::factory()->create();

    $tour = Tour::factory()->create([
        'user_id' => $user->id,
    ]);

    $this->response = $this->actingAs($user)->delete(route('tours.destroy', $tour->id));

    $this->response->assertStatus(302);

    $this->assertDatabaseMissing('tours', $tour->toArray());
});
