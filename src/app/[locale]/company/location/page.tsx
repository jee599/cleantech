import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHero from '@/components/PageHero';
import Container from '@/components/Container';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LocationPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('company');
  const tNav = await getTranslations('nav');

  const isKo = locale === 'ko';

  return (
    <>
      <PageHero
        title={isKo ? '오시는 길' : 'Location'}
        breadcrumbs={[
          { label: tNav('home'), href: '/' },
          { label: tNav('company') },
          { label: tNav('location') },
        ]}
      />
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div>
              <div className="border-t border-[#0F1B2D] pt-6">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#0F1B2D]">
                  {t('info.companyName')}
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

            {/* Map */}
            <div className="lg:col-span-2">
              <div className="rounded-lg overflow-hidden border border-gray-200 h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.123!2d127.295!3d37.375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z6rK96riw64-EIOq0keyjtOyLnCDstIjsm5TsnY0g7Jqp7IiY6ri4IDE5Nw!5e0!3m2!1sko!2skr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={isKo ? '회사 위치' : 'Company Location'}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
