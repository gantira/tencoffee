<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use RajaOngkir;

class Order extends Model
{
    protected $guarded = [];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d',
    ];

    public function setOrderNoAttribute($value = 'TC')
    {
        $this->attributes['order_no'] = 'TC' . ($this->max('id')+1);
    }

    public function getCourierAttribute($value)
    {
        return strtoupper($value);
    }

    public function setProvinceAttribute($value)
    {
        $province = RajaOngkir::Provinsi()->find($value);
        $this->attributes['province'] = $province['province'];
    }

    public function setCityAttribute($value)
    {
        $city = RajaOngkir::Kota()->find($value);
        $this->attributes['city'] = $city['type'] . ' ' . $city['city_name'];
    }

    public function details()
    {
        return $this->hasMany(OrderDetail::class);
    }

    public function getConfirmedAttribute($value)
    {
        return $value ? 'Success' : 'Waiting for payment';
    }

}
