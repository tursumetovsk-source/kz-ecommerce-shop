import React from 'react';
import { ShoppingBag, TrendingUp, Users, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Административная панель</h1>
          <p className="text-xs text-gray-500">Управление товарами, заказами, остатками и оплатами</p>
        </div>
        <span className="bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center space-x-1">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Права: ADMIN</span>
        </span>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
          <div className="flex items-center justify-between text-gray-500 text-xs">
            <span>Продажи сегодня</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-2xl font-extrabold text-slate-900 block">1 399 980 ₸</span>
          <span className="text-[11px] text-emerald-600 font-semibold">+18% по сравнению со вчера</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
          <div className="flex items-center justify-between text-gray-500 text-xs">
            <span>Заказы за день</span>
            <ShoppingBag className="w-4 h-4 text-brand-600" />
          </div>
          <span className="text-2xl font-extrabold text-slate-900 block">14 заказов</span>
          <span className="text-[11px] text-gray-500">Из них 12 успешно оплачены</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
          <div className="flex items-center justify-between text-gray-500 text-xs">
            <span>Средний чек</span>
            <Users className="w-4 h-4 text-indigo-600" />
          </div>
          <span className="text-2xl font-extrabold text-slate-900 block">99 998 ₸</span>
          <span className="text-[11px] text-gray-500">На базе 140 заказов</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
          <div className="flex items-center justify-between text-gray-500 text-xs">
            <span>Низкий остаток</span>
            <AlertTriangle className="w-4 h-4 text-amber-500" />
          </div>
          <span className="text-2xl font-extrabold text-amber-600 block">3 товара</span>
          <span className="text-[11px] text-amber-700 font-semibold">Требуется пополнение</span>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-slate-900 text-lg">Последние заказы</h2>
          <button className="text-xs text-brand-600 font-bold hover:underline">Все заказы →</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-700 uppercase border-b border-gray-200 font-semibold">
              <tr>
                <th className="p-3">№ Заказа</th>
                <th className="p-3">Покупатель</th>
                <th className="p-3">Телефон</th>
                <th className="p-3">Сумма</th>
                <th className="p-3">Оплата</th>
                <th className="p-3">Статус</th>
                <th className="p-3">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-slate-800">
              <tr>
                <td className="p-3 font-bold text-slate-900">KZ-849201</td>
                <td className="p-3">Алихан Нурланов</td>
                <td className="p-3">+7 (777) 123-45-67</td>
                <td className="p-3 font-extrabold">699 990 ₸</td>
                <td className="p-3">
                  <span className="bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">Halyk ePay</span>
                </td>
                <td className="p-3">
                  <span className="bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded">PAID</span>
                </td>
                <td className="p-3">
                  <button className="text-brand-600 font-bold hover:underline">Управление</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
