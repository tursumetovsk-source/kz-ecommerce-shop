'use client';

import React, { useState } from 'react';
import { CreditCard, Truck, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

export default function CheckoutPage() {
  const [deliveryMethod, setDeliveryMethod] = useState<'COURIER' | 'PICKUP'>('COURIER');
  const [paymentMethod, setPaymentMethod] = useState<'HALYK' | 'FREEDOMPAY'>('HALYK');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Оформление заказа</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Contacts */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
            <h2 className="font-bold text-slate-900 text-lg flex items-center space-x-2">
              <span className="w-6 h-6 bg-brand-600 text-white rounded-full text-xs flex items-center justify-center font-bold">1</span>
              <span>Контактные данные</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">ФИО *</label>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  defaultValue="Алихан Нурланов"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Номер телефона *</label>
                <input
                  type="tel"
                  placeholder="+7 (777) 000-00-00"
                  defaultValue="+7 (777) 123-45-67"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email (для фискального чека)</label>
                <input
                  type="email"
                  placeholder="name@domain.kz"
                  defaultValue="alikhan@example.kz"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Delivery */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
            <h2 className="font-bold text-slate-900 text-lg flex items-center space-x-2">
              <span className="w-6 h-6 bg-brand-600 text-white rounded-full text-xs flex items-center justify-center font-bold">2</span>
              <span>Способ доставки</span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setDeliveryMethod('COURIER')}
                className={`p-4 rounded-xl border-2 text-left flex flex-col justify-between transition-all ${
                  deliveryMethod === 'COURIER' ? 'border-brand-600 bg-orange-50/50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Truck className="w-5 h-5 text-brand-600" />
                  {deliveryMethod === 'COURIER' && <CheckCircle className="w-5 h-5 text-brand-600" />}
                </div>
                <span className="font-semibold text-slate-900 text-sm">Курьерская доставка</span>
                <span className="text-xs text-gray-500 mt-1">До двери (1-2 дня)</span>
              </button>

              <button
                type="button"
                onClick={() => setDeliveryMethod('PICKUP')}
                className={`p-4 rounded-xl border-2 text-left flex flex-col justify-between transition-all ${
                  deliveryMethod === 'PICKUP' ? 'border-brand-600 bg-orange-50/50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <MapPin className="w-5 h-5 text-brand-600" />
                  {deliveryMethod === 'PICKUP' && <CheckCircle className="w-5 h-5 text-brand-600" />}
                </div>
                <span className="font-semibold text-slate-900 text-sm">Самовывоз</span>
                <span className="text-xs text-gray-500 mt-1">Пункт выдачи Алматы</span>
              </button>
            </div>

            {deliveryMethod === 'COURIER' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Город *</label>
                  <input
                    type="text"
                    defaultValue="Алматы"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Улица, дом, квартира *</label>
                  <input
                    type="text"
                    placeholder="пр. Абая 150, кв. 42"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Step 3: Payment Provider */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
            <h2 className="font-bold text-slate-900 text-lg flex items-center space-x-2">
              <span className="w-6 h-6 bg-brand-600 text-white rounded-full text-xs flex items-center justify-center font-bold">3</span>
              <span>Способ онлайн-оплаты</span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setPaymentMethod('HALYK')}
                className={`p-4 rounded-xl border-2 text-left flex flex-col justify-between transition-all ${
                  paymentMethod === 'HALYK' ? 'border-brand-600 bg-orange-50/50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-extrabold text-emerald-700 text-base">Halyk ePay</span>
                  {paymentMethod === 'HALYK' && <CheckCircle className="w-5 h-5 text-brand-600" />}
                </div>
                <span className="text-xs text-gray-500">Оплата картой Visa / MasterCard / Apple Pay</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('FREEDOMPAY')}
                className={`p-4 rounded-xl border-2 text-left flex flex-col justify-between transition-all ${
                  paymentMethod === 'FREEDOMPAY' ? 'border-brand-600 bg-orange-50/50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-extrabold text-emerald-600 text-base">Freedom Pay</span>
                  {paymentMethod === 'FREEDOMPAY' && <CheckCircle className="w-5 h-5 text-brand-600" />}
                </div>
                <span className="text-xs text-gray-500">Freedom Bank & Карты любого банка</span>
              </button>
            </div>
          </div>
        </div>

        {/* Order Review Sidebar */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 h-fit space-y-6">
          <h2 className="font-bold text-slate-900 text-lg border-b border-gray-200 pb-3">Ваш заказ</h2>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-700">
              <span>iPhone 17 Pro 256GB</span>
              <span className="font-bold">699 990 ₸</span>
            </div>
          </div>

          <div className="space-y-2 border-t border-gray-200 pt-3 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Сумма товаров</span>
              <span>699 990 ₸</span>
            </div>
            <div className="flex justify-between">
              <span>Доставка</span>
              <span className="text-emerald-600 font-semibold">0 ₸</span>
            </div>
            <div className="border-t border-gray-200 pt-3 flex justify-between text-base font-extrabold text-slate-900">
              <span>К оплате:</span>
              <span className="text-brand-600">699 990 ₸</span>
            </div>
          </div>

          <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-md">
            <CreditCard className="w-5 h-5 text-amber-400" />
            <span>Перейти к оплате через банк</span>
          </button>
        </div>
      </div>
    </div>
  );
}
