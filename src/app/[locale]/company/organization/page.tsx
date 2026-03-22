import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHero from '@/components/PageHero';
import Container from '@/components/Container';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function OrganizationPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations('nav');

  const isKo = locale === 'ko';

  const departments = [
    {
      name: isKo ? '영업부' : 'Sales',
      subs: isKo
        ? ['국내 영업', '해외 영업', '고객 관리']
        : ['Domestic Sales', 'International Sales', 'Customer Management'],
    },
    {
      name: isKo ? '제조부' : 'Manufacturing',
      subs: isKo
        ? ['생산관리', '품질관리', '자재관리']
        : ['Production', 'Quality Control', 'Materials'],
    },
    {
      name: isKo ? '연구개발부' : 'R&D',
      subs: isKo
        ? ['필터 개발', '성능 시험', '신소재 연구']
        : ['Filter Development', 'Performance Testing', 'New Materials Research'],
    },
  ];

  return (
    <>
      <PageHero
        title={isKo ? '조직도' : 'Organization'}
        breadcrumbs={[
          { label: tNav('home'), href: '/' },
          { label: tNav('company') },
          { label: tNav('organization') },
        ]}
      />
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* CEO */}
            <div className="flex justify-center">
              <div className="bg-[var(--navy)] text-white rounded-xl px-10 py-5 text-center">
                <div className="text-sm text-gray-300 mb-1">{isKo ? '대표이사' : 'CEO'}</div>
                <div className="text-lg font-bold">{isKo ? '정성호' : 'Jeong Seong-ho'}</div>
              </div>
            </div>

            {/* Connector from CEO */}
            <div className="flex justify-center">
              <div className="w-0.5 h-10 bg-gray-300" />
            </div>

            {/* Horizontal line */}
            <div className="relative">
              <div className="hidden md:block absolute top-0 left-1/6 right-1/6 h-0.5 bg-gray-300" />
              <div className="hidden md:block absolute top-0 left-[16.67%] right-[16.67%] h-0.5 bg-gray-300" />
            </div>

            {/* Departments */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {departments.map((dept) => (
                <div key={dept.name} className="flex flex-col items-center">
                  {/* Connector */}
                  <div className="hidden md:block w-0.5 h-6 bg-gray-300" />

                  {/* Department */}
                  <div className="w-full bg-[#4A9BD9] text-white rounded-lg px-6 py-4 text-center">
                    <div className="font-bold">{dept.name}</div>
                  </div>

                  {/* Sub-items */}
                  <div className="w-0.5 h-4 bg-gray-300" />
                  <div className="w-full space-y-2">
                    {dept.subs.map((sub) => (
                      <div
                        key={sub}
                        className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-center text-sm text-gray-700"
                      >
                        {sub}
                      </div>
                    ))}
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
