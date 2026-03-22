export type ProductCategory = 'ulpa' | 'hepa' | 'medium' | 'pre' | 'carbon';

export interface ProductModel {
  modelNumber: string;
  dimensions: string;
  airflow: string;
  pressureLoss: string;
}

export interface Product {
  id: string;
  name: { en: string; ko: string };
  category: ProductCategory;
  description: { en: string; ko: string };
  efficiency: string;
  media: { en: string; ko: string };
  applications: { en: string; ko: string };
  image: string;
  curveImage: string;
  models: ProductModel[];
  maxTemp?: string;
  maxHumidity?: string;
}

export const products: Product[] = [
  // ===== ULPA =====
  {
    id: 'mini-ulpa-filter',
    name: { en: 'MINI ULPA FILTER', ko: 'MINI ULPA FILTER' },
    image: '/images/products/product_1.png',
    curveImage: '/images/curves/curve_1.jpg',
    category: 'ulpa',
    description: {
      en: 'Minipleat type ULPA filter with hot melt spacer and extruded aluminum frame for semiconductor cleanroom applications.',
      ko: '반도체 클린룸용 핫멜트 스페이서와 알루미늄 압출 프레임의 미니플리트 타입 ULPA 필터.'
    },
    efficiency: 'U15(99.9995%) / U16(99.99995%) on 0.1μm',
    media: {
      en: 'Waterproof ultra fine glass fiber',
      ko: '방수 초극세 유리섬유'
    },
    applications: {
      en: 'Semiconductor facilities, precision cleanrooms',
      ko: '반도체 시설, 정밀 클린룸'
    },
    models: [
      { modelNumber: 'MCC-5024', dimensions: '610×610×50', airflow: '7.5 CMM', pressureLoss: '9.5 mmAq' },
      { modelNumber: 'MCC-5036', dimensions: '610×915×50', airflow: '11.3 CMM', pressureLoss: '9.5 mmAq' },
      { modelNumber: 'MCC-5048', dimensions: '610×1219×50', airflow: '15.0 CMM', pressureLoss: '9.5 mmAq' },
      { modelNumber: 'MCC-7524', dimensions: '610×610×75', airflow: '7.8 CMM', pressureLoss: '13.7 mmAq' },
      { modelNumber: 'MCC-7536', dimensions: '610×915×75', airflow: '11.6 CMM', pressureLoss: '13.7 mmAq' },
      { modelNumber: 'MCC-7548', dimensions: '610×1219×75', airflow: '15.5 CMM', pressureLoss: '13.7 mmAq' }
    ]
  },
  {
    id: 'std-capa-ulpa-filter',
    name: { en: 'STD-CAPA ULPA FILTER', ko: 'STD-CAPA ULPA FILTER' },
    image: '/images/products/product_2.png',
    curveImage: '/images/curves/curve_2.jpg',
    category: 'ulpa',
    description: {
      en: 'Standard capacity ULPA filter with self-extinguishing urethane sealant and aluminum frame for super cleanroom environments.',
      ko: '슈퍼 클린룸 환경을 위한 자기소화성 우레탄 실란트 및 알루미늄 프레임의 표준 용량 ULPA 필터.'
    },
    efficiency: 'U15(99.9995%) / U16(99.99995%) on 0.1μm',
    media: {
      en: 'Waterproof ultra fine glass fiber',
      ko: '방수 초극세 유리섬유'
    },
    applications: {
      en: 'Super clean rooms, semiconductor manufacturing',
      ko: '슈퍼 클린룸, 반도체 제조'
    },
    models: [
      { modelNumber: 'CC-300', dimensions: '610×305×150', airflow: '8.5 CMM', pressureLoss: '25.4 mmAq' },
      { modelNumber: 'CC-610', dimensions: '610×610×150', airflow: '17.0 CMM', pressureLoss: '25.4 mmAq' },
      { modelNumber: 'CC-915', dimensions: '610×915×150', airflow: '25.5 CMM', pressureLoss: '25.4 mmAq' },
      { modelNumber: 'C-1270', dimensions: '610×1219×150', airflow: '36.0 CMM', pressureLoss: '28.5 mmAq' }
    ]
  },

  // ===== HEPA =====
  {
    id: 'mini-hepa-filter',
    name: { en: 'MINI HEPA FILTER', ko: 'MINI HEPA FILTER' },
    image: '/images/products/product_3.png',
    curveImage: '/images/curves/curve_3.jpg',
    category: 'hepa',
    description: {
      en: 'Minipleat type HEPA filter with aluminum frame, designed for high-efficiency particulate filtration in critical environments.',
      ko: '정밀 환경의 고효율 미립자 여과를 위한 알루미늄 프레임 미니플리트 타입 HEPA 필터.'
    },
    efficiency: 'H13(99.97%) / H14(99.99%) on 0.3μm',
    media: {
      en: 'Waterproof ultra fine glass fiber',
      ko: '방수 초극세 유리섬유'
    },
    applications: {
      en: 'Hospital operating rooms, pharmaceutical cleanrooms, precision electronics',
      ko: '병원 수술실, 제약 클린룸, 정밀 전자'
    },
    models: [
      { modelNumber: 'MCC-5024', dimensions: '610×610×50', airflow: '7.5 CMM', pressureLoss: '8.0 mmAq' },
      { modelNumber: 'MCC-5036', dimensions: '610×915×50', airflow: '11.3 CMM', pressureLoss: '8.0 mmAq' },
      { modelNumber: 'MCC-5048', dimensions: '610×1219×50', airflow: '15.0 CMM', pressureLoss: '8.0 mmAq' },
      { modelNumber: 'MCC-7524', dimensions: '610×610×75', airflow: '7.8 CMM', pressureLoss: '12.0 mmAq' },
      { modelNumber: 'MCC-7536', dimensions: '610×915×75', airflow: '11.6 CMM', pressureLoss: '12.0 mmAq' },
      { modelNumber: 'MCC-7548', dimensions: '610×1219×75', airflow: '15.5 CMM', pressureLoss: '12.0 mmAq' }
    ]
  },
  {
    id: 'std-capa-hepa-filter',
    name: { en: 'STD-CAPA HEPA FILTER', ko: 'STD-CAPA HEPA FILTER' },
    image: '/images/products/product_4.png',
    curveImage: '/images/curves/curve_4.jpg',
    category: 'hepa',
    description: {
      en: 'Standard capacity HEPA filter with aluminum separator for hospital and precision electronics applications.',
      ko: '병원 및 정밀 전자 시설을 위한 알루미늄 세퍼레이터 표준 용량 HEPA 필터.'
    },
    efficiency: 'H13(99.97%) / H14(99.99%) on 0.3μm',
    media: {
      en: 'Waterproof ultra fine glass fiber with aluminum separator',
      ko: '알루미늄 세퍼레이터 적용 방수 초극세 유리섬유'
    },
    applications: {
      en: 'Hospital operating rooms, precision electronics manufacturing',
      ko: '병원 수술실, 정밀 전자 제조'
    },
    models: [
      { modelNumber: 'CC-300', dimensions: '610×305×150', airflow: '8.5 CMM', pressureLoss: '22.0 mmAq' },
      { modelNumber: 'CC-610', dimensions: '610×610×150', airflow: '17.0 CMM', pressureLoss: '22.0 mmAq' },
      { modelNumber: 'CC-915', dimensions: '610×915×150', airflow: '25.5 CMM', pressureLoss: '22.0 mmAq' },
      { modelNumber: 'CC-1130', dimensions: '610×1130×150', airflow: '31.5 CMM', pressureLoss: '24.0 mmAq' }
    ]
  },
  {
    id: 'hi-capa-hepa-filter',
    name: { en: 'HI-CAPA HEPA FILTER', ko: 'HI-CAPA HEPA FILTER' },
    image: '/images/products/product_5.png',
    curveImage: '/images/curves/curve_5.jpg',
    category: 'hepa',
    description: {
      en: 'High capacity HEPA filter with increased airflow for large-scale cleanroom and industrial applications.',
      ko: '대규모 클린룸 및 산업 시설을 위한 대풍량 HEPA 필터.'
    },
    efficiency: 'H13(99.97%) / H14(99.99%) on 0.3μm',
    media: {
      en: 'Waterproof ultra fine glass fiber',
      ko: '방수 초극세 유리섬유'
    },
    applications: {
      en: 'Large-scale cleanrooms, industrial facilities',
      ko: '대규모 클린룸, 산업 시설'
    },
    models: [
      { modelNumber: 'HCC-450', dimensions: '610×610×292', airflow: '25.0 CMM', pressureLoss: '25.4 mmAq' },
      { modelNumber: 'HCC-900', dimensions: '610×610×292', airflow: '34.0 CMM', pressureLoss: '25.4 mmAq' },
      { modelNumber: 'HCC-1350', dimensions: '610×915×292', airflow: '51.0 CMM', pressureLoss: '25.4 mmAq' },
      { modelNumber: 'HCC-1760', dimensions: '610×1219×292', airflow: '68.0 CMM', pressureLoss: '28.5 mmAq' }
    ]
  },
  {
    id: 'hi-temp-hepa-filter',
    name: { en: 'HI-TEMP HEPA FILTER', ko: 'HI-TEMP HEPA FILTER' },
    image: '/images/products/product_6.png',
    curveImage: '/images/curves/curve_6.jpg',
    category: 'hepa',
    description: {
      en: 'High temperature HEPA filter designed for industrial ovens, sterilization equipment, and medical applications up to 350°C.',
      ko: '산업용 오븐, 멸균 장비, 의료 시설에 사용되는 최대 350°C 내열 HEPA 필터.'
    },
    efficiency: '99.97% / 99.99% on 0.3μm',
    media: {
      en: 'Heat-resistant glass fiber with stainless steel frame',
      ko: '스테인리스 스틸 프레임 내열 유리섬유'
    },
    applications: {
      en: 'Industrial ovens, medical sterilization equipment, high-temperature processes',
      ko: '산업용 오븐, 의료 멸균 장비, 고온 공정'
    },
    maxTemp: '150°C / 250°C / 350°C',
    models: [
      { modelNumber: 'HT-150-610', dimensions: '610×610×150', airflow: '17.0 CMM', pressureLoss: '25.4 mmAq' },
      { modelNumber: 'HT-250-610', dimensions: '610×610×150', airflow: '17.0 CMM', pressureLoss: '27.0 mmAq' },
      { modelNumber: 'HT-350-610', dimensions: '610×610×150', airflow: '17.0 CMM', pressureLoss: '30.0 mmAq' },
      { modelNumber: 'HT-150-915', dimensions: '610×915×150', airflow: '25.5 CMM', pressureLoss: '25.4 mmAq' }
    ]
  },
  {
    id: 'v-bank-hepa-filter',
    name: { en: 'V-BANK HEPA FILTER', ko: 'V-BANK HEPA FILTER' },
    image: '/images/products/product_7.png',
    curveImage: '/images/curves/curve_7.jpg',
    category: 'hepa',
    description: {
      en: 'V-bank configuration HEPA filter with optional high-temperature ratings for efficient space utilization.',
      ko: '효율적인 공간 활용을 위한 V-뱅크 구조 HEPA 필터, 고온 사양 옵션.'
    },
    efficiency: '99.97% / 99.99% on 0.3μm',
    media: {
      en: 'Ultra fine glass fiber in V-bank configuration',
      ko: 'V-뱅크 구조 초극세 유리섬유'
    },
    applications: {
      en: 'AHU systems, cleanrooms, high-temperature processes',
      ko: 'AHU 시스템, 클린룸, 고온 공정'
    },
    maxTemp: '150°C / 250°C / 350°C',
    models: [
      { modelNumber: 'VBH-2424', dimensions: '610×610×292', airflow: '34.0 CMM', pressureLoss: '20.0 mmAq' },
      { modelNumber: 'VBH-2436', dimensions: '610×915×292', airflow: '51.0 CMM', pressureLoss: '20.0 mmAq' },
      { modelNumber: 'VBH-2448', dimensions: '610×1219×292', airflow: '68.0 CMM', pressureLoss: '22.0 mmAq' }
    ]
  },
  {
    id: 'hepa-filter-gel-type',
    name: { en: 'HEPA FILTER (GEL TYPE)', ko: 'HEPA FILTER (GEL TYPE)' },
    image: '/images/products/product_8.png',
    curveImage: '/images/curves/curve_8.jpg',
    category: 'hepa',
    description: {
      en: 'Gel gasket sealed HEPA filter with approximately 50% more filter media area, designed for microelectronics, pharmaceutical, aerospace, and biohazard applications.',
      ko: '젤 가스켓 밀봉 HEPA 필터로 약 50% 더 넓은 여과 면적, 마이크로일렉트로닉스·제약·항공우주·바이오해저드 시설용.'
    },
    efficiency: 'H13(99.97%) / H14(99.99%) on 0.3μm',
    media: {
      en: 'Ultra fine glass fiber with gel gasket seal',
      ko: '젤 가스켓 밀봉 초극세 유리섬유'
    },
    applications: {
      en: 'Microelectronics, pharmaceutical, aerospace, biohazard facilities',
      ko: '마이크로일렉트로닉스, 제약, 항공우주, 바이오해저드 시설'
    },
    maxTemp: '70°C',
    maxHumidity: '100%RH',
    models: [
      { modelNumber: 'GEL-5024', dimensions: '610×610×50', airflow: '7.5 CMM', pressureLoss: '8.5 mmAq' },
      { modelNumber: 'GEL-5036', dimensions: '610×915×50', airflow: '11.3 CMM', pressureLoss: '8.5 mmAq' },
      { modelNumber: 'GEL-5048', dimensions: '610×1219×50', airflow: '15.0 CMM', pressureLoss: '8.5 mmAq' },
      { modelNumber: 'GEL-7524', dimensions: '610×610×75', airflow: '7.8 CMM', pressureLoss: '12.5 mmAq' }
    ]
  },

  // ===== MEDIUM =====
  {
    id: 'std-capa-medium-header',
    name: { en: 'STD-CAPA MEDIUM (HEADER)', ko: 'STD-CAPA MEDIUM (HEADER)' },
    image: '/images/products/product_9.png',
    curveImage: '/images/curves/curve_9.jpg',
    category: 'medium',
    description: {
      en: 'Standard capacity medium filter with aluminum separator and galvanized steel frame for AHU installations in HVAC systems.',
      ko: 'HVAC 시스템 AHU 설치를 위한 알루미늄 세퍼레이터 및 아연도금 스틸 프레임 표준 용량 중효율 필터.'
    },
    efficiency: 'EN779 F6 / F7 / F8',
    media: {
      en: 'Fine glass fiber with aluminum separator',
      ko: '알루미늄 세퍼레이터 적용 극세 유리섬유'
    },
    applications: {
      en: 'AHU in HVAC systems, commercial buildings',
      ko: 'HVAC 시스템 AHU, 상업 건물'
    },
    models: [
      { modelNumber: 'MH-610', dimensions: '610×610×150', airflow: '17.0 CMM', pressureLoss: '12.0 mmAq' },
      { modelNumber: 'MH-915', dimensions: '610×915×150', airflow: '25.5 CMM', pressureLoss: '12.0 mmAq' },
      { modelNumber: 'MH-510', dimensions: '510×510×150', airflow: '12.0 CMM', pressureLoss: '12.0 mmAq' }
    ]
  },
  {
    id: 'std-capa-medium-box',
    name: { en: 'STD-CAPA MEDIUM (BOX)', ko: 'STD-CAPA MEDIUM (BOX)' },
    image: '/images/products/product_10.png',
    curveImage: '/images/curves/curve_10.jpg',
    category: 'medium',
    description: {
      en: 'Box type medium filter available in wood, glass, or aluminum frames for versatile HVAC applications.',
      ko: '다양한 HVAC 적용을 위한 목재·유리·알루미늄 프레임 박스 타입 중효율 필터.'
    },
    efficiency: 'EN779 F6 / F7 / F8',
    media: {
      en: 'Fine glass fiber',
      ko: '극세 유리섬유'
    },
    applications: {
      en: 'General HVAC systems, office buildings, factories',
      ko: '일반 HVAC 시스템, 오피스 빌딩, 공장'
    },
    models: [
      { modelNumber: 'MB-610', dimensions: '610×610×150', airflow: '17.0 CMM', pressureLoss: '10.0 mmAq' },
      { modelNumber: 'MB-915', dimensions: '610×915×150', airflow: '25.5 CMM', pressureLoss: '10.0 mmAq' },
      { modelNumber: 'MB-510', dimensions: '510×510×150', airflow: '12.0 CMM', pressureLoss: '10.0 mmAq' }
    ]
  },
  {
    id: 'mini-medium-header',
    name: { en: 'MINI MEDIUM (HEADER)', ko: 'MINI MEDIUM (HEADER)' },
    image: '/images/products/product_11.png',
    curveImage: '/images/curves/curve_11.jpg',
    category: 'medium',
    description: {
      en: '75mm thin-line medium filter for space-constrained installations in office buildings and factories.',
      ko: '오피스 빌딩 및 공장의 공간 제약 설치를 위한 75mm 슬림 중효율 필터.'
    },
    efficiency: 'EN779 F6 / F7 / F8',
    media: {
      en: 'Minipleated fine glass fiber',
      ko: '미니플리트 극세 유리섬유'
    },
    applications: {
      en: 'Office buildings, factories, space-limited installations',
      ko: '오피스 빌딩, 공장, 공간 제약 설치'
    },
    models: [
      { modelNumber: 'MMH-610', dimensions: '610×610×75', airflow: '17.0 CMM', pressureLoss: '9.0 mmAq' },
      { modelNumber: 'MMH-915', dimensions: '610×915×75', airflow: '25.5 CMM', pressureLoss: '9.0 mmAq' },
      { modelNumber: 'MMH-510', dimensions: '510×510×75', airflow: '12.0 CMM', pressureLoss: '9.0 mmAq' }
    ]
  },
  {
    id: 'mini-medium-box',
    name: { en: 'MINI MEDIUM (BOX)', ko: 'MINI MEDIUM (BOX)' },
    image: '/images/products/product_12.png',
    curveImage: '/images/curves/curve_12.jpg',
    category: 'medium',
    description: {
      en: 'Minipleated glass fiber medium filter in box configuration for efficient medium-grade filtration.',
      ko: '효율적인 중급 여과를 위한 박스 구조 미니플리트 유리섬유 중효율 필터.'
    },
    efficiency: 'EN779 F6 / F7 / F8',
    media: {
      en: 'Minipleated glass fiber',
      ko: '미니플리트 유리섬유'
    },
    applications: {
      en: 'HVAC systems, commercial and industrial facilities',
      ko: 'HVAC 시스템, 상업 및 산업 시설'
    },
    models: [
      { modelNumber: 'MMB-610', dimensions: '610×610×150', airflow: '17.0 CMM', pressureLoss: '8.0 mmAq' },
      { modelNumber: 'MMB-915', dimensions: '610×915×150', airflow: '25.5 CMM', pressureLoss: '8.0 mmAq' },
      { modelNumber: 'MMB-510', dimensions: '510×510×150', airflow: '12.0 CMM', pressureLoss: '8.0 mmAq' }
    ]
  },
  {
    id: 'v-bank-medium-filter',
    name: { en: 'V-BANK MEDIUM FILTER', ko: 'V-BANK MEDIUM FILTER' },
    image: '/images/products/product_13.png',
    curveImage: '/images/curves/curve_13.jpg',
    category: 'medium',
    description: {
      en: 'V-bank configuration medium filter with rigid plastic frame for gas turbine intake and high-airflow applications.',
      ko: '가스터빈 흡기 및 대풍량 시설을 위한 경질 플라스틱 프레임 V-뱅크 중효율 필터.'
    },
    efficiency: 'EN779 F6 / F7 / F8',
    media: {
      en: 'Fine glass fiber in V-bank configuration with rigid plastic frame',
      ko: '경질 플라스틱 프레임 V-뱅크 구조 극세 유리섬유'
    },
    applications: {
      en: 'Gas turbine intake systems, high-airflow HVAC',
      ko: '가스터빈 흡기 시스템, 대풍량 HVAC'
    },
    models: [
      { modelNumber: 'VBM-2424', dimensions: '610×610×292', airflow: '34.0 CMM', pressureLoss: '15.0 mmAq' },
      { modelNumber: 'VBM-2436', dimensions: '610×915×292', airflow: '51.0 CMM', pressureLoss: '15.0 mmAq' },
      { modelNumber: 'VBM-2448', dimensions: '610×1219×292', airflow: '68.0 CMM', pressureLoss: '17.0 mmAq' }
    ]
  },
  {
    id: 'medium-bag-filter',
    name: { en: 'MEDIUM BAG FILTER', ko: 'MEDIUM BAG FILTER' },
    image: '/images/products/product_14.png',
    curveImage: '',
    category: 'medium',
    description: {
      en: 'Bag type medium filter with dual-layer meltblown synthetic media, available in 4 to 10 pocket configurations.',
      ko: '이중 멜트블로운 합성 여재의 백 타입 중효율 필터, 4~10 포켓 구성.'
    },
    efficiency: 'EN779 F6 / F7 / F8',
    media: {
      en: 'Dual layer meltblown synthetic media',
      ko: '이중 멜트블로운 합성 여재'
    },
    applications: {
      en: 'General HVAC systems, pre-filtration for HEPA systems',
      ko: '일반 HVAC 시스템, HEPA 시스템 전단 여과'
    },
    models: [
      { modelNumber: 'BF-4P', dimensions: '595×595×600', airflow: '17.0 CMM', pressureLoss: '8.0 mmAq' },
      { modelNumber: 'BF-6P', dimensions: '595×595×600', airflow: '25.5 CMM', pressureLoss: '10.0 mmAq' },
      { modelNumber: 'BF-8P', dimensions: '595×595×600', airflow: '34.0 CMM', pressureLoss: '12.0 mmAq' },
      { modelNumber: 'BF-10P', dimensions: '595×595×600', airflow: '42.5 CMM', pressureLoss: '14.0 mmAq' }
    ]
  },

  // ===== PRE =====
  {
    id: 'pre-filter',
    name: { en: 'PRE FILTER', ko: 'PRE FILTER' },
    image: '/images/products/product_15.png',
    curveImage: '/images/curves/curve_15.jpg',
    category: 'pre',
    description: {
      en: 'Washable non-woven polyester pre-filter for primary air filtration in general air conditioning and painting booth applications.',
      ko: '일반 공조 및 도장 부스용 세척 가능한 부직포 폴리에스터 프리필터.'
    },
    efficiency: 'EN779 G3',
    media: {
      en: 'Non-woven polyester',
      ko: '부직포 폴리에스터'
    },
    applications: {
      en: 'General air conditioning, painting booths',
      ko: '일반 공조, 도장 부스'
    },
    maxTemp: '70°C',
    maxHumidity: '98%RH',
    models: [
      { modelNumber: 'PF-610', dimensions: '610×610×25', airflow: '17.0 CMM', pressureLoss: '3.0 mmAq' },
      { modelNumber: 'PF-915', dimensions: '610×915×25', airflow: '25.5 CMM', pressureLoss: '3.0 mmAq' },
      { modelNumber: 'PF-510', dimensions: '510×510×25', airflow: '12.0 CMM', pressureLoss: '3.0 mmAq' }
    ]
  },
  {
    id: 'electrostatic-filter',
    name: { en: 'ELECTROSTATIC FILTER', ko: 'ELECTROSTATIC FILTER' },
    image: '/images/products/product_16.png',
    curveImage: '/images/curves/curve_16.jpg',
    category: 'pre',
    description: {
      en: 'Multi-layered polypropylene electrostatic filter, washable for 2+ years of use in hospitals, department stores, and office buildings.',
      ko: '병원, 백화점, 오피스 빌딩에서 2년 이상 세척 사용 가능한 다층 폴리프로필렌 정전 필터.'
    },
    efficiency: 'EN779 G4',
    media: {
      en: 'Multi-layered polypropylene',
      ko: '다층 폴리프로필렌'
    },
    applications: {
      en: 'Hospitals, department stores, office buildings',
      ko: '병원, 백화점, 오피스 빌딩'
    },
    models: [
      { modelNumber: 'EF-610', dimensions: '610×610×25', airflow: '17.0 CMM', pressureLoss: '2.5 mmAq' },
      { modelNumber: 'EF-915', dimensions: '610×915×25', airflow: '25.5 CMM', pressureLoss: '2.5 mmAq' },
      { modelNumber: 'EF-510', dimensions: '510×510×25', airflow: '12.0 CMM', pressureLoss: '2.5 mmAq' }
    ]
  },
  {
    id: 'demister-filter',
    name: { en: 'DEMISTER FILTER', ko: 'DEMISTER FILTER' },
    image: '/images/products/product_17.png',
    curveImage: '/images/curves/curve_17.jpg',
    category: 'pre',
    description: {
      en: 'Stainless steel wire mesh demister filter for eliminating oil and water mists, water-cleanable for long service life.',
      ko: '유수 미스트 제거를 위한 스테인리스 스틸 와이어 메시 디미스터 필터, 수세 가능하여 장수명.'
    },
    efficiency: 'G1 / G2',
    media: {
      en: 'Stainless steel wire mesh',
      ko: '스테인리스 스틸 와이어 메시'
    },
    applications: {
      en: 'Oil mist elimination, water mist removal, industrial processes',
      ko: '유분 미스트 제거, 수분 미스트 제거, 산업 공정'
    },
    models: [
      { modelNumber: 'DM-610', dimensions: '610×610×50', airflow: '17.0 CMM', pressureLoss: '4.0 mmAq' },
      { modelNumber: 'DM-915', dimensions: '610×915×50', airflow: '25.5 CMM', pressureLoss: '4.0 mmAq' },
      { modelNumber: 'DM-510', dimensions: '510×510×50', airflow: '12.0 CMM', pressureLoss: '4.0 mmAq' }
    ]
  },
  {
    id: 'pre-filter-paper-frame',
    name: { en: 'PRE FILTER (PAPER FRAME)', ko: 'PRE FILTER (PAPER FRAME)' },
    image: '/images/products/product_18.png',
    curveImage: '/images/curves/curve_18.jpg',
    category: 'pre',
    description: {
      en: '100% synthetic pre-filter with incinerable kraft paper frame for easy disposal.',
      ko: '간편 폐기가 가능한 소각용 크라프트 페이퍼 프레임의 100% 합성 프리필터.'
    },
    efficiency: 'EN779 G3',
    media: {
      en: '100% synthetic media with kraft paper frame',
      ko: '크라프트 페이퍼 프레임 100% 합성 여재'
    },
    applications: {
      en: 'General HVAC, disposable pre-filtration applications',
      ko: '일반 HVAC, 일회용 전단 여과'
    },
    models: [
      { modelNumber: 'PPF-610', dimensions: '610×610×50', airflow: '17.0 CMM', pressureLoss: '3.5 mmAq' },
      { modelNumber: 'PPF-915', dimensions: '610×915×50', airflow: '25.5 CMM', pressureLoss: '3.5 mmAq' },
      { modelNumber: 'PPF-510', dimensions: '510×510×50', airflow: '12.0 CMM', pressureLoss: '3.5 mmAq' }
    ]
  },
  {
    id: 'carbon-pre-filter',
    name: { en: 'CARBON PRE FILTER', ko: 'CARBON PRE FILTER' },
    image: '/images/products/product_19.png',
    curveImage: '/images/curves/curve_19.jpg',
    category: 'pre',
    description: {
      en: 'Activated carbon combined with polyester pre-filter for simultaneous particle and odor removal.',
      ko: '입자 및 악취 동시 제거를 위한 활성탄 결합 폴리에스터 프리필터.'
    },
    efficiency: 'EN779 G3',
    media: {
      en: 'Activated carbon + polyester',
      ko: '활성탄 + 폴리에스터'
    },
    applications: {
      en: 'Indoor air quality improvement, odor control with pre-filtration',
      ko: '실내 공기질 개선, 전단 여과 겸 탈취'
    },
    maxTemp: '70°C',
    maxHumidity: '80%RH',
    models: [
      { modelNumber: 'CPF-610', dimensions: '610×610×25', airflow: '17.0 CMM', pressureLoss: '3.5 mmAq' },
      { modelNumber: 'CPF-915', dimensions: '610×915×25', airflow: '25.5 CMM', pressureLoss: '3.5 mmAq' },
      { modelNumber: 'CPF-510', dimensions: '510×510×25', airflow: '12.0 CMM', pressureLoss: '3.5 mmAq' }
    ]
  },

  // ===== CARBON =====
  {
    id: 'carbon-tray-filter',
    name: { en: 'CARBON TRAY FILTER', ko: 'CARBON TRAY FILTER' },
    image: '/images/products/product_20.png',
    curveImage: '/images/curves/curve_20.jpg',
    category: 'carbon',
    description: {
      en: 'Granular activated carbon (coconut shell) tray filter with replaceable carbon for removal of benzene, formaldehyde, and ammonia.',
      ko: '벤젠·포름알데히드·암모니아 제거를 위한 교체형 야자 활성탄 트레이 필터.'
    },
    efficiency: 'Gas/odor removal',
    media: {
      en: 'Granular activated carbon (coconut shell), replaceable',
      ko: '교체형 야자 활성탄(코코넛쉘)'
    },
    applications: {
      en: 'Benzene, formaldehyde, ammonia removal, indoor air purification',
      ko: '벤젠, 포름알데히드, 암모니아 제거, 실내 공기정화'
    },
    maxTemp: '120°C',
    maxHumidity: '95%RH',
    models: [
      { modelNumber: 'CT-610', dimensions: '610×610×100', airflow: '17.0 CMM', pressureLoss: '8.0 mmAq' },
      { modelNumber: 'CT-915', dimensions: '610×915×100', airflow: '25.5 CMM', pressureLoss: '8.0 mmAq' },
      { modelNumber: 'CT-510', dimensions: '510×510×100', airflow: '12.0 CMM', pressureLoss: '8.0 mmAq' }
    ]
  },
  {
    id: 'carbon-v-bank-filter',
    name: { en: 'CARBON V-BANK FILTER', ko: 'CARBON V-BANK FILTER' },
    image: '/images/products/product_21.png',
    curveImage: '/images/curves/curve_21.jpg',
    category: 'carbon',
    description: {
      en: 'V-bank configuration activated carbon filter with ABS plastic frame for high-capacity gas and odor removal.',
      ko: '대용량 가스·악취 제거를 위한 ABS 플라스틱 프레임 V-뱅크 활성탄 필터.'
    },
    efficiency: 'EN779 F6 / F7 / F8',
    media: {
      en: 'Activated carbon + polyester with ABS plastic frame',
      ko: 'ABS 플라스틱 프레임 활성탄 + 폴리에스터'
    },
    applications: {
      en: 'High-capacity gas removal, industrial odor control, HVAC systems',
      ko: '대용량 가스 제거, 산업 탈취, HVAC 시스템'
    },
    models: [
      { modelNumber: 'CVB-2424', dimensions: '610×610×292', airflow: '34.0 CMM', pressureLoss: '18.0 mmAq' },
      { modelNumber: 'CVB-2436', dimensions: '610×915×292', airflow: '51.0 CMM', pressureLoss: '18.0 mmAq' },
      { modelNumber: 'CVB-2448', dimensions: '610×1219×292', airflow: '68.0 CMM', pressureLoss: '20.0 mmAq' }
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.category === category);
}

export function getAllCategories(): ProductCategory[] {
  return ['ulpa', 'hepa', 'medium', 'pre', 'carbon'];
}
