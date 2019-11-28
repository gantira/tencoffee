<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Grind extends Model
{
    protected $guarded = [];

    public function products()
    {
        return $this->hasMany(Product::call);
    }
}
