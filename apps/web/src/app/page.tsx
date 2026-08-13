import React from 'react';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { Smartphone, Laptop, Tv, Home as HomeIcon, Car, BookOpen, ShieldCheck, Truck, CreditCard } from 'lucide-react';

const mockPopularProducts = [
  {
    id: '1',
    slug: 'iphone-17-pro-256-black',
    name: 'Смартфон Apple iPhone 17 Pro 256GB Black Titanium',
    price: 699990,
    oldPrice: 749990,
    imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format&fit=crop&q=60',
    rating: 4.9,
    reviewsCount: 38,
    badge: 'СКИДКА',
  },
  {
    id: '2',
    slug: 'macbook-pro-16-m3',
    name: 'Ноутбук Apple MacBook Pro 16" M3 Max 36GB 1TB Silver',
    price: 1850000,
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60',
    rating: 5.0,
    reviewsCount: 14,
    badge: 'ХИТ',
  },
  {
    id: '3',
    slug: 'samsung-55-oled-4k',
    name: 'Телевизор Samsung 55" OLED 4K Smart TV',
    price: 499990,
    oldPrice: 550000,
    imageUrl: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60',
    rating: 4.7,
    reviewsCount: 22,
  },
  {
    id: '4',
    slug: 'orthopedic-mattress-king',
    name: 'Ортопедический матрас Comfort Premium 180x200',
    price: 189990,
    oldPrice: 220000,
    imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&auto=format&fit=crop&q=60',
    rating: 4.8,
    reviewsCount: 45,
    badge: 'АКЦИЯ',
  },
];

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-12">
      {/* Banner Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white flex flex-col justify-between min-h-[300px] shadow-lg relative overflow-hidden">
          <div className="z-10 max-w-lg">
            <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
              Новое поступление
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
              Флагманские смартфоны 2026 года
            </h1>
            <p className="text-slate-300 text-sm mb-6">
              Официальная гарантия, быстрая доставка по Казахстану и удобная рассрочка.
            </p>
            <Link
              href="/catalog/smartphones"
              className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
            >
              Перейти в каталог
            </Link>
          </div>
        </div>

        <div className="bg-amber-500 rounded-2xl p-6 text-slate-900 flex flex-col justify-between shadow-md">
          <div>
            <span className="bg-slate-900 text-white text-[11px] font-bold px-2.5 py-0.5 rounded uppercase">
              Спецпредложение
            </span>
            <h2 className="text-2xl font-bold mt-3 mb-2">Скидки до -30%</h2>
            <p className="text-xs font-medium text-slate-800">
              На бытовую технику и электронику только до конца недели!
            </p>
          </div>
          <Link
            href="/catalog/discounts"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors text-center mt-4"
          >
            Смотреть товары
          </Link>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="bg-orange-100 text-brand-600 p-3 rounded-xl">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 text-sm">Быстрая доставка</h4>
            <p className="text-xs text-gray-500">Доставим в любой регион Казахстана</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-orange-100 text-brand-600 p-3 rounded-xl">
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 text-sm">Безопасная оплата</h4>
            <p className="text-xs text-gray-500">Halyk ePay & Freedom Pay со 100% защиты</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-orange-100 text-brand-600 p-3 rounded-xl">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 text-sm">Официальный чек ККМ</h4>
            <p className="text-xs text-gray-500">Фискальный чек отправляется мгновенно</p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-6">Категории товаров</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { title: 'Смартфоны', icon: Smartphone, href: '/catalog/smartphones' },
            { title: 'Ноутбуки', icon: Laptop, href: '/catalog/laptops' },
            { title: 'Бытовая техника', icon: Tv, href: '/catalog/appliances' },
            { title: 'Товары для дома', icon: HomeIcon, href: '/catalog/home' },
            { title: 'Автотовары', icon: Car, href: '/catalog/auto' },
            { title: 'Книги', icon: BookOpen, href: '/catalog/books' },
          ].map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-brand-500 hover:shadow-md transition-all group"
            >
              <cat.icon className="w-8 h-8 text-brand-600 group-hover:scale-110 transition-transform mb-2" />
              <span className="text-xs font-semibold text-slate-700">{cat.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Популярные товары</h2>
            <p className="text-xs text-gray-500 mt-1">Самые покупаемые товары этого месяца</p>
          </div>
          <Link href="/catalog" className="text-brand-600 hover:text-brand-700 text-sm font-semibold">
            Смотреть все →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {mockPopularProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}
