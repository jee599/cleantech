import Image from 'next/image';
import { partners } from '@/data/partners';

type Lang = 'ko' | 'en' | 'th';

const copy = {
  title: {
    ko: '함께한 곳',
    en: 'Who we supply',
    th: 'ลูกค้าของเรา',
  },
  lead: {
    ko: '1995년 삼성전자 납품을 시작으로, 반도체 팹부터 대학병원 수술실까지 요구 청정도가 가장 높은 현장에 공급해 왔습니다.',
    en: 'Since our first delivery to Samsung Electronics in 1995 — from semiconductor fabs to university hospital operating theatres, the sites with the highest cleanliness requirements.',
    th: 'นับตั้งแต่การส่งมอบครั้งแรกให้ Samsung Electronics ในปี 1995 — ตั้งแต่โรงงานเซมิคอนดักเตอร์ไปจนถึงห้องผ่าตัดของโรงพยาบาลมหาวิทยาลัย สถานที่ที่มีข้อกำหนดความสะอาดสูงสุด',
  },
} satisfies Record<string, Record<Lang, string>>;

export default function PartnerWall({ lang }: { lang: Lang }) {
  return (
    <section className="border-t border-neutral-200 bg-[#F4F6F8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-0.5 w-12 bg-[#4A9BD9] mb-4" />
        <h2 className="text-3xl font-medium tracking-[-0.02em] text-[#0F1B2D] lg:text-4xl">
          {copy.title[lang]}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[#424242] [word-break:keep-all]">
          {copy.lead[lang]}
        </p>

        <ul className="mt-12 grid grid-cols-2 border-t border-l border-neutral-200 md:grid-cols-3">
          {partners.map((p) => (
            <li
              key={p.id}
              className="flex min-h-[120px] items-center justify-center border-r border-b border-neutral-200 bg-white px-4 py-8 text-center"
            >
              {/* 로고와 워드마크가 섞여도 광학 크기가 맞도록 높이를 고정한 박스에 담는다. */}
              <div className="flex h-10 items-center justify-center">
                {p.logo ? (
                  <Image
                    src={p.logo}
                    alt={p.name[lang]}
                    width={200}
                    height={40}
                    className="max-h-8 w-auto object-contain"
                  />
                ) : (
                  <span className="text-lg font-semibold tracking-[-0.02em] text-[#0F1B2D] [word-break:keep-all]">
                    {p.name[lang]}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
