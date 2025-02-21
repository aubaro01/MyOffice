<?php
namespace App\Http\Controllers;

use App\Models\Modelo;
use Illuminate\Http\Request;

class ModeloController extends Controller
{
    // Listar todos os modelos
    public function index()
    {
        return Modelo::all();
    }

    // Criar um novo modelo
    public function store(Request $request)
    {
        $request->validate([
            'id_Marca' => 'required|integer|exists:marca,id_Marca',
            'Nome_modelo' => 'required|string|max:50',
        ]);

        return Modelo::create($request->all());
    }

    // Mostrar um modelo específico
    public function show($id)
    {
        return Modelo::findOrFail($id);
    }

    // Atualizar um modelo
    public function update(Request $request, $id)
    {
        $modelo = Modelo::findOrFail($id);

        $request->validate([
            'id_Marca' => 'sometimes|integer|exists:marca,id_Marca',
            'Nome_modelo' => 'sometimes|string|max:50',
        ]);

        $modelo->update($request->all());
        return $modelo;
    }

    // Excluir um modelo
    public function destroy($id)
    {
        Modelo::destroy($id);
        return response()->noContent();
    }
}