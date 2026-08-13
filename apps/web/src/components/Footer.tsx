import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm mt-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">KZSHOP</h3>
          <p className="text-slate-400 text-xs leading-relaxed mb-4">
            Официальный интернет-магазин с широким каталогом товаров по всему Казахстану. Удобная онлайн-оплата (Halyk ePay, Freedom Pay) и быстрая доставка.
          </p>
          <p className="text-xs text-slate-500">© 2026 KZSHOP Inc. Все права защищены.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Покупателям</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/delivery" className="hover:text-white">Доставка и самовывоз</Link></li>
            <li><Link href="/payment" className="hover:text-white">Способы оплаты</Link></li>
            <li><Link href="/returns" className="hover:text-white">Обмен и возврат</Link></li>
            <li><Link href="/faq" className="hover:text-white">Часто задаваемые вопросы</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Правовая информация</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/privacy" className="hover:text-white">Политика конфиденциальности</Link></li>
            <li><Link href="/terms" className="hover:text-white">Публичная оферта</Link></li>
            <li><Link href="/fiscal" className="hover:text-white">Выдача фискальных чеков (ККМ)</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Контакты</h4>
          <p className="text-xs text-slate-300 mb-1 font-medium">+7 (777) 000-00-00</p>
          <p className="text-xs mb-3">support@kzshop.kz</p>
          <p className="text-xs text-slate-400">г. Алматы, пр. Абая 150</p>
        </div>
      </div>
    </footer>
  );
};
