<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Booking;
use App\Models\Itinerary;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RoleSeeder::class);

        $user = User::factory()->create([
            'name' => 'Admin',
            'email' => 'johnthelinux@gmail.com',
            'password' => bcrypt('password'),
        ]);

        $user->assignRole('Admin');

        $editorUser = User::factory()->create([
            'name' => 'Editor',
            'email' => 'editor@gmail.com',
        ]);
        $editorUser->assignRole('Editor');

        $user = User::factory()->create([
            'name' => 'User',
        ]);
        $user->assignRole('User');

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
