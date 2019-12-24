<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Resources\Product as ProductResource;
use App\Product;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Response;
use Intervention\Image\ImageManagerStatic as Image;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return ProductResource::collection($products);
    }
    public function addImages(Request $request)
    {
        $path = Storage::disk('public')->putFile('images', $request->file('image'));

        $url = Storage::disk('public')->url($path);

        return response()->json([
            'url' => $url
        ], Response::HTTP_OK);
    }

    public function removeImages(Request $request)
    {
        $image = explode("/" , $request->image);

        Storage::disk('public')->delete('images/'.$image[7]);

        return response()->json([], Response::HTTP_OK);
    }

    public function store(StoreProductRequest $request)
    {
        $product = Product::create($request->except(['prices', 'image', 'grind']));
        $product->grinds()->attach(json_decode($request->grind));

        foreach (json_decode($request->prices) as $key => $value) {
            $product->sizes()->attach($value->size_id, ['price'=> $value->price]);
        }

        $this->storeImage($product);

        return response()->json([], Response::HTTP_OK);
    }

    public function destroy(Product $product)
    {
        $product->delete();

        $this->deleteFile($product);

        return response()->json([], Response::HTTP_OK);
    }

    public function storeImage($product)
    {
        if (request()->hasFile('image')) {
            $product->update([
                'image' => Storage::disk('public')->putFile('images', request()->file('image')),
            ]);

            Image::make(storage_path(('app/public/'. $product->image)))->fit(1030, 1080, null, 'center')->save();
        }

        return;
    }

    public function deleteFile($product)
    {
        Storage::disk('public')->delete($product->image);
    }

    public function show(Product $product)
    {
        return new ProductResource($product);
    }
}
