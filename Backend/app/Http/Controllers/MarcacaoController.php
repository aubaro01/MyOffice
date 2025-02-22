<?php

namespace App\Http\Controllers;

use App\Models\Marcacao;
use Illuminate\Http\Request;

class MarcacaoController extends Controller
{
    // Listar todas as marcações
    public function index()
    {
        return Marcacao::all();
    }

    // Criar uma nova marcação
    public function store(Request $request)
    {
        $request->validate([
            'id_veiculo' => 'required|integer|exists:veiculo,id_Veiculo',
            'id_TipoMarc' => 'required|integer|exists:tipomarcacao,id_TipoMarc',
            'Data_Marc' => 'required|date',
            'Estado' => 'required|in:Compareceu,Não compareceu,Alterada',
            'obs' => 'nullable|string|max:255',
        ]);

        return Marcacao::create($request->all());
    }

    // Mostrar uma marcação específica
    public function show($id)
    {
        return Marcacao::findOrFail($id);
    }

    // Atualizar uma marcação
    public function update(Request $request, $id)
    {
        $marcacao = Marcacao::findOrFail($id);

        $request->validate([
            'id_veiculo' => 'sometimes|integer|exists:veiculo,id_Veiculo',
            'id_TipoMarc' => 'sometimes|integer|exists:tipomarcacao,id_TipoMarc',
            'Data_Marc' => 'sometimes|date',
            'Estado' => 'sometimes|in:Compareceu,Não compareceu,Alterada',
            'obs' => 'sometimes|string|max:255',
        ]);

        $marcacao->update($request->all());
        return $marcacao;
    }

    // Excluir uma marcação
    public function destroy($id)
    {
        Marcacao::destroy($id);
        return response()->noContent();
    }
}