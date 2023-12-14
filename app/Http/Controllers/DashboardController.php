<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Tour;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $totalTours = Tour::count();
        $totalBookings = Booking::count();
        $totalUsers = User::count();
        $totalEarnings = '$'.number_format(Booking::sum('total_price'));

        return Inertia::render('Dashboard', [
            'dashboard' => [
                'totalTours' => $totalTours,
                'totalBookings' => $totalBookings,
                'totalUsers' => $totalUsers,
                'totalEarnings' => $totalEarnings,
            ],
        ]);
    }
}
