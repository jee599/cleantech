'use client';

import { useTranslations } from 'next-intl';

type Props = {
  locale: string;
};

export default function InquiryForm({ locale }: Props) {
  const t = useTranslations('inquiry');
  const tCommon = useTranslations('common');

  const isKo = locale === 'ko';

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            {t('form.name')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#4A9BD9] focus:ring-1 focus:ring-[#4A9BD9] outline-none transition-colors"
            placeholder={t('form.name')}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
            {t('form.company')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#4A9BD9] focus:ring-1 focus:ring-[#4A9BD9] outline-none transition-colors"
            placeholder={t('form.company')}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            {t('form.email')} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#4A9BD9] focus:ring-1 focus:ring-[#4A9BD9] outline-none transition-colors"
            placeholder={t('form.email')}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            {t('form.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#4A9BD9] focus:ring-1 focus:ring-[#4A9BD9] outline-none transition-colors"
            placeholder={t('form.phone')}
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
          {t('form.subject')}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#4A9BD9] focus:ring-1 focus:ring-[#4A9BD9] outline-none transition-colors"
          placeholder={t('form.subject')}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          {t('form.message')} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#4A9BD9] focus:ring-1 focus:ring-[#4A9BD9] outline-none transition-colors resize-vertical"
          placeholder={t('form.message')}
        />
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex items-center px-8 py-3 bg-[#4A9BD9] text-white font-medium rounded-lg hover:bg-[#3A8BC9] transition-colors"
        >
          {tCommon('submit')}
        </button>
      </div>
    </form>
  );
}
