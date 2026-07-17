'use client';

import { useEffect, useRef, useState } from 'react';
import { milestones, kindLabel } from '@/data/milestones';

type Lang = 'ko' | 'en' | 'th';

// 과거 → 최신. 스크롤을 내리면 시간이 흐르는 방향과 일치한다.
const items = [...milestones].reverse();

export default function HistoryTimeline({ lang }: { lang: Lang }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  // 뷰포트 중앙에 가장 가까운 항목을 활성으로 잡는다 — 스크롤에 연속으로 바인딩된다.
  useEffect(() => {
    let raf = 0;
    const compute = () => {
      const mid = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      refs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive(best);
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

  const activeItem = items[active];

  return (
    <div className="grid gap-10 md:grid-cols-[260px_1fr] md:gap-16 lg:grid-cols-[320px_1fr]">
      {/* 왼쪽: 스크롤에 따라 바뀌는 스티키 연도 (md+) */}
      <div className="hidden md:block">
        <div className="sticky top-28">
          <div className="mb-5 h-0.5 w-12 bg-[#4A9BD9]" />
          <div
            key={activeItem.year}
            className="text-[88px] font-medium leading-none tracking-[-0.04em] text-[#0F1B2D] tabular-nums lg:text-[112px] motion-safe:animate-[fadeIn_.3s_ease-out]"
          >
            {activeItem.year}
          </div>
          <span
            key={`${activeItem.year}-k`}
            className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-[#4A9BD9] motion-safe:animate-[fadeIn_.3s_ease-out]"
          >
            {kindLabel[activeItem.kind][lang]}
          </span>
          <div className="mt-6 text-xs tabular-nums text-neutral-400">
            {items[0].year}–{items[items.length - 1].year}
          </div>
        </div>
      </div>

      {/* 오른쪽: 스크롤되는 항목들 — 활성 항목만 또렷하게 */}
      <ol className="relative border-l border-neutral-200">
        {items.map((m, i) => {
          const on = i === active;
          return (
            <li
              key={m.year}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="relative pb-14 pl-8 last:pb-0 md:min-h-[30vh] md:pl-10"
            >
              <span
                className={`absolute left-0 top-2 size-3 -translate-x-1/2 rounded-full ring-4 ring-white transition-colors duration-300 ${
                  on ? 'bg-[#4A9BD9]' : 'bg-neutral-300'
                }`}
              />
              <div
                className={`text-sm font-semibold tabular-nums transition-colors duration-300 md:text-xs md:uppercase md:tracking-[0.12em] ${
                  on ? 'text-[#4A9BD9]' : 'text-neutral-400'
                }`}
              >
                {m.year}
                <span className="hidden md:inline"> · {kindLabel[m.kind][lang]}</span>
              </div>
              <p
                className={`mt-2 text-lg font-semibold leading-snug tracking-[-0.02em] [word-break:keep-all] transition-colors duration-300 md:text-xl ${
                  on ? 'text-[#0F1B2D]' : 'text-[#0F1B2D]/45'
                }`}
              >
                {m.event[lang]}
              </p>
              {m.detail && (
                <p
                  className={`mt-2 max-w-xl leading-relaxed [word-break:keep-all] transition-colors duration-300 ${
                    on ? 'text-[#424242]' : 'text-neutral-400'
                  }`}
                >
                  {m.detail[lang]}
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
