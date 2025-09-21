/* eslint-disable @typescript-eslint/no-explicit-any */

import ProductCard from '@/components/products/ProductCard';
import { IProduct } from '@/type';
import React from 'react';

const ProductsPage =async () => {
    const res = await fetch("http://localhost:5000/products",{
  cache:"no-store"
    })
    const products = await res.json()
    
    return (
    <div className="max-w-7xl mx-auto text-center my-8 px-4 sm:px-6 lg:px-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
  {products.map((product: IProduct) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>

    );
};

export default ProductsPage;