<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Marcacao extends Model
{
    protected $table = 'marcacao';
    protected $primaryKey = 'id_Marcacao';
    protected $fillable = ['id_veiculo', 'id_TipoMarc', 'Data_Marc', 'Estado', 'obs'];
    public $timestamps = false;

    public function veiculo()
    {
        return $this->belongsTo(Veiculo::class, 'id_veiculo');
    }

    public function tipoMarcacao()
    {
        return $this->belongsTo(TipoMarcacao::class, 'id_TipoMarc');
    }
}