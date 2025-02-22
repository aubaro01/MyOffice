<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Veiculo;

class VeiculoController extends Controller
{
    // Listar todos os veículos
    public function index()
    {
        $veiculos = Veiculo::all();
        return response()->json($veiculos);
    }

    // Mostrar detalhes de um veículo específico
    public function show($id)
    {
        $veiculo = Veiculo::findOrFail($id);
        return response()->json($veiculo);
    }

    // Criar um novo veículo
    public function store(Request $request)
    {
        $request->validate([
            'id_Cliente' => 'required|integer|exists:cliente,id_Cliente',
            'id_Marca' => 'required|integer|exists:marca,id_Marca',
            'id_Modelo' => 'required|integer|exists:modelo,id_Modelo',
            'Matricula_veiculo' => 'required|string|max:12|unique:veiculo,Matricula_veiculo',
            'Km_veiculo' => 'required|string|max:255',
            'obs' => 'nullable|string|max:255',
        ]);

        $veiculo = Veiculo::create($request->all());
        return response()->json($veiculo, 201);
    }

    // Atualizar um veículo existente
    public function update(Request $request, $id)
    {
        $veiculo = Veiculo::findOrFail($id);

        $request->validate([
            'id_Cliente' => 'sometimes|integer|exists:cliente,id_Cliente',
            'id_Marca' => 'sometimes|integer|exists:marca,id_Marca',
            'id_Modelo' => 'sometimes|integer|exists:modelo,id_Modelo',
            'Matricula_veiculo' => 'sometimes|string|max:12|unique:veiculo,Matricula_veiculo,' . $veiculo->id_Veiculo,
            'Km_veiculo' => 'sometimes|string|max:255',
            'obs' => 'sometimes|nullable|string|max:255',
        ]);

        $veiculo->update($request->all());
        return response()->json($veiculo);
    }

    // Excluir um veículo
    public function destroy($id)
    {
        Veiculo::destroy($id);
        return response()->noContent();
    }
}