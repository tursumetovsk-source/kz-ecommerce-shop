'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, BarChart2, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  id: string;
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  badge?: string;
  discountPercent?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  slug,
  name,
  price,
  oldPrice,
  imageUrl,
  badge = 'Новинка',
  discountPercent = -9,
}) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU').format(price);
  const formattedOldPrice = oldPrice ? new Intl.NumberFormat('ru-RU').format(oldPrice) : null;

  return (
    <div className="bg-white rounded-lg border border-elevated p-4 flex flex-col justify-between hover:shadow-subtle transition-all duration-150 ease-in-out relative group">
      {/* Top badges */}
      <div className="flex flex-col items-start gap-1.5 absolute top-3 left-3 z-10">
        {badge && (
          <span className="bg-brand-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wide">
            {badge}
          </span>
        )}
        {discountPercent && (
          <span className="bg-red-500 text-white text-[11px] font-semibold px-1.5 py-0.5 rounded-sm">
            {discountPercent}%
          </span>
        )}
      </div>

      {/* Top right actions (Heart & Compare) */}
      <div className="absolute top-3 right-3 flex flex-col space-y-2 z-10 text-textMuted">
        <button className="hover:text-red-500 transition-colors p-1">
          <Heart className="w-4 h-4 stroke-[1.5]" />
        </button>
        <button className="hover:text-brand-500 transition-colors p-1">
          <BarChart2 className="w-4 h-4 stroke-[1.5]" />
        </button>
      </div>

      {/* Image */}
      <Link href={`/product/${slug}`} className="w-full h-44 flex items-center justify-center my-4 pt-2">
        <img
          src={imageUrl}
          alt={name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-150 ease-in-out"
        />
      </Link>

      {/* Product Content */}
      <div className="mt-2 space-y-1">
        <Link href={`/product/${slug}`}>
          <h3 className="font-normal text-textMain text-[14px] line-clamp-2 hover:text-brand-500 transition-colors leading-snug">
            {name}
          </h3>
        </Link>
      </div>

      {/* Price & Buy Action */}
      <div className="mt-3 pt-3 border-t border-elevated flex items-end justify-between">
        <div>
          {formattedOldPrice && (
            <span className="text-xs text-textMuted line-through block">
              {formattedOldPrice} ₸
            </span>
          )}
          <span className="text-base font-bold text-textMain">
            {formattedPrice} ₸
          </span>
        </div>

        <button className="bg-surface hover:bg-brand-500 text-textMain hover:text-white border border-elevated hover:border-brand-500 p-2 rounded-lg transition-colors duration-150">
          <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
        </button>
      </div>
    </div>
  );
};
