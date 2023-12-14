<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookingRequest;
use App\Models\Booking;
use App\Models\Tour;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Tour $tour): Response
    {
        return Inertia::render('Bookings/Index', [
            'tour' => $tour,
            'bookings' => $tour->bookings()->paginate(config('app.pagination.per_page')),
            'booking_grand_total' => '$'.number_format($tour->bookings()->sum('total_price')),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BookingRequest $request, Tour $tour): RedirectResponse
    {
        Booking::create([
            'user_id' => $request->user()->id,
            'tour_id' => $tour->id,
            'number_of_people' => $request->number_of_people,
            'total_price' => $tour->price * $request->number_of_people,
        ]);

        return redirect()->route('bookings.index', [
            'tour' => $tour->id,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Tour $tour): Response
    {
        return Inertia::render('Bookings/Create', [
            'tour' => $tour,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tour $tour, Booking $booking)
    {
        return Inertia::render('Bookings/Edit', [
            'tour' => $tour,
            'booking' => $booking,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BookingRequest $request, Tour $tour, Booking $booking): RedirectResponse
    {
        $booking->update([
            'number_of_people' => $request->number_of_people,
            'total_price' => $tour->price * $request->number_of_people,
        ]);

        return redirect()->route('bookings.index', [
            'tour' => $tour->id,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tour $tour, Booking $booking)
    {
        $booking->delete();

        return redirect()->route('bookings.index', [
            'tour' => $tour->id,
        ]);
    }
}
