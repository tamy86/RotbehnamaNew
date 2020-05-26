<?php

namespace App\ModelLogin;

use Illuminate\Database\Eloquent\Model;

class Loginphone extends Model
{
   public function Role()
   {
       return $this->belongsTo(Role::class);
   }
}
