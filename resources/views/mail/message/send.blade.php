@component('mail::message')
    # Subject: {{ $subject }}

    # Email: {{ $email }}
    # Name: {{ $name }}
    # Message: {{ $message }}

    Thanks
    {{ config('app.name') }}
@endcomponent
