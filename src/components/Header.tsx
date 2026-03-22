'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';

type DropdownItem = {
  labelKey: string;
  href: string;
};

type NavItem = {
  labelKey: string;
  href: string;
  dropdown?: DropdownItem[];
};

const navItems: NavItem[] = [
  {
    labelKey: 'company',
    href: '/company',
    dropdown: [
      { labelKey: 'greeting', href: '/company/greeting' },
      { labelKey: 'history', href: '/company/history' },
      { labelKey: 'organization', href: '/company/organization' },
      { labelKey: 'location', href: '/company/location' },
    ],
  },
  {
    labelKey: 'products',
    href: '/products',
    dropdown: [
      { labelKey: 'ulpa', href: '/products/ulpa' },
      { labelKey: 'hepa', href: '/products/hepa' },
      { labelKey: 'medium', href: '/products/medium' },
      { labelKey: 'pre', href: '/products/pre' },
      { labelKey: 'carbon', href: '/products/carbon' },
    ],
  },
  {
    labelKey: 'inquiry',
    href: '/inquiry',
  },
  {
    labelKey: 'customer',
    href: '/customer',
    dropdown: [
      { labelKey: 'notice', href: '/customer/notice' },
      { labelKey: 'qna', href: '/customer/qna' },
    ],
  },
];

function DesktopDropdown({
  items,
  isOpen,
  t,
}: {
  items: DropdownItem[];
  isOpen: boolean;
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
        isOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-1 pointer-events-none'
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg ring-1 ring-black/5 py-2 min-w-[180px]">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4A9BD9] transition-colors"
          >
            {t(item.labelKey)}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdown(null);
  }, [pathname]);

  function handleMouseEnter(key: string) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(key);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  }

  function switchLocale() {
    const next = locale === 'ko' ? 'en' : 'ko';
    router.replace(pathname, { locale: next });
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <Image
              src="/images/logo2.png"
              alt="CTK International"
              width={120}
              height={36}
              className="h-7 md:h-9 w-auto"
              priority
            />
            <span className="text-sm md:text-base font-bold text-[#0F1B2D] tracking-tight leading-tight">
              {locale === 'ko' ? '크린테크코리아' : 'Clean Tech Korea'}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.labelKey}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown && handleMouseEnter(item.labelKey)
                }
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#4A9BD9] transition-colors rounded-md"
                >
                  {t(item.labelKey)}
                </Link>
                {item.dropdown && (
                  <DesktopDropdown
                    items={item.dropdown}
                    isOpen={openDropdown === item.labelKey}
                    t={t}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={switchLocale}
              className="text-sm font-medium text-gray-500 hover:text-[#4A9BD9] transition-colors border border-gray-200 rounded-md px-3 py-1"
            >
              {locale === 'ko' ? 'EN' : 'KO'}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-[#4A9BD9]"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[80vh] border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <div className="bg-white px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.labelKey}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.labelKey
                          ? null
                          : item.labelKey
                      )
                    }
                    className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    {t(item.labelKey)}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        mobileDropdown === item.labelKey ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      mobileDropdown === item.labelKey
                        ? 'max-h-96'
                        : 'max-h-0'
                    }`}
                  >
                    <div className="pl-4 space-y-1 pb-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-[#4A9BD9] hover:bg-gray-50 rounded-md"
                        >
                          {t(sub.labelKey)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  {t(item.labelKey)}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
