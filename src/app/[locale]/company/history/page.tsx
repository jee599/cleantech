import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHero from '@/components/PageHero';
import Container from '@/components/Container';
import HistoryScrubber from '@/components/HistoryScrubber';
import PartnerWall from '@/components/PartnerWall';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HistoryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('company');
  const tNav = await getTranslations('nav');

  const lang = locale as 'ko' | 'en' | 'th';

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
          <HistoryScrubber lang={lang} />
        </Container>
      </section>
      <PartnerWall lang={lang} />
    </>
  );
}
