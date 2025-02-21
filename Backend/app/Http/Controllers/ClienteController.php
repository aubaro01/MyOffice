<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Cliente;
class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Cliente::all();
    }
    
    public function store(Request $request)
    {
        return Cliente::create($request->all());
    }
    
    public function show($id)
    {
        return Cliente::findOrFail($id);
    }
    
    public function update(Request $request, $id)
    {
        $cliente = Cliente::findOrFail($id);
        $cliente->update($request->all());
        return $cliente;
    }
    
    public function destroy($id)
    {
        Cliente::destroy($id);
        return response()->noContent();
    }

}
// Compare this snippet from Backend/app/Http/Controllers/VeiculoController.php: