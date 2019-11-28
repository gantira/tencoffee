<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'order_no' => 'required',
            'name' => 'required',
            'country' => 'required',
            'province' => 'required',
            'city' => 'required',
            'address' => 'required',
            'zip_code' => 'sometimes',
            'phone' => 'required',
            'courier' => 'required',
            'courier_fee' => 'required',
            'email' => 'required',
            'payment_method' => 'required',
            'note' => 'sometimes',
        ];
    }
}
