import React from "react";
import styled from "@emotion/styled";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (id === "42cabi") {
    return (
      <DetailSection>
        <Container>
          <BackButton to="/projects">
            <FaArrowLeft /> 프로젝트 목록으로 돌아가기
          </BackButton>
          
          <Header>
            <Title>42Cabi</Title>
            <Links>
              <ProjectLink href="https://cabi.42seoul.io/home" target="_blank">
                <FaExternalLinkAlt /> 서비스 바로가기
              </ProjectLink>
              <ProjectLink href="https://github.com/innovationacademy-kr/Cabi" target="_blank">
                <FaGithub /> 깃허브 바로가기
              </ProjectLink>
              <ProjectLink href="https://api-dev.cabi.42seoul.io/demo" target="_blank">
                <FaExternalLinkAlt /> 데모 바로가기
              </ProjectLink>
            </Links>
          </Header>

          <Section>
            <SectionTitle>서비스 개요</SectionTitle>
            <Content>
              <p>42Cabi는 42서울 교육생 1300여 명이 사용하는 사물함 대여 서비스입니다.</p>
              <p>한정된 400개의 사물함 자원을 보다 <strong>공정하고 편리한 사물함 이용 경험을 제공</strong>하기 위해 이 프로젝트를 진행했으며 기존의 사물함 재대여 문제를 해결하고 공유 사물함 정상 이용률을 6%에서 92%까지 향상시킨 성과를 이뤄냈습니다.</p>
            </Content>
          </Section>

          <Section>
            <SectionTitle>공정한 사용을 방해했던 기존 정책의 문제</SectionTitle>
            <Content>
              <ProblemItem>
                <h4>사물함 무한 재대여</h4>
                <p>사용자가 사물함을 반납한 직후 즉시 다시 대여할 수 있어, 일부 사용자가 특정 사물함을 독점하는 문제가 발생하고 있었습니다.</p>
              </ProblemItem>
              <ProblemItem>
                <h4>무기한 공유 사물함 점유</h4>
                <p>공유 사물함은 3명 이상이 모여야 대여 완료가 가능한 구조였고, 이 조건이 충족되지 않아 대다수 사물함이 무기한 점유 상태였습니다.</p>
                <p>(2023년 9월 4일 기준, 총 115개의 공유 사물함 중 108개의 공유 사물함이 만료일 없이 사용되고 있었습니다.)</p>
              </ProblemItem>
            </Content>
          </Section>

          <Section>
            <SectionTitle>사용자 인식을 통해 문제 타당성 검증</SectionTitle>
            <Content>
              <p>공정한 사용을 방해하는 구조적 문제는 분명히 존재했지만, 사용자 입장에서도 이를 실제로 불편하게 느끼고 있는지를 확인하고자 설문조사를 진행했고 총 132명의 응답을 받았습니다.</p>
              
              <SubSection>
                <h4>1. 사용자가 느낀 가장 큰 불편</h4>
                <p>응답자의 36.4%는 '사물함을 무기한 사용할 수 있는 구조'가 가장 큰 문제라고 답했습니다.</p>
                <p><strong>⇒</strong> 구조적인 문제로 인식했던 사물함 순환 정체가 사용자 관점에서도 실질적인 불편 요소로 인식되고 있음을 확인했습니다.</p>
              </SubSection>

              <SubSection>
                <h4>2. 공유 사물함을 선호하지 않는 이유</h4>
                <p>물리적인 공간 문제 외에도, 사생활 노출, 도난 우려 등 신뢰할 수 없는 사용자와의 공유에 대한 불안감이 큰 비중을 차지했습니다. (36%)</p>
                <p><strong>⇒</strong> 공유 사물함의 구조적 제약이 아닌, 심리적 불편과 신뢰 문제 또한 중요한 개선 포인트로 드러났습니다.</p>
              </SubSection>

              <SubSection>
                <h4>3. 선호하는 정책</h4>
                <p>사용자는 교육장 출석 시간에 따라 사물함 이용 기간을 연장받는 구조에 가장 긍정적인 반응을 보였습니다.</p>
                <p><strong>⇒</strong> 실제로 응답자의 59.8%가 출석 시간을 기준으로 혜택을 제공하는 방식을 가장 선호한다고 답해 출석 시간 자체가 합리적인 기준이 될 수 있음을 확인했습니다.</p>
              </SubSection>
            </Content>
          </Section>

          <Section>
            <SectionTitle>문제 정의와 해결 방향 설정</SectionTitle>
            <Content>
              <p>설문을 통해, 기존 구조에 대한 문제 인식이 사용자에게도 명확히 존재함을 확인할 수 있었습니다. 이 결과는 이후 정책 설계와 개선 방향을 수립하는 데 핵심적인 근거가 되었습니다.</p>
              
              <p>이러한 사용자 피드백을 바탕으로 다음 두 가지를 해결이 필요한 주요 문제로 정의했습니다:</p>
              <ul>
                <li><strong>사물함이 정상적으로 순환되지 않는 구조</strong></li>
                <li><strong>모르는 사용자와 함께 사용하는 공유 사물함 구조</strong></li>
              </ul>

              <p>이에 따라 이번 프로젝트의 핵심 목표는 다음과 같이 설정했습니다.</p>
              <ul>
                <li><strong>사물함이 원활하게 순환될 수 있도록 대여 및 반납 구조를 개선</strong></li>
                <li><strong>공유 사물함을 신뢰할 수 있는 방식으로 이용할 수 있도록 구조를 개선</strong></li>
              </ul>
            </Content>
          </Section>

          <Section>
            <SectionTitle>문제 해결을 위한 새로운 정책</SectionTitle>
            <Content>
              <p>저는 확인된 문제들을 단순한 기능 수정이 아닌 정책적인 방향에서 기능을 새롭게 설계해 구조적으로 해결하고자 했습니다. 아래는 각 문제에 맞춰 고민하고 적용한 구체적인 개선 방안입니다.</p>
              
              <PolicyItem>
                <h4>반납 후 대기 시간 및 일괄 오픈 시스템 도입</h4>
                <ul>
                  <li>사용자가 사물함을 반납한 직후 곧바로 다시 대여해 독점하던 문제를 해결하기 위해 반납 후 다음날 13시까지 해당 사물함의 대여를 제한하는 대기 시간을 도입했습니다.</li>
                  <li>그리고 매일 13시에 전날 반납된 사물함을 일괄 오픈함으로써 특정 사용자의 독점을 방지하고 공정한 경쟁 환경을 마련했습니다.</li>
                  <li>이를 통해 사물함의 순환 구조를 개선하고 더 많은 사용자가 대여 기회를 가질 수 있는 구조를 만들 수 있었습니다.</li>
                </ul>
              </PolicyItem>

              <PolicyItem>
                <h4>초대코드 기반의 그룹 대여 방식 도입</h4>
                <ul>
                  <li>기존 공유 사물함은 '3인 조건 충족 시 대여' 방식이었고 이 구조는 1~2명이 무기한 점유하거나 모르는 사용자와의 공유를 유발해 사용성을 크게 저하시켰습니다.</li>
                  <li>이를 해결하기 위해 초대코드를 통한 그룹 대여 방식으로 구조를 전면 개선했습니다.</li>
                  <li>공유 사물함을 신청하면 4자리 초대코드가 발급되며 10분 내에 2~4명이 해당 코드를 입력하면 대여가 확정됩니다.</li>
                  <li>이 방식은 신뢰할 수 있는 사용자끼리 미리 그룹을 구성하도록 유도해 무기한 점유 문제와 심리적 불편을 동시에 해소했습니다.</li>
                </ul>
              </PolicyItem>

              <PolicyItem>
                <h4>출석 시간 기반 연장권 제도</h4>
                <ul>
                  <li>반납 후 대기 시간 도입으로 발생할 수 있는 사용자 불편을 완화하기 위해 교육장 출석 시간을 기준으로 연장권을 제공하는 정책을 설계했습니다.</li>
                  <li>출석 시간에 비례해 연장권을 제공함으로써 사물함이 꼭 필요한 사용자는 안정적으로 이용할 수 있고, 모든 사용자에게는 공정한 기회가 돌아가는 구조를 구현했습니다.</li>
                </ul>
              </PolicyItem>
            </Content>
          </Section>

          <Section>
            <SectionTitle>개발 내용</SectionTitle>
            <Content>
              <DevItem>
                <h4>공유 사물함 대여 UI 구현</h4>
                <p>사용자가 공유 사물함을 신청하면 4자리 초대코드가 발급되고 10분 동안 그룹이 완성될 때까지 대기하는 UX 플로우를 구성했습니다. 단순한 기능 구현을 넘어 사용자의 행동 흐름을 고려한 직관적인 대여 경험을 목표로 했습니다.</p>
                <ul>
                  <li><strong>실시간 카운트다운 타이머 구현</strong>
                    <ul>
                      <li>초대코드 대기 시간을 실시간으로 표시하기 위해 requestAnimationFrame을 사용해 매 프레임마다 타이머를 갱신</li>
                      <li>useRef로 이전 시점을 저장해두고 매 프레임마다 현재 시간과의 차이를 계산해 실제 시간 흐름에 맞춰 남은 시간을 정확하게 줄여나가도록 구현</li>
                    </ul>
                  </li>
                  <li><strong>공유 사물함 신청 및 초대코드 입력 모달 UI 설계 및 구현</strong>
                    <ul>
                      <li>초대코드 입력 실패 3회 제한, 클립보드 복사 기능 등</li>
                      <li>실제 사용 흐름에서 발생할 수 있는 예외 상황을 사전에 고려하여 UX 흐름을 자연스럽게 연결할 수 있도록 설계</li>
                    </ul>
                  </li>
                </ul>
              </DevItem>

              <DevItem>
                <h4>테마 컬러 설정 기능</h4>
                <p>사용자가 자신의 취향에 맞게 화면을 설정할 수 있도록 테마 색상 커스터마이징 기능을 도입해 서비스에 대한 친밀감을 높였습니다.</p>
                <ul>
                  <li>react-color의 colorPicker 라이브러리를 사용하여 테마 컬러 변경 기능 구현</li>
                  <li>테마 컬러 변경에 따라 이미지 색상도 동적으로 반영되도록 관련 이미지들을 SVG 컴포넌트화</li>
                </ul>
              </DevItem>

              <DevItem>
                <h4>홈 화면 리디자인</h4>
                <p>정책 개편 이후 사용자들이 변경된 내용을 <strong>직관적으로 이해하고 탐색</strong>할 수 있는 홈 구조로 개선했습니다.</p>
                <ul>
                  <li>enum을 활용해 콘텐츠 유형 6가지를 정의</li>
                  <li>모달 UI를 하나의 컴포넌트로 통합하고, 제목/이미지/배경 등은 props로 분기 처리</li>
                </ul>
              </DevItem>
            </Content>
          </Section>

          <Section>
            <SectionTitle>프로젝트 결과</SectionTitle>
            <Content>
              <ResultItem>
                <h4>공유 사물함 이용률 6% → 92%로 크게 향상</h4>
                <ul>
                  <li>2023년 9월 4일: 115개 중 7개 정상 사용 (약 6%)</li>
                  <li>2024년 2월 1일: 105개 중 97개 정상 사용 (약 92%)</li>
                </ul>
              </ResultItem>

              <ResultItem>
                <h4>이 경험을 통해</h4>
                <ul>
                  <li>단순한 기능 구현을 넘어 사용자 불편을 데이터로 분석하고 서비스 방향을 설정한 뒤 이를 기능으로 구현하는 전 과정을 직접 경험했습니다.</li>
                  <li>특히 팀 내 의견이 갈릴 때마다 우리가 어떤 문제를 해결하고자 하는지를 계속해서 상기하는 과정이 얼마나 중요한지 깨달았습니다.</li>
                  <li>서로 다른 의견이 충돌이 아닌, 같은 목표를 향한 다양한 접근 방식일 수 있음을 이해하며, 팀워크 속에서 더 나은 해결책을 만들어내는 방법을 배웠습니다.</li>
                </ul>
              </ResultItem>
            </Content>
          </Section>
        </Container>
      </DetailSection>
    );
  }

  return (
    <DetailSection>
      <Container>
        <BackButton to="/projects">
          <FaArrowLeft /> 프로젝트 목록으로 돌아가기
        </BackButton>
        <Title>프로젝트를 찾을 수 없습니다.</Title>
      </Container>
    </DetailSection>
  );
};

