<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $table = 'cliente';
    protected $primaryKey = 'id_Cliente';
    protected $fillable = ['Nome_Cliente', 'Contacto_Cliente', 'Email_Cliente', 'NIF', 'obs'];
    public $timestamps = false;

    public function veiculos()
    {
        return $this->hasMany(Veiculo::class, 'id_Cliente');
    }
}