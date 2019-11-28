<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\OrderDetail as OrderDetailResource;

class Order extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'order_no' => $this->order_no,
            'name' => $this->name,
            'country' => $this->country,
            'province' => $this->province,
            'city' => $this->city,
            'address' => $this->address,
            'zip_code' => $this->zip_code,
            'phone' => $this->phone,
            'courier' => $this->courier,
            'courier_fee' => $this->courier_fee,
            'courier_type' => $this->courier_type,
            'email' => $this->email,
            'details' => OrderDetailResource::collection($this->details),
            'payment_method' => $this->payment_method,
            'confirmed' => $this->confirmed,
            'note' => $this->note,
            'created_at' => $this->created_at->format('d F Y'),
            'updated_at' => $this->updated_at->format('d F Y'),
        ];
    }
}




