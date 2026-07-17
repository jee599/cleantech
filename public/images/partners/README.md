# 협력사 로고

`src/data/partners.ts`의 `logo` 필드에 경로를 넣으면 워드마크(텍스트) 대신 이미지가 렌더된다.
필드를 비우면 회사명 텍스트로 표시된다.

## 현재 파일과 출처

| 파일 | 회사 | 출처 | 라이선스 |
|---|---|---|---|
| `samsung-electronics.webp` | 삼성전자 | [Wikimedia Commons — Samsung Orig Wordmark BLACK RGB](https://commons.wikimedia.org/wiki/File:Samsung_Orig_Wordmark_BLACK_RGB.png) | CC BY 4.0 |
| `samsung-heavy.webp` | 삼성중공업 | [Wikimedia Commons — Samsung Heavy Industries logo (hangul RGB)](https://commons.wikimedia.org/wiki/File:Samsung_Heavy_Industries_logo_(hangul_RGB).svg) | Public domain |
| `snuh.webp` | 서울대학교병원 | [Wikimedia Commons — Seoul National University Hospital logo](https://commons.wikimedia.org/wiki/File:Seoul_National_University_Hospital_logo.png) | Public domain (`trademarked` 표기 있음) |
| `ncc.webp` | 국립암센터 | [ncc.re.kr 공식 로고](https://ncc.re.kr/images/common/logo.png) — 공식 CI 원본(AI)은 `ncc.re.kr/main.ncc?uri=ncc_ci`에서 배포 | 공공기관 CI |

### 로고를 넣지 않은 곳

- **현대전자** — 현대전자산업은 2001년 하이닉스반도체, 2012년 SK하이닉스로 사명이 바뀌어 **현존하지 않는 법인**이다. 구 현대전자 로고는 Wikimedia Commons에 없고, 현행 SK하이닉스 로고를 1996년 납품 실적에 붙이면 사실과 어긋나므로 워드마크로 둔다.
- **홍콩 필트레이션** — 로고 확인 불가.

## ⚠ 상표권 — 게시 전 반드시 확인

**파일의 라이선스(CC BY / Public domain)는 "저작권"이 풀렸다는 뜻이지 "상표권"이 풀렸다는 뜻이 아니다.**
Commons의 `trademarked` 표기가 그 경고다. 납품 사실이 있어도 로고 사용권이 자동으로 생기지 않는다.

게시 전 확인할 것:

1. **각 사 브랜드 가이드라인** — 삼성은 특히 엄격하다. 색·여백·변형 규정이 있다.
2. **납품처에 사용 허락** — "귀사 로고를 당사 홈페이지 납품 실적란에 게시해도 되는지" 서면 확인이 안전하다.
3. **CC BY 4.0(삼성전자)은 저작자 표시 의무** — 페이지 어딘가에 출처 표기가 필요할 수 있다.

허락 전까지는 `logo` 필드를 비워 **워드마크(회사명 텍스트)로 두면 이 리스크가 없다.**

## 파일 사양

- 형식: WebP(lossless), 높이 96px(2x). 렌더는 `max-h-8`(32px)
- SVG 원본은 `sharp`에 `{density: 600}`을 주고 변환할 것 (저해상도 래스터화 방지)
- 흰 배경 그리드에 올라가므로 **흰색 로고는 쓰지 말 것** — 국립암센터는 메인의 흰색 버전 대신 `/images/common/logo.png`(어두운 글자)를 사용했다
