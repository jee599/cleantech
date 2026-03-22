import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHero from '@/components/PageHero';
import Container from '@/components/Container';

type Props = {
  params: Promise<{ locale: string }>;
};

type Milestone = {
  year: string;
  event: string;
};

export default async function HistoryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('company');
  const tNav = await getTranslations('nav');

  // next-intl raw() to get array data
  const milestones: Milestone[] = [
    { year: '2023', event: locale === 'ko' ? '서울대병원, 국립암센터 납품' : 'Supplied Seoul National University Hospital, National Cancer Center' },
    { year: '2020', event: locale === 'ko' ? '신공장 이전 (용수길 197)' : 'Relocated to new facility' },
    { year: '2018', event: locale === 'ko' ? '삼성중공업 FLNG 필터 납품' : 'Samsung Heavy Industries FLNG filters' },
    { year: '2016', event: locale === 'ko' ? '녹색경영대상 수상' : 'Green Management Awards' },
    { year: '2015', event: locale === 'ko' ? 'UL 인증 취득' : 'UL certification' },
    { year: '2005', event: locale === 'ko' ? 'ISO 9001, 14001 인증 취득' : 'ISO 9001, 14001 certification' },
    { year: '2004', event: locale === 'ko' ? '크린테크코리아(주) 법인 전환' : 'Transitioned to Clean Tech Korea Co., Ltd' },
    { year: '2001', event: locale === 'ko' ? '유망기업 지정, 홍콩 필트레이션 파트너십' : 'Designated promising enterprise, Hong Kong Filtration partnership' },
    { year: '1996', event: locale === 'ko' ? '현대전자 오토롤 필터 납품' : 'Auto roll filters to Hyundai Electronics' },
    { year: '1995', event: locale === 'ko' ? 'HEPA·ULPA 필터 생산, 삼성전자 납품' : 'HEPA/ULPA production started, supplied Samsung Electronics' },
    { year: '1993', event: locale === 'ko' ? '설립, 프리·미디엄 필터 생산 시작' : 'Founded, began producing pre and medium filters' },
  ];

  return (
    <>
      <PageHero
        title={t('history.title')}
        breadcrumbs={[
          { label: tNav('home'), href: '/' },
          { label: tNav('company') },
          { label: tNav('history') },
        ]}
      />
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-[#4A9BD9]/30" />

              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-start gap-6 mb-10 md:mb-12 ${
                    index % 2 === 0
                      ? 'md:flex-row'
                      : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year side */}
                  <div
                    className={`hidden md:block w-[calc(50%-24px)] ${
                      index % 2 === 0 ? 'text-right pr-4' : 'text-left pl-4'
                    }`}
                  >
                    <span className="text-2xl font-bold text-[var(--navy)]">{milestone.year}</span>
                  </div>

                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#4A9BD9] border-2 border-white shadow-sm md:mt-1.5" />
                  </div>

                  {/* Event side */}
                  <div
                    className={`flex-1 md:w-[calc(50%-24px)] md:flex-none ${
                      index % 2 === 0 ? 'md:pl-4' : 'md:pr-4 md:text-right'
                    }`}
                  >
                    <span className="md:hidden text-lg font-bold text-[var(--navy)] block mb-1">
                      {milestone.year}
                    </span>
                    <p className="text-gray-600">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
