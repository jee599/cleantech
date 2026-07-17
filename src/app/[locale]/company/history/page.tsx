import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHero from '@/components/PageHero';
import HistoryTimeline from '@/components/HistoryTimeline';

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
      <HistoryTimeline lang={lang} />
    </>
  );
}
