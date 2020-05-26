<?php

namespace App\ModelLogin;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{

    public function loginphones()
    {
        return $this->hasMany(Loginphone::class);
    }
}
