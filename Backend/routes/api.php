<?php

use Illuminate\Http\Request;
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


Route::apiResource('clientes', ClienteController::class);
Route::apiResource('marcas', MarcaController::class);
Route::apiResource('modelos', ModeloController::class);
Route::apiResource('veiculos', VeiculoController::class);
Route::apiResource('marcacoes', MarcacaoController::class);
Route::apiResource('tipos-marcacao', TipoMarcacaoController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
