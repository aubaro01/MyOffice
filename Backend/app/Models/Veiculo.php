<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Veiculo extends Model
{
    protected $table = 'veiculo';
    protected $primaryKey = 'id_Veiculo';
    protected $fillable = ['id_Cliente', 'id_Marca', 'id_Modelo', 'Matricula_veiculo', 'Km_veiculo', 'obs'];
    public $timestamps = false;

    public function cliente()
    {
        return $this->belongsTo(Cliente::class, 'id_Cliente');
    }

    public function marca()
    {
        return $this->belongsTo(Marca::class, 'id_Marca');
    }

    public function modelo()
    {
        return $this->belongsTo(Modelo::class, 'id_Modelo');
    }

    public function marcacoes()
    {
        return $this->hasMany(Marcacao::class, 'id_veiculo');
    }
}