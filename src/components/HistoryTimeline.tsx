'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '@/components/Container';
import { milestones, kindLabel } from '@/data/milestones';

type Lang = 'ko' | 'en' | 'th';

// 최신 → 과거 (역순). milestones는 이미 최신순이라 그대로 쓴다.
const items = milestones;
const LAST = items.length - 1;

// 연도당 스크롤 거리(px). vh가 아니라 px로 두어 화면 크기와 무관하게 일정하다.
const PX_PER_ITEM = 460;

// 카테고리별 색 — 칩·활성 점·아웃라인 연도에 쓴다.
const kindColor: Record<string, string> = {
  supply: '#3B82C4', // 납품
  certification: '#C0883E', // 인증·수상
  corporate: '#64748B', // 경영
  product: '#0E9F8E', // 제품
};

export default function HistoryTimeline({ lang }: { lang: Lang }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  // 섹션을 고정(sticky)한 채 스크롤 진행도로 활성 연도만 바꾼다.
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

  const scrollToIndex = (i: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    if (total <= 0) return;
    const top = window.scrollY + el.getBoundingClientRect().top + ((i + 0.5) / items.length) * total;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const a = items[active];
  const color = kindColor[a.kind] ?? '#4A9BD9';

  return (
    <section
      ref={sectionRef}
      aria-label="연혁"
      style={{ height: `calc(100vh + ${items.length * PX_PER_ITEM}px)` }}
      className="relative bg-white"
    >
      <div className="sticky top-20 flex h-[calc(100vh-5rem)] flex-col justify-center overflow-hidden">
        {/* 카테고리 색과 함께 바뀌는 부드러운 배경 글로우 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-120px] top-1/2 z-0 h-[540px] w-[540px] -translate-y-1/2 rounded-full blur-[130px] transition-colors duration-500"
          style={{ backgroundColor: color, opacity: 0.1 }}
        />
        <Container className="relative z-10 w-full">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[110px_minmax(0,1fr)] md:items-center md:gap-16">
            {/* 좌: 연도 레일 — 전체 범위·현재 위치·진행도. 클릭 시 점프 */}
            <ol className="relative hidden md:block">
              <div className="absolute left-[3.5px] top-2 bottom-2 w-px bg-neutral-200">
                <div
                  className="w-px bg-[#4A9BD9] transition-[height] duration-200 ease-out"
                  style={{ height: `${(active / LAST) * 100}%` }}
                />
              </div>
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
                        className="relative z-10 block size-2 rounded-full transition-all duration-200"
                        style={{
                          backgroundColor: on ? color : undefined,
                          transform: on ? 'scale(1.3)' : undefined,
                        }}
                      >
                        {!on && <span className="block size-2 rounded-full bg-neutral-300 group-hover:bg-neutral-400" />}
                      </span>
                      <span
                        className={`text-sm tabular-nums transition-colors duration-200 ${
                          on ? 'font-semibold text-[#0F1B2D]' : 'text-neutral-400 group-hover:text-neutral-600'
                        }`}
                      >
                        {m.year}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            {/* 우: 고정 높이 박스 — 연도가 최상단에 고정되어 글자수와 무관하게 위치가 그대로 */}
            <div className="relative flex h-[320px] flex-col">
              {/* 실제 내용 — 연도가 바뀔 때마다 아래에서 떠오르는 리빌 효과 */}
              <div
                key={a.year}
                className="relative z-10 flex h-full flex-col motion-safe:animate-[timelineReveal_.36s_ease-out]"
              >
                <div>
                  <span
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]"
                    style={{ color }}
                  >
                    <span className="size-1.5 rounded-full" style={{ backgroundColor: color }} />
                    {kindLabel[a.kind][lang]}
                  </span>

                  <div className="mt-3 text-[64px] font-medium leading-none tracking-[-0.04em] text-[#0F1B2D] tabular-nums md:text-[100px] lg:text-[120px]">
                    {a.year}
                  </div>

                  <p className="mt-5 text-xl font-semibold leading-snug tracking-[-0.02em] text-[#0F1B2D] [word-break:keep-all] md:text-2xl">
                    {a.event[lang]}
                  </p>
                  {a.detail && (
                    <p className="mt-3 max-w-lg leading-relaxed text-[#5A6572] [word-break:keep-all] md:text-lg">
                      {a.detail[lang]}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* 모바일: 레일 대신 가로 진행 막대 */}
            <div className="flex items-center gap-3 text-xs tabular-nums text-neutral-400 md:hidden">
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
