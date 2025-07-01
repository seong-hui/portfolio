import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects: React.FC = () => {
  return (
    <ProjectsSection>
      <Container>
        <Title>Projects</Title>

        <ProjectItem>
          <ProjectHeader>
            <ProjectTitle to="/projects/42cabi">42Cabi</ProjectTitle>
            <ProjectLinks>
              <ProjectLink href="https://cabi.42seoul.io/home" target="_blank">
                <FaExternalLinkAlt /> 서비스 바로가기
              </ProjectLink>
              <ProjectLink
                href="https://github.com/innovationacademy-kr/Cabi"
                target="_blank"
              >
                <FaGithub /> 깃허브 바로가기
              </ProjectLink>
              <ProjectLink
                href="https://api-dev.cabi.42seoul.io/demo"
                target="_blank"
              >
                <FaExternalLinkAlt /> 데모 바로가기
              </ProjectLink>
            </ProjectLinks>
          </ProjectHeader>

          <ProjectDescription>
            42서울 1300여 명의 학생이 사용하는 사물함 대여 플랫폼입니다. 구조적
            문제를 정의하고 정책 중심의 기능 개선을 통해 사용자 경험과 서비스
            지표를 실질적으로 개선한 프로젝트입니다
          </ProjectDescription>

          <ProjectNote>
            (실제 사이트는 42서울 학생 로그인이 필요합니다. 데모 사이트를 통해
            로그인 없이 서비스를 보실 수 있습니다)
          </ProjectNote>

          <ProjectInfo>
            <InfoItem>
              <strong>기간</strong>: 2023년 5월 – 2024년 2월 (서비스 운영 중)
            </InfoItem>
            <InfoItem>
              <strong>역할</strong>: 프론트엔드, 기획, 디자인
            </InfoItem>
            <InfoItem>
              <strong>팀 구성</strong>: 총 6명 (FE 3명 / BE 3명)
            </InfoItem>
            <InfoItem>
              <strong>기술 스택</strong>: React, TypeScript, Recoil,
              styled-components, Vite
            </InfoItem>
            <InfoItem>
              <strong>수상</strong>: 정보통신기획평가원(IITP) 원장상
            </InfoItem>
          </ProjectInfo>

          <ProjectAchievements>
            <AchievementItem>
              <strong>
                서비스 정책 개선을 통해 공유 사물함 이용률 6% → 92% 향상
              </strong>
              <ul>
                <li>
                  사용자 설문(132건) 분석을 통해 구조적 문제를 도출하고 이를
                  정책 개선 방향으로 구체화해 기능 설계 및 서비스 반영
                </li>
                <li>
                  초대코드 기반 그룹 대여, 출석 시간 기반 연장권, 반납 후 대기
                  시간 등 핵심 정책 기능 기획 및 프론트엔드 구현
                </li>
                <li>
                  정책 기획부터 UI 구현까지 전 과정에 참여하며 사용 흐름 개선과
                  서비스 이용률 향상에 기여
                </li>
              </ul>
            </AchievementItem>
          </ProjectAchievements>
        </ProjectItem>

        <ProjectItem>
          <ProjectHeader>
            <ProjectTitle to="/projects/jeolloga">절로가</ProjectTitle>
            <ProjectLinks>
              <ProjectLink
                href="https://www.gototemplestay.com/"
                target="_blank"
              >
                <FaExternalLinkAlt /> 서비스 바로가기
              </ProjectLink>
              <ProjectLink
                href="https://github.com/JEOLLOGA/JEOLLOGA-CLIENT"
                target="_blank"
              >
                <FaGithub /> 깃허브 바로가기
              </ProjectLink>
            </ProjectLinks>
          </ProjectHeader>

          <ProjectDescription>
            원하는 템플스테이를 가장 쉽게 찾을 수 있는 서비스입니다. 프론트엔드
            리드로 참여하여 사용자 맞춤 검색 필터 기능을 구조적으로 설계하고
            짧은 기간 내 협업 완성도를 높여 서비스의 핵심 기능을 안정적으로
            구현하였습니다.
          </ProjectDescription>

          <ProjectInfo>
            <InfoItem>
              <strong>기간</strong>: 2024년 12월 – 현재 (서비스 운영 중)
            </InfoItem>
            <InfoItem>
              <strong>역할</strong>: 프론트엔드 리드
            </InfoItem>
            <InfoItem>
              <strong>팀 구성</strong>: 총 11명 (FE 4명 / BE 2명 / PM 2명 / PD
              3명)
            </InfoItem>
            <InfoItem>
              <strong>기술 스택</strong>: React, TypeScript, Tanstack-query,
              Vanilla-extract, Vite
            </InfoItem>
          </ProjectInfo>

          <ProjectAchievements>
            <AchievementItem>
              <strong>템플스테이 필터링 및 검색 기능 구현</strong>
              <ul>
                <li>
                  Filter / FilterList 클래스를 설계하여 필터별 상태를 관리
                </li>
                <li>필터 토글, 그룹별 상태 조회, 초기화 기능 등 로직 구현</li>
                <li>
                  필터링 로직을 useFilter hook으로 분리하여 재사용성과
                  유지보수성 강화
                </li>
              </ul>
            </AchievementItem>
            <AchievementItem>
              <strong>
                짧은 기간 내 효율적인 협업을 이끈 프론트엔드 리딩 경험
              </strong>
              <ul>
                <li>
                  2주간의 단기 개발 기간 동안 팀의 공통 목표를 지속적으로
                  상기시키는 문화 설계
                </li>
                <li>
                  "오늘의 할 일" 기록 문화를 도입하여 팀원 간 작업 시각화 및
                  메타인지 향상
                </li>
                <li>
                  매일 밤 데일리 스크럼을 진행하여 정기적인 소통과 팀의 같은
                  방향 인식을 도와 몰입도 높은 협업 경험 구축
                </li>
              </ul>
            </AchievementItem>
            <AchievementItem>
              <strong>GTM 기반 클릭 이벤트 로깅 시스템 구현</strong>
              <ul>
                <li>GTMProvider로 스크립트 삽입 및 초기 이벤트 처리</li>
                <li>useEventLogger 훅으로 클릭 이벤트 dataLayer 전송 자동화</li>
                <li>정의된 이벤트 기준으로 전체 클릭 로깅 구현</li>
              </ul>
            </AchievementItem>
            <AchievementItem>
              <strong>Github Actions을 이용해 CI/CD 자동화</strong>
              <ul>
                <li>
                  dev, prod 서버 분리 운영 및 브랜치 전략에 따른 자동 배포 설정
                </li>
              </ul>
            </AchievementItem>
          </ProjectAchievements>
        </ProjectItem>

        <ProjectItem>
          <ProjectHeader>
            <ProjectTitle>SOPT Makers - Playground 팀</ProjectTitle>
            <ProjectLinks>
              <ProjectLink href="https://playground.sopt.org/" target="_blank">
                <FaExternalLinkAlt /> 서비스 바로가기
              </ProjectLink>
              <ProjectLink
                href="https://github.com/sopt-makers/sopt-playground-frontend"
                target="_blank"
              >
                <FaGithub /> 깃허브 바로가기
              </ProjectLink>
            </ProjectLinks>
          </ProjectHeader>

          <ProjectDescription>
            Playground는 대학생 연합 IT 창업 동아리 SOPT의 모든 기수 회원들이
            언제 어디서든 자유롭게 소통할 수 있도록 연결하는 플랫폼입니다.
            SOPT는 다양한 전공과 개성을 지닌 약 3000명의 회원들과 함께해왔으며
            Playground는 이들이 자연스럽게 관계를 맺고 교류할 수 있도록 다양한
            연결 방식을 고민하고 있습니다.
          </ProjectDescription>

          <ProjectInfo>
            <InfoItem>
              <strong>기간</strong>: 2025년 2월 – 현재 (서비스 운영 중)
            </InfoItem>
            <InfoItem>
              <strong>역할</strong>: 프론트엔드
            </InfoItem>
            <InfoItem>
              <strong>팀 구성</strong>: 총 7명 (FE 2명 / BE 2명 / PM 1명 / PD
              2명)
            </InfoItem>
            <InfoItem>
              <strong>기술 스택</strong>: React, Next.js, TypeScript, Emotion,
              Tanstack-Query
            </InfoItem>
          </ProjectInfo>

          <ProjectAchievements>
            <AchievementItem>
              <strong>
                커뮤니티 활성화를 위한 커뮤니티 메인 화면 구조 개편
              </strong>
              <ul>
                <li>기존 전체글 중심 구조 → HOT 게시판 중심으로 전면 개편</li>
                <li>'답변 대기 질문', '최신 아티클' 등 신규 콘텐츠 UI 개발</li>
                <li>
                  스켈레톤 UI 적용으로 비동기 데이터 로딩 중에도 자연스러운
                  사용자 경험 제공
                </li>
              </ul>
            </AchievementItem>
            <AchievementItem>
              <strong>아티클 업로드 기능 및 게시 UI 구현</strong>
              <ul>
                <li>아티클 등록 구좌 영역 구성 및 업로드 기능 구현</li>
                <li>게시된 아티클의 콘텐츠/작성자/링크 등 정보 노출 UI 개발</li>
              </ul>
            </AchievementItem>
          </ProjectAchievements>
        </ProjectItem>

        <ProjectItem>
          <ProjectHeader>
            <ProjectTitle>Shellin</ProjectTitle>
            <ProjectLinks>
              <ProjectLink href="https://shellin.kr/" target="_blank">
                <FaExternalLinkAlt /> 서비스 바로가기
              </ProjectLink>
              <ProjectLink
                href="https://github.com/TEAM-DAWM/SHELLIN-CLIENT"
                target="_blank"
              >
                <FaGithub /> 깃허브 바로가기
              </ProjectLink>
            </ProjectLinks>
          </ProjectHeader>

          <ProjectDescription>
            해야 할 모든 일을 한곳에 정리하고 하루 일정을 유연하게 계획할 수
            있도록 만든 일정 관리 서비스입니다. 실제 일상에서 느꼈던 일정 관리의
            불편함을 해결하고자 기획에 참여하고 개발 중입니다.
          </ProjectDescription>

          <ProjectInfo>
            <InfoItem>
              <strong>기간</strong>: 2024년 7월 – 현재 (서비스 운영 중)
            </InfoItem>
            <InfoItem>
              <strong>역할</strong>: 프론트엔드, 기획
            </InfoItem>
            <InfoItem>
              <strong>팀 구성</strong>: 총 8명 (FE 4명 / BE 2명 / PD 2명)
            </InfoItem>
            <InfoItem>
              <strong>기술 스택</strong>: React, TypeScript, Emotion,
              Tanstack-Query, Vite
            </InfoItem>
          </ProjectInfo>

          <ProjectAchievements>
            <AchievementItem>
              <ul>
                <li>일정 수정 모달 기능 구현</li>
                <li>
                  Context API 기반 Toast 알림 시스템 개발로 전역 알림 관리
                </li>
                <li>
                  fullCalendar 라이브러리 커스텀을 통해 UI 디자인을 맞춤 구현
                </li>
                <li>구글 로그인 및 구글 캘린더 연동 기능 구현</li>
              </ul>
            </AchievementItem>
          </ProjectAchievements>
        </ProjectItem>
      </Container>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 120px 0 80px;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  color: #333;
`;

const ProjectItem = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ProjectTitle = styled(Link)`
  font-size: 2rem;
  color: #333;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 1rem;
`;

const ProjectNote = styled.p`
  font-size: 0.95rem;
  color: #777;
  font-style: italic;
  margin-bottom: 1.5rem;
`;

const ProjectInfo = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  color: #666;

  &:last-child {
    margin-bottom: 0;
  }

  strong {
    color: #333;
  }
`;

const ProjectAchievements = styled.div`
  margin-top: 2rem;
`;

const AchievementItem = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  strong {
    display: block;
    color: #333;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  ul {
    margin: 0;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
      line-height: 1.6;
      color: #666;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export default Projects;
