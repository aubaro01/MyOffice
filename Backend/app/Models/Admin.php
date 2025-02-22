<?php
namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Admin extends Authenticatable
{
    protected $table = 'admin'; // Nome da tabela
    protected $primaryKey = 'id'; // Chave primária
    protected $fillable = ['Log_admin', 'Pass_admin']; // Campos que podem ser preenchidos
    protected $hidden = ['Pass_admin']; // Campos ocultos

    // Retorna a senha em texto plano
    public function getAuthPassword()
    {
        return $this->Pass_admin; // Retorna a senha sem hash
    }
}