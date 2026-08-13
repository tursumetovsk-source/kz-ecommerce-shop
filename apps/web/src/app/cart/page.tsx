import React from 'react';
import Link from 'next/link';
import { Trash2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Корзина покупателя</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&auto=format&fit=crop&q=60"
                alt="iPhone 17 Pro"
                className="w-20 h-20 object-contain bg-slate-50 p-2 rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">
                  Смартфон Apple iPhone 17 Pro 256GB Black Titanium
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">SKU: IP17P-256-BLK</p>
                <span className="text-sm font-bold text-slate-900 mt-2 block">699 990 ₸</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button className="px-3 py-1 text-slate-600 hover:bg-gray-100 font-bold">-</button>
                <span className="px-3 py-1 text-xs font-semibold">1</span>
                <button className="px-3 py-1 text-slate-600 hover:bg-gray-100 font-bold">+</button>
              </div>
              <button className="text-gray-400 hover:text-red-600 transition-colors">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 h-fit space-y-6">
          <h2 className="font-bold text-slate-900 text-lg border-b border-gray-200 pb-3">Итого заказа</h2>

          <div className="space-y-3 text-sm text-slate-700">
            <div className="flex justify-between">
              <span className="text-gray-500">Товары (1)</span>
              <span className="font-semibold">699 990 ₸</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Доставка</span>
              <span className="text-emerald-600 font-semibold">Бесплатно</span>
            </div>
            <div className="border-t border-gray-200 pt-3 flex justify-between text-base font-extrabold text-slate-900">
              <span>К оплате:</span>
              <span className="text-brand-600">699 990 ₸</span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-md text-center"
          >
            <span>Перейти к оформлению</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="flex items-center space-x-2 text-xs text-gray-500 justify-center">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Официальный фискальный чек ККМ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
