export type MilestoneKind = 'supply' | 'certification' | 'corporate' | 'product';

type L10n = { ko: string; en: string; th: string };

export interface Milestone {
  year: string;
  kind: MilestoneKind;
  event: L10n;
  /** 한 줄 부연. 연도를 선택했을 때만 노출된다. */
  detail?: L10n;
}

/** 최신 → 과거 순. 드래그 타임라인은 이 배열을 역순(과거→최신)으로 훑는다. */
export const milestones: Milestone[] = [
  {
    year: '2023',
    kind: 'supply',
    event: {
      ko: '서울대병원, 국립암센터 납품',
      en: 'Supplied Seoul National University Hospital, National Cancer Center',
      th: 'จัดส่งให้โรงพยาบาลมหาวิทยาลัยแห่งชาติโซลและศูนย์มะเร็งแห่งชาติ',
    },
    detail: {
      ko: '수술실·무균실 등 의료 현장의 요구 청정도를 충족하는 HEPA 공급.',
      en: 'HEPA supply meeting the cleanliness requirements of operating theatres and sterile wards.',
      th: 'จัดหา HEPA ที่ตรงตามข้อกำหนดความสะอาดของห้องผ่าตัดและห้องปลอดเชื้อ',
    },
  },
  {
    year: '2020',
    kind: 'corporate',
    event: {
      ko: '신공장 이전 (용수길 197)',
      en: 'Relocated to new facility',
      th: 'ย้ายไปโรงงานใหม่',
    },
    detail: {
      ko: '경기도 광주시 초월읍 용수길 197. 생산 능력 확대.',
      en: '197 Yongsu-gil, Chowol-eup, Gwangju-si, Gyeonggi-do. Expanded production capacity.',
      th: '197 ยงซูกิล โชวอลอึบ ควังจูซี คยองกีโด ขยายกำลังการผลิต',
    },
  },
  {
    year: '2018',
    kind: 'supply',
    event: {
      ko: '삼성중공업 FLNG 필터 납품',
      en: 'Samsung Heavy Industries FLNG filters',
      th: 'จัดส่งฟิลเตอร์ FLNG ให้ Samsung Heavy Industries',
    },
    detail: {
      ko: '해상 부유식 LNG 생산설비 — 염분·진동·좁은 설치 공간을 견디는 사양.',
      en: 'Floating LNG production — specified to withstand salt, vibration and tight installation envelopes.',
      th: 'การผลิต LNG แบบลอยน้ำ — ออกแบบให้ทนเกลือ การสั่นสะเทือน และพื้นที่ติดตั้งจำกัด',
    },
  },
  {
    year: '2016',
    kind: 'certification',
    event: {
      ko: '녹색경영대상 수상',
      en: 'Green Management Awards',
      th: 'รางวัลการจัดการสีเขียว',
    },
  },
  {
    year: '2015',
    kind: 'certification',
    event: { ko: 'UL 인증 취득', en: 'UL certification', th: 'ได้รับการรับรอง UL' },
    detail: {
      ko: '북미 수출을 위한 화재안전 인증.',
      en: 'Fire-safety certification for North American export.',
      th: 'การรับรองความปลอดภัยด้านอัคคีภัยสำหรับการส่งออกไปอเมริกาเหนือ',
    },
  },
  {
    year: '2005',
    kind: 'certification',
    event: {
      ko: 'ISO 9001, 14001 인증 취득',
      en: 'ISO 9001, 14001 certification',
      th: 'ได้รับการรับรอง ISO 9001, 14001',
    },
  },
  {
    year: '2004',
    kind: 'corporate',
    event: {
      ko: '크린테크코리아(주) 법인 전환',
      en: 'Transitioned to Clean Tech Korea Co., Ltd',
      th: 'เปลี่ยนเป็นบริษัท คลีนเทค โคเรีย จำกัด',
    },
  },
  {
    year: '2001',
    kind: 'corporate',
    event: {
      ko: '유망기업 지정, 홍콩 필트레이션 파트너십',
      en: 'Designated promising enterprise, Hong Kong Filtration partnership',
      th: 'ได้รับการกำหนดให้เป็นองค์กรที่มีอนาคต ความร่วมมือกับ Hong Kong Filtration',
    },
  },
  {
    year: '1996',
    kind: 'supply',
    event: {
      ko: '현대전자 오토롤 필터 납품',
      en: 'Auto roll filters to Hyundai Electronics',
      th: 'จัดส่งฟิลเตอร์ออโตโรลให้ Hyundai Electronics',
    },
  },
  {
    year: '1995',
    kind: 'product',
    event: {
      ko: 'HEPA·ULPA 필터 생산, 삼성전자 납품',
      en: 'HEPA/ULPA production started, supplied Samsung Electronics',
      th: 'เริ่มผลิต HEPA/ULPA จัดส่งให้ Samsung Electronics',
    },
    detail: {
      ko: '설립 2년 만에 반도체 클린룸용 최고 등급 라인업으로 진입.',
      en: 'Entered the top cleanroom grade lineup within two years of founding.',
      th: 'เข้าสู่ไลน์อัพเกรดสูงสุดสำหรับห้องสะอาดภายในสองปีหลังก่อตั้ง',
    },
  },
  {
    year: '1993',
    kind: 'corporate',
    event: {
      ko: '설립, 프리·미디엄 필터 생산 시작',
      en: 'Founded, began producing pre and medium filters',
      th: 'ก่อตั้ง เริ่มผลิตฟิลเตอร์ชนิดพรีและมีเดียม',
    },
  },
];

export const kindLabel: Record<MilestoneKind, L10n> = {
  supply: { ko: '납품', en: 'Supply', th: 'การจัดส่ง' },
  certification: { ko: '인증·수상', en: 'Certification', th: 'การรับรอง' },
  corporate: { ko: '경영', en: 'Corporate', th: 'องค์กร' },
  product: { ko: '제품', en: 'Product', th: 'ผลิตภัณฑ์' },
};
