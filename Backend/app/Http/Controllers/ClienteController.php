<?php
namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    // Listar todos os clientes
    public function index()
    {
        return Cliente::all();
    }

    // Criar um novo cliente
    public function store(Request $request)
    {
        $request->validate([
            'Nome_Cliente' => 'required|string|max:50',
            'Contacto_Cliente' => 'nullable|string|max:12',
            'Email_Cliente' => 'nullable|email|max:50',
            'NIF' => 'required|integer|unique:cliente,NIF',
            'obs' => 'nullable|string|max:150',
        ]);

        return Cliente::create($request->all());
    }

    // Mostrar um cliente específico
    public function show($id)
    {
        return Cliente::findOrFail($id);
    }

    // Atualizar um cliente
    public function update(Request $request, $id)
    {
        $cliente = Cliente::findOrFail($id);

        $request->validate([
            'Nome_Cliente' => 'sometimes|string|max:50',
            'Contacto_Cliente' => 'sometimes|string|max:12',
            'Email_Cliente' => 'sometimes|email|max:50',
            'NIF' => 'sometimes|integer|unique:cliente,NIF,' . $cliente->id_Cliente,
            'obs' => 'sometimes|string|max:150',
        ]);

        $cliente->update($request->all());
        return $cliente;
    }

    // Excluir um cliente
    public function destroy($id)
    {
        Cliente::destroy($id);
        return response()->noContent();
    }
}