<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function donate()
    {
        return Inertia::render('Donate');
    }
    public function scholarship()
    {
        return Inertia::render('Scholarship');
    }
}
