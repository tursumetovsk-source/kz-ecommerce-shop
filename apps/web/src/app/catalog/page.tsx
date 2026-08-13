import React from 'react';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { SlidersHorizontal, ChevronRight } from 'lucide-react';

const mockCatalogProducts = [
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
    slug: 'samsung-galaxy-s24-ultra',
    name: 'Смартфон Samsung Galaxy S24 Ultra 512GB Titanium Gray',
    price: 649990,
    oldPrice: 699990,
    imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=60',
    rating: 4.8,
    reviewsCount: 29,
  },
  {
    id: '4',
    slug: 'samsung-55-oled-4k',
    name: 'Телевизор Samsung 55" OLED 4K Smart TV',
    price: 499990,
    oldPrice: 550000,
    imageUrl: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60',
    rating: 4.7,
    reviewsCount: 22,
  },
];

export default function CatalogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-brand-600">Главная</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-800 font-medium">Каталог товаров</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 bg-white p-5 rounded-xl border border-gray-200 h-fit space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <SlidersHorizontal className="w-4 h-4 text-brand-600" />
              <span>Фильтры</span>
            </h3>
            <button className="text-xs text-brand-600 hover:underline">Сбросить</button>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="font-semibold text-xs text-slate-800 mb-3 uppercase tracking-wider">Цена, ₸</h4>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="От 0"
                className="w-full px-3 py-1.5 border border-gray-300 rounded text-xs focus:outline-none focus:border-brand-500"
              />
              <span className="text-gray-400 text-xs">—</span>
              <input
                type="number"
                placeholder="До 2 000 000"
                className="w-full px-3 py-1.5 border border-gray-300 rounded text-xs focus:outline-none focus:border-brand-500"
              />
            </div>
          </div>

          {/* Brand Filter */}
          <div>
            <h4 className="font-semibold text-xs text-slate-800 mb-3 uppercase tracking-wider">Бренд</h4>
            <div className="space-y-2 text-xs text-slate-700">
              {['Apple', 'Samsung', 'LG', 'Xiaomi', 'Asus'].map((brand, idx) => (
                <label key={idx} className="flex items-center space-x-2 cursor-pointer hover:text-brand-600">
                  <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500" />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Dynamic Attributes Filter */}
          <div>
            <h4 className="font-semibold text-xs text-slate-800 mb-3 uppercase tracking-wider">Объем памяти</h4>
            <div className="space-y-2 text-xs text-slate-700">
              {['128 GB', '256 GB', '512 GB', '1 TB'].map((mem, idx) => (
                <label key={idx} className="flex items-center space-x-2 cursor-pointer hover:text-brand-600">
                  <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500" />
                  <span>{mem}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Catalog Content */}
        <main className="flex-1">
          {/* Header & Sorting */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold text-slate-900">Каталог товаров</h1>
              <p className="text-xs text-gray-500">Найдено 4 товара</p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500 whitespace-nowrap">Сортировка:</span>
              <select className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-1.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-brand-500">
                <option>Популярные</option>
                <option>Сначала дешевые</option>
                <option>Сначала дорогие</option>
                <option>Новинки</option>
                <option>По рейтингу</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCatalogProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
