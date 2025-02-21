<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipoMarcacao extends Model
{
    protected $table = 'tipomarcacao';
    protected $primaryKey = 'id_TipoMarc';
    protected $fillable = ['Marcacao'];
    public $timestamps = false;

    public function marcacoes()
    {
        return $this->hasMany(Marcacao::class, 'id_TipoMarc');
    }
}
