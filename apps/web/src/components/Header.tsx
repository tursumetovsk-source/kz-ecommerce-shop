'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, User, Menu, BarChart2, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="w-full bg-white border-b border-elevated sticky top-0 z-[2147483647]">
      {/* Top utility bar */}
      <div className="bg-surface border-b border-elevated text-textMuted text-[13px] py-2 px-4">
        <div className="max-w-[1390px] mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link href="/delivery" className="hover:text-textMain transition-colors">Доставка и оплата</Link>
            <Link href="/pickup" className="hover:text-textMain transition-colors">Пункты выдачи</Link>
            <Link href="/support" className="hover:text-textMain transition-colors">Поддержка</Link>
          </div>
          <div className="flex items-center space-x-4 font-medium text-textMain">
            <a href="tel:+77770000000" className="hover:text-brand-500 transition-colors">+7 (777) 000-00-00</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-[1390px] mx-auto px-4 py-4 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-1 font-bold text-2xl tracking-tight text-textMain">
          <span className="text-brand-500 font-extrabold text-3xl">KZ</span>
          <span className="text-slateAccent-500 font-bold text-3xl">SHOP</span>
        </Link>

        {/* Green Catalog Button (#76BC21) */}
        <button className="flex items-center space-x-2.5 bg-brand-500 hover:bg-brand-600 text-white font-medium px-5 py-2.5 rounded-lg transition-colors shadow-sm">
          <Menu className="w-5 h-5" />
          <span className="text-base font-semibold">Каталог</span>
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск"
            className="w-full pl-4 pr-10 py-2 bg-white border border-elevated rounded-lg text-sm text-textMain focus:outline-none focus:border-brand-500 transition-colors"
          />
          <button className="absolute right-3 top-2.5 text-textMuted hover:text-brand-500 transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* User Action Icons */}
        <div className="flex items-center space-x-6 text-textMain">
          <Link href="/profile" className="flex flex-col items-center hover:text-brand-500 text-xs font-medium space-y-1 transition-colors">
            <User className="w-6 h-6 stroke-[1.5]" />
            <span>Профиль</span>
          </Link>

          <Link href="/compare" className="flex flex-col items-center hover:text-brand-500 text-xs font-medium space-y-1 transition-colors">
            <BarChart2 className="w-6 h-6 stroke-[1.5]" />
            <span>Сравнение</span>
          </Link>

          <Link href="/favorites" className="flex flex-col items-center hover:text-brand-500 text-xs font-medium space-y-1 transition-colors">
            <Heart className="w-6 h-6 stroke-[1.5]" />
            <span>Избранное</span>
          </Link>

          <Link href="/cart" className="flex flex-col items-center hover:text-brand-500 text-xs font-medium space-y-1 relative transition-colors">
            <div className="relative">
              <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
              <span className="absolute -top-1.5 -right-2 bg-brand-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <span>Корзина</span>
          </Link>
        </div>
      </div>

      {/* Category Navigation Bar */}
      <nav className="bg-white border-t border-elevated">
        <div className="max-w-[1390px] mx-auto px-4 flex items-center space-x-8 text-[14.4px] overflow-x-auto py-2.5 font-normal text-textMain">
          <Link href="/catalog/smartphones" className="hover:text-brand-500 whitespace-nowrap transition-colors">Смартфоны и планшеты</Link>
          <Link href="/catalog/laptops" className="hover:text-brand-500 whitespace-nowrap transition-colors">Ноутбуки, планшеты и компьютеры</Link>
          <Link href="/catalog/appliances" className="hover:text-brand-500 whitespace-nowrap transition-colors">Техника для дома</Link>
          <Link href="/catalog/gaming" className="hover:text-brand-500 whitespace-nowrap transition-colors">Игры и развлечения</Link>
          <Link href="/catalog/tv-audio" className="hover:text-brand-500 whitespace-nowrap transition-colors">Телевизоры, Аудио-видео, Hi-Fi</Link>
          <Link href="/catalog/photo" className="hover:text-brand-500 whitespace-nowrap transition-colors">Фото и видеотехника</Link>
          <button className="flex items-center space-x-1 hover:text-brand-500 whitespace-nowrap text-textMuted transition-colors">
            <span>Еще</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </nav>
    </header>
  );
};
