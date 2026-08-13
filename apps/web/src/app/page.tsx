'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { ChevronLeft, ChevronRight, Eye, ShoppingCart, ArrowUp } from 'lucide-react';

const mockSmartphones = [
  {
    id: '1',
    slug: 'samsung-galaxy-a54',
    name: 'Смартфон Samsung Galaxy A54 5G 128GB Black',
    price: 189990,
    oldPrice: 209990,
    imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=60',
    badge: 'Новинка',
    discountPercent: -9,
  },
  {
    id: '2',
    slug: 'samsung-galaxy-s20',
    name: 'Смартфон Samsung Galaxy S20 FE 128GB Cloud Navy',
    price: 249990,
    oldPrice: 275990,
    imageUrl: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&auto=format&fit=crop&q=60',
    badge: 'Новинка',
    discountPercent: -9,
  },
  {
    id: '3',
    slug: 'xiaomi-redmi-note-13',
    name: 'Смартфон Xiaomi Redmi Note 13 8/256GB Midnight Black',
    price: 119990,
    oldPrice: 132000,
    imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60',
    badge: 'Новинка',
    discountPercent: -9,
  },
  {
    id: '4',
    slug: 'iphone-15-128gb',
    name: 'Смартфон Apple iPhone 15 128GB Black',
    price: 429990,
    oldPrice: 472990,
    imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format&fit=crop&q=60',
    badge: 'Новинка',
    discountPercent: -9,
  },
  {
    id: '5',
    slug: 'samsung-galaxy-a34',
    name: 'Смартфон Samsung Galaxy A34 5G 6/128GB Awesome Graphite',
    price: 149990,
    oldPrice: 164990,
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60',
    badge: 'Новинка',
    discountPercent: -9,
  },
  {
    id: '6',
    slug: 'realme-11-pro',
    name: 'Смартфон Realme 11 Pro 8/256GB Astral Black',
    price: 159990,
    oldPrice: 175990,
    imageUrl: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&auto=format&fit=crop&q=60',
    badge: 'Новинка',
    discountPercent: -9,
  },
];

const mockDeals = [
  { priceText: 'От 11 990 ₸' },
  { type: 'eye', oldPrice: '74 990 ₸', price: '67 990 ₸' },
  { type: 'cart', oldPrice: '79 990 ₸', price: '72 990 ₸' },
  { type: 'cart', oldPrice: '79 990 ₸', price: '72 990 ₸' },
  { type: 'cart', oldPrice: '79 990 ₸', price: '72 990 ₸' },
];

const column1Products = [
  {
    slug: 'samsung-galaxy-a12',
    name: 'Смартфон Samsung Galaxy A12 32GB Black (SM-A125F)',
    price: 'От 11 990 ₸',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=200&auto=format&fit=crop&q=60',
  },
  {
    slug: 'samsung-galaxy-s21',
    name: 'Смартфон Samsung Galaxy S21 5G 128GB Phantom Gray',
    price: '249 990 ₸',
    oldPrice: '289 990 ₸',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=200&auto=format&fit=crop&q=60',
  },
];

const column2Products = [
  {
    slug: 'asus-e406na',
    name: '14" Ноутбук ASUS E406NA-BV014T, RAM 4 ГБ, eMMC 128 ГБ, Intel HD Graphics 500, Windows 10 Home',
    price: '122 329 ₸',
    oldPrice: '146 190 ₸',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&auto=format&fit=crop&q=60',
  },
  {
    slug: 'honor-magicbook-14',
    name: '14" Ноутбук Honor MagicBook 14 R5/8/512 Space Gray',
    price: '299 990 ₸',
    oldPrice: '329 990 ₸',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&auto=format&fit=crop&q=60',
  },
];

