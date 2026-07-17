'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { milestones, kindLabel } from '@/data/milestones';

type Lang = 'ko' | 'en' | 'th';

// 과거 → 최신. 왼쪽에서 오른쪽으로 드래그하면 시간이 흐르는 방향과 일치한다.
const items = [...milestones].reverse();
const LAST = items.length - 1;

const copy = {
  hint: {
    ko: '드래그해서 연혁을 넘겨보세요',
    en: 'Drag to move through the years',
    th: 'ลากเพื่อเลื่อนดูแต่ละปี',
  },
  label: {
    ko: '연혁 타임라인',
    en: 'Company history timeline',
    th: 'ไทม์ไลน์ประวัติบริษัท',
  },
} satisfies Record<string, Record<Lang, string>>;

export default function HistoryScrubber({ lang }: { lang: Lang }) {
  const [index, setIndex] = useState(LAST);
  const [dragging, setDragging] = useState(false);
  const [hinted, setHinted] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);

  // 레일 위 x좌표 → 가장 가까운 연도. 드래그·클릭 모두 이 경로를 쓴다.
  const indexFromClientX = useCallback((clientX: number) => {
    const rail = railRef.current;
    if (!rail) return null;
    const { left, width } = rail.getBoundingClientRect();
    if (width === 0) return null;
    const ratio = Math.min(1, Math.max(0, (clientX - left) / width));
    return Math.round(ratio * LAST);
  }, []);

  const scrubTo = useCallback(
    (clientX: number) => {
      const next = indexFromClientX(clientX);
      if (next !== null) setIndex(next);
    },
    [indexFromClientX],
  );

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => {
      e.preventDefault();
      scrubTo(e.clientX);
    };
    const onUp = () => setDragging(false);
    // 포인터가 레일 밖으로 나가도 드래그가 유지되도록 window에 건다.
    window.addEventListener('pointermove', onMove, { passive: false });
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
    };
  }, [dragging, scrubTo]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const map: Record<string, number> = {
      ArrowLeft: index - 1,
      ArrowDown: index - 1,
      ArrowRight: index + 1,
      ArrowUp: index + 1,
      Home: 0,
      End: LAST,
    };
    const next = map[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setIndex(Math.min(LAST, Math.max(0, next)));
    setHinted(true);
  };

  const active = items[index];
  const pct = (index / LAST) * 100;

  return (
    <div className="select-none">
      {/* 선택된 연도 */}
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[auto_1fr] md:gap-12">
        <div
          key={active.year}
          className="text-[64px] font-medium leading-none tracking-[-0.04em] text-[#0F1B2D] tabular-nums md:text-[104px] motion-safe:animate-[fadeIn_.25s_ease-out]"
        >
          {active.year}
        </div>
        <div className="md:pt-4">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#4A9BD9]">
            {kindLabel[active.kind][lang]}
          </span>
          <p
            key={`${active.year}-e`}
            className="mt-3 text-xl font-semibold leading-snug tracking-[-0.02em] text-[#0F1B2D] [word-break:keep-all] md:text-2xl motion-safe:animate-[fadeIn_.25s_ease-out]"
          >
            {active.event[lang]}
          </p>
          {active.detail && (
            <p className="mt-3 max-w-xl leading-relaxed text-[#424242] [word-break:keep-all]">
              {active.detail[lang]}
            </p>
          )}
        </div>
      </div>

      {/* 레일 */}
      <div className="mt-12 md:mt-16">
        <div
          ref={railRef}
          role="slider"
          tabIndex={0}
          aria-label={copy.label[lang]}
          aria-valuemin={Number(items[0].year)}
          aria-valuemax={Number(items[LAST].year)}
          aria-valuenow={Number(active.year)}
          aria-valuetext={`${active.year} — ${active.event[lang]}`}
          onKeyDown={onKeyDown}
          onPointerDown={(e) => {
            e.preventDefault();
            setDragging(true);
            setHinted(true);
            scrubTo(e.clientX);
          }}
          className={`relative h-16 touch-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4A9BD9] ${
            dragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          {/* 트랙 */}
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-neutral-300" />
          {/* 지나온 구간 */}
          <div
            className="absolute top-1/2 left-0 h-px -translate-y-1/2 bg-[#0F1B2D] transition-[width] duration-150 ease-out"
            style={{ width: `${pct}%` }}
          />
          {/* 눈금 */}
          {items.map((m, i) => {
            const isActive = i === index;
            const isPast = i < index;
            return (
              <button
                key={m.year}
                type="button"
                tabIndex={-1}
                aria-hidden="true"
                onClick={() => {
                  setIndex(i);
                  setHinted(true);
                }}
                style={{ left: `${(i / LAST) * 100}%` }}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 p-3"
              >
                <span
                  className={`block w-px transition-all duration-150 ${
                    isActive
                      ? 'h-6 bg-[#4A9BD9]'
                      : isPast
                        ? 'h-3 bg-[#0F1B2D]'
                        : 'h-3 bg-neutral-300'
                  }`}
                />
              </button>
            );
          })}
          {/* 핸들 */}
          <div
            className="pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-[left] duration-150 ease-out"
            style={{ left: `${pct}%` }}
          >
            <span
              className={`block size-4 rounded-full bg-[#4A9BD9] ring-4 ring-white transition-transform duration-150 ${
                dragging ? 'scale-125' : ''
              }`}
            />
          </div>
        </div>

        {/* 양끝 연도 + 힌트 */}
        <div className="mt-2 flex items-center justify-between text-xs tabular-nums text-neutral-500">
          <span>{items[0].year}</span>
          <span
            className={`transition-opacity duration-300 ${hinted ? 'opacity-0' : 'opacity-100'}`}
            aria-hidden="true"
          >
            {copy.hint[lang]}
          </span>
          <span>{items[LAST].year}</span>
        </div>
      </div>

      {/* 스크립트 비활성 환경과 스크린리더용 전체 목록 */}
      <ol className="sr-only">
        {items.map((m) => (
          <li key={m.year}>
            {m.year} — {m.event[lang]}
          </li>
        ))}
      </ol>
    </div>
  );
}
