'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '@/components/Container';
import { milestones, kindLabel } from '@/data/milestones';

type Lang = 'ko' | 'en' | 'th';

// 최신 → 과거 (역순). milestones는 이미 최신순이라 그대로 쓴다.
const items = milestones;
const LAST = items.length - 1;

export default function HistoryTimeline({ lang }: { lang: Lang }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  // 섹션을 화면에 고정(sticky)한 채, 스크롤 진행도로 활성 연도만 바꾼다.
  // 항목이 흘러 내려가지 않고 제자리에서 교체된다.
  useEffect(() => {
    let raf = 0;
    const compute = () => {
      const el = sectionRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total);
      const progress = scrolled / total;
      setActive(Math.min(LAST, Math.floor(progress * items.length)));
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

  const a = items[active];

  return (
    <section
      ref={sectionRef}
      aria-label="연혁"
      style={{ height: `${items.length * 45}vh` }}
      className="relative bg-white"
    >
      <div className="sticky top-20 flex h-[calc(100vh-5rem)] items-center overflow-hidden">
        <Container>
          <div className="grid w-full gap-8 md:grid-cols-[minmax(0,360px)_1fr] md:gap-16">
            {/* 왼쪽: 스크롤에 따라 바뀌는 연도 (최신 → 과거) */}
            <div>
              <div className="mb-5 h-0.5 w-12 bg-[#4A9BD9]" />
              <div className="text-[72px] font-medium leading-none tracking-[-0.04em] text-[#0F1B2D] tabular-nums md:text-[112px] lg:text-[140px]">
                {a.year}
              </div>
              <div className="mt-8 flex items-center gap-3 text-xs tabular-nums text-neutral-400">
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

            {/* 오른쪽: 현재 연도의 내용만 제자리에서 교체 */}
            <div className="md:pt-6">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#4A9BD9]">
                {kindLabel[a.kind][lang]}
              </span>
              <p className="mt-3 text-2xl font-semibold leading-snug tracking-[-0.02em] text-[#0F1B2D] [word-break:keep-all] md:text-3xl">
                {a.event[lang]}
              </p>
              {a.detail && (
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#424242] [word-break:keep-all] md:text-lg">
                  {a.detail[lang]}
                </p>
              )}
              <div className="mt-10 text-xs tabular-nums text-neutral-400">
                {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
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
