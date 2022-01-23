<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Subscriber;
use Illuminate\Http\Request;
use App\Notifications\SendMessage;
use Illuminate\Support\Facades\Notification;



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
    public function subscribe(Request $request)
    {
        $request->validate([
            'email' => 'required|email:filter|unique:subscribers,email'
        ]);
        Subscriber::create($request->all());
        return response()->json(['ok' => true]);
    }
    public function sendMessage(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email:filter',
            'subject' => 'required|string',
            'message' => 'required|string',
        ]);
        Notification::route('mail', $request->email)
            ->notify(new SendMessage($request->all()));
        //send message to infos@ilimi.edu.ne
        return Inertia::render('Home');
    }
}
