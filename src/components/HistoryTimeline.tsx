'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import { milestones, kindLabel } from '@/data/milestones';
import { partners } from '@/data/partners';

type Lang = 'ko' | 'en' | 'th';

// 최신 → 과거 (역순). milestones는 이미 최신순이라 그대로 쓴다.
const items = milestones;
const LAST = items.length - 1;

// 연도별 협업사 — 해당 연도의 로고/이름을 타임라인에 함께 노출한다.
const partnersByYear = partners.reduce<Record<string, typeof partners>>((acc, p) => {
  (acc[p.since] ||= []).push(p);
  return acc;
}, {});

export default function HistoryTimeline({ lang }: { lang: Lang }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  // 섹션을 화면에 고정(sticky)한 채, 스크롤 진행도로 활성 연도만 바꾼다.
  useEffect(() => {
    let raf = 0;
    const compute = () => {
      const el = sectionRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total);
      setActive(Math.min(LAST, Math.floor((scrolled / total) * items.length)));
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        compute();
      });
    };
    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // 레일에서 특정 연도 클릭 → 해당 구간으로 스크롤 점프.
  const scrollToIndex = (i: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    if (total <= 0) return;
    const top = window.scrollY + el.getBoundingClientRect().top + ((i + 0.5) / items.length) * total;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const a = items[active];
  const yearPartners = partnersByYear[a.year];

  return (
    <section
      ref={sectionRef}
      aria-label="연혁"
      style={{ height: `${items.length * 45}vh` }}
      className="relative bg-white"
    >
      <div className="sticky top-20 flex h-[calc(100vh-5rem)] items-center overflow-hidden">
        <Container>
          <div className="grid gap-8 md:grid-cols-[92px_minmax(0,1fr)] md:items-center md:gap-12 lg:grid-cols-[104px_minmax(0,1fr)]">
            {/* 좌: 연도 레일 — 전체 범위에서 현재 위치를 보여주고, 클릭하면 점프 */}
            <ol className="relative hidden md:block">
              <span className="absolute bottom-2 left-[3.5px] top-2 w-px bg-neutral-200" />
              {items.map((m, i) => {
                const on = i === active;
                return (
                  <li key={m.year}>
                    <button
                      type="button"
                      onClick={() => scrollToIndex(i)}
                      aria-label={`${m.year} — ${m.event[lang]}`}
                      className="group flex items-center gap-3 py-[7px]"
                    >
                      <span
                        className={`relative z-10 block size-2 rounded-full transition-all duration-200 ${
                          on
                            ? 'scale-125 bg-[#4A9BD9]'
                            : 'bg-neutral-300 group-hover:bg-neutral-400'
                        }`}
                      />
                      <span
                        className={`text-sm tabular-nums transition-colors duration-200 ${
                          on
                            ? 'font-semibold text-[#0F1B2D]'
                            : 'text-neutral-400 group-hover:text-neutral-600'
                        }`}
                      >
                        {m.year}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            {/* 우: 큰 연도 + 내용 + 그 해 협업 로고 */}
            <div>
              <div className="mb-4 h-0.5 w-12 bg-[#4A9BD9]" />
              <div className="flex items-baseline gap-4">
                <span className="text-[64px] font-medium leading-none tracking-[-0.04em] text-[#0F1B2D] tabular-nums md:text-[96px] lg:text-[116px]">
                  {a.year}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#4A9BD9]">
                  {kindLabel[a.kind][lang]}
                </span>
              </div>

              <p className="mt-5 text-2xl font-semibold leading-snug tracking-[-0.02em] text-[#0F1B2D] [word-break:keep-all] md:text-3xl">
                {a.event[lang]}
              </p>
              {a.detail && (
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#424242] [word-break:keep-all] md:text-lg">
                  {a.detail[lang]}
                </p>
              )}

              {yearPartners && (
                <div className="mt-8 border-t border-neutral-200 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-400">
                    {lang === 'ko' ? '이 해 함께한 곳' : lang === 'th' ? 'พันธมิตรในปีนี้' : 'Partners this year'}
                  </span>
                  <div className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-4">
                    {yearPartners.map((p) => (
                      <div key={p.id} className="flex h-9 items-center">
                        {p.logo ? (
                          <Image
                            src={p.logo}
                            alt={p.name[lang]}
                            width={180}
                            height={36}
                            className="max-h-8 w-auto object-contain"
                          />
                        ) : (
                          <span className="text-lg font-semibold tracking-[-0.02em] text-[#0F1B2D] [word-break:keep-all]">
                            {p.name[lang]}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 모바일: 레일 대신 가로 진행 막대 */}
              <div className="mt-8 flex items-center gap-3 text-xs tabular-nums text-neutral-400 md:hidden">
                <span>{items[0].year}</span>
                <span className="relative h-px flex-1 overflow-hidden bg-neutral-200">
                  <span
                    className="absolute inset-y-0 left-0 bg-[#4A9BD9] transition-[width] duration-200 ease-out"
                    style={{ width: `${(active / LAST) * 100}%` }}
                  />
                </span>
                <span>{items[LAST].year}</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* 스크립트 비활성·스크린리더용 전체 목록 */}
      <ol className="sr-only">
        {items.map((m) => (
          <li key={m.year}>
            {m.year} — {m.event[lang]}
          </li>
        ))}
      </ol>
    </section>
  );
}