const DetailSection = styled.section`
  min-height: 100vh;
  padding: 120px 0 80px;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #6c757d;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: #5a6268;
    transform: translateY(-2px);
  }
`;

const Header = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Links = styled.div`
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

const Section = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #007bff;
  padding-bottom: 0.5rem;
`;

const Content = styled.div`
  line-height: 1.7;
  color: #555;

  p {
    margin-bottom: 1rem;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  strong {
    color: #333;
  }
`;

const SubSection = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;

  h4 {
    color: #333;
    margin-bottom: 0.5rem;
  }
`;

const ProblemItem = styled.div`
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: #fff5f5;
  border-left: 4px solid #dc3545;
  border-radius: 8px;

  h4 {
    color: #dc3545;
    margin-bottom: 0.5rem;
  }
`;

const PolicyItem = styled.div`
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: #f0f8ff;
  border-left: 4px solid #007bff;
  border-radius: 8px;

  h4 {
    color: #007bff;
    margin-bottom: 0.5rem;
  }
`;

const DevItem = styled.div`
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: #f5fff5;
  border-left: 4px solid #28a745;
  border-radius: 8px;

  h4 {
    color: #28a745;
    margin-bottom: 0.5rem;
  }
`;

const ResultItem = styled.div`
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: #fff8e1;
  border-left: 4px solid #ffc107;
  border-radius: 8px;

  h4 {
    color: #e65100;
    margin-bottom: 0.5rem;
  }
`;

export default ProjectDetail;