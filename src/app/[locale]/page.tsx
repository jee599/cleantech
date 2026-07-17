import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Container from '@/components/Container';
import { getProductsByCategory } from '@/data/products';
import { industries } from '@/data/industries';

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

  const T = (ko: string, en: string, th: string) =>
    lang === 'ko' ? ko : lang === 'th' ? th : en;

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
            <div className="mb-6 text-sm font-semibold uppercase tracking-[0.12em] text-white/70">
              {T('1993년 설립 · 30년+ 기술력', 'Est. 1993 · 30+ Years of Excellence', 'ก่อตั้งปี 1993 · มากกว่า 30 ปีแห่งความเป็นเลิศ')}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-medium text-white leading-[1.15] tracking-[-0.02em] [word-break:keep-all]">
              {t('tagline')}
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
              {t('subtitle')}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#4A9BD9] text-white font-semibold rounded-lg transition-colors duration-150 hover:bg-[#3B82C4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A9BD9]"
              >
                {tCommon('viewProducts')}
                <svg className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/inquiry"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white font-semibold rounded-lg transition-colors duration-150 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A9BD9]"
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
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-200">
            {[
              { value: '30+', label: T('년 업력', 'Years', 'ปี') },
              { value: '21', label: T('제품 라인업', 'Product Lines', 'สายผลิตภัณฑ์') },
              { value: 'ISO', label: '9001 / 14001' },
              { value: 'UL', label: T('국제 인증', 'Certified', 'ได้รับการรับรอง') },
            ].map((stat) => (
              <div key={stat.value + stat.label} className="py-8 lg:py-10 px-6 text-center">
                <div className="text-4xl lg:text-5xl font-medium tracking-tight text-[#0F1B2D]">{stat.value}</div>
                <div className="mt-2 text-sm text-[#424242]">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Categories - Freudenberg card style */}
      <section className="py-20 lg:py-28 bg-[#f8f9fb]">
        <Container>
          <div className="mb-14 lg:mb-16">
            <div className="h-0.5 w-12 bg-[#4A9BD9] mb-4" />
            <h2 className="text-3xl lg:text-4xl font-medium text-[#0F1B2D] tracking-[-0.02em] leading-[1.2]">
              {tProducts('title')}
            </h2>
            <p className="mt-4 text-[#424242] max-w-2xl leading-relaxed [word-break:keep-all]">
              {T('반도체, 제약, 병원, 산업 시설 등 다양한 환경에 최적화된 에어 필터를 제공합니다.', 'Air filters optimized for semiconductor, pharmaceutical, hospital, and industrial environments.', 'ฟิลเตอร์อากาศที่ปรับให้เหมาะกับสภาพแวดล้อมเซมิคอนดักเตอร์ เภสัชกรรม โรงพยาบาล และอุตสาหกรรม')}
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
                  className="group block bg-white rounded-lg overflow-hidden border border-neutral-200 transition-colors duration-150 hover:border-[#4A9BD9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A9BD9]"
                >
                  <div className="relative h-52 bg-[#F4F6F8] flex items-center justify-center p-8">
                    <Image
                      src={featured.image}
                      alt={featured.name[lang]}
                      width={200}
                      height={200}
                      className="object-contain max-h-full transition-transform duration-100 ease-in group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold text-[#0F1B2D] tracking-[-0.02em] group-hover:underline">
                        {tProducts(`categories.${catId}.name`)}
                      </h3>
                      <svg className="w-5 h-5 shrink-0 text-[#4A9BD9] transition-transform duration-150 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="mt-2 text-sm text-[#424242] leading-relaxed [word-break:keep-all]">
                      {tProducts(`categories.${catId}.description`)}
                    </p>
                    <div className="mt-4 text-xs text-neutral-500">
                      {getProductsByCategory(catId).length} {T('개 제품', 'products', 'ผลิตภัณฑ์')}
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
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/hero/unsplash_hero2.jpg"
                alt="Manufacturing facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="h-0.5 w-12 bg-[#4A9BD9] mb-4" />
              <h2 className="text-3xl lg:text-4xl font-medium text-[#0F1B2D] tracking-[-0.02em] leading-[1.2] whitespace-pre-line">
                {T('깨끗한 공기를 위한\n기술 파트너', 'Your Technology\nPartner for Clean Air', 'พันธมิตรด้านเทคโนโลยี\nเพื่ออากาศบริสุทธิ์')}
              </h2>
              <p className="mt-6 text-[#424242] leading-relaxed [word-break:keep-all]">
                {tCompany('greeting.content')}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: T('설립', 'Founded', 'ก่อตั้ง'), value: '1993' },
                  { label: T('인증', 'Certifications', 'การรับรอง'), value: 'ISO 9001/14001' },
                  { label: T('국제 인증', 'International', 'ระหว่างประเทศ'), value: 'UL Certified' },
                  { label: T('수상', 'Awards', 'รางวัล'), value: T('녹색경영대상', 'Green Management', 'การจัดการสีเขียว') },
                ].map((item) => (
                  <div key={item.label} className="border-t border-neutral-200 py-4">
                    <div className="text-xs text-neutral-500 uppercase tracking-wider">{item.label}</div>
                    <div className="mt-1 text-sm font-semibold text-[#0F1B2D]">{item.value}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/company/greeting"
                className="group mt-8 inline-flex items-center gap-2 font-bold text-[#0F1B2D] transition-colors duration-150 hover:text-[#4A9BD9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A9BD9]"
              >
                {tCommon('learnMore')}
                <svg className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-28 bg-[#F4F6F8]">
        <Container>
          <div className="mb-14 lg:mb-16">
            <div className="h-0.5 w-12 bg-[#4A9BD9] mb-4" />
            <h2 className="text-3xl lg:text-4xl font-medium text-[#0F1B2D] tracking-[-0.02em] leading-[1.2]">
              {T('다양한 산업 분야에 적용', 'Applied Across Industries', 'นำไปใช้ในหลากหลายอุตสาหกรรม')}
            </h2>
            <p className="mt-4 max-w-2xl text-[#424242] leading-relaxed [word-break:keep-all]">
              {T(
                '요구 청정도와 운전 조건이 산업마다 다릅니다. 현장의 조건부터 확인하고 등급을 제안합니다.',
                'Cleanliness requirements and operating conditions differ by industry. We start from your site conditions, then specify the grade.',
                'ข้อกำหนดความสะอาดและสภาวะการทำงานแตกต่างกันไปในแต่ละอุตสาหกรรม เราเริ่มจากสภาพหน้างานก่อน แล้วจึงกำหนดเกรด',
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-8 lg:gap-y-12">
            {industries.map((industry) => (
              <article key={industry.key} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-200">
                  <Image
                    src={industry.image}
                    alt={industry.name[lang]}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-100 ease-in group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="text-xl lg:text-2xl font-semibold text-[#0F1B2D] tracking-[-0.02em]">
                    {industry.name[lang]}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[#424242] [word-break:keep-all]">
                    {industry.caption[lang]}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {industry.tags[lang].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex h-8 items-center rounded-full bg-neutral-200 px-3 text-xs font-semibold tracking-wider text-[#0F1B2D]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
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
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0F1B2D]/85" />
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-medium text-white tracking-[-0.02em] leading-[1.2] [word-break:keep-all]">
              {T('맞춤 필터 솔루션이 필요하신가요?', 'Need a Custom Filtration Solution?', 'ต้องการโซลูชันการกรองแบบกำหนดเองหรือไม่?')}
            </h2>
            <p className="mt-4 text-white/70 text-lg [word-break:keep-all]">
              {T('30년 경험의 전문가가 최적의 솔루션을 제안합니다.', 'Our experts with 30+ years of experience will find the right solution.', 'ผู้เชี่ยวชาญของเราที่มีประสบการณ์มากกว่า 30 ปีจะหาโซลูชันที่เหมาะสม')}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/inquiry"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#4A9BD9] text-white font-semibold rounded-lg transition-colors duration-150 hover:bg-[#3B82C4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {tCommon('contactUs')}
                <svg className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="tel:+82317618261"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white font-semibold rounded-lg transition-colors duration-150 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
