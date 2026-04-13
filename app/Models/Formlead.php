<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Formlead extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'message',
        'form_name',
    ];
}
