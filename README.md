# CHAGIZAC Portfolio

모바일 앱 개발자 CHAGIZAC의 프로젝트 포트폴리오입니다.

## 구조

```
rootHtml/
├── index.html          # 메인 포트폴리오 페이지
├── sitemap.xml         # 사이트맵
├── robots.txt          # 검색엔진 크롤링 설정
├── assets/
│   ├── css/
│   │   └── styles.css  # 스타일시트
│   ├── js/
│   │   └── main.js     # 자바스크립트
│   └── images/         # 프로젝트 아이콘 이미지
└── README.md           # 이 파일
```

## 새 프로젝트 추가 방법

### 1. 프로젝트 섹션에 카드 추가

`index.html`의 프로젝트 섹션(`<section id="projects">`)에 새 프로젝트 카드를 추가하세요:

```html
<article class="project-card" data-project="newproject">
  <div class="project-image">
    <img src="./assets/images/newproject-icon.svg" alt="새 프로젝트" class="project-thumb">
    <div class="project-overlay">
      <a href="https://chagizac.github.io/newproject/" class="btn btn-primary" target="_blank" rel="noopener">자세히 보기</a>
    </div>
  </div>
  <div class="project-content">
    <div class="project-tags">
      <span class="tag">Android</span>
      <span class="tag">Flutter</span>
      <span class="tag">카테고리</span>
    </div>
    <h3 class="project-title">새 프로젝트 이름</h3>
    <p class="project-description">프로젝트 설명을 여기에 작성하세요...</p>
    <div class="project-links">
      <a href="https://chagizac.github.io/newproject/" class="project-link" target="_blank" rel="noopener">
        <span>웹사이트</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"/>
        </svg>
      </a>
      <a href="https://github.com/chagizac/newproject" class="project-link" target="_blank" rel="noopener">
        <span>GitHub</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 12.75 3.48 12.75C3.09 11.73 2.55 11.48 2.55 11.48C1.79 10.99 2.61 10.99 2.61 10.99C3.46 11.06 3.91 11.87 3.91 11.87C4.66 13.18 5.86 12.79 6.06 12.68C6.09 12.17 6.29 11.83 6.51 11.66C4.78 11.49 3.01 10.85 3.01 7.71C3.01 6.86 3.32 6.16 3.82 5.62C3.76 5.45 3.48 4.61 3.91 3.47C3.91 3.47 4.58 3.25 6.02 4.32C6.63 4.17 7.27 4.1 7.91 4.1C8.55 4.1 9.19 4.17 9.8 4.32C11.24 3.25 11.91 3.47 11.91 3.47C12.34 4.61 12.06 5.45 12 5.62C12.5 6.16 12.81 6.86 12.81 7.71C12.81 10.86 11.04 11.49 9.29 11.66C9.57 11.87 9.81 12.28 9.81 12.93C9.81 13.87 9.8 14.63 9.8 15.21C9.8 15.42 9.95 15.66 10.35 15.59C13.53 14.53 15.82 11.54 15.82 8C15.82 3.58 12.24 0 8 0Z"/>
        </svg>
      </a>
    </div>
  </div>
</article>
```

### 2. 프로젝트 아이콘 추가

`assets/images/` 폴더에 프로젝트 아이콘을 추가하세요:
- 추천 형식: SVG (또는 PNG)
- 권장 크기: 512x512 픽셀
- 파일명: `newproject-icon.svg` 또는 `newproject-icon.png`

### 3. 사이트맵 업데이트

`sitemap.xml`에 새 프로젝트 URL을 추가하세요:

```xml
<url>
  <loc>https://chagizac.github.io/newproject/</loc>
  <lastmod>2026-01-29</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

## 배포

### GitHub Pages에 배포

```bash
git add rootHtml/
git commit -m "새 프로젝트 추가"
git push origin main
```

GitHub 레포지토리 설정에서 GitHub Pages를 활성화하세요:
1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main`, Folder: `/root` 또는 `/(root)`
4. Save

## 기술 스택

- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- Vanilla JavaScript
- 반응형 디자인 (Mobile First)
- 다크/라이트 모드 지원

## 기능

- 반응형 네비게이션
- 프로젝트 카드 갤러리
- 스무스 스크롤
- 스크롤 애니메이션
- 다크/라이트 모드 자동 전환
- SEO 최적화 (메타 태그, JSON-LD, 사이트맵)

## 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)
- 모바일 브라우저