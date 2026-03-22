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
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#4A9BD9] sticky top-8">
                <h3 className="font-bold text-[var(--navy)] text-lg mb-6">
                  {isKo ? '연락처' : 'Contact Information'}
                </h3>
                <dl className="space-y-5 text-sm">
                  <div>
                    <dt className="text-gray-400 mb-1">{isKo ? '주소' : 'Address'}</dt>
                    <dd className="text-gray-700">{t('info.address')}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 mb-1">{isKo ? '전화' : 'Phone'}</dt>
                    <dd className="text-gray-700">{t('info.phone')}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 mb-1">{isKo ? '팩스' : 'Fax'}</dt>
                    <dd className="text-gray-700">{t('info.fax')}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 mb-1">{isKo ? '이메일' : 'Email'}</dt>
                    <dd>
                      <a href={`mailto:${t('info.email')}`} className="text-[#4A9BD9] hover:underline">
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
