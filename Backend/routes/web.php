<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

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

// Define a rota para o formulário de login
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');

// Define a rota para o envio do formulário de login
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::get('/', function () {
    return view('login');
});