const column3Products = [
  {
    slug: 'samsung-galaxy-a12-2',
    name: 'Смартфон Samsung Galaxy A12 32GB Black (SM-A125F)',
    price: 'От 11 990 ₸',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=200&auto=format&fit=crop&q=60',
  },
  {
    slug: 'iphone-14-pro',
    name: 'Смартфон Apple iPhone 14 Pro 128GB Deep Purple',
    price: '499 990 ₸',
    oldPrice: '549 990 ₸',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&auto=format&fit=crop&q=60',
  },
];

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-[1390px] mx-auto px-4 py-6 space-y-10 relative">
      {/* 1. Quick Deals Ticker Bar (Top Bar matching reference screenshot) */}
      <section className="bg-white border border-elevated rounded-lg p-3 flex items-center justify-between gap-4 overflow-x-auto">
        <div className="flex items-center space-x-6 min-w-max">
          <span className="font-bold text-textMain text-base">От 11 990 ₸</span>

          {mockDeals.slice(1).map((deal, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <div className="bg-brand-500 text-white p-2 rounded-lg flex items-center justify-center">
                {deal.type === 'eye' ? (
                  <Eye className="w-4 h-4" />
                ) : (
                  <ShoppingCart className="w-4 h-4" />
                )}
              </div>
              <div className="text-xs">
                <span className="text-textMuted line-through block text-[11px]">
                  {deal.oldPrice}
                </span>
                <span className="font-bold text-textMain text-sm">
                  {deal.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-brand-500 hover:bg-brand-600 text-white p-2 rounded-lg transition-colors flex items-center justify-center shrink-0">
          <ShoppingCart className="w-4 h-4" />
        </button>
      </section>

      {/* 2. Hero Category Banners Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Large Hero Card */}
        <Link
          href="/catalog/appliances"
          className="lg:col-span-5 bg-white border border-elevated rounded-lg p-8 flex items-center justify-between hover:shadow-subtle transition-all duration-150 group min-h-[360px]"
        >
          <div className="w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&auto=format&fit=crop&q=60"
              alt="Бытовая техника"
              className="max-h-64 object-contain group-hover:scale-105 transition-transform duration-150"
            />
          </div>
          <div className="w-1/2 pl-4">
            <h2 className="text-2xl font-semibold text-textMain leading-tight">
              Бытовая техника для дома
            </h2>
          </div>
        </Link>

        {/* Right 2x2 Grid of Category Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/catalog/gaming"
            className="bg-white border border-elevated rounded-lg p-5 flex items-center justify-between hover:shadow-subtle transition-all duration-150 group min-h-[172px]"
          >
            <div className="w-1/2">
              <span className="font-semibold text-textMain text-base block leading-snug">
                Игры и развлечения
              </span>
            </div>
            <div className="w-1/2 flex justify-end">
              <img
                src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&auto=format&fit=crop&q=60"
                alt="Игры"
                className="max-h-24 object-contain group-hover:scale-105 transition-transform duration-150"
              />
            </div>
          </Link>

          <Link
            href="/catalog/laptops"
            className="bg-white border border-elevated rounded-lg p-5 flex items-center justify-between hover:shadow-subtle transition-all duration-150 group min-h-[172px]"
          >
            <div className="w-1/2">
              <span className="font-semibold text-textMain text-base block leading-snug">
                Ноутбуки, планшеты и компьютеры
              </span>
            </div>
            <div className="w-1/2 flex justify-end">
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&auto=format&fit=crop&q=60"
                alt="Ноутбуки"
                className="max-h-24 object-contain group-hover:scale-105 transition-transform duration-150"
              />
            </div>
          </Link>

          <Link
            href="/catalog/tv-audio"
            className="bg-white border border-elevated rounded-lg p-5 flex items-center justify-between hover:shadow-subtle transition-all duration-150 group min-h-[172px]"
          >
            <div className="w-1/2">
              <span className="font-semibold text-textMain text-base block leading-snug">
                Телевизоры, Аудио-видео, Hi-Fi
              </span>
            </div>
            <div className="w-1/2 flex justify-end">
              <img
                src="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=300&auto=format&fit=crop&q=60"
                alt="Телевизоры"
                className="max-h-24 object-contain group-hover:scale-105 transition-transform duration-150"
              />
            </div>
          </Link>

          <Link
            href="/catalog/photo"
            className="bg-white border border-elevated rounded-lg p-5 flex items-center justify-between hover:shadow-subtle transition-all duration-150 group min-h-[172px]"
          >
            <div className="w-1/2">
              <span className="font-semibold text-textMain text-base block leading-snug">
                Фото и видеотехника
              </span>
            </div>
            <div className="w-1/2 flex justify-end">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&auto=format&fit=crop&q=60"
                alt="Фототехника"
                className="max-h-24 object-contain group-hover:scale-105 transition-transform duration-150"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* 3. Promo Banners Grid ("Акции" section matching reference screenshot) */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-textMain">Акции</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Pink/Rose */}
          <Link
            href="/catalog/beauty"
            className="bg-gradient-to-r from-pink-300 to-rose-200 rounded-lg p-6 flex items-center justify-between h-56 hover:shadow-subtle transition-all duration-150 group overflow-hidden relative"
          >
            <div className="z-10 max-w-[50%]">
              <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-sm">
                Идеальная укладка
              </h3>
            </div>
            <div className="w-1/2 h-full flex items-center justify-end">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=60"
                alt="Идеальная укладка"
                className="max-h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-150"
              />
            </div>
          </Link>

          {/* Card 2: Purple/Indigo */}
          <Link
            href="/catalog/discounts"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-6 flex items-center justify-between h-56 hover:shadow-subtle transition-all duration-150 group overflow-hidden relative"
          >
            <div className="z-10 max-w-[50%]">
              <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-sm">
                Персональные скидки
              </h3>
            </div>
            <div className="w-1/2 h-full flex items-center justify-end">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60"
                alt="Персональные скидки"
                className="max-h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-150"
              />
            </div>
          </Link>

          {/* Card 3: Orange/Amber */}
          <Link
            href="/catalog/audio"
            className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-6 flex items-center justify-between h-56 hover:shadow-subtle transition-all duration-150 group overflow-hidden relative"
          >
            <div className="z-10 max-w-[50%]">
              <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-sm">
                Наушники для жизни
              </h3>
            </div>
            <div className="w-1/2 h-full flex items-center justify-end">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60"
                alt="Наушники для жизни"
                className="max-h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-150"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* 4. Smartphones Section Carousel */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-textMain">Смартфоны и планшеты</h2>
          <div className="flex items-center space-x-2">
            <button className="p-1.5 rounded-md border border-elevated bg-white text-textMuted hover:text-brand-500 hover:border-brand-500 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-1.5 rounded-md border border-elevated bg-white text-brand-500 hover:bg-brand-500 hover:text-white transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {mockSmartphones.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* 5. Multi-Column Category Product Lists (Middle section matching reference screenshot) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        {/* Column 1 */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-textMain border-b border-elevated pb-2">
            Смартфоны и планшеты
          </h2>
          <div className="space-y-4">
            {column1Products.map((item, idx) => (
              <Link
                key={idx}
                href={`/product/${item.slug}`}
                className="bg-white border border-elevated rounded-lg p-3 flex items-center space-x-4 hover:shadow-subtle transition-all duration-150 group"
              >
                <div className="w-20 h-20 bg-surface rounded-md p-2 flex items-center justify-center shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs text-textMain font-normal line-clamp-2 group-hover:text-brand-500 transition-colors leading-snug">
                    {item.name}
                  </h4>
                  <div className="flex items-baseline space-x-2">
                    <span className="font-bold text-textMain text-sm">{item.price}</span>
                    {item.oldPrice && (
                      <span className="text-xs text-textMuted line-through">{item.oldPrice}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-textMain border-b border-elevated pb-2">
            Ноутбуки, планшеты и компьютеры
          </h2>
          <div className="space-y-4">
            {column2Products.map((item, idx) => (
              <Link
                key={idx}
                href={`/product/${item.slug}`}
                className="bg-white border border-elevated rounded-lg p-3 flex items-center space-x-4 hover:shadow-subtle transition-all duration-150 group"
              >
                <div className="w-20 h-20 bg-surface rounded-md p-2 flex items-center justify-center shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs text-textMain font-normal line-clamp-2 group-hover:text-brand-500 transition-colors leading-snug">
                    {item.name}
                  </h4>
                  <div className="flex items-baseline space-x-2">
                    <span className="font-bold text-textMain text-sm">{item.price}</span>
                    {item.oldPrice && (
                      <span className="text-xs text-textMuted line-through">{item.oldPrice}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-textMain border-b border-elevated pb-2">
            Смартфоны и планшеты
          </h2>
          <div className="space-y-4">
            {column3Products.map((item, idx) => (
              <Link
                key={idx}
                href={`/product/${item.slug}`}
                className="bg-white border border-elevated rounded-lg p-3 flex items-center space-x-4 hover:shadow-subtle transition-all duration-150 group"
              >
                <div className="w-20 h-20 bg-surface rounded-md p-2 flex items-center justify-center shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs text-textMain font-normal line-clamp-2 group-hover:text-brand-500 transition-colors leading-snug">
                    {item.name}
                  </h4>
                  <div className="flex items-baseline space-x-2">
                    <span className="font-bold text-textMain text-sm">{item.price}</span>
                    {item.oldPrice && (
                      <span className="text-xs text-textMuted line-through">{item.oldPrice}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Scroll-To-Top Green Button (#76BC21) */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-brand-500 hover:bg-brand-600 text-white p-3 rounded-lg shadow-lg transition-all duration-150 z-[2147483647] flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 stroke-[2.5]" />
      </button>
    </div>
  );
}
