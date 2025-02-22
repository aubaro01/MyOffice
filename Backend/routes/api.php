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


// Rotas Publicas
Route::post('/login', [AuthController::class, 'login']);

//Rotas cliente
Route::get('/clientes/{id}', [ClienteController::class, 'show']);
Route::delete('/clientes/{id}', [ClienteController::class, 'destroy']);
Route::get('/clientes', [ClienteController::class, 'index']);
Route::put('/clientes/{id}', [ClienteController::class, 'update']); 
Route::post('/clientes', [ClienteController::class, 'store']);

//Rotas Veiculos
Route::get('/veiculos', [VeiculoController::class, 'index']); 
Route::get('/veiculos/{id}', [VeiculoController::class, 'show']); 
Route::post('/veiculos', [VeiculoController::class, 'store']); 
Route::put('/veiculos/{id}', [VeiculoController::class, 'update']); 
Route::delete('/veiculos/{id}', [VeiculoController::class, 'destroy']); 

// Rotas Marcações
Route::get('/marcacoes', [MarcacaoController::class, 'index']);
Route::get('/marcacoes/{id}', [MarcacaoController::class, 'show']);
Route::post('/marcacoes', [MarcacaoController::class, 'store']);
Route::put('/marcacoes/{id}', [MarcacaoController::class, 'update']);
Route::delete('/marcacoes/{id}', [MarcacaoController::class, 'destroy']);   

// Rotas Marcas
Route::get('/marcas', [MarcaController::class, 'index']);
Route::get('/marcas/{id}', [MarcaController::class, 'show']);
Route::post('/marcas', [MarcaController::class, 'store']);
Route::delete('/marcas/{id}', [MarcaController::class, 'destroy']);

// Rotas Modelos
Route::get('/modelos', [ModeloController::class, 'index']);
Route::get('/modelos/{id}', [ModeloController::class, 'show']);
Route::post('/modelos', [ModeloController::class, 'store']);
Route::delete('/modelos/{id}', [ModeloController::class, 'destroy']);

// Rotas Tipos de Marcação
Route::get('/tipos-marcacao', [TipoMarcacaoController::class, 'index']);
Route::get('/tipos-marcacao/{id}', [TipoMarcacaoController::class, 'show']);
Route::post('/tipos-marcacao', [TipoMarcacaoController::class, 'store']);
Route::delete('/tipos-marcacao/{id}', [TipoMarcacaoController::class, 'destroy']);


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
