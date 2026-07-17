type L10n = { ko: string; en: string; th: string };

export interface Partner {
  id: string;
  name: L10n;
  /** 납품/제휴 연도 — 전부 회사 연혁(src/data/milestones.ts)에 근거한다. 근거 없는 이름은 넣지 않는다. */
  since: string;
  /**
   * 로고 파일 경로. 지정하면 워드마크 대신 이미지가 렌더된다.
   * `public/images/partners/`에 파일을 넣고 이 필드만 채우면 된다.
   * 타사 로고는 상표권이 있어 사용 전 각 사 브랜드 가이드·사용 허락 확인이 필요하다.
   */
  logo?: string;
}

export const partners: Partner[] = [
  {
    id: 'samsung-electronics',
    name: { ko: '삼성전자', en: 'Samsung Electronics', th: 'Samsung Electronics' },
    since: '1995',
  },
  {
    id: 'hyundai-electronics',
    name: { ko: '현대전자', en: 'Hyundai Electronics', th: 'Hyundai Electronics' },
    since: '1996',
  },
  {
    id: 'hongkong-filtration',
    name: { ko: '홍콩 필트레이션', en: 'Hong Kong Filtration', th: 'Hong Kong Filtration' },
    since: '2001',
  },
  {
    id: 'samsung-heavy',
    name: { ko: '삼성중공업', en: 'Samsung Heavy Industries', th: 'Samsung Heavy Industries' },
    since: '2018',
  },
  {
    id: 'snuh',
    name: {
      ko: '서울대학교병원',
      en: 'Seoul National University Hospital',
      th: 'Seoul National University Hospital',
    },
    since: '2023',
  },
  {
    id: 'ncc',
    name: { ko: '국립암센터', en: 'National Cancer Center', th: 'National Cancer Center' },
    since: '2023',
  },
];
