import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Container from '@/components/Container';
import PageHero from '@/components/PageHero';
import { getProductsByCategory, type ProductCategory } from '@/data/products';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations('nav');
  const tProducts = await getTranslations('products');
  const tCommon = await getTranslations('common');
  const lang = locale as 'ko' | 'en' | 'th';

  const categories: { id: ProductCategory; color: string }[] = [
    { id: 'ulpa', color: '#4A9BD9' },
    { id: 'hepa', color: '#2563EB' },
    { id: 'medium', color: '#0891B2' },
    { id: 'pre', color: '#059669' },
    { id: 'carbon', color: '#6B7280' },
  ];

  return (
    <>
      <PageHero
        title={tProducts('title')}
        subtitle={lang === 'ko' ? 'ULPA, HEPA, MEDIUM, PRE, CARBON 등 21종의 에어필터 라인업' : 'Full lineup of 21 air filters across ULPA, HEPA, MEDIUM, PRE, and CARBON categories'}
        breadcrumbs={[
          { label: tNav('home'), href: `/${locale}` },
          { label: tProducts('title') },
        ]}
        backgroundImage="/images/hero/unsplash_hero3.jpg"
      />

      {categories.map(({ id: catId, color }) => {
        const catProducts = getProductsByCategory(catId);
        return (
          <section key={catId} className="py-16 lg:py-20 border-b border-gray-100 last:border-0" id={catId}>
            <Container>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1 h-10 rounded-full" style={{ backgroundColor: color }} />
                <div>
                  <h2 className="text-2xl font-bold text-[#0F1B2D]">
                    {tProducts(`categories.${catId}.name`)}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {tProducts(`categories.${catId}.description`)}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {catProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${catId}/${product.id}`}
                    className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-[#4A9BD9]/30 transition-all duration-300"
                  >
                    <div className="relative h-48 bg-[#f8f9fb] flex items-center justify-center p-6">
                      <Image
                        src={product.image}
                        alt={product.name[lang]}
                        width={180}
                        height={180}
                        className="object-contain max-h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-[#0F1B2D] group-hover:text-[#4A9BD9] transition-colors">
                        {product.name[lang]}
                      </h3>
                      <p className="mt-1 text-xs text-gray-400">{product.efficiency}</p>
                      <p className="mt-2 text-sm text-gray-500 line-clamp-2">{product.description[lang]}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#4A9BD9]">
                        {tCommon('learnMore')}
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
