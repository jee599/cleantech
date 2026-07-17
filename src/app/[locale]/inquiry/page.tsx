import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHero from '@/components/PageHero';
import Container from '@/components/Container';
import InquiryForm from './InquiryForm';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function InquiryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('company');
  const tNav = await getTranslations('nav');
  const tInquiry = await getTranslations('inquiry');

  const isKo = locale === 'ko';

  return (
    <>
      <PageHero
        title={tInquiry('title')}
        backgroundImage="/images/hero/unsplash_hero2.jpg"
        breadcrumbs={[
          { label: tNav('home'), href: '/' },
          { label: tNav('inquiry') },
        ]}
      />
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <InquiryForm locale={locale} />
            </div>

            {/* Contact Info Sidebar */}
            <div>
              <div className="sticky top-8 border-t border-[#0F1B2D] pt-6">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#0F1B2D]">
                  {isKo ? '연락처' : 'Contact Information'}
                </h3>
                <dl className="mt-6 text-sm">
                  <div className="border-t border-neutral-200 py-4">
                    <dt className="text-neutral-500">{isKo ? '주소' : 'Address'}</dt>
                    <dd className="mt-1 text-[#0F1B2D] [word-break:keep-all]">{t('info.address')}</dd>
                  </div>
                  <div className="border-t border-neutral-200 py-4">
                    <dt className="text-neutral-500">{isKo ? '전화' : 'Phone'}</dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${t('info.phone').replace(/[^+\d]/g, '')}`}
                        className="text-[#0F1B2D] hover:text-[#4A9BD9] transition-colors duration-150"
                      >
                        {t('info.phone')}
                      </a>
                    </dd>
                  </div>
                  <div className="border-t border-neutral-200 py-4">
                    <dt className="text-neutral-500">{isKo ? '팩스' : 'Fax'}</dt>
                    <dd className="mt-1 text-[#0F1B2D]">{t('info.fax')}</dd>
                  </div>
                  <div className="border-t border-b border-neutral-200 py-4">
                    <dt className="text-neutral-500">{isKo ? '이메일' : 'Email'}</dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${t('info.email')}`}
                        className="text-[#0F1B2D] hover:text-[#4A9BD9] transition-colors duration-150"
                      >
                        {t('info.email')}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
