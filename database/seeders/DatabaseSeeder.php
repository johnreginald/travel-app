<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Booking;
use App\Models\Itinerary;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user = User::factory()->create([
            'name' => 'Admin',
            'email' => 'johnthelinux@gmail.com',
            'password' => bcrypt('password'),
        ]);

        $adminRole = Role::create(['name' => 'Admin']);
        $user->assignRole($adminRole);

        $editorRole = Role::create(['name' => 'Editor']);
        $editorUser = User::factory()->create([
            'name' => 'Editor',
            'email' => 'editor@gmail.com',
        ]);
        $editorUser->assignRole($editorRole);

        // create tour with 10 itineraries
        $tour = Itinerary::factory()->create([
            'tour_id' => 1,
        ]);

        Itinerary::factory()->count(9)->create([
            'tour_id' => $tour->id,
        ]);

        Booking::factory()->count(10)->create([
            'tour_id' => $tour->id,
        ]);
    }
}
