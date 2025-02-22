<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Modelo extends Model
{
    protected $table = 'modelo';
    protected $primaryKey = 'id_Modelo';
    protected $fillable = ['id_Marca', 'Nome_modelo'];
    public $timestamps = false;

    public function marca()
    {
        return $this->belongsTo(Marca::class, 'id_Marca');
    }

    public function veiculos()
    {
        return $this->hasMany(Veiculo::class, 'id_Modelo');
    }
}