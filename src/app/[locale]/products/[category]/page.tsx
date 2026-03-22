import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import PageHero from '@/components/PageHero';
import Container from '@/components/Container';
import { getProductsByCategory, type ProductCategory } from '@/data/products';

type Props = {
  params: Promise<{ locale: string; category: string }>;
};

const validCategories: ProductCategory[] = ['ulpa', 'hepa', 'medium', 'pre', 'carbon'];

export function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export default async function CategoryPage({ params }: Props) {
  const { locale, category } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('products');
  const tNav = await getTranslations('nav');
  const tCommon = await getTranslations('common');

  const lang = locale as 'ko' | 'en';
  const categoryProducts = getProductsByCategory(category as ProductCategory);

  return (
    <>
      <PageHero
        title={t(`categories.${category}.name`)}
        subtitle={t(`categories.${category}.description`)}
        breadcrumbs={[
          { label: tNav('home'), href: `/${locale}` },
          { label: tNav('products'), href: `/${locale}/products` },
          { label: t(`categories.${category}.name`) },
        ]}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${category}/${product.id}`}
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

          {/* Back to all products */}
          <div className="mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[#4A9BD9] font-semibold hover:gap-3 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {tCommon('backToList')}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
