'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const info = useTranslations('company.info');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale() {
    const next = locale === 'ko' ? 'en' : 'ko';
    router.replace(pathname, { locale: next });
  }

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--navy)] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo2.png"
                alt="CTK International"
                width={120}
                height={36}
                className="h-7 w-auto brightness-0 invert"
              />
              <span className="text-sm font-bold text-white tracking-tight">
                {locale === 'ko' ? '크린테크코리아' : 'Clean Tech Korea'}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {nav('products')}
                </Link>
              </li>
              <li>
                <Link
                  href="/inquiry"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {nav('inquiry')}
                </Link>
              </li>
              <li>
                <Link
                  href="/customer/notice"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {nav('notice')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('contact')}
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#4A9BD9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {info('address')}
              </li>
              <li className="flex gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#4A9BD9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>
                  Tel. {info('phone')} / Fax. {info('fax')}
                </span>
              </li>
              <li className="flex gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#4A9BD9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {info('email')}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            {t('copyright', { year })}
          </p>
          <button
            onClick={switchLocale}
            className="text-xs text-gray-500 hover:text-white transition-colors"
          >
            {locale === 'ko' ? 'English' : '한국어'}
          </button>
        </div>
      </div>
    </footer>
  );
}
