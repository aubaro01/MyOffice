<?php
namespace App\Http\Controllers;

use App\Models\TipoMarcacao;
use Illuminate\Http\Request;

class TipoMarcacaoController extends Controller
{
    // Listar todos os tipos de marcação
    public function index()
    {
        return TipoMarcacao::all();
    }

    // Criar um novo tipo de marcação
    public function store(Request $request)
    {
        $request->validate([
            'Marcacao' => 'required|string|max:50',
        ]);

        return TipoMarcacao::create($request->all());
    }

    // Mostrar um tipo de marcação específico
    public function show($id)
    {
        return TipoMarcacao::findOrFail($id);
    }

    // Atualizar um tipo de marcação
    public function update(Request $request, $id)
    {
        $tipoMarcacao = TipoMarcacao::findOrFail($id);

        $request->validate([
            'Marcacao' => 'sometimes|string|max:50',
        ]);

        $tipoMarcacao->update($request->all());
        return $tipoMarcacao;
    }

    // Excluir um tipo de marcação
    public function destroy($id)
    {
        TipoMarcacao::destroy($id);
        return response()->noContent();
    }
}