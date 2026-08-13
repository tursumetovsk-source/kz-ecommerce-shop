import React from 'react';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

export default function HomePage() {
  return (
    <div className="max-w-[1390px] mx-auto px-4 py-6 space-y-10">
      {/* Hero Category Banners Grid (Matching reference screenshot) */}
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

      {/* Smartphones Section Carousel (Matching reference screenshot) */}
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
    </div>
  );
}
