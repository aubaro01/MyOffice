<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // Login para administradores
    public function login(Request $request)
    {
        $request->validate([
            'Log_admin' => 'required|string',
            'Pass_admin' => 'required|string',
        ]);

        $admin = Admin::where('Log_admin', $request->Log_admin)->first();

        if (!$admin || !Hash::check($request->Pass_admin, $admin->Pass_admin)) {
            return response()->json(['message' => 'Credenciais inválidas'], 401);
        }

        $token = $admin->createToken('auth_token')->plainTextToken;
        return response()->json(['token' => $token]);
    }

    // Logout
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logout realizado com sucesso']);
    }
}