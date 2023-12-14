<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Users', [
            'users' => User::latest()->paginate(config('app.pagination.per_page')),
        ]);
    }

    public function upgradeRole(Request $request, User $user): RedirectResponse
    {
        $request->validate([
            'role' => ['required', 'string', 'max:255', 'exists:roles,name'],
        ]);

        $user->syncRoles([$request->role]);

        return redirect()->back();
    }
}
