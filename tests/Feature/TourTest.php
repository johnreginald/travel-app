<?php

use App\Models\Tour;
use App\Models\User;
use Illuminate\Http\UploadedFile;

test('Create Tour', function () {
    $this->seed(['RoleSeeder']);
    $user = User::factory()->create();
    $user->assignRole('Admin');

    $tour = Tour::factory()->make([
        'user_id' => $user->id,
    ]);

    $tour->setAppends([]);

    $image = UploadedFile::fake()->image('image.jpg');

    $this->response = $this->actingAs($user)->post(route('tours.store'), array_merge($tour->toArray(), ['image' => $image]));

    $this->response->assertStatus(302);

    $this->assertDatabaseHas('tours', array_merge($tour->toArray(), ['image' => 'images/'.$image->hashName()]));
});

test('Tour Listing', function () {
    $this->seed(['RoleSeeder']);
    $user = User::factory()->create();
    $user->assignRole('Admin');

    $tour = Tour::factory()->create([
        'user_id' => $user->id,
    ]);

    $tour->setAppends([]);

    $this->response = $this->actingAs($user)->get(route('tours.index'));

    $this->response->assertStatus(200);

    $this->response->assertSee($tour->name);
});

test('View Tour detail', function () {
    $this->seed(['RoleSeeder']);
    $user = User::factory()->create();
    $user->assignRole('Admin');

    $tour = Tour::factory()->create([
        'user_id' => $user->id,
    ]);

    $tour->setAppends([]);

    $this->response = $this->actingAs($user)->get(route('tours.show', $tour->id));

    $this->response->assertStatus(200);

    $this->response->assertSee($tour->name);
});

test('Edit Tour', function () {
    $this->seed(['RoleSeeder']);
    $user = User::factory()->create();
    $user->assignRole('Admin');

    $tour = Tour::factory()->create([
        'user_id' => $user->id,
    ]);

    $tour->setAppends([]);

    $tour->name = $tour->name.' Edited';

    $image = UploadedFile::fake()->image('image.jpg');

    $this->response = $this->actingAs($user)->put(route('tours.update', $tour->id), array_merge($tour->toArray(), ['image' => $image]));

    $this->response->assertStatus(302);

    $this->assertDatabaseHas('tours', array_merge($tour->toArray(), ['image' => 'images/'.$image->hashName()]));
});

test('Delete Tour', function () {
    $this->seed(['RoleSeeder']);
    $user = User::factory()->create();
    $user->assignRole('Admin');

    $tour = Tour::factory()->create([
        'user_id' => $user->id,
    ]);

    $tour->setAppends([]);

    $this->response = $this->actingAs($user)->delete(route('tours.destroy', $tour->id));

    $this->response->assertStatus(302);

    $this->assertDatabaseMissing('tours', $tour->toArray());
});
