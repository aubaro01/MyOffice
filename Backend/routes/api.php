<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\MarcaController;
use App\Http\Controllers\ModeloController;
use App\Http\Controllers\VeiculoController;
use App\Http\Controllers\MarcacaoController;
use App\Http\Controllers\TipoMarcacaoController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



// Rotas públicas
Route::post('/login', [AuthController::class, 'login']);
Route::get('/clientes', [ClienteController::class, 'index']);
Route::get('/veiculos', [VeiculoController::class, 'index']);
Route::get('/marcacoes', [MarcacaoController::class, 'index']);

// Rotas protegidas
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('clientes', ClienteController::class);
    Route::apiResource('marcas', MarcaController::class);
    Route::apiResource('modelos', ModeloController::class);
    Route::apiResource('veiculos', VeiculoController::class);
    Route::apiResource('marcacoes', MarcacaoController::class);
    Route::apiResource('tipos-marcacao', TipoMarcacaoController::class);
});
