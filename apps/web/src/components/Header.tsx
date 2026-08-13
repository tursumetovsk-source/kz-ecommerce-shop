'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, User, Menu, X, BarChart2, ChevronDown } from 'lucide-react';

const megaMenuData = [
  {
    title: 'Смартфоны и планшеты',
    icon: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=100&auto=format&fit=crop&q=60',
    slug: '/catalog/smartphones',
    items: [
      { name: 'Планшеты', href: '/catalog/tablets' },
      { name: 'Электронные книги', href: '/catalog/ebooks' },
      { name: 'Аксессуары для планшетов', href: '/catalog/tablet-accessories' },
      { name: 'Аксессуары для электронных книг', href: '/catalog/ebook-accessories' },
    ],
  },
  {
    title: 'Ноутбуки, планшеты и компьютеры',
    icon: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&auto=format&fit=crop&q=60',
    slug: '/catalog/laptops',
    items: [
      { name: 'Игровые ноутбуки', href: '/catalog/gaming-laptops' },
      { name: 'Ультрабуки', href: '/catalog/ultrabooks' },
      { name: 'Моноблоки', href: '/catalog/all-in-one' },
      { name: 'Системные блоки', href: '/catalog/pc-cases' },
      { name: 'Мониторы', href: '/catalog/monitors' },
    ],
    showAll: true,
  },
  {
    title: 'Техника для дома',
    icon: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=100&auto=format&fit=crop&q=60',
    slug: '/catalog/appliances',
    items: [
      { name: 'Кондиционеры', href: '/catalog/ac' },
      { name: 'Вентиляторы', href: '/catalog/fans' },
      { name: 'Радиаторы', href: '/catalog/heaters' },
      { name: 'Роботы-пылесосы', href: '/catalog/robot-vacuums' },
      { name: 'Стиральные машины', href: '/catalog/washing-machines' },
    ],
    showAll: true,
  },
  {
    title: 'Игры и развлечения',
    icon: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=100&auto=format&fit=crop&q=60',
    slug: '/catalog/gaming',
    items: [
      { name: 'Консоли PS5', href: '/catalog/ps5' },
      { name: 'Консоли PS4', href: '/catalog/ps4' },
      { name: 'Игры для PS4', href: '/catalog/ps4-games' },
      { name: 'Консоли Xbox', href: '/catalog/xbox' },
      { name: 'Подписки Xbox', href: '/catalog/xbox-subscriptions' },
    ],
    showAll: true,
  },
  {
    title: 'Телевизоры, Аудио-видео, Hi-Fi',
    icon: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=100&auto=format&fit=crop&q=60',
    slug: '/catalog/tv-audio',
    items: [
      { name: 'Все телевизоры', href: '/catalog/tvs' },
      { name: '4K UHD-телевизоры', href: '/catalog/4k-tvs' },
      { name: '8K-телевизоры', href: '/catalog/8k-tvs' },
      { name: 'Смарт-телевизоры', href: '/catalog/smart-tvs' },
      { name: 'Наушники', href: '/catalog/headphones' },
    ],
    showAll: true,
  },
  {
    title: 'Фото и видеотехника',
    icon: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&auto=format&fit=crop&q=60',
    slug: '/catalog/photo',
    items: [
      { name: 'GoPro экшн-камеры', href: '/catalog/gopro' },
      { name: 'Sony экшн-камеры', href: '/catalog/action-cameras' },
      { name: 'Цифровые фоторамки', href: '/catalog/photo-frames' },
      { name: 'Цифровые видеокамеры 4K', href: '/catalog/4k-cameras' },
    ],
  },
  {
    title: 'Бытовая техника для кухни',
    icon: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=100&auto=format&fit=crop&q=60',
    slug: '/catalog/kitchen',
    items: [
      { name: 'Микроволновые печи', href: '/catalog/microwaves' },
      { name: 'Миксеры и блендеры', href: '/catalog/blenders' },
      { name: 'Мясорубки', href: '/catalog/meat-grinders' },
      { name: 'Мультиварки', href: '/catalog/multicookers' },
    ],
  },
  {
    title: 'Красота и здоровье',
    icon: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=100&auto=format&fit=crop&q=60',
    slug: '/catalog/beauty',
    items: [
      { name: 'Фены', href: '/catalog/hair-dryers' },
      { name: 'Фен-щетки', href: '/catalog/hair-brushes' },
      { name: 'Мультистайлеры', href: '/catalog/stylers' },
      { name: 'Расчески-выпрямители', href: '/catalog/straighteners' },
    ],
  },
];

