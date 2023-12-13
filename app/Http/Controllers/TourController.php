<?php

namespace App\Http\Controllers;

use App\Http\Requests\TourRequest;
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
            'tours' => Tour::latest()->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TourRequest $request)
    {
        auth()->user()->tours()->create($request->validated());

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
     * Display the specified resource.
     */
    public function show(Tour $tour)
    {
        //
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
    public function update(TourRequest $request, Tour $tour): RedirectResponse
    {
        $tour->update($request->validated());

        return redirect()->route('tours.index');
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
