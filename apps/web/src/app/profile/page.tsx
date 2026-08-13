import React from 'react';
import Link from 'next/link';
import { Package, User as UserIcon, Heart, MapPin, Receipt, Clock, CheckCircle2 } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Profile Sidebar */}
        <aside className="bg-white p-5 rounded-xl border border-gray-200 h-fit space-y-4">
          <div className="flex items-center space-x-3 pb-4 border-b border-gray-100">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
              АН
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Алихан Нурланов</h3>
              <p className="text-xs text-gray-500">+7 (777) 123-45-67</p>
            </div>
          </div>

          <nav className="space-y-1 text-sm font-medium text-slate-700">
            <Link href="/profile" className="flex items-center space-x-2.5 px-3 py-2 bg-orange-50 text-brand-600 rounded-lg font-bold">
              <Package className="w-4 h-4" />
              <span>Мои заказы</span>
            </Link>
            <Link href="/favorites" className="flex items-center space-x-2.5 px-3 py-2 hover:bg-gray-50 rounded-lg">
              <Heart className="w-4 h-4" />
              <span>Избранное</span>
            </Link>
            <Link href="/profile/addresses" className="flex items-center space-x-2.5 px-3 py-2 hover:bg-gray-50 rounded-lg">
              <MapPin className="w-4 h-4" />
              <span>Адреса доставки</span>
            </Link>
          </nav>
        </aside>

        {/* Profile Content */}
        <main className="md:col-span-3 space-y-6">
          <h1 className="text-2xl font-bold text-slate-900">История заказов</h1>

          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-100 pb-4 gap-2">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-slate-900 text-base">Заказ № KZ-849201</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>ОПЛАЧЕН</span>
                  </span>
                </div>
                <span className="text-xs text-gray-500">От 13 августа 2026, 14:20</span>
              </div>
              <button className="flex items-center space-x-1 text-xs text-brand-600 font-semibold hover:underline">
                <Receipt className="w-4 h-4" />
                <span>Фискальный чек ККМ</span>
              </button>
            </div>

            {/* Items in order */}
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=150&auto=format&fit=crop&q=60"
                  alt="iPhone 17 Pro"
                  className="w-14 h-14 object-contain bg-slate-50 p-1 rounded-lg"
                />
                <div>
                  <h4 className="font-medium text-slate-900 text-sm">
                    iPhone 17 Pro 256GB Black Titanium
                  </h4>
                  <span className="text-xs text-gray-500">1 шт. × 699 990 ₸</span>
                </div>
              </div>
              <span className="font-bold text-slate-900 text-sm">699 990 ₸</span>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg flex items-center justify-between text-xs text-slate-600">
              <span>Способ оплаты: <strong>Halyk ePay</strong></span>
              <span>Доставка: <strong>Курьер (Алматы)</strong></span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