export const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

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
      <div className="max-w-[1390px] mx-auto px-4 py-4 flex items-center justify-between gap-6 relative">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-1 font-bold text-2xl tracking-tight text-textMain">
          <span className="text-brand-500 font-extrabold text-3xl">KZ</span>
          <span className="text-slateAccent-500 font-bold text-3xl">SHOP</span>
        </Link>

        {/* Green Catalog Toggle Button (#76BC21) */}
        <button
          onClick={() => setIsCatalogOpen(!isCatalogOpen)}
          className="flex items-center space-x-2.5 bg-brand-500 hover:bg-brand-600 text-white font-medium px-5 py-2.5 rounded-lg transition-colors shadow-sm cursor-pointer select-none"
        >
          {isCatalogOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
      <nav className="bg-white border-t border-elevated relative">
        <div className="max-w-[1390px] mx-auto px-4 flex items-center space-x-8 text-[14.4px] overflow-x-auto py-2.5 font-normal text-textMain">
          <Link href="/catalog/smartphones" className="hover:text-brand-500 whitespace-nowrap transition-colors">Смартфоны и планшеты</Link>
          <Link href="/catalog/laptops" className="hover:text-brand-500 whitespace-nowrap transition-colors">Ноутбуки, планшеты и компьютеры</Link>
          <Link href="/catalog/appliances" className="hover:text-brand-500 whitespace-nowrap transition-colors">Техника для дома</Link>
          <Link href="/catalog/gaming" className="hover:text-brand-500 whitespace-nowrap transition-colors">Игры и развлечения</Link>
          <Link href="/catalog/tv-audio" className="hover:text-brand-500 whitespace-nowrap transition-colors">Телевизоры, Аудио-видео, Hi-Fi</Link>
          <Link href="/catalog/photo" className="hover:text-brand-500 whitespace-nowrap transition-colors">Фото и видеотехника</Link>
          <button
            onClick={() => setIsCatalogOpen(!isCatalogOpen)}
            className="flex items-center space-x-1 hover:text-brand-500 whitespace-nowrap text-textMuted transition-colors"
          >
            <span>Еще</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Mega-Menu Overlay Dropdown Panel (Matching reference screenshot) */}
      {isCatalogOpen && (
        <div className="absolute left-0 right-0 top-full bg-white border-b border-elevated shadow-xl z-[2147483647] animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="max-w-[1390px] mx-auto p-8 grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-elevated">
            {megaMenuData.map((cat, idx) => (
              <div key={idx} className="space-y-3">
                {/* Category Header */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-surface rounded-lg p-1.5 flex items-center justify-center shrink-0 border border-elevated">
                    <img src={cat.icon} alt={cat.title} className="max-h-full max-w-full object-contain" />
                  </div>
                  <Link
                    href={cat.slug}
                    onClick={() => setIsCatalogOpen(false)}
                    className="font-bold text-textMain text-sm hover:text-brand-500 transition-colors leading-tight"
                  >
                    {cat.title}
                  </Link>
                </div>

                {/* Subcategories list */}
                <ul className="space-y-1.5 text-xs text-textMain pl-13">
                  {cat.items.map((sub, sIdx) => (
                    <li key={sIdx}>
                      <Link
                        href={sub.href}
                        onClick={() => setIsCatalogOpen(false)}
                        className="hover:text-brand-500 text-slate-700 transition-colors block py-0.5"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                  {cat.showAll && (
                    <li>
                      <Link
                        href={cat.slug}
                        onClick={() => setIsCatalogOpen(false)}
                        className="text-brand-500 font-medium hover:underline flex items-center space-x-1 pt-1"
                      >
                        <span>Показать все</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
