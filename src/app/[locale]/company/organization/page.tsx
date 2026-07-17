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
      subs: [
        t('국내 영업', 'Domestic Sales', 'ขายในประเทศ'),
        t('해외 영업', 'International Sales', 'ขายต่างประเทศ'),
        t('고객 관리', 'Customer Management', 'ดูแลลูกค้า'),
      ],
    },
    {
      name: t('제조부', 'Manufacturing', 'ฝ่ายผลิต'),
      subs: [
        t('생산관리', 'Production', 'การผลิต'),
        t('품질관리', 'Quality Control', 'ควบคุมคุณภาพ'),
        t('자재관리', 'Materials', 'จัดการวัสดุ'),
      ],
    },
    {
      name: t('연구개발부', 'R&D', 'ฝ่ายวิจัยและพัฒนา'),
      subs: [
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
      <section className="bg-[#F4F6F8] py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* 대표이사 */}
            <div className="flex justify-center">
              <div className="rounded-xl bg-[#0F1B2D] px-10 py-5 text-center shadow-sm ring-1 ring-black/5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7FB4DE]">
                  {ceo.role}
                </div>
                <div className="mt-1 text-lg font-semibold tracking-[-0.01em] text-white">
                  {ceo.name}
                </div>
              </div>
            </div>

            {/* 대표 → 버스 수직 연결선 */}
            <div className="mx-auto h-10 w-px bg-neutral-300" />

            {/* 커넥터: 가로 버스 + 세 갈래 수직 드롭 (데스크톱) */}
            <div className="relative hidden h-8 md:block" aria-hidden="true">
              <div className="absolute left-[16.666%] right-[16.666%] top-0 h-px bg-neutral-300" />
              <div className="absolute bottom-0 left-[16.666%] top-0 w-px -translate-x-1/2 bg-neutral-300" />
              <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-neutral-300" />
              <div className="absolute bottom-0 left-[83.333%] top-0 w-px -translate-x-1/2 bg-neutral-300" />
            </div>

            {/* 부서 — md에서는 무간격 그리드(정확한 정렬) + 열 내부 여백 */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
              {departments.map((dept) => (
                <div key={dept.name} className="md:px-3">
                  <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
                    <div className="h-1 w-full bg-[#4A9BD9]" />
                    <div className="px-6 py-5">
                      <h3 className="text-center text-lg font-semibold tracking-[-0.01em] text-[#0F1B2D]">
                        {dept.name}
                      </h3>
                      <ul className="mt-4 space-y-0.5">
                        {dept.subs.map((sub) => (
                          <li
                            key={sub}
                            className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm text-[#424242] [word-break:keep-all]"
                          >
                            <span className="size-1.5 shrink-0 rounded-full bg-[#4A9BD9]" />
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
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
