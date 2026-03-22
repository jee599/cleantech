import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHero from '@/components/PageHero';
import Container from '@/components/Container';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function NoticePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations('nav');

  const isKo = locale === 'ko';

  return (
    <>
      <PageHero
        title={tNav('notice')}
        breadcrumbs={[
          { label: tNav('home'), href: '/' },
          { label: tNav('customer') },
          { label: tNav('notice') },
        ]}
      />
      <section className="py-16 md:py-24">
        <Container>
          {/* Table header */}
          <div className="border-b-2 border-[var(--navy)]">
            <div className="grid grid-cols-12 py-3 text-sm font-bold text-[var(--navy)]">
              <div className="col-span-1 text-center">{isKo ? '번호' : 'No.'}</div>
              <div className="col-span-7 px-4">{isKo ? '제목' : 'Title'}</div>
              <div className="col-span-2 text-center">{isKo ? '작성자' : 'Author'}</div>
              <div className="col-span-2 text-center">{isKo ? '날짜' : 'Date'}</div>
            </div>
          </div>

          {/* Empty state */}
          <div className="py-20 text-center">
            <p className="text-gray-400">
              {isKo ? '등록된 공지사항이 없습니다.' : 'No notices yet.'}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
