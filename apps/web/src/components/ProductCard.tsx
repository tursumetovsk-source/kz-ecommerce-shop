'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  id: string;
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  rating?: number;
  reviewsCount?: number;
  badge?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  slug,
  name,
  price,
  oldPrice,
  imageUrl,
  rating = 4.8,
  reviewsCount = 12,
  badge,
}) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU').format(price);
  const formattedOldPrice = oldPrice ? new Intl.NumberFormat('ru-RU').format(oldPrice) : null;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col justify-between hover:shadow-lg transition-shadow relative group">
      {/* Badge */}
      {badge && (
        <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2 py-0.5 rounded">
          {badge}
        </span>
      )}

      {/* Favorite Button */}
      <button className="absolute top-3 right-3 p-1.5 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
        <Heart className="w-5 h-5" />
      </button>

      {/* Image */}
      <Link href={`/product/${slug}`} className="w-full h-48 flex items-center justify-center mb-3 pt-2">
        <img
          src={imageUrl}
          alt={name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
        />
      </Link>

      {/* Content */}
      <div>
        <div className="flex items-center space-x-1 text-xs text-amber-500 mb-1">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="font-semibold text-slate-700">{rating}</span>
          <span className="text-gray-400">({reviewsCount})</span>
        </div>

        <Link href={`/product/${slug}`}>
          <h3 className="font-medium text-slate-800 text-sm line-clamp-2 hover:text-brand-600 mb-2 transition-colors">
            {name}
          </h3>
        </Link>
      </div>

      {/* Price & Action */}
      <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between">
        <div>
          {formattedOldPrice && (
            <span className="text-xs text-gray-400 line-through block font-medium">
              {formattedOldPrice} ₸
            </span>
          )}
          <span className="text-lg font-extrabold text-slate-900">
            {formattedPrice} ₸
          </span>
        </div>

        <button className="bg-brand-600 hover:bg-brand-700 text-white p-2.5 rounded-lg flex items-center justify-center transition-colors">
          <ShoppingCart className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
