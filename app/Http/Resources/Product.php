<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Prices as PricesResource;

class Product extends JsonResource
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
            'name' => $this->name,
            'grinds' => $this->grinds,
            'image' => $this->path(),
            'description' => $this->description,
            'about' => $this->about,
            'prices' => $this->sizes,
            'low_price' => $this->sizes()->min('price'),
            'high_price' => $this->sizes()->max('price'),
            'created_at' => $this->created_at->diffForHumans(),
            'updated_at' => $this->updated_at->diffForHumans(),
        ];
    }
}
