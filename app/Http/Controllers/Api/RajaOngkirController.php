<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use RajaOngkir;

class RajaOngkirController extends Controller
{
    public function provinces()
    {
        $provinces = RajaOngkir::Provinsi()->all();

        return response()->json([
            'provinces' => $provinces,
        ], 200);
    }

    public function cities($province_id)
    {
        $cities = RajaOngkir::Kota()->byProvinsi($province_id)->get();

        return response()->json([
            'cities' => $cities,
        ], 200);
    }

    public function cekongkir($city_id)
    {
        $services['jne'] = RajaOngkir::Cost([
            'origin' 		=> 152, // id kota asal
            'destination' 	=> $city_id, // id kota tujuan
            'weight' 		=> 1700, // berat satuan gram
            'courier' 		=> 'jne', // kode kurir pengantar ( jne / tiki / pos )
        ])->get();

        $services['tiki'] = RajaOngkir::Cost([
            'origin' 		=> 152, // id kota asal
            'destination' 	=> $city_id, // id kota tujuan
            'weight' 		=> 1700, // berat satuan gram
            'courier' 		=> 'tiki', // kode kurir pengantar ( jne / tiki / pos )
        ])->get();

        $services['pos'] = RajaOngkir::Cost([
            'origin' 		=> 152, // id kota asal
            'destination' 	=> $city_id, // id kota tujuan
            'weight' 		=> 1700, // berat satuan gram
            'courier' 		=> 'pos', // kode kurir pengantar ( jne / tiki / pos )
        ])->get();

        return response()->json([
            'services' => $services,
        ], 200);
    }
}
