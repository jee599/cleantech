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
  /** 편익 한 줄 — 이 산업에서 여과가 지키는 것. 짧게. */
  lead: L10n;
  /** 현장의 오염원·위험과 대응을 사실 그대로. 극적 표현·과장 금지. */
  caption: L10n;
  /** 하위 분야. 아이콘 대신 용어의 구체성으로 분류를 표현한다. */
  tags: { ko: string[]; en: string[]; th: string[] };
}

export const industries: Industry[] = [
  {
    key: 'semiconductor',
    image: '/images/industries/semiconductor.webp',
    name: { ko: '반도체', en: 'Semiconductor', th: 'เซมิคอนดักเตอร์' },
    lead: {
      ko: '수율을 지키는 초청정 관리',
      en: 'Cleanliness that protects yield',
      th: 'ความสะอาดที่ปกป้องผลผลิต',
    },
    caption: {
      ko: '웨이퍼 공정은 0.1㎛ 이하 입자와 분자 오염(AMC)에 민감합니다. 프리필터부터 헤파·울파, 케미컬 필터까지 단계별로 구성해 팹이 요구하는 청정도를 맞춥니다.',
      en: 'Wafer processes are sensitive to sub-0.1㎛ particles and airborne molecular contamination (AMC). We stage pre-filters, HEPA/ULPA, and chemical filters to meet the cleanliness your fab requires.',
      th: 'กระบวนการผลิตเวเฟอร์ไวต่ออนุภาคต่ำกว่า 0.1 ไมครอนและการปนเปื้อนระดับโมเลกุล (AMC) เราจัดวางพรีฟิลเตอร์ HEPA/ULPA และเคมิคอลฟิลเตอร์เป็นขั้น เพื่อให้ได้ความสะอาดตามที่โรงงานต้องการ',
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
    lead: {
      ko: '가동을 지키는 무균 환경',
      en: 'Sterile air that protects uptime',
      th: 'อากาศปลอดเชื้อที่ปกป้องการทำงาน',
    },
    caption: {
      ko: 'GMP 클린룸과 무균 충전 라인은 입자와 미생물을 상시 통제해야 합니다. 헤파 여과와 교체 주기 관리로 라인 중단과 오염 위험을 줄입니다.',
      en: 'GMP cleanrooms and aseptic filling lines must control particles and microbes at all times. HEPA filtration with managed replacement cycles reduces line stoppages and contamination risk.',
      th: 'ห้องสะอาด GMP และสายการบรรจุปลอดเชื้อต้องควบคุมอนุภาคและจุลินทรีย์ตลอดเวลา การกรอง HEPA พร้อมการจัดการรอบเปลี่ยนช่วยลดการหยุดสายการผลิตและความเสี่ยงปนเปื้อน',
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
    lead: {
      ko: '감염 관리를 위한 청정 공기',
      en: 'Clean air for infection control',
      th: 'อากาศสะอาดเพื่อการควบคุมการติดเชื้อ',
    },
    caption: {
      ko: '수술실·음압병실·무균실은 공기 중 미생물과 입자 통제가 핵심입니다. 병원 공조 기준에 맞춰 헤파 여과와 실별 압력·청정도를 설계합니다.',
      en: 'Operating theatres, negative-pressure rooms, and isolation wards depend on controlling airborne microbes and particles. We design HEPA filtration and room-by-room pressure and cleanliness to hospital HVAC standards.',
      th: 'ห้องผ่าตัด ห้องความดันลบ และห้องปลอดเชื้อขึ้นอยู่กับการควบคุมจุลินทรีย์และอนุภาคในอากาศ เราออกแบบการกรอง HEPA และความดัน/ความสะอาดของแต่ละห้องตามมาตรฐานระบบปรับอากาศของโรงพยาบาล',
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
    lead: {
      ko: '불량률을 낮추는 공기 관리',
      en: 'Air control that lowers defect rates',
      th: 'การจัดการอากาศที่ลดอัตราของเสีย',
    },
    caption: {
      ko: 'SMT·광학·데이터센터 공정은 미세 먼지와 부식성 가스에 취약합니다. 프리필터와 헤파, 케미컬 필터를 조합해 불량과 장비 손상을 줄입니다.',
      en: 'SMT, optics, and data-center processes are vulnerable to fine dust and corrosive gases. Combining pre-filters, HEPA, and chemical filters reduces defects and equipment damage.',
      th: 'กระบวนการ SMT ออปติกส์ และดาตาเซ็นเตอร์ไวต่อฝุ่นละเอียดและก๊าซกัดกร่อน การผสานพรีฟิลเตอร์ HEPA และเคมิคอลฟิลเตอร์ช่วยลดของเสียและความเสียหายของอุปกรณ์',
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
    lead: {
      ko: '가혹 환경을 견디는 내구성',
      en: 'Durability for harsh environments',
      th: 'ความทนทานสำหรับสภาพแวดล้อมที่รุนแรง',
    },
    caption: {
      ko: '기관실과 도장 부스는 고온·유분·분진이 심한 환경입니다. 내열·고내구 미디어로 교체 주기를 늘리고 설비를 보호합니다.',
      en: 'Engine rooms and paint booths run hot, oily, and dust-heavy. Heat-resistant, high-durability media extend replacement intervals and protect equipment.',
      th: 'ห้องเครื่องและห้องพ่นสีมีความร้อน น้ำมัน และฝุ่นสูง มีเดียทนความร้อนและทนทานสูงช่วยยืดรอบการเปลี่ยนและปกป้องอุปกรณ์',
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
    lead: {
      ko: '에너지를 아끼는 공조 관리',
      en: 'HVAC that saves energy',
      th: 'ระบบปรับอากาศที่ประหยัดพลังงาน',
    },
    caption: {
      ko: '필터가 막히면 차압이 오르고 송풍 동력과 전기요금이 함께 늘어납니다. 차압을 기준으로 관리하고 등급에 맞춰 교체해 에너지 손실을 줄입니다.',
      en: 'As filters clog, pressure drop rises and fan energy and power bills climb with it. Managing by pressure drop and replacing at the right grade cuts energy loss.',
      th: 'เมื่อฟิลเตอร์อุดตัน ความดันตกคร่อมจะสูงขึ้นพร้อมกับพลังงานพัดลมและค่าไฟ การจัดการตามความดันตกคร่อมและเปลี่ยนตามเกรดที่เหมาะสมช่วยลดการสูญเสียพลังงาน',
    },
    tags: {
      ko: ['AHU 공조기', '오피스', '호텔', '지하철'],
      en: ['AHU', 'Office', 'Hotel', 'Transit'],
      th: ['AHU', 'สำนักงาน', 'โรงแรม', 'ระบบขนส่ง'],
    },
  },
];
