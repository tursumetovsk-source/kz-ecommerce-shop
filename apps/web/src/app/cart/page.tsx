'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Trash2, Plus, Minus } from 'lucide-react';

const initialCartItems = [
  {
    id: '1',
    slug: 'samsung-galaxy-s21-256gb',
    name: 'Смартфон Samsung Galaxy S21 256GB (SM-G991B)',
    variant: '(256GB)',
    price: 145980,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&auto=format&fit=crop&q=60',
  },
  {
    id: '2',
    slug: 'samsung-galaxy-s21-128gb',
    name: 'Смартфон Samsung Galaxy S21 128GB (SM-G991B)',
    variant: '(128GB)',
    price: 135980,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&auto=format&fit=crop&q=60',
  },
];

export default function CartPage() {
  const [items, setItems] = useState(initialCartItems);
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const formattedTotal = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(totalPrice);

  return (
    <div className="max-w-[1390px] mx-auto px-4 py-8">
      {/* Page Title H1 */}
      <h1 className="text-2xl font-medium text-textMain mb-8 font-sans">
        Корзина
      </h1>

      {items.length === 0 ? (
        <div className="bg-white rounded-lg border border-elevated p-12 text-center space-y-4">
          <p className="text-textMuted text-base">Ваша корзина пока пуста</p>
          <Link
            href="/catalog"
            className="inline-block bg-brand-500 hover:bg-brand-600 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
          >
            Перейти в каталог
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Cart Items List */}
          <div className="lg:col-span-8 bg-white border border-elevated rounded-lg p-6 divide-y divide-elevated space-y-6">
            {items.map((item, idx) => {
              const formattedItemPrice = new Intl.NumberFormat('ru-RU', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(item.price);

              return (
                <div
                  key={item.id}
                  className={`flex flex-col sm:flex-row items-start justify-between gap-6 ${
                    idx !== 0 ? 'pt-6' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="w-24 h-32 bg-surface rounded-md p-2 flex items-center justify-center shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Product Details & Actions */}
                  <div className="flex-1 space-y-2">
                    <Link href={`/product/${item.slug}`}>
                      <h3 className="font-semibold text-textMain text-base hover:text-brand-500 transition-colors leading-snug">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-textMuted font-normal">{item.variant}</p>

                    <div className="flex items-center space-x-6 pt-3 text-xs text-textMuted">
                      <button className="flex items-center space-x-1.5 hover:text-textMain transition-colors">
                        <Heart className="w-4 h-4 stroke-[1.5]" />
                        <span>В избранное</span>
                      </button>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex items-center space-x-1.5 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4 stroke-[1.5]" />
                        <span>Удалить</span>
                      </button>
                    </div>
                  </div>

                  {/* Price & Quantity Stepper */}
                  <div className="flex flex-col sm:items-end justify-between space-y-4 shrink-0">
                    <span className="text-lg font-bold text-textMain">
                      {formattedItemPrice} ₸
                    </span>

                    {/* Quantity Stepper: [-] [ 2 ] [+] */}
                    <div className="flex items-center border border-elevated rounded-md bg-white overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-3 py-1.5 text-textMain hover:bg-surface transition-colors font-medium border-r border-elevated"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-4 py-1.5 text-xs font-semibold text-textMain min-w-[2.5rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-3 py-1.5 text-textMain hover:bg-surface transition-colors font-medium border-l border-elevated"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Order Summary Card ("В корзине") */}
          <div className="lg:col-span-4 bg-surface border border-elevated rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-bold text-textMain">В корзине</h2>

            <div className="space-y-3 text-sm text-textMain">
              <p>Товаров: {totalQuantity}</p>

              {/* Promo code toggle */}
              {!showPromoInput ? (
                <button
                  onClick={() => setShowPromoInput(true)}
                  className="text-brand-500 font-medium hover:underline text-sm block"
                >
                  Введите промокод
                </button>
              ) : (
                <div className="flex items-center space-x-2 pt-1">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Промокод"
                    className="flex-1 px-3 py-1.5 bg-white border border-elevated rounded-md text-xs text-textMain focus:outline-none focus:border-brand-500"
                  />
                  <button className="bg-brand-500 hover:bg-brand-600 text-white text-xs font-medium px-3 py-1.5 rounded-md transition-colors">
                    ОК
                  </button>
                </div>
              )}
            </div>

            {/* Total Price */}
            <div className="pt-2">
              <span className="text-2xl font-bold text-textMain block">
                {formattedTotal} ₸
              </span>
            </div>

            {/* Big Green Checkout Button (#76BC21) */}
            <Link
              href="/checkout"
              className="w-full bg-brand-500 hover:bg-brand-600 text-white font-medium py-3.5 px-4 rounded-lg flex items-center justify-center transition-colors shadow-sm text-base text-center block"
            >
              Оформить заказ
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
