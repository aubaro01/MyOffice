<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    // Nome da tabela no banco de dados
    protected $table = 'admin';

    // Colunas que podem ser preenchidas em massa
    protected $fillable = ['Nome_admin', 'Log_admin', 'Pass_admin'];

    // Desativa o uso de timestamps (created_at e updated_at)
    public $timestamps = false;

    // Desativa o uso de lembretes de senha (password reset)
    public function getAuthPassword()
    {
        return $this->Pass_admin; // Usa a coluna 'Pass_admin' como senha
    }
}