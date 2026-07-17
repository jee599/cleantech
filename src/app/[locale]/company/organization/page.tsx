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
  const isTh = locale === 'th';
  const t = (ko: string, en: string, th: string) => (isKo ? ko : isTh ? th : en);

  const ceo = {
    role: t('대표이사', 'CEO', 'ประธานเจ้าหน้าที่บริหาร'),
    name: t('정성호', 'Jeong Seong-ho', 'Jeong Seong-ho'),
  };

  const departments = [
    {
      name: t('영업부', 'Sales', 'ฝ่ายขาย'),
      teams: [
        t('국내 영업', 'Domestic Sales', 'ขายในประเทศ'),
        t('해외 영업', 'International Sales', 'ขายต่างประเทศ'),
        t('고객 관리', 'Customer Management', 'ดูแลลูกค้า'),
      ],
    },
    {
      name: t('제조부', 'Manufacturing', 'ฝ่ายผลิต'),
      teams: [
        t('생산관리', 'Production', 'การผลิต'),
        t('품질관리', 'Quality Control', 'ควบคุมคุณภาพ'),
        t('자재관리', 'Materials', 'จัดการวัสดุ'),
      ],
    },
    {
      name: t('연구개발부', 'R&D', 'ฝ่ายวิจัยและพัฒนา'),
      teams: [
        t('필터 개발', 'Filter Development', 'พัฒนาฟิลเตอร์'),
        t('성능 시험', 'Performance Testing', 'ทดสอบประสิทธิภาพ'),
        t('신소재 연구', 'New Materials Research', 'วิจัยวัสดุใหม่'),
      ],
    },
  ];

  return (
    <>
      <PageHero
        title={t('조직도', 'Organization', 'ผังองค์กร')}
        breadcrumbs={[
          { label: tNav('home'), href: '/' },
          { label: tNav('company') },
          { label: tNav('organization') },
        ]}
      />
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* 대표이사 */}
            <div className="flex justify-center">
              <div className="min-w-[220px] rounded-[6px] border border-[#0F1B2D] bg-[#0F1B2D] px-8 py-4 text-center">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">
                  {ceo.role}
                </div>
                <div className="mt-0.5 text-base font-semibold tracking-[-0.01em] text-white">
                  {ceo.name}
                </div>
              </div>
            </div>

            {/* 대표 → 부서 버스 연결선 */}
            <div className="mx-auto h-8 w-px bg-neutral-300" />
            <div className="relative hidden h-8 md:block" aria-hidden="true">
              <div className="absolute left-[16.666%] right-[16.666%] top-0 h-px bg-neutral-300" />
              <div className="absolute bottom-0 left-[16.666%] top-0 w-px -translate-x-1/2 bg-neutral-300" />
              <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-neutral-300" />
              <div className="absolute bottom-0 left-[83.333%] top-0 w-px -translate-x-1/2 bg-neutral-300" />
            </div>

            {/* 부서 + 팀 — md 무간격 그리드로 커넥터를 카드 중앙에 정렬 */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
              {departments.map((dept) => (
                <div key={dept.name} className="flex flex-col md:px-3">
                  {/* 부서 박스 */}
                  <div className="rounded-[6px] border border-neutral-300 bg-[#EEF3F8] px-5 py-3 text-center">
                    <span className="font-semibold tracking-[-0.01em] text-[#0F1B2D]">
                      {dept.name}
                    </span>
                  </div>

                  {/* 부서 → 팀 연결선 */}
                  <div className="mx-auto h-5 w-px bg-neutral-300" />

                  {/* 팀 박스 스택 */}
                  <div className="divide-y divide-neutral-200 overflow-hidden rounded-[6px] border border-neutral-300 bg-white">
                    {dept.teams.map((team) => (
                      <div
                        key={team}
                        className="px-4 py-3 text-center text-sm text-[#0F1B2D] [word-break:keep-all]"
                      >
                        {team}
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
