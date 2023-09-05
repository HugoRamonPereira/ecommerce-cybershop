'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart';

import { SanityProduct } from '@/config/device-inventory';
import { getProductStorage } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface ProductInfoProps {
  product: SanityProduct
}

export function ProductInfo({ product }: ProductInfoProps) {
  function addToCart() {}

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight">{formatCurrencyString({ value: product.price, currency: 'BRL' })}</p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">{product.description}</div>
      </div>

      <div className="mt-4">
        <p>
          Storage: <strong>{getProductStorage(product.storage[0])}</strong>
        </p>
        {product.storage.map((strg) => (
          <Button key={strg} variant="default" className="mr-2 mt-4">
            {getProductStorage(strg)}
          </Button>
        ))}
      </div>

      <form className="mt-6">
        <div className="mt-4 flex">
          <Button
            type="button"
            className="w-full bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Add to cart
          </Button>
        </div>
      </form>
    </div>
  );
}
