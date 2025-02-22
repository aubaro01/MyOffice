<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;

class ClienteController extends Controller
{
    // Listar todos os clientes
    public function index()
    {
        $clientes = Cliente::all();
        return response()->json($clientes);
    }

    // Mostrar detalhes de um cliente específico
    public function show($id)
    {
        $cliente = Cliente::findOrFail($id);
        return response()->json($cliente);
    }

    // Criar um novo cliente
    public function store(Request $request)
    {
        $request->validate([
            'Nome_Cliente' => 'required|string|max:50',
            'Contacto_Cliente' => 'nullable|string|max:12',
            'Email_Cliente' => 'nullable|string|email|max:50',
            'NIF' => 'required|integer|unique:cliente,NIF',
            'obs' => 'nullable|string|max:150',
        ]);

        $cliente = Cliente::create($request->all());
        return response()->json($cliente, 201);
    }

    // Atualizar um cliente existente
    public function update(Request $request, $id)
    {
        $cliente = Cliente::findOrFail($id);

        $request->validate([
            'Nome_Cliente' => 'sometimes|string|max:50',
            'Contacto_Cliente' => 'sometimes|nullable|string|max:12',
            'Email_Cliente' => 'sometimes|nullable|string|email|max:50',
            'NIF' => 'sometimes|integer|unique:cliente,NIF,' . $cliente->id_Cliente,
            'obs' => 'sometimes|nullable|string|max:150',
        ]);

        $cliente->update($request->all());
        return response()->json($cliente);
    }

    // Excluir um cliente
    public function destroy($id)
    {
        Cliente::destroy($id);
        return response()->noContent();
    }
}