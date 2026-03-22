import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHero from '@/components/PageHero';
import Container from '@/components/Container';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function GreetingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('company');
  const tNav = await getTranslations('nav');

  return (
    <>
      <PageHero
        title={t('greeting.title')}
        backgroundImage="/images/hero/unsplash_hero2.jpg"
        breadcrumbs={[
          { label: tNav('home'), href: '/' },
          { label: tNav('company') },
          { label: tNav('greeting') },
        ]}
      />
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                {t('greeting.content')}
              </p>
            </div>
            <div className="mt-12 border-t border-gray-200 pt-8 text-right">
              <p className="text-xl font-bold text-[var(--navy)]">{t('greeting.ceoName')}</p>
              <p className="mt-1 text-gray-500">{t('greeting.ceoTitle')}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
