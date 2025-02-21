<?php
namespace App\Http\Controllers;

use App\Models\Veiculo;
use Illuminate\Http\Request;

class VeiculoController extends Controller
{
    // Listar todos os veículos
    public function index()
    {
        return Veiculo::all();
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

        return Veiculo::create($request->all());
    }

    // Mostrar um veículo específico
    public function show($id)
    {
        return Veiculo::findOrFail($id);
    }

    // Atualizar um veículo
    public function update(Request $request, $id)
    {
        $veiculo = Veiculo::findOrFail($id);

        $request->validate([
            'id_Cliente' => 'sometimes|integer|exists:cliente,id_Cliente',
            'id_Marca' => 'sometimes|integer|exists:marca,id_Marca',
            'id_Modelo' => 'sometimes|integer|exists:modelo,id_Modelo',
            'Matricula_veiculo' => 'sometimes|string|max:12|unique:veiculo,Matricula_veiculo,' . $veiculo->id_Veiculo,
            'Km_veiculo' => 'sometimes|string|max:255',
            'obs' => 'sometimes|string|max:255',
        ]);

        $veiculo->update($request->all());
        return $veiculo;
    }

    // Excluir um veículo
    public function destroy($id)
    {
        Veiculo::destroy($id);
        return response()->noContent();
    }
}