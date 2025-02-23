<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use App\Models\Veiculo;
use App\Models\Marcacao;
use Carbon\Carbon;

class DashboardController extends Controller
{
    // Total de clientes
    public function totalClientes()
    {
        $totalClientes = Cliente::count();
        return response()->json(['total-clientes' => $totalClientes]);
    }

    // Total de veículos
    public function totalVeiculos()
    {
        return response()->json(['total' => Veiculo::count()]);
    }

    // Total de marcações no mês atual
    public function totalMarcacoesMes()
    {
        $mesAtual = Carbon::now()->month;
        $anoAtual = Carbon::now()->year;

        $total = Marcacao::whereMonth('data_marcacao', $mesAtual)
                         ->whereYear('data_marcacao', $anoAtual)
                         ->count();

        return response()->json(['total' => $total]);
    }
}
