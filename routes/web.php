<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ItineraryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TourController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('users', [UserController::class, 'index'])->middleware(['auth', 'verified'])->name('users.index');
Route::put('users/{user}', [UserController::class, 'upgradeRole'])->middleware(['auth', 'verified'])->name('users.upgradeRole');

Route::resource('tours', TourController::class)->middleware(['auth', 'verified']);
Route::resource('tours/{tour}/itineraries', ItineraryController::class)
    ->except(['index', 'show'])
    ->middleware(['auth', 'verified']);
Route::resource('tours/{tour}/bookings', BookingController::class)
    ->except(['show'])
    ->middleware(['auth', 'verified']);

require __DIR__.'/auth.php';
