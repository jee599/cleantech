import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Container from '@/components/Container';
import { products, getProductsByCategory } from '@/data/products';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('hero');
  const tCommon = await getTranslations('common');
  const tProducts = await getTranslations('products');
  const tCompany = await getTranslations('company');

  const lang = locale as 'ko' | 'en' | 'th';

  const categories = ['ulpa', 'hepa', 'medium', 'pre', 'carbon'] as const;

  // Featured products (first product from each category)
  const featuredProducts = categories.map(cat => {
    const catProducts = getProductsByCategory(cat);
    return catProducts[0];
  }).filter(Boolean);

  return (
    <>
      {/* Hero Section - Full width image with overlay */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <Image
          src="/images/hero/unsplash_hero1.jpg"
          alt="Cleanroom facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-transparent" />
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-blue-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4A9BD9]" />
              {lang === 'ko' ? '1993년 설립 · 30년+ 기술력' : 'Est. 1993 · 30+ Years of Excellence'}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              {t('tagline')}
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
              {t('subtitle')}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#4A9BD9] text-white font-semibold rounded-lg hover:bg-[#3A8BC9] transition-all"
              >
                {tCommon('viewProducts')}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/inquiry"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                {tCommon('contactUs')}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Bar - Stats */}
      <section className="bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {[
              { value: '30+', label: lang === 'ko' ? '년 업력' : 'Years', icon: '📅' },
              { value: '21', label: lang === 'ko' ? '제품 라인업' : 'Product Lines', icon: '🔧' },
              { value: 'ISO', label: '9001 / 14001', icon: '✓' },
              { value: 'UL', label: lang === 'ko' ? '국제 인증' : 'Certified', icon: '🌍' },
            ].map((stat) => (
              <div key={stat.value + stat.label} className="py-8 lg:py-10 px-6 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#0F1B2D]">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Categories - Freudenberg card style */}
      <section className="py-20 lg:py-28 bg-[#f8f9fb]">
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#4A9BD9] uppercase tracking-widest mb-3">
              {lang === 'ko' ? '제품 라인업' : 'Product Lineup'}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F1B2D] tracking-tight">
              {tProducts('title')}
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              {lang === 'ko' ? '반도체, 제약, 병원, 산업 시설 등 다양한 환경에 최적화된 에어 필터를 제공합니다.' : 'Air filters optimized for semiconductor, pharmaceutical, hospital, and industrial environments.'}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((catId, index) => {
              const featured = featuredProducts[index];
              if (!featured) return null;
              return (
                <Link
                  key={catId}
                  href={`/products/${catId}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-[#4A9BD9]/30 transition-all duration-300"
                >
                  <div className="relative h-52 bg-gray-50 flex items-center justify-center p-8">
                    <Image
                      src={featured.image}
                      alt={featured.name[lang]}
                      width={200}
                      height={200}
                      className="object-contain max-h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-[#0F1B2D]">
                        {tProducts(`categories.${catId}.name`)}
                      </h3>
                      <svg className="w-5 h-5 text-[#4A9BD9] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                      {tProducts(`categories.${catId}.description`)}
                    </p>
                    <div className="mt-4 text-xs text-gray-400">
                      {getProductsByCategory(catId).length} {lang === 'ko' ? '개 제품' : 'products'}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Company Section with real photo */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero/unsplash_hero2.jpg"
                alt="Manufacturing facility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-3">
                  {['Samsung', 'LG', 'SNU Hospital'].map((client) => (
                    <span key={client} className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#0F1B2D]">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#4A9BD9] uppercase tracking-widest mb-3">
                {lang === 'ko' ? '회사소개' : 'About Us'}
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F1B2D] tracking-tight">
                {lang === 'ko' ? '깨끗한 공기를 위한\n기술 파트너' : 'Your Technology\nPartner for Clean Air'}
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                {tCompany('greeting.content')}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: lang === 'ko' ? '설립' : 'Founded', value: '1993' },
                  { label: lang === 'ko' ? '인증' : 'Certifications', value: 'ISO 9001/14001' },
                  { label: lang === 'ko' ? '국제 인증' : 'International', value: 'UL Certified' },
                  { label: lang === 'ko' ? '수상' : 'Awards', value: lang === 'ko' ? '녹색경영대상' : 'Green Management' },
                ].map((item) => (
                  <div key={item.label} className="py-4 border-l-2 border-[#4A9BD9] pl-4">
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</div>
                    <div className="mt-1 text-sm font-bold text-[#0F1B2D]">{item.value}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/company/greeting"
                className="mt-8 inline-flex items-center gap-2 text-[#4A9BD9] font-semibold hover:gap-3 transition-all"
              >
                {tCommon('learnMore')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-28 bg-[#f8f9fb]">
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#4A9BD9] uppercase tracking-widest mb-3">
              {lang === 'ko' ? '적용 분야' : 'Industries'}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F1B2D] tracking-tight">
              {lang === 'ko' ? '다양한 산업 분야에 적용' : 'Applied Across Industries'}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: '🏭', label: lang === 'ko' ? '반도체' : 'Semiconductor' },
              { icon: '💊', label: lang === 'ko' ? '제약' : 'Pharmaceutical' },
              { icon: '🏥', label: lang === 'ko' ? '병원' : 'Hospital' },
              { icon: '⚡', label: lang === 'ko' ? '전자' : 'Electronics' },
              { icon: '🚢', label: lang === 'ko' ? '조선' : 'Shipbuilding' },
              { icon: '🏢', label: lang === 'ko' ? '상업 빌딩' : 'Commercial' },
            ].map((industry) => (
              <div key={industry.label} className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-[#4A9BD9]/30 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <div className="text-sm font-semibold text-[#0F1B2D]">{industry.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section with background image */}
      <section className="relative py-20 lg:py-28">
        <Image
          src="/images/hero/unsplash_hero3.jpg"
          alt="Industrial HVAC"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1628]/85" />
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {lang === 'ko'
                ? '맞춤 필터 솔루션이 필요하신가요?'
                : 'Need a Custom Filtration Solution?'}
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
              {lang === 'ko'
                ? '30년 경험의 전문가가 최적의 솔루션을 제안합니다.'
                : 'Our experts with 30+ years of experience will find the right solution.'}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/inquiry"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#4A9BD9] text-white font-semibold rounded-lg hover:bg-[#3A8BC9] transition-all"
              >
                {tCommon('contactUs')}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="tel:+82317618261"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                +82-31-761-8261
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
