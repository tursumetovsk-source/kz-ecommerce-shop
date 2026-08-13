import React from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, Star, ShieldCheck, Truck, ChevronRight } from 'lucide-react';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-brand-600">Главная</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/catalog" className="hover:text-brand-600">Смартфоны</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-800 font-medium">{params.slug}</span>
      </div>

      {/* Main Product Container */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Gallery */}
        <div className="space-y-4">
          <div className="w-full h-[400px] bg-slate-50 rounded-xl border border-gray-100 p-6 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=60"
              alt="Apple iPhone 17 Pro"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex space-x-3">
            {[1, 2, 3].map((_, idx) => (
              <button key={idx} className="w-20 h-20 bg-slate-50 border-2 border-brand-600 rounded-lg p-2 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&auto=format&fit=crop&q=60"
                  alt="thumbnail"
                  className="max-h-full max-w-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Details & Purchase */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
              <span>Артикул: IP17P-256-BLK</span>
              <span>•</span>
              <span className="text-emerald-600 font-semibold">В наличии (Остаток: 5 шт)</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
              Смартфон Apple iPhone 17 Pro 256GB Black Titanium
            </h1>
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-700">4.9</span>
              <span className="text-xs text-gray-400">(38 отзывов)</span>
            </div>
          </div>

          {/* Variants selection */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <div>
              <span className="text-xs font-semibold text-slate-700 block mb-2">Цвет: Black Titanium</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1.5 border-2 border-brand-600 rounded-lg text-xs font-medium bg-orange-50 text-brand-700">
                  Black Titanium
                </button>
                <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-medium text-slate-700 hover:border-gray-400">
                  White Titanium
                </button>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold text-slate-700 block mb-2">Встроенная память</span>
              <div className="flex space-x-2">
                <button className="px-3.5 py-2 border-2 border-brand-600 rounded-lg text-xs font-bold bg-orange-50 text-brand-700">
                  256 GB
                </button>
                <button className="px-3.5 py-2 border border-gray-300 rounded-lg text-xs font-medium text-slate-700 hover:border-gray-400">
                  512 GB
                </button>
              </div>
            </div>
          </div>

          {/* Pricing & Buy Buttons */}
          <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 space-y-4">
            <div>
              <span className="text-xs text-gray-400 line-through font-medium block">749 990 ₸</span>
              <div className="flex items-baseline space-x-3">
                <span className="text-3xl font-extrabold text-slate-900">699 990 ₸</span>
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">Экономия 50 000 ₸</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-md">
                <ShoppingCart className="w-5 h-5" />
                <span>В корзину</span>
              </button>
              <button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl transition-colors">
                Купить сейчас
              </button>
              <button className="p-3.5 border border-gray-300 rounded-xl text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Key Characteristics */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <h3 className="font-bold text-sm text-slate-900">Характеристики</h3>
            <dl className="grid grid-cols-2 gap-2 text-xs">
              <dt className="text-gray-500">Бренд:</dt>
              <dd className="font-medium text-slate-800">Apple</dd>
              <dt className="text-gray-500">Диагональ экрана:</dt>
              <dd className="font-medium text-slate-800">6.3"</dd>
              <dt className="text-gray-500">Оперативная память:</dt>
              <dd className="font-medium text-slate-800">8 GB</dd>
              <dt className="text-gray-500">Процессор:</dt>
              <dd className="font-medium text-slate-800">Apple A18 Pro</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
