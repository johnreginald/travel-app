<?php

namespace App\Http\Controllers;

use App\Http\Requests\TourCreateRequest;
use App\Http\Requests\TourUpdateRequest;
use App\Models\Tour;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class TourController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Tours/Index', [
            'tours' => Tour::latest('start_date')->paginate(config('app.pagination.per_page')),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Tour $tour)
    {
        return Inertia::render('Tours/Show', [
            'tour' => $tour,
            'itineraries' => $tour->itineraries()->orderBy('days_number', 'asc')->paginate(config('app.pagination.per_page')),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tour $tour)
    {
        return Inertia::render('Tours/Edit', [
            'tour' => $tour,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TourUpdateRequest $request, Tour $tour): RedirectResponse
    {
        if ($request->hasFile('image')) {
            $image = $request->file('image')->store('images');
        }

        $tour->update(array_merge($request->validated(), ['image' => $image ?? $tour->image]));

        return redirect()->route('tours.index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TourCreateRequest $request)
    {
        $image = $request->file('image')->store('images');

        $request->user()->tours()->create(
            array_merge($request->validated(), ['image' => $image])
        );

        return redirect()->route('tours.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Tours/Create');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tour $tour)
    {
        $tour->delete();

        return redirect()->route('tours.index');
    }
}
