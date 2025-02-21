<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Marca extends Model
{
    protected $table = 'marca';
    protected $primaryKey = 'id_Marca';
    protected $fillable = ['Nome_Marca'];
    public $timestamps = false;

    public function modelos()
    {
        return $this->hasMany(Modelo::class, 'id_Marca');
    }
}
