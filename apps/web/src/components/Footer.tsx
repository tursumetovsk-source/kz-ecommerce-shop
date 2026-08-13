import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-textMain border-t border-elevated mt-16 text-sm">
      <div className="max-w-[1390px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-1 font-bold text-2xl tracking-tight text-textMain mb-3">
            <span className="text-brand-500 font-extrabold text-2xl">KZ</span>
            <span className="text-slateAccent-500 font-bold text-2xl">SHOP</span>
          </div>
          <p className="text-textMuted text-xs leading-relaxed mb-4">
            Интернет-магазин электроники и бытовой техники по всему Казахстану. Удобная онлайн-оплата (Halyk ePay, Freedom Pay) и быстрая курьерская доставка.
          </p>
          <p className="text-xs text-textMuted">© 2026 KZSHOP. Все права защищены.</p>
        </div>

        <div>
          <h4 className="font-semibold text-textMain mb-3 text-base">Покупателям</h4>
          <ul className="space-y-2 text-xs text-textMuted">
            <li><Link href="/delivery" className="hover:text-brand-500 transition-colors">Доставка и оплата</Link></li>
            <li><Link href="/pickup" className="hover:text-brand-500 transition-colors">Пункты выдачи</Link></li>
            <li><Link href="/returns" className="hover:text-brand-500 transition-colors">Обмен и возврат</Link></li>
            <li><Link href="/support" className="hover:text-brand-500 transition-colors">Служба поддержки</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-textMain mb-3 text-base">Информация</h4>
          <ul className="space-y-2 text-xs text-textMuted">
            <li><Link href="/privacy" className="hover:text-brand-500 transition-colors">Политика конфиденциальности</Link></li>
            <li><Link href="/terms" className="hover:text-brand-500 transition-colors">Публичная оферта</Link></li>
            <li><Link href="/fiscal" className="hover:text-brand-500 transition-colors">Выдача фискальных чеков (ККМ)</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-textMain mb-3 text-base">Контакты</h4>
          <p className="text-sm font-medium text-textMain mb-1">+7 (777) 000-00-00</p>
          <p className="text-xs text-textMuted mb-2">support@kzshop.kz</p>
          <p className="text-xs text-textMuted">г. Алматы, пр. Абая 150</p>
        </div>
      </div>
    </footer>
  );
};
