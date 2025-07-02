export interface ProjectLink {
  href: string;
  label: string;
  icon: "external" | "github";
}

export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  note?: string;
  period: string;
  role: string;
  team: string;
  techStack: string;
  award?: string;
  achievements: Array<{
    title: string;
    items: string[];
  }>;
  links: ProjectLink[];
  detailPath?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "42cabi",
    title: "42Cabi",
    image: "/src/assets/images/cabi.png",
    description:
      "42서울 1300여 명의 학생이 사용하는 사물함 대여 플랫폼입니다. 구조적 문제를 정의하고 정책 중심의 기능 개선을 통해 사용자 경험과 서비스 지표를 실질적으로 개선한 프로젝트입니다",
    note: "(실제 사이트는 42서울 학생 로그인이 필요합니다. 데모 사이트를 통해 로그인 없이 서비스를 보실 수 있습니다)",
    period: "2023년 5월 – 2024년 2월 (서비스 운영 중)",
    role: "프론트엔드, 기획, 디자인",
    team: "총 6명 (FE 3명 / BE 3명)",
    techStack: "React, TypeScript, Recoil, styled-components, Vite",
    award: "정보통신기획평가원(IITP) 원장상",
    achievements: [
      {
        title: "서비스 정책 개선을 통해 공유 사물함 이용률 6% → 92% 향상",
        items: [
          "사용자 설문(132건) 분석을 통해 구조적 문제를 도출하고 이를 정책 개선 방향으로 구체화해 기능 설계 및 서비스 반영",
          "초대코드 기반 그룹 대여, 출석 시간 기반 연장권, 반납 후 대기 시간 등 핵심 정책 기능 기획 및 프론트엔드 구현",
          "정책 기획부터 UI 구현까지 전 과정에 참여하며 사용 흐름 개선과 서비스 이용률 향상에 기여",
        ],
      },
    ],
    links: [
      {
        href: "https://cabi.42seoul.io/home",
        label: "서비스 바로가기",
        icon: "external",
      },
      {
        href: "https://github.com/innovationacademy-kr/Cabi",
        label: "깃허브 바로가기",
        icon: "github",
      },
      {
        href: "https://api-dev.cabi.42seoul.io/demo",
        label: "데모 바로가기",
        icon: "external",
      },
    ],
    detailPath: "/projects/42cabi",
  },
  {
    id: "jeolloga",
    title: "절로가",
    image: "/src/assets/images/jeolloga.png",
    description:
      "원하는 템플스테이를 가장 쉽게 찾을 수 있는 서비스입니다. 프론트엔드 리드로 참여하여 사용자 맞춤 검색 필터 기능을 구조적으로 설계하고 짧은 기간 내 협업 완성도를 높여 서비스의 핵심 기능을 안정적으로 구현하였습니다.",
    period: "2024년 12월 – 현재 (서비스 운영 중)",
    role: "프론트엔드 리드",
    team: "총 11명 (FE 4명 / BE 2명 / PM 2명 / PD 3명)",
    techStack: "React, TypeScript, Tanstack-query, Vanilla-extract, Vite",
    achievements: [
      {
        title: "템플스테이 필터링 및 검색 기능 구현",
        items: [
          "Filter / FilterList 클래스를 설계하여 필터별 상태를 관리",
          "필터 토글, 그룹별 상태 조회, 초기화 기능 등 로직 구현",
          "필터링 로직을 useFilter hook으로 분리하여 재사용성과 유지보수성 강화",
        ],
      },
      {
        title: "짧은 기간 내 효율적인 협업을 이끈 프론트엔드 리딩 경험",
        items: [
          "2주간의 단기 개발 기간 동안 팀의 공통 목표를 지속적으로 상기시키는 문화 설계",
          '"오늘의 할 일" 기록 문화를 도입하여 팀원 간 작업 시각화 및 메타인지 향상',
          "매일 밤 데일리 스크럼을 진행하여 정기적인 소통과 팀의 같은 방향 인식을 도와 몰입도 높은 협업 경험 구축",
        ],
      },
      {
        title: "GTM 기반 클릭 이벤트 로깅 시스템 구현",
        items: [
          "GTMProvider로 스크립트 삽입 및 초기 이벤트 처리",
          "useEventLogger 훅으로 클릭 이벤트 dataLayer 전송 자동화",
          "정의된 이벤트 기준으로 전체 클릭 로깅 구현",
        ],
      },
      {
        title: "Github Actions을 이용해 CI/CD 자동화",
        items: [
          "dev, prod 서버 분리 운영 및 브랜치 전략에 따른 자동 배포 설정",
        ],
      },
    ],
    links: [
      {
        href: "https://www.gototemplestay.com/",
        label: "서비스 바로가기",
        icon: "external",
      },
      {
        href: "https://github.com/JEOLLOGA/JEOLLOGA-CLIENT",
        label: "깃허브 바로가기",
        icon: "github",
      },
    ],
    detailPath: "/projects/jeolloga",
  },
  {
    id: "sopt-playground",
    title: "SOPT Makers - Playground",
    image: "/src/assets/images/soptmakers.png",
    description:
      "Playground는 대학생 연합 IT 창업 동아리 SOPT의 모든 기수 회원들이 언제 어디서든 자유롭게 소통할 수 있도록 연결하는 플랫폼입니다. SOPT는 다양한 전공과 개성을 지닌 약 3000명의 회원들과 함께해왔으며 Playground는 이들이 자연스럽게 관계를 맺고 교류할 수 있도록 다양한 연결 방식을 고민하고 있습니다.",
    period: "2025년 2월 – 현재 (서비스 운영 중)",
    role: "프론트엔드",
    team: "총 7명 (FE 2명 / BE 2명 / PM 1명 / PD 2명)",
    techStack: "React, Next.js, TypeScript, Emotion, Tanstack-Query",
    achievements: [
      {
        title: "커뮤니티 활성화를 위한 커뮤니티 메인 화면 구조 개편",
        items: [
          "기존 전체글 중심 구조 → HOT 게시판 중심으로 전면 개편",
          "'답변 대기 질문', '최신 아티클' 등 신규 콘텐츠 UI 개발",
          "스켈레톤 UI 적용으로 비동기 데이터 로딩 중에도 자연스러운 사용자 경험 제공",
        ],
      },
      {
        title: "아티클 업로드 기능 및 게시 UI 구현",
        items: [
          "아티클 등록 구좌 영역 구성 및 업로드 기능 구현",
          "게시된 아티클의 콘텐츠/작성자/링크 등 정보 노출 UI 개발",
        ],
      },
    ],
    links: [
      {
        href: "https://playground.sopt.org/",
        label: "서비스 바로가기",
        icon: "external",
      },
      {
        href: "https://github.com/sopt-makers/sopt-playground-frontend",
        label: "깃허브 바로가기",
        icon: "github",
      },
    ],
  },
  {
    id: "shellin",
    title: "Shellin",
    image: "/src/assets/images/shellin.png",
    description:
      "해야 할 모든 일을 한곳에 정리하고 하루 일정을 유연하게 계획할 수 있도록 만든 일정 관리 서비스입니다. 실제 일상에서 느꼈던 일정 관리의 불편함을 해결하고자 기획에 참여하고 개발 중입니다.",
    period: "2024년 7월 – 현재 (서비스 운영 중)",
    role: "프론트엔드, 기획",
    team: "총 8명 (FE 4명 / BE 2명 / PD 2명)",
    techStack: "React, TypeScript, Emotion, Tanstack-Query, Vite",
    achievements: [
      {
        title: "주요 기능 구현",
        items: [
          "일정 수정 모달 기능 구현",
          "Context API 기반 Toast 알림 시스템 개발로 전역 알림 관리",
          "fullCalendar 라이브러리 커스텀을 통해 UI 디자인을 맞춤 구현",
          "구글 로그인 및 구글 캘린더 연동 기능 구현",
        ],
      },
    ],
    links: [
      {
        href: "https://shellin.kr/",
        label: "서비스 바로가기",
        icon: "external",
      },
      {
        href: "https://github.com/TEAM-DAWM/SHELLIN-CLIENT",
        label: "깃허브 바로가기",
        icon: "github",
      },
    ],
    detailPath: "/projects/shellin",
  },
];
