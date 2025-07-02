// 기본 색상 팔레트
export const colors = {
  // 그레이 스케일
  white: "#ffffff",
  gray50: "#f8f9fa",
  gray100: "#f1f3f4",
  gray200: "#e9ecef",
  gray300: "#dee2e6",
  gray400: "#adb5bd",
  gray500: "#6c757d",
  gray600: "#495057",
  gray700: "#343a40",
  gray800: "#212529",
  gray900: "#333333",

  // 브랜드 색상
  primary: "#007bff",
  primaryDark: "#0056b3",
  primaryLight: "#cce7ff",

  // 상태 색상
  success: "#28a745",
  successLight: "#d4edda",
  successDark: "#155724",

  warning: "#ffc107",
  warningLight: "#fff3cd",
  warningDark: "#856404",

  danger: "#dc3545",
  dangerLight: "#f5c6cb",
  dangerDark: "#721c24",

  // 배경 색상
  background: "#f8f9fa",
  surface: "#ffffff",

  // 텍스트 색상
  textPrimary: "#333333",
  textSecondary: "#666666",
  textTertiary: "#888888",
  textMuted: "#5f6368",
} as const;

// Notion 태그 색상 시스템
export const notionColors = {
  backgrounds: {
    default: "#f8f9fa",
    gray: "#f8f9fa",
    brown: "#fdf6e3",
    orange: "#fff4e6",
    yellow: "#fffbf0",
    green: "#f0f9f4",
    blue: "#f0f8ff",
    purple: "#f8f4ff",
    pink: "#fdf2f8",
    red: "#fef2f2",
  },
  borders: {
    default: "#dee2e6",
    gray: "#adb5bd",
    brown: "#d4a574",
    orange: "#fd7e14",
    yellow: "#ffc107",
    green: "#28a745",
    blue: "#007bff",
    purple: "#6f42c1",
    pink: "#e83e8c",
    red: "#dc3545",
  },
  texts: {
    default: "#495057",
    gray: "#495057",
    brown: "#8b4513",
    orange: "#d2691e",
    yellow: "#b8860b",
    green: "#155724",
    blue: "#004085",
    purple: "#6f42c1",
    pink: "#721c24",
    red: "#721c24",
  },
} as const;

// 태그 색상 시스템 (더 부드러운 버전)
export const tagColors = {
  backgrounds: {
    default: "#f1f3f4",
    gray: "#e9ecef",
    brown: "#f4e4bc",
    orange: "#fde2cc",
    yellow: "#fff2cd",
    green: "#d4edda",
    blue: "#cce7ff",
    purple: "#e2d9f3",
    pink: "#f8d7da",
    red: "#f5c6cb",
  },
  texts: {
    default: "#5f6368",
    gray: "#495057",
    brown: "#8b4513",
    orange: "#d2691e",
    yellow: "#b8860b",
    green: "#155724",
    blue: "#004085",
    purple: "#6f42c1",
    pink: "#721c24",
    red: "#721c24",
  },
} as const;

// 색상 유틸리티 함수
export const getNotionColor = (
  colorName: string,
  type: "background" | "border" | "text"
) => {
  const colorKey = colorName as keyof typeof notionColors.backgrounds;
  switch (type) {
    case "background":
      return (
        notionColors.backgrounds[colorKey] || notionColors.backgrounds.default
      );
    case "border":
      return notionColors.borders[colorKey] || notionColors.borders.default;
    case "text":
      return notionColors.texts[colorKey] || notionColors.texts.default;
    default:
      return notionColors.backgrounds.default;
  }
};

export const getTagColor = (colorName: string, type: "background" | "text") => {
  const colorKey = colorName as keyof typeof tagColors.backgrounds;
  switch (type) {
    case "background":
      return tagColors.backgrounds[colorKey] || tagColors.backgrounds.default;
    case "text":
      return tagColors.texts[colorKey] || tagColors.texts.default;
    default:
      return tagColors.backgrounds.default;
  }
};
