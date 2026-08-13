import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-textMain border-t border-elevated mt-16 text-sm">
      {/* Main Footer Body */}
      <div className="max-w-[1390px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Column: Brand, Phones & Socials */}
        <div className="space-y-4">
          <Link href="/" className="inline-block font-bold text-3xl tracking-tight text-textMain mb-2">
            <span className="text-brand-500 font-extrabold">KZ</span>
            <span className="text-brand-500 font-bold">SHOP</span>
          </Link>

          <div className="space-y-2 text-xs">
            <div>
              <a href="tel:+77770000000" className="text-base font-bold text-textMain block hover:text-brand-500 transition-colors">
                +7 (777) 000-00-00
              </a>
              <span className="text-textMuted text-[11px]">справочная служба</span>
            </div>

            <div>
              <a href="tel:+77771111111" className="text-base font-bold text-textMain block hover:text-brand-500 transition-colors">
                +7 (777) 111-11-11
              </a>
              <span className="text-textMuted text-[11px]">интернет-магазин</span>
            </div>
          </div>

          <div className="pt-2">
            <h5 className="font-bold text-textMain text-xs mb-2">Оставайтесь на связи</h5>
            <div className="flex items-center space-x-3 text-brand-500 text-lg font-bold">
              <a href="#" className="hover:opacity-80 transition-opacity" title="Telegram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-[...]" /></svg>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" title="VK">
                <span className="text-xs font-black border-2 border-brand-500 rounded px-1 py-0.5">VK</span>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" title="YouTube">
                <span className="text-xs font-black border-2 border-brand-500 rounded px-1 py-0.5">YT</span>
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: О магазине */}
        <div>
          <h4 className="font-bold text-textMain mb-4 text-sm">О магазине</h4>
          <ul className="space-y-2 text-xs text-textMain font-normal">
            <li><Link href="/returns" className="hover:text-brand-500 transition-colors">Условия обмена и возврата</Link></li>
            <li><Link href="/catalog" className="hover:text-brand-500 transition-colors">Каталог</Link></li>
            <li><Link href="/about" className="hover:text-brand-500 transition-colors">О компании</Link></li>
            <li><Link href="/contacts" className="hover:text-brand-500 transition-colors">Контакты</Link></li>
            <li><Link href="/delivery" className="hover:text-brand-500 transition-colors">Доставка</Link></li>
            <li><Link href="/payment" className="hover:text-brand-500 transition-colors">Оплата</Link></li>
          </ul>
        </div>

        {/* Column 3: Клиентам */}
        <div>
          <h4 className="font-bold text-textMain mb-4 text-sm">Клиентам</h4>
          <ul className="space-y-2 text-xs text-textMain font-normal">
            <li><Link href="/profile" className="hover:text-brand-500 transition-colors">Личный кабинет</Link></li>
            <li><Link href="/blog" className="hover:text-brand-500 transition-colors">Блог</Link></li>
            <li>
              <Link href="/feedback" className="text-brand-500 font-medium hover:underline transition-colors">
                Обратная связь
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Информация */}
        <div>
          <h4 className="font-bold text-textMain mb-4 text-sm">Информация</h4>
          <ul className="space-y-2 text-xs text-textMain font-normal">
            <li><Link href="/terms" className="hover:text-brand-500 transition-colors">Пользовательское соглашение</Link></li>
            <li><Link href="/privacy" className="hover:text-brand-500 transition-colors">Политика конфиденциальности и оферта</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright & Payment Systems Bar */}
      <div className="bg-surface border-t border-elevated py-4 text-xs text-textMuted">
        <div className="max-w-[1390px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 KZSHOP. Любое использование контента без письменного разрешения запрещено.</p>
          <div className="flex items-center space-x-3 font-semibold text-textMain">
            <span className="text-red-600 font-bold">Mastercard</span>
            <span className="text-blue-700 font-extrabold">VISA</span>
            <span className="text-emerald-600 font-bold">Halyk ePay</span>
            <span className="text-indigo-600 font-bold">Freedom Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
