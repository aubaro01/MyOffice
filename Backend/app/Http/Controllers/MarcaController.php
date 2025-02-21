<?php

namespace App\Http\Controllers;

use App\Models\Marca;
use Illuminate\Http\Request;

class MarcaController extends Controller
{
    // Listar todas as marcas
    public function index()
    {
        return Marca::all();
    }

    // Criar uma nova marca
    public function store(Request $request)
    {
        $request->validate([
            'Nome_Marca' => 'required|string|max:30',
        ]);

        return Marca::create($request->all());
    }

    // Mostrar uma marca específica
    public function show($id)
    {
        return Marca::findOrFail($id);
    }

    // Atualizar uma marca
    public function update(Request $request, $id)
    {
        $marca = Marca::findOrFail($id);

        $request->validate([
            'Nome_Marca' => 'sometimes|string|max:30',
        ]);

        $marca->update($request->all());
        return $marca;
    }

    // Excluir uma marca
    public function destroy($id)
    {
        Marca::destroy($id);
        return response()->noContent();
    }
}
