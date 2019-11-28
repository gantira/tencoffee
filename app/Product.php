<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = [];

    public function grinds()
    {
        return $this->belongsToMany(Grind::class);
    }

    public function sizes()
    {
        return $this->belongsToMany(Size::class)->withPivot('price');
    }

    public function path()
    {
        return url('/storage/' . $this->image);
    }
}
