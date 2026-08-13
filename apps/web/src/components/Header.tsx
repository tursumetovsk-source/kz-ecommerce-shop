'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Heart, User, MapPin, Menu, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 hover:text-white cursor-pointer">
              <MapPin className="w-3.5 h-3.5 text-brand-500" />
              <span>Алматы</span>
            </span>
            <span>Доставка по всему Казахстану</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:+77770000000" className="hover:text-white">+7 (777) 000-00-00</a>
            <span className="hover:text-white cursor-pointer">Казахский / Русский</span>
            <span className="font-semibold text-white">₸ KZT</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="bg-brand-600 text-white font-extrabold text-2xl px-3 py-1 rounded-lg tracking-tight">
            KZ<span className="text-amber-300">SHOP</span>
          </span>
        </Link>

        {/* Catalog Button */}
        <button className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-4 py-2.5 rounded-lg transition-colors">
          <Menu className="w-5 h-5" />
          <span>Каталог</span>
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск товаров (например, iPhone 17, матрас, ноутбук)..."
            className="w-full pl-4 pr-12 py-2.5 bg-gray-100 border border-gray-300 focus:border-brand-500 focus:bg-white focus:outline-none rounded-lg text-sm transition-all"
          />
          <button className="absolute right-1 top-1 bottom-1 px-3.5 bg-brand-600 hover:bg-brand-700 text-white rounded-md flex items-center justify-center transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-6 text-slate-700">
          <Link href="/profile" className="flex flex-col items-center hover:text-brand-600 text-xs font-medium space-y-1">
            <User className="w-6 h-6" />
            <span>Профиль</span>
          </Link>

          <Link href="/favorites" className="flex flex-col items-center hover:text-brand-600 text-xs font-medium space-y-1 relative">
            <Heart className="w-6 h-6" />
            <span>Избранное</span>
          </Link>

          <Link href="/cart" className="flex flex-col items-center hover:text-brand-600 text-xs font-medium space-y-1 relative">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-brand-600" />
              <span className="absolute -top-1.5 -right-2 bg-brand-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <span>Корзина</span>
          </Link>
        </div>
      </div>

      {/* Category Nav */}
      <nav className="bg-slate-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center space-x-8 text-sm overflow-x-auto py-2 font-medium text-slate-700">
          <Link href="/catalog/smartphones" className="hover:text-brand-600 whitespace-nowrap">Смартфоны и гаджеты</Link>
          <Link href="/catalog/laptops" className="hover:text-brand-600 whitespace-nowrap">Ноутбуки и ПК</Link>
          <Link href="/catalog/appliances" className="hover:text-brand-600 whitespace-nowrap">Бытовая техника</Link>
          <Link href="/catalog/home" className="hover:text-brand-600 whitespace-nowrap">Товары для дома</Link>
          <Link href="/catalog/auto" className="hover:text-brand-600 whitespace-nowrap">Автотовары</Link>
          <Link href="/catalog/books" className="hover:text-brand-600 whitespace-nowrap">Книги</Link>
          <Link href="/catalog/discounts" className="text-red-600 font-bold hover:text-red-700 whitespace-nowrap">Акции и Скидки %</Link>
        </div>
      </nav>
    </header>
  );
};
