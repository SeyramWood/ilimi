<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;

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

Route::get('/config', function () {
  Artisan::call('config:clear');
  Artisan::call('cache:clear');
  Artisan::call('config:cache');
  Artisan::call('storage:link');
  // Artisan::call('route:cache');
  return 'Done';
});


Route::get('/locale/{locale}', function ($locale) {
  Session()->put('locale', $locale);
  return redirect()->back();
})->name('locale');

Route::get('/', 'PageController@index');
Route::get('/donate', 'PageController@donate');
Route::get('/scholarships', 'PageController@scholarship');
