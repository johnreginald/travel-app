<?php

namespace App\Http\Controllers;

use App\Http\Requests\ItineraryRequest;
use App\Models\Itinerary;
use App\Models\Tour;
use Illuminate\Http\RedirectResponse;

class ItineraryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ItineraryRequest $request, Tour $tour): RedirectResponse
    {
        $tour->itineraries()->create($request->validated());

        return redirect()->route('tours.show', $tour->id);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Itinerary $itinerary)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Itinerary $itinerary)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ItineraryRequest $request, Tour $tour, Itinerary $itinerary): RedirectResponse
    {
        $itinerary->update($request->validated());

        return redirect()->route('tours.show', $tour->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tour $tour, Itinerary $itinerary): RedirectResponse
    {
        $itinerary->delete();

        return redirect()->route('tours.show', $itinerary->tour_id);
    }
}
