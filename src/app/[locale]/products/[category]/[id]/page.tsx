import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import Container from '@/components/Container';
import PageHero from '@/components/PageHero';
import { products, getProductById, getProductsByCategory, type ProductCategory } from '@/data/products';

type Props = {
  params: Promise<{ locale: string; category: string; id: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({
    category: p.category,
    id: p.id,
  }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, category, id } = await params;
  setRequestLocale(locale);
  const product = getProductById(id);
  if (!product) notFound();

  const tNav = await getTranslations('nav');
  const tProducts = await getTranslations('products');
  const tCommon = await getTranslations('common');
  const lang = locale as 'ko' | 'en';

  const specs = [
    { label: lang === 'ko' ? '여재' : 'Media', value: product.media[lang] },
    { label: lang === 'ko' ? '효율' : 'Efficiency', value: product.efficiency },
    { label: lang === 'ko' ? '적용분야' : 'Applications', value: product.applications[lang] },
    ...(product.maxTemp ? [{ label: lang === 'ko' ? '최고온도' : 'Max Temp', value: product.maxTemp }] : []),
    ...(product.maxHumidity ? [{ label: lang === 'ko' ? '최대습도' : 'Max Humidity', value: product.maxHumidity }] : []),
  ];

  return (
    <>
      <PageHero
        title={product.name[lang]}
        subtitle={product.description[lang]}
        breadcrumbs={[
          { label: tNav('home'), href: `/${locale}` },
          { label: tProducts('title'), href: `/${locale}/products` },
          { label: tProducts(`categories.${category}.name`), href: `/${locale}/products/${category}` },
          { label: product.name[lang] },
        ]}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Image */}
            <div className="bg-[#f8f9fb] rounded-2xl p-10 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name[lang]}
                width={400}
                height={400}
                className="object-contain"
              />
            </div>

            {/* Specs */}
            <div>
              <h2 className="text-2xl font-bold text-[#0F1B2D] mb-6">
                {lang === 'ko' ? '제품 사양' : 'Specifications'}
              </h2>
              <div className="space-y-0 divide-y divide-gray-100">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex py-4">
                    <div className="w-32 flex-shrink-0 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      {spec.label}
                    </div>
                    <div className="text-sm text-[#0F1B2D] font-medium">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Models Table */}
          {product.models.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-[#0F1B2D] mb-6">
                {lang === 'ko' ? '모델 사양' : 'Model Specifications'}
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-100">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#f8f9fb]">
                      <th className="text-left py-4 px-6 font-semibold text-gray-500 uppercase tracking-wider text-xs">
                        {lang === 'ko' ? '모델번호' : 'Model No.'}
                      </th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-500 uppercase tracking-wider text-xs">
                        {lang === 'ko' ? '규격 (mm)' : 'Dimensions (mm)'}
                      </th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-500 uppercase tracking-wider text-xs">
                        {lang === 'ko' ? '풍량' : 'Airflow'}
                      </th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-500 uppercase tracking-wider text-xs">
                        {lang === 'ko' ? '압력손실' : 'Pressure Loss'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {product.models.map((model) => (
                      <tr key={model.modelNumber} className="hover:bg-[#f8f9fb]/50 transition-colors">
                        <td className="py-3.5 px-6 font-medium text-[#0F1B2D]">{model.modelNumber}</td>
                        <td className="py-3.5 px-6 text-gray-600">{model.dimensions}</td>
                        <td className="py-3.5 px-6 text-gray-600">{model.airflow}</td>
                        <td className="py-3.5 px-6 text-gray-600">{model.pressureLoss}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Performance Curve */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#0F1B2D] mb-6">
              {lang === 'ko' ? '성능 곡선' : 'Performance Curve'}
            </h2>
            <div className="bg-[#f8f9fb] rounded-xl p-8 flex justify-center">
              <Image
                src={product.curveImage}
                alt={`${product.name[lang]} performance curve`}
                width={600}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-12">
            <Link
              href={`/products/${category}`}
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
