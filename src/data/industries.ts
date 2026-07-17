export type IndustryKey =
  | 'semiconductor'
  | 'pharmaceutical'
  | 'hospital'
  | 'electronics'
  | 'shipbuilding'
  | 'commercial';

type L10n = { ko: string; en: string; th: string };

export interface Industry {
  key: IndustryKey;
  image: string;
  name: L10n;
  /** 고객이 처한 순간 — 필터 스펙이 아니라 현장 언어로. */
  caption: L10n;
  /** 하위 분야. 아이콘 대신 용어의 구체성으로 분류를 표현한다. */
  tags: { ko: string[]; en: string[]; th: string[] };
}

export const industries: Industry[] = [
  {
    key: 'semiconductor',
    image: '/images/industries/semiconductor.webp',
    name: { ko: '반도체', en: 'Semiconductor', th: 'เซมิคอนดักเตอร์' },
    caption: {
      ko: '웨이퍼 한 장에 내려앉은 0.1㎛ 입자 하나가 수율을 무너뜨립니다.',
      en: 'A single 0.1㎛ particle landing on a wafer is enough to break your yield.',
      th: 'อนุภาคขนาด 0.1 ไมครอนเพียงหนึ่งอนุภาคบนเวเฟอร์ก็ทำให้ผลผลิตเสียหายได้',
    },
    tags: {
      ko: ['웨이퍼 팹', 'FPD·OLED', '포토리소그래피', 'FFU'],
      en: ['Wafer fab', 'FPD·OLED', 'Photolithography', 'FFU'],
      th: ['โรงงานเวเฟอร์', 'FPD·OLED', 'โฟโตลิโทกราฟี', 'FFU'],
    },
  },
  {
    key: 'pharmaceutical',
    image: '/images/industries/pharmaceutical.webp',
    name: { ko: '제약', en: 'Pharmaceutical', th: 'เภสัชกรรม' },
    caption: {
      ko: '무균 충전 라인은 멈추는 순간이 곧 손실입니다. 필터가 그 시간을 지킵니다.',
      en: 'On an aseptic filling line, downtime is loss. Filtration protects that uptime.',
      th: 'สายการบรรจุปลอดเชื้อ ทุกนาทีที่หยุดคือความสูญเสีย ฟิลเตอร์คือสิ่งที่ปกป้องเวลานั้น',
    },
    tags: {
      ko: ['GMP 클린룸', '무균 충전', '원료의약품', '바이오'],
      en: ['GMP cleanroom', 'Aseptic filling', 'API', 'Biologics'],
      th: ['ห้องสะอาด GMP', 'การบรรจุปลอดเชื้อ', 'API', 'ชีววัตถุ'],
    },
  },
  {
    key: 'hospital',
    image: '/images/industries/hospital.webp',
    name: { ko: '병원', en: 'Hospital', th: 'โรงพยาบาล' },
    caption: {
      ko: '집도의가 메스를 드는 순간, 수술실 공기는 이미 검증되어 있어야 합니다.',
      en: 'By the time the surgeon lifts the scalpel, the air is already accounted for.',
      th: 'เมื่อศัลยแพทย์จับมีดผ่าตัด อากาศในห้องผ่าตัดต้องผ่านการตรวจสอบแล้ว',
    },
    tags: {
      ko: ['수술실', '음압병실', '무균실', 'ICU'],
      en: ['Operating theatre', 'Negative pressure', 'Isolation', 'ICU'],
      th: ['ห้องผ่าตัด', 'ห้องความดันลบ', 'ห้องปลอดเชื้อ', 'ICU'],
    },
  },
  {
    key: 'electronics',
    image: '/images/industries/electronics.webp',
    name: { ko: '전자', en: 'Electronics', th: 'อิเล็กทรอนิกส์' },
    caption: {
      ko: 'SMT 라인의 미세 먼지는 불량률로 되돌아옵니다. 공기부터 관리해야 합니다.',
      en: 'Dust on an SMT line comes back as defect rate. It starts with the air.',
      th: 'ฝุ่นบนสายการผลิต SMT จะย้อนกลับมาเป็นอัตราของเสีย ต้องเริ่มจากอากาศ',
    },
    tags: {
      ko: ['SMT 라인', '데이터센터', 'HDD', '광학'],
      en: ['SMT line', 'Data center', 'HDD', 'Optics'],
      th: ['สายการผลิต SMT', 'ดาตาเซ็นเตอร์', 'HDD', 'ออปติกส์'],
    },
  },
  {
    key: 'shipbuilding',
    image: '/images/industries/shipbuilding.webp',
    name: { ko: '조선', en: 'Shipbuilding', th: 'ต่อเรือ' },
    caption: {
      ko: '기관실과 도장 부스는 조건이 가혹합니다. 필터도 그만큼 견뎌야 합니다.',
      en: 'Engine rooms and paint booths are harsh. The filter has to hold up to them.',
      th: 'ห้องเครื่องและห้องพ่นสีมีสภาพที่รุนแรง ฟิลเตอร์ต้องทนทานเช่นกัน',
    },
    tags: {
      ko: ['기관실', '도장 부스', '해양 플랜트', '내열'],
      en: ['Engine room', 'Paint booth', 'Offshore', 'High-temp'],
      th: ['ห้องเครื่อง', 'ห้องพ่นสี', 'นอกชายฝั่ง', 'ทนความร้อน'],
    },
  },
  {
    key: 'commercial',
    image: '/images/industries/commercial.webp',
    name: { ko: '상업 빌딩', en: 'Commercial', th: 'อาคารพาณิชย์' },
    caption: {
      ko: '막힌 필터는 전기요금으로 먼저 신호를 보냅니다. 차압이 오르기 전에 바꿉니다.',
      en: 'A clogged filter shows up on the power bill first. Replace it before Δp climbs.',
      th: 'ฟิลเตอร์ที่อุดตันจะแสดงผลที่ค่าไฟก่อน เปลี่ยนก่อนที่ความดันตกคร่อมจะสูงขึ้น',
    },
    tags: {
      ko: ['AHU 공조기', '오피스', '호텔', '지하철'],
      en: ['AHU', 'Office', 'Hotel', 'Transit'],
      th: ['AHU', 'สำนักงาน', 'โรงแรม', 'ระบบขนส่ง'],
    },
  },
];
