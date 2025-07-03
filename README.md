# 포트폴리오 웹사이트

이 프로젝트는 개인 프로젝트와 블로그 게시물을 소개하기 위해 제작된 개인 포트폴리오 웹사이트입니다.

## ✨ 주요 기능

- **자기소개**: 저에 대한 간략한 소개를 확인할 수 있습니다.
- **프로젝트**: 진행했던 프로젝트들의 목록과 상세 설명을 볼 수 있습니다.
- **블로그**: Notion API를 연동하여 작성된 블로그 게시물을 보여줍니다.

## 🛠️ 기술 스택

- **Framework**: React
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Emotion
- **Routing**: React Router
- **State Management**: React Query
- **HTTP Client**: Axios
- **Deployment**: GitHub Actions

## 🚀 시작하기

### 1. 프로젝트 클론

```bash
git clone https://github.com/seong-hui/portfolio.git
cd porfolio
```

### 2. 의존성 설치

`yarn`을 사용하여 의존성을 설치합니다.

```bash
yarn install
```

### 3. 개발 서버 실행

```bash
yarn dev
```

브라우저에서 `http://localhost:5173` (또는 다른 포트)으로 접속하여 확인할 수 있습니다.

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── Button.tsx      # 공통 버튼 컴포넌트
│   ├── NotionTag.tsx   # 노션 태그 컴포넌트
│   └── Spinner.tsx     # 로딩 스피너
├── pages/              # 페이지 컴포넌트
│   ├── Home.tsx        # 홈페이지
│   ├── Projects.tsx    # 프로젝트 목록
│   ├── ProjectDetail.tsx # 프로젝트 상세
│   ├── NotionPage.tsx  # 노션 블로그
│   ├── NotionDetail.tsx # 노션 포스트 상세
│   └── Blog.tsx        # Velog 블로그
├── constants/          # 상수 및 데이터
│   ├── projects.ts     # 프로젝트 데이터
│   └── projectDetails.ts # 프로젝트 상세 데이터
├── styles/             # 스타일 관련
│   └── colors.ts       # 색상 시스템
├── apis/               # API 관련
│   └── getNotionPosts.ts # Notion API 호출
└── App.tsx             # 메인 앱 컴포넌트
```

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary**: 회색 계열 (#6c757d)
- **Background**: #f8f9fa
- **Surface**: #ffffff
- **Text**: #333333, #666666, #888888

### 반응형 브레이크포인트

- **Mobile**: ~768px
- **Tablet**: 768px~1024px
- **Desktop**: 1024px~

## 🔧 주요 기능 상세

### Notion 연동

- Notion API를 통해 실시간으로 블로그 포스트 가져오기
- 태그, 소속, 작성일 등 메타데이터 표시
- 마크다운 형태의 콘텐츠 렌더링

### Velog RSS 연동

- RSS2JSON API를 통해 Velog 포스트 가져오기
- 썸네일, 콘텐츠 정보 표시

## 📦 빌드 및 배포

### 로컬 빌드

```bash
yarn build
yarn preview
```

### 자동 배포

이 프로젝트는 GitHub Actions를 통해 `main` 브랜치에 푸시될 때마다 자동으로 배포됩니다.
