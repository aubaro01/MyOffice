<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $login = $request->input('Log_admin');
        $password = $request->input('Pass_admin');

        $admin = Admin::where('Log_admin', $login)->first();

        // Para teste rápido: comparação direta com senha em texto plano
        if ($admin && $admin->Pass_admin === $password) {
            session(['admin_id' => $admin->id]);
            return response()->json(['message' => 'Login efetuado com sucesso'], 200);
        } else {
            return response()->json(['message' => 'Credenciais inválidas'], 401);
        }
    }
}
