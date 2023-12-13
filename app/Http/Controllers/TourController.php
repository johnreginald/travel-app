<?php

namespace App\Http\Controllers;

use App\Http\Requests\TourCreateRequest;
use App\Models\Tour;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TourController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Tours/Index', [
            'tours' => Tour::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TourCreateRequest $request)
    {
        auth()->user()->tours()->create($request->validated());

        return redirect()->route('tours.index');
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
    public function show(Tour $tour)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tour $tour)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tour $tour)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tour $tour)
    {
        //
    }
}
