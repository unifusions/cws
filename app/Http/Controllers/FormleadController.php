<?php

namespace App\Http\Controllers;

use App\Models\Formlead;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FormleadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        return Inertia::render('admin/contact-form/index', [
            'formleads' => Formlead::latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'phone' => 'nullable|string|max:20',
            'message' => 'nullable|string',
            'form_name' => 'nullable|string|max:255',
        ]);
 
        Formlead::create($validatedData);

        return response()->json([
    'message' => 'Message sent successfully!'
]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Formlead $formlead)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Formlead $formlead)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Formlead $formlead)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Formlead $formlead)
    {
        //
    }
}
