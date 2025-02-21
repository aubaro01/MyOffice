<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $table = 'admin';
    protected $primaryKey = 'id';
    protected $fillable = ['Nome_admin', 'Log_admin', 'Pass_admin'];
    public $timestamps = false; // Desabilita timestamps
}