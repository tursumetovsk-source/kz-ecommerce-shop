'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [deliveryMethod, setDeliveryMethod] = useState<'PICKUP' | 'COURIER_PREPAID' | 'COURIER_COD'>('PICKUP');
  const [paymentMethod, setPaymentMethod] = useState<'HALYK' | 'CASH'>('HALYK');

  return (
    <div className="max-w-[1422px] mx-auto px-4 py-8">
      {/* Page Title & Login Link */}
      <div className="mb-6 space-y-2">
        <h1 className="text-2xl font-medium text-textMain font-sans">
          Оформление заказа
        </h1>
        <Link href="/login" className="text-brand-500 hover:underline text-sm font-normal inline-block">
          Уже покупали у нас?
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Form Steps */}
        <div className="lg:col-span-7 space-y-8">
          {/* Contact Details */}
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-textMain">Контактные данные</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-textMain mb-1">
                  Контактное лицо (ФИО) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Иванов Иван Иванович"
                  defaultValue="Алихан Нурланов"
                  className="w-full px-3 py-2 bg-white border border-elevated rounded-lg text-sm text-textMain focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-textMain mb-1">
                  Контактный телефон <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+7 (777) 000-00-00"
                  defaultValue="+7 (777) 123-45-67"
                  className="w-full px-3 py-2 bg-white border border-elevated rounded-lg text-sm text-textMain focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Delivery Options */}
          <div className="space-y-4 pt-4 border-t border-elevated">
            <h2 className="text-base font-semibold text-textMain">Доставка</h2>

            <div>
              <label className="block text-xs font-semibold text-textMain mb-1">
                Населенный пункт <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue="г Алматы"
                className="w-full px-3 py-2 bg-white border border-elevated rounded-lg text-sm text-textMain focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>

            {/* Radio Delivery Options matching reference screenshot */}
            <div className="space-y-3 pt-2">
              {/* Option 1: Pickup */}
              <label
                onClick={() => setDeliveryMethod('PICKUP')}
                className="flex items-start justify-between cursor-pointer group py-1"
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center mt-1 transition-colors ${
                    deliveryMethod === 'PICKUP' ? 'border-brand-500 bg-white' : 'border-gray-400'
                  }`}>
                    {deliveryMethod === 'PICKUP' && (
                      <div className="w-2 h-2 rounded-full bg-brand-500" />
                    )}
                  </div>
                  <div>
                    <span className="font-semibold text-textMain text-base block">Самовывоз</span>
                    <span className="text-xs text-textMuted block mt-0.5">На пункте выдачи</span>
                  </div>
                </div>
                <span className="font-bold text-textMain text-sm">+ 0 ₸</span>
              </label>

              {/* Option 2: Courier Prepaid */}
              <label
                onClick={() => setDeliveryMethod('COURIER_PREPAID')}
                className="flex items-start justify-between cursor-pointer group py-1"
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center mt-1 transition-colors ${
                    deliveryMethod === 'COURIER_PREPAID' ? 'border-brand-500 bg-white' : 'border-gray-400'
                  }`}>
                    {deliveryMethod === 'COURIER_PREPAID' && (
                      <div className="w-2 h-2 rounded-full bg-brand-500" />
                    )}
                  </div>
                  <div>
                    <span className="font-semibold text-textMain text-base block">Курьерская доставка (предоплата)</span>
                    <span className="text-xs text-textMuted block mt-0.5">До двери в течение 1-2 дней</span>
                  </div>
                </div>
                <span className="font-bold text-textMain text-sm">+ 1 500 ₸</span>
              </label>

              {/* Option 3: Courier COD */}
              <label
                onClick={() => setDeliveryMethod('COURIER_COD')}
                className="flex items-start justify-between cursor-pointer group py-1"
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center mt-1 transition-colors ${
                    deliveryMethod === 'COURIER_COD' ? 'border-brand-500 bg-white' : 'border-gray-400'
                  }`}>
                    {deliveryMethod === 'COURIER_COD' && (
                      <div className="w-2 h-2 rounded-full bg-brand-500" />
                    )}
                  </div>
                  <div>
                    <span className="font-semibold text-textMain text-base block">Курьерская доставка (оплата при получении)</span>
                    <span className="text-xs text-textMuted block mt-0.5">Наличными или картой курьеру</span>
                  </div>
                </div>
                <span className="font-bold text-textMain text-sm">+ 2 000 ₸</span>
              </label>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-4 pt-4 border-t border-elevated">
            <h2 className="text-base font-semibold text-textMain">
              Способ оплаты <span className="text-red-500">*</span>
            </h2>

            <div className="space-y-4">
              {/* Halyk ePay Option */}
              <label
                onClick={() => setPaymentMethod('HALYK')}
                className="flex items-start space-x-3 cursor-pointer group"
              >
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center mt-1 transition-colors ${
                  paymentMethod === 'HALYK' ? 'border-brand-500 bg-white' : 'border-gray-400'
                }`}>
                  {paymentMethod === 'HALYK' && (
                    <div className="w-2 h-2 rounded-full bg-brand-500" />
                  )}
                </div>
                <div>
                  <span className="font-semibold text-textMain text-base block">Halyk ePay / Freedom Pay</span>
                  <span className="text-xs text-textMuted block mt-0.5">
                    Банковской картой, кошельком, через Apple Pay и другими способами
                  </span>
                </div>
              </label>

              {/* Cash Option */}
              <label
                onClick={() => setPaymentMethod('CASH')}
                className="flex items-start space-x-3 cursor-pointer group"
              >
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center mt-1 transition-colors ${
                  paymentMethod === 'CASH' ? 'border-brand-500 bg-white' : 'border-gray-400'
                }`}>
                  {paymentMethod === 'CASH' && (
                    <div className="w-2 h-2 rounded-full bg-brand-500" />
                  )}
                </div>
                <div>
                  <span className="font-semibold text-textMain text-base block">Наличными курьеру</span>
                  <span className="text-xs text-textMuted block mt-0.5">Наличными курьеру при получении</span>
                </div>
              </label>
            </div>
          </div>

          {/* Big Green Confirm Order Button (#76BC21) matching reference screenshot */}
          <div className="pt-6 border-t border-elevated">
            <button className="w-full bg-brand-500 hover:bg-brand-600 text-white font-medium py-3.5 px-6 rounded-lg transition-colors shadow-sm text-base text-center block">
              Подтвердить заказ
            </button>
          </div>
        </div>

        {/* Right Column: Order Items & Summary Side Panel */}
        <div className="lg:col-span-5 bg-white border border-elevated rounded-lg p-6 space-y-6">
          {/* Items List */}
          <div className="space-y-4 divide-y divide-elevated">
            <div className="flex items-start justify-between gap-4 pb-4">
              <div className="flex items-start space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=150&auto=format&fit=crop&q=60"
                  alt="Samsung Galaxy S21 256GB"
                  className="w-12 h-16 object-contain shrink-0"
                />
                <div>
                  <h4 className="text-xs font-semibold text-textMain leading-snug">
                    Смартфон Samsung Galaxy S21 256GB (SM-G991B) (256GB)
                  </h4>
                </div>
              </div>
              <span className="text-xs font-bold text-textMain shrink-0">
                2 x 72 990 ₸
              </span>
            </div>

            <div className="flex items-start justify-between gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=150&auto=format&fit=crop&q=60"
                  alt="Samsung Galaxy S21 128GB"
                  className="w-12 h-16 object-contain shrink-0"
                />
                <div>
                  <h4 className="text-xs font-semibold text-textMain leading-snug">
                    Смартфон Samsung Galaxy S21 128GB (SM-G991B) (128GB)
                  </h4>
                </div>
              </div>
              <span className="text-xs font-bold text-textMain shrink-0">
                2 x 67 990 ₸
              </span>
            </div>
          </div>

          {/* Totals Breakdown */}
          <div className="space-y-2 pt-4 border-t border-elevated text-xs text-textMain">
            <div className="flex justify-between">
              <span className="text-textMuted">Сумма по товарам</span>
              <span className="font-bold text-textMain text-sm">281 960 ₸</span>
            </div>
            <div className="flex justify-between">
              <span className="text-textMuted">Стоимость доставки</span>
              <span className="font-bold text-textMain text-sm">0 ₸</span>
            </div>

            <div className="pt-4 flex justify-between items-baseline border-t border-elevated text-base font-bold">
              <span className="text-textMain">Итого:</span>
              <span className="text-2xl font-bold text-textMain">281 960 ₸</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
