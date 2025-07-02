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
            </Links>
          </Header>

          <Section>
            <SectionTitle>서비스 개요</SectionTitle>
            <Content>
              <p>
                42Cabi는 42서울 교육생 1300여 명이 사용하는 사물함 대여
                서비스입니다.
              </p>
              <p>
                한정된 400개의 사물함 자원을 보다{" "}
                <strong>공정하고 편리한 사물함 이용 경험을 제공</strong>하기
                위해 이 프로젝트를 진행했으며 기존의 사물함 재대여 문제를
                해결하고 공유 사물함 정상 이용률을 6%에서 92%까지 향상시킨
                성과를 이뤄냈습니다.
              </p>
            </Content>
          </Section>

          <Section>
            <SectionTitle>공정한 사용을 방해했던 기존 정책의 문제</SectionTitle>
            <Content>
              <ProblemItem>
                <h4>사물함 무한 재대여</h4>
                <p>
                  사용자가 사물함을 반납한 직후 즉시 다시 대여할 수 있어, 일부
                  사용자가 특정 사물함을 독점하는 문제가 발생하고 있었습니다.
                </p>
              </ProblemItem>
              <ProblemItem>
                <h4>무기한 공유 사물함 점유</h4>
                <p>
                  공유 사물함은 3명 이상이 모여야 대여 완료가 가능한 구조였고,
                  이 조건이 충족되지 않아 대다수 사물함이 무기한 점유
                  상태였습니다.
                </p>
                <p>
                  (2023년 9월 4일 기준, 총 115개의 공유 사물함 중 108개의 공유
                  사물함이 만료일 없이 사용되고 있었습니다.)
                </p>
              </ProblemItem>
            </Content>
          </Section>

          <Section>
            <SectionTitle>사용자 인식을 통해 문제 타당성 검증</SectionTitle>
            <Content>
              <p>
                공정한 사용을 방해하는 구조적 문제는 분명히 존재했지만, 사용자
                입장에서도 이를 실제로 불편하게 느끼고 있는지를 확인하고자
                설문조사를 진행했고 총 132명의 응답을 받았습니다.
              </p>

              <SubSection>
                <h4>1. 사용자가 느낀 가장 큰 불편</h4>
                <p>
                  응답자의 36.4%는 '사물함을 무기한 사용할 수 있는 구조'가 가장
                  큰 문제라고 답했습니다.
                </p>
                <p>
                  <strong>⇒</strong> 구조적인 문제로 인식했던 사물함 순환 정체가
                  사용자 관점에서도 실질적인 불편 요소로 인식되고 있음을
                  확인했습니다.
                </p>
              </SubSection>

              <SubSection>
                <h4>2. 공유 사물함을 선호하지 않는 이유</h4>
                <p>
                  물리적인 공간 문제 외에도, 사생활 노출, 도난 우려 등 신뢰할 수
                  없는 사용자와의 공유에 대한 불안감이 큰 비중을 차지했습니다.
                  (36%)
                </p>
                <p>
                  <strong>⇒</strong> 공유 사물함의 구조적 제약이 아닌, 심리적
                  불편과 신뢰 문제 또한 중요한 개선 포인트로 드러났습니다.
                </p>
              </SubSection>

              <SubSection>
                <h4>3. 선호하는 정책</h4>
                <p>
                  사용자는 교육장 출석 시간에 따라 사물함 이용 기간을 연장받는
                  구조에 가장 긍정적인 반응을 보였습니다.
                </p>
                <p>
                  <strong>⇒</strong> 실제로 응답자의 59.8%가 출석 시간을
                  기준으로 혜택을 제공하는 방식을 가장 선호한다고 답해 출석 시간
                  자체가 합리적인 기준이 될 수 있음을 확인했습니다.
                </p>
              </SubSection>
            </Content>
          </Section>

          <Section>
            <SectionTitle>문제 정의와 해결 방향 설정</SectionTitle>
            <Content>
              <p>
                설문을 통해, 기존 구조에 대한 문제 인식이 사용자에게도 명확히
                존재함을 확인할 수 있었습니다. 이 결과는 이후 정책 설계와 개선
                방향을 수립하는 데 핵심적인 근거가 되었습니다.
              </p>

              <p>
                이러한 사용자 피드백을 바탕으로 다음 두 가지를 해결이 필요한
                주요 문제로 정의했습니다:
              </p>
              <ul>
                <li>
                  <strong>사물함이 정상적으로 순환되지 않는 구조</strong>
                </li>
                <li>
                  <strong>
                    모르는 사용자와 함께 사용하는 공유 사물함 구조
                  </strong>
                </li>
              </ul>

              <p>
                이에 따라 이번 프로젝트의 핵심 목표는 다음과 같이 설정했습니다.
              </p>
              <ul>
                <li>
                  <strong>
                    사물함이 원활하게 순환될 수 있도록 대여 및 반납 구조를 개선
                  </strong>
                </li>
                <li>
                  <strong>
                    공유 사물함을 신뢰할 수 있는 방식으로 이용할 수 있도록
                    구조를 개선
                  </strong>
                </li>
              </ul>
            </Content>
          </Section>

          <Section>
            <SectionTitle>문제 해결을 위한 새로운 정책</SectionTitle>
            <Content>
              <p>
                저는 확인된 문제들을 단순한 기능 수정이 아닌 정책적인 방향에서
                기능을 새롭게 설계해 구조적으로 해결하고자 했습니다. 아래는 각
                문제에 맞춰 고민하고 적용한 구체적인 개선 방안입니다.
              </p>

              <PolicyItem>
                <h4>반납 후 대기 시간 및 일괄 오픈 시스템 도입</h4>
                <ul>
                  <li>
                    사용자가 사물함을 반납한 직후 곧바로 다시 대여해 독점하던
                    문제를 해결하기 위해 반납 후 다음날 13시까지 해당 사물함의
                    대여를 제한하는 대기 시간을 도입했습니다.
                  </li>
                  <li>
                    그리고 매일 13시에 전날 반납된 사물함을 일괄 오픈함으로써
                    특정 사용자의 독점을 방지하고 공정한 경쟁 환경을
                    마련했습니다.
                  </li>
                  <li>
                    이를 통해 사물함의 순환 구조를 개선하고 더 많은 사용자가
                    대여 기회를 가질 수 있는 구조를 만들 수 있었습니다.
                  </li>
                </ul>
              </PolicyItem>

              <PolicyItem>
                <h4>초대코드 기반의 그룹 대여 방식 도입</h4>
                <ul>
                  <li>
                    기존 공유 사물함은 '3인 조건 충족 시 대여' 방식이었고 이
                    구조는 1~2명이 무기한 점유하거나 모르는 사용자와의 공유를
                    유발해 사용성을 크게 저하시켰습니다.
                  </li>
                  <li>
                    이를 해결하기 위해 초대코드를 통한 그룹 대여 방식으로 구조를
                    전면 개선했습니다.
                  </li>
                  <li>
                    공유 사물함을 신청하면 4자리 초대코드가 발급되며 10분 내에
                    2~4명이 해당 코드를 입력하면 대여가 확정됩니다.
                  </li>
                  <li>
                    이 방식은 신뢰할 수 있는 사용자끼리 미리 그룹을 구성하도록
                    유도해 무기한 점유 문제와 심리적 불편을 동시에 해소했습니다.
                  </li>
                </ul>
              </PolicyItem>

              <PolicyItem>
                <h4>출석 시간 기반 연장권 제도</h4>
                <ul>
                  <li>
                    반납 후 대기 시간 도입으로 발생할 수 있는 사용자 불편을
                    완화하기 위해 교육장 출석 시간을 기준으로 연장권을 제공하는
                    정책을 설계했습니다.
                  </li>
                  <li>
                    출석 시간에 비례해 연장권을 제공함으로써 사물함이 꼭 필요한
                    사용자는 안정적으로 이용할 수 있고, 모든 사용자에게는 공정한
                    기회가 돌아가는 구조를 구현했습니다.
                  </li>
                </ul>
              </PolicyItem>
            </Content>
          </Section>

          <Section>
            <SectionTitle>개발 내용</SectionTitle>
            <Content>
              <DevItem>
                <h4>공유 사물함 대여 UI 구현</h4>
                <p>
                  사용자가 공유 사물함을 신청하면 4자리 초대코드가 발급되고 10분
                  동안 그룹이 완성될 때까지 대기하는 UX 플로우를 구성했습니다.
                  단순한 기능 구현을 넘어 사용자의 행동 흐름을 고려한 직관적인
                  대여 경험을 목표로 했습니다.
                </p>
                <ul>
                  <li>
                    <strong>실시간 카운트다운 타이머 구현</strong>
                    <ul>
                      <li>
                        초대코드 대기 시간을 실시간으로 표시하기 위해
                        requestAnimationFrame을 사용해 매 프레임마다 타이머를
                        갱신
                      </li>
                      <li>
                        useRef로 이전 시점을 저장해두고 매 프레임마다 현재
                        시간과의 차이를 계산해 실제 시간 흐름에 맞춰 남은 시간을
                        정확하게 줄여나가도록 구현
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>
                      공유 사물함 신청 및 초대코드 입력 모달 UI 설계 및 구현
                    </strong>
                    <ul>
                      <li>
                        초대코드 입력 실패 3회 제한, 클립보드 복사 기능 등
                      </li>
                      <li>
                        실제 사용 흐름에서 발생할 수 있는 예외 상황을 사전에
                        고려하여 UX 흐름을 자연스럽게 연결할 수 있도록 설계
                      </li>
                    </ul>
                  </li>
                </ul>
              </DevItem>

              <DevItem>
                <h4>테마 컬러 설정 기능</h4>
                <p>
                  사용자가 자신의 취향에 맞게 화면을 설정할 수 있도록 테마 색상
                  커스터마이징 기능을 도입해 서비스에 대한 친밀감을 높였습니다.
                </p>
                <ul>
                  <li>
                    react-color의 colorPicker 라이브러리를 사용하여 테마 컬러
                    변경 기능 구현
                  </li>
                  <li>
                    테마 컬러 변경에 따라 이미지 색상도 동적으로 반영되도록 관련
                    이미지들을 SVG 컴포넌트화
                  </li>
                </ul>
              </DevItem>

              <DevItem>
                <h4>홈 화면 리디자인</h4>
                <p>
                  정책 개편 이후 사용자들이 변경된 내용을{" "}
                  <strong>직관적으로 이해하고 탐색</strong>할 수 있는 홈 구조로
                  개선했습니다.
                </p>
                <ul>
                  <li>enum을 활용해 콘텐츠 유형 6가지를 정의</li>
                  <li>
                    모달 UI를 하나의 컴포넌트로 통합하고, 제목/이미지/배경 등은
                    props로 분기 처리
                  </li>
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
                  <li>
                    단순한 기능 구현을 넘어 사용자 불편을 데이터로 분석하고
                    서비스 방향을 설정한 뒤 이를 기능으로 구현하는 전 과정을
                    직접 경험했습니다.
                  </li>
                  <li>
                    특히 팀 내 의견이 갈릴 때마다 우리가 어떤 문제를 해결하고자
                    하는지를 계속해서 상기하는 과정이 얼마나 중요한지
                    깨달았습니다.
                  </li>
                  <li>
                    서로 다른 의견이 충돌이 아닌, 같은 목표를 향한 다양한 접근
                    방식일 수 있음을 이해하며, 팀워크 속에서 더 나은 해결책을
                    만들어내는 방법을 배웠습니다.
                  </li>
                </ul>
              </ResultItem>
            </Content>
          </Section>
        </Container>
      </DetailSection>
    );
  }

  if (id === "jeolloga") {
    return (
      <DetailSection>
        <Container>
          <BackButton to="/projects">
            <FaArrowLeft /> 프로젝트 목록으로 돌아가기
          </BackButton>

          <Header>
            <Title>절로가</Title>
            <Links>
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
            </Links>
          </Header>

          <Section>
            <SectionTitle>서비스 소개</SectionTitle>
            <Content>
              <p>
                원하는 템플스테이를 쉽고 빠르게 찾을 수 있는 검색 기반 탐색
                서비스입니다.
              </p>

              <FeatureItem>
                <h4>세분화된 검색 필터</h4>
                <p>
                  지역 / 유형 / 목적 / 체험 / 가격 등 다양한 조건을 조합하여
                  원하는 템플스테이를 빠르게 찾을 수 있습니다.
                </p>
              </FeatureItem>

              <FeatureItem>
                <h4>찜 기능</h4>
                <p>
                  관심 있는 템플스테이를 저장해두고, 나중에 다시 쉽게 확인할 수
                  있습니다.
                </p>
              </FeatureItem>

              <FeatureItem>
                <h4>템플스테이 상세 페이지</h4>
                <p>
                  해당 템플스테이의 블로그 후기, 프로그램 일정, 가격 정보, 위치
                  지도를 한눈에 확인할 수 있습니다.
                </p>
                <p>
                  크롤링 기반 후기 통합으로 각 블로그를 일일이 방문하지 않아도
                  사용자 리뷰를 한 곳에서 볼 수 있습니다.
                </p>
              </FeatureItem>
            </Content>
          </Section>

          <Section>
            <SectionTitle>개발 내용</SectionTitle>
            <Content>
              <DevItem>
                <h4>템플스테이 검색 필터 기능 구현</h4>

                <SubSection>
                  <h5>기능 개요</h5>
                  <ul>
                    <li>
                      약 50개의 필터 항목(지역, 체험 유형, 프로그램 특징 등) 중
                      원하는 조건을 자유롭게 조합할 수 있습니다.
                    </li>
                    <li>
                      선택한 조건에 따라 템플스테이 검색 결과는 실시간으로
                      반영됩니다.
                    </li>
                  </ul>
                </SubSection>

                <SubSection>
                  <h5>초기 구조의 문제</h5>
                  <p>
                    서버에서는 초기 아래와 같은 비트 문자열 구조를 요청했습니다.
                  </p>
                  <CodeBlock>"01010100011010"</CodeBlock>
                  <p>
                    그러나 이 방식은 다음과 같은 한계를 가진다고 생각했습니다.
                  </p>
                  <ul>
                    <li>
                      <strong>순서 의존</strong> → 필터 순서가 바뀌면 서버와
                      동기화가 무너짐
                    </li>
                    <li>
                      <strong>가독성 부족</strong> → 선택된 필터가 무엇인지 쉽게
                      파악하기 어려움
                    </li>
                    <li>
                      <strong>확장성 부족</strong> → 필터 항목이 변경되면 전체
                      구조를 수정해야 함
                    </li>
                  </ul>
                </SubSection>

                <SubSection>
                  <h5>개선 구조 제안 및 서버 협의</h5>
                  <p>
                    서버와의 협업을 통해 실제 API 구조에 반영되었고, 이후 모든
                    필터 상태는 명확한 구조로 관리되고 있습니다.
                  </p>
                  <CodeBlock>
                    {`{
  "region": {
    "서울": 1,
    "부산": 0
    ...
  },
  "type": {
    "체험형": 1,
    "휴식형": 0
  },
  ...
}`}
                  </CodeBlock>
                  <p>
                    <strong>구조 개선의 효과</strong>
                  </p>
                  <ul>
                    <li>
                      선택 항목을 명확히 표현할 수 있어 디버깅 및 유지보수 용이
                    </li>
                    <li>필터 그룹 추가/수정에 유연하게 대응 가능</li>
                    <li>서버와의 계약 구조가 명확해져 확장성과 안정성 확보</li>
                  </ul>
                </SubSection>

                <SubSection>
                  <h5>구조 설계: 클래스 기반 필터 모델</h5>
                  <p>
                    <strong>Filter 클래스</strong>
                  </p>
                  <p>
                    Filter 클래스는 필터 항목 하나의 상태와 동작(토글, 조회)을
                    관리합니다.
                  </p>
                  <CodeBlock>
                    {`class Filter {
  private name: string;
  private group: string;
  private state: number;

  constructor(name: string, group: string, state = 0) { ... }

  toggleStatus(): void { ... }
  getState(): number { ... }
  getGroup(): string { ... }
  ...
}`}
                  </CodeBlock>

                  <p>
                    <strong>FilterList 클래스</strong>
                  </p>
                  <p>
                    FilterList는 전체 필터를 관리하며, 상태 초기화, 그룹별 정리,
                    서버 전송 구조로 가공하는 책임을 가집니다.
                  </p>
                  <p>
                    전체 필터를 Map&lt;string, Filter&gt; 형태로 저장하여, 이름
                    기준으로 O(1) 접근이 가능하도록 설계했습니다.
                  </p>
                  <CodeBlock>
                    {`class FilterList {
  private filters: Map<string, Filter>;

  constructor(initData: Record<string, string[]>) { ... }

  toggleStatus(name: string): void { ... }
  getGroupedStates(): Record<string, Record<string, number>> { ... }
  ...
}`}
                  </CodeBlock>
                </SubSection>

                <SubSection>
                  <h5>전역 상태 공유 – 모듈 단위 싱글턴 구현</h5>
                  <ul>
                    <li>
                      필터는 여러 컴포넌트와 페이지에서 공통으로 사용되므로
                      일관된 전역 상태 관리가 필요했습니다.
                    </li>
                    <li>
                      JavaScript의 ES 모듈은 처음 import될 때 한 번만 평가되며,
                      그 이후에는 캐싱된 인스턴스를 재사용합니다.
                    </li>
                    <li>
                      이 특성을 활용해, 별도의 상태 관리 라이브러리 없이도 필터
                      모델을 싱글턴으로 구현할 수 있었습니다.
                    </li>
                  </ul>
                </SubSection>

                <SubSection>
                  <h5>useFilter 훅 구현</h5>
                  <ul>
                    <li>
                      필터 상태 관리 로직을 useFilter 커스텀 훅으로 캡슐화해,
                      컴포넌트에서 손쉽게 사용할 수 있도록 구현했습니다.
                    </li>
                    <li>
                      필터 토글, 초기화, 상태 조회 등 주요 기능을 일관된
                      인터페이스로 제공해 컴포넌트 간 재사용성과 유지보수성을
                      높였습니다.
                    </li>
                  </ul>
                </SubSection>

                <SubSection>
                  <h5>설계 및 구현 요약</h5>
                  <ul>
                    <li>
                      필터 상태는 클래스 기반으로 설계해, 상태 조작과 유지보수가
                      명확하고 일관되게 이루어지도록 했습니다.
                    </li>
                    <li>
                      전역 인스턴스를 모듈 단위로 공유해, 상태 일관성을 유지하고
                      불필요한 인스턴스 생성을 방지했습니다.
                    </li>
                    <li>
                      useFilter 훅을 통해 컴포넌트 간 재사용성과 캡슐화된
                      인터페이스를 제공했습니다.
                    </li>
                    <li>
                      서버와의 협업 과정에서 전달 데이터 구조를 직접 제안하고
                      실제 API 구조에 반영되도록 이끌었습니다.
                    </li>
                  </ul>
                </SubSection>

                <SubSection>
                  <h5>이 경험을 통해</h5>
                  <p>
                    이 경험을 통해 커스텀 훅 추상화와 모듈 캐싱 기반 싱글턴
                    패턴을 실제 서비스에 적용해보며, 재사용 가능한 상태 관리
                    구조를 설계하는 감각을 익힐 수 있었습니다.
                  </p>
                  <p>
                    단순히 UI를 구현하는 것을 넘어 상태를 어떻게 설계하고 유지할
                    것인지, 서버와 어떤 형식으로 소통해야 구조적으로 안정적인
                    협업이 되는지 깊이 고민할 수 있었던 계기가 되었습니다.
                  </p>
                  <p>
                    초기 설계부터 구조 개선, 협업 제안까지 직접 주도하면서,
                    기능을 작동하게 만드는 것을 넘어서 확장 가능하고 명확하게
                    설계된 구조의 중요성을 실감할 수 있었습니다.
                  </p>
                </SubSection>
              </DevItem>
            </Content>
          </Section>

          <Section>
            <SectionTitle>협업 과정</SectionTitle>
            <Content>
              <p>
                프론트엔드 리드로서 단순히 개발을 이끄는 것을 넘어, 2주간의 짧은
                개발 기간 동안 팀이 한 방향으로 흔들림 없이 나아갈 수 있도록
                협업 문화를 설계하고 주도했습니다.
              </p>

              <CollabItem>
                <h4>스스로 기록하는 오늘의 할 일</h4>
                <ul>
                  <li>
                    팀원 각자가 매일 하루의 작업 계획을 직접 작성하고
                    공유했습니다.
                  </li>
                  <li>
                    이 과정을 통해 각자의 목표와 진행 상황이 시각화되었고, 메타
                    인지력과 책임감을 높이는 습관이 자연스럽게 자리 잡았습니다.
                  </li>
                </ul>
              </CollabItem>

              <CollabItem>
                <h4>매일 밤에 진행한 데일리 스크럼</h4>
                <ul>
                  <li>
                    매일 밤, 각자의 완료한 작업 / 진행 중인 작업 / 발생한 이슈를
                    공유했습니다.
                  </li>
                  <li>
                    단순한 일정 공유를 넘어 "우리는 지금 무엇을 만들고자
                    하는가"를 함께 되짚는 시간을 만들고자 했습니다.
                  </li>
                  <li>
                    각자의 역할이 전체 목표에 어떻게 기여하고 있는지를 인식하며
                    서로의 속도를 존중하고 리듬을 맞춰가는 협업 환경을 만들고자
                    했습니다.
                  </li>
                </ul>
                <p>
                  <em>
                    한 팀원은 "적당한 긴장감과 동기부여가 생겨 하루를 더 집중
                    있게 보낼 수 있었다"고 말해주었고 그 말은 오랫동안 기억에
                    남았습니다.
                  </em>
                </p>
              </CollabItem>

              <CollabItem>
                <h4>이 경험을 통해</h4>
                <SubSection>
                  <h5>목표 공유의 중요성</h5>
                  <p>
                    프로젝트를 진행하며{" "}
                    <strong>
                      '우리가 같은 목표를 향해 나아가고 있다'는 감각을 팀과
                      끊임없이 공유하는 것 자체
                    </strong>
                    가 프로덕트를 완성도 있게 만들어가는 데 있어 핵심이라는 걸
                    배웠습니다.
                  </p>
                  <p>
                    단순히 작업을 나누는 수준을 넘어서{" "}
                    <strong>
                      '무엇을, 왜 만들고 있는가'를 함께 상기시키는 문화
                    </strong>
                    가 팀 전체의 몰입도와 결과물의 방향성을 결정짓는다는 것을
                    체감했습니다.
                  </p>
                </SubSection>

                <SubSection>
                  <h5>정기적인 소통의 힘</h5>
                  <p>
                    하루의 시작과 끝을 정리하는 루틴은 팀 전체를 하나로 연결하는
                    강력한 도구였습니다. 이 흐름 덕분에 팀원 모두가 같은 맥락
                    안에서 빠르게 몰입할 수 있었고{" "}
                    <strong>
                      정기적인 공유가 팀의 몰입과 안정감에 큰 영향을 준다는 것을
                    </strong>{" "}
                    실감했습니다.
                  </p>
                </SubSection>
              </CollabItem>
            </Content>
          </Section>
        </Container>
      </DetailSection>
    );
  }

  if (id === "shellin") {
    return (
      <DetailSection>
        <Container>
          <BackButton to="/projects">
            <FaArrowLeft /> 프로젝트 목록으로 돌아가기
          </BackButton>

          <Header>
            <Title>Shellin</Title>
            <Links>
              <ProjectLink href="https://shellin.kr/" target="_blank">
                <FaExternalLinkAlt /> 서비스 바로가기
              </ProjectLink>
              <ProjectLink
                href="https://github.com/TEAM-DAWM/SHELLIN-CLIENT"
                target="_blank"
              >
                <FaGithub /> 깃허브 바로가기
              </ProjectLink>
            </Links>
          </Header>

          <Section>
            <SectionTitle>Shellin이 만들어진 이유</SectionTitle>
            <Content>
              <p>
                하루를 더 잘 설계하고 싶다는 필요에서 출발한 프로젝트입니다.
              </p>

              <p>
                처음에는 단순히 해야 할 일을 메모장에 적고 지우는 습관에서
                시작했지만 점차 작업별 소요 시간, 하루의 흐름, 우선순위를 더 잘
                파악하고 싶어졌습니다.
              </p>

              <p>그러나 기존 도구들은 분산되어 있었습니다:</p>
              <ul>
                <li>일정은 메모장에</li>
                <li>오늘의 할 일은 할 일 앱에</li>
                <li>전체 스케줄은 캘린더로 확인해야 했습니다.</li>
              </ul>

              <p>
                이처럼 일정 관리가 도구 간 분절되어 흐름이 끊기는 경험을
                개선하고자,
              </p>

              <p>
                <strong>
                  할 일 기록 → 오늘 계획 수립 → 시간 배치까지 한 흐름으로
                  이어지는 일정 관리 도구 Shellin을 기획,개발하게 되었습니다.
                </strong>
              </p>
            </Content>
          </Section>

          <Section>
            <SectionTitle>핵심 기능</SectionTitle>
            <Content>
              <FeatureItem>
                <h4>해야 할 일 전부 기록 (언젠가 할 일 포함)</h4>
                <ul>
                  <li>
                    오늘 당장 하지 않아도 될 일을 포함한 모든 작업 기록 가능
                  </li>
                  <li>
                    최신순, 오래된 순, 마감일 순 등 원하는 기준으로 정렬 가능
                  </li>
                  <li>각 작업은 할 일 / 진행중 / 완료로 상태 분리 가능</li>
                </ul>
              </FeatureItem>

              <FeatureItem>
                <h4>오늘 계획으로 끌어오기</h4>
                <ul>
                  <li>
                    기록된 작업을 오늘 계획에 드래그 앤 드롭으로 간편하게 추가
                  </li>
                  <li>
                    완료되지 않은 작업은 자동으로 다음 날로 이월되어 누락 방지
                  </li>
                </ul>
              </FeatureItem>

              <FeatureItem>
                <h4>타임라인 기반 일정 시각화</h4>
                <ul>
                  <li>
                    오늘의 할 일을 시간 블록 단위로 배치해 하루의 흐름을 한눈에
                    파악
                  </li>
                  <li>
                    주간 / 월간 단위로 전환해 큰 일정 흐름까지 함께 관리 가능
                  </li>
                </ul>
              </FeatureItem>
            </Content>
          </Section>

          <Section>
            <SectionTitle>개발 내용</SectionTitle>
            <Content>
              <DevItem>
                <h4>주요 기능 구현</h4>
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
              </DevItem>

              <DevItem>
                <h4>Toast 알림 시스템 구현</h4>
                <p>
                  Context API를 활용해 전역에서 사용 가능한 Toast 알림 시스템을
                  구현했습니다.
                </p>
                <ul>
                  <li>ToastProvider로 전역 상태 관리</li>
                  <li>useToast 훅으로 간편한 사용 인터페이스 제공</li>
                  <li>성공, 오류, 정보 등 다양한 타입의 알림 지원</li>
                  <li>자동 사라짐 및 수동 닫기 기능</li>
                </ul>
              </DevItem>

              <DevItem>
                <h4>fullCalendar 커스터마이징</h4>
                <p>
                  fullCalendar 라이브러리를 프로젝트의 디자인 시스템에 맞게
                  커스터마이징했습니다.
                </p>
                <ul>
                  <li>CSS 변수를 활용한 테마 색상 적용</li>
                  <li>커스텀 이벤트 렌더링으로 일관된 UI 제공</li>
                  <li>드래그 앤 드롭 기능을 통한 직관적인 일정 수정</li>
                  <li>모바일 반응형 디자인 적용</li>
                </ul>
              </DevItem>

              <DevItem>
                <h4>구글 서비스 연동</h4>
                <p>
                  구글 로그인과 구글 캘린더 연동을 통해 사용자 편의성을
                  높였습니다.
                </p>
                <ul>
                  <li>Google OAuth 2.0을 활용한 안전한 로그인 구현</li>
                  <li>Google Calendar API를 통한 일정 동기화</li>
                  <li>기존 구글 캘린더 일정을 Shellin으로 가져오기</li>
                  <li>Shellin에서 작성한 일정을 구글 캘린더로 내보내기</li>
                </ul>
              </DevItem>
            </Content>
          </Section>

          <Section>
            <SectionTitle>프로젝트를 통해 얻은 경험</SectionTitle>
            <Content>
              <ResultItem>
                <h4>사용자 중심 사고의 중요성</h4>
                <p>
                  단순히 기능을 나열하는 것이 아니라, 실제 사용자가 어떤 문제를
                  겪고 있는지를 깊이 이해하고 이를 해결하는 방향으로 서비스를
                  설계하는 경험을 했습니다.
                </p>
              </ResultItem>

              <ResultItem>
                <h4>전역 상태 관리의 중요성</h4>
                <p>
                  Toast 알림 시스템을 구현하면서 Context API를 활용한 전역 상태
                  관리의 효율성을 체감했습니다. 컴포넌트 간 상태 공유와 일관된
                  사용자 경험 제공의 중요성을 배웠습니다.
                </p>
              </ResultItem>

              <ResultItem>
                <h4>라이브러리 커스터마이징 역량</h4>
                <p>
                  fullCalendar를 프로젝트에 맞게 커스터마이징하면서, 기존
                  라이브러리를 활용하면서도 원하는 디자인과 기능을 구현하는
                  능력을 기렀습니다.
                </p>
              </ResultItem>

              <ResultItem>
                <h4>외부 API 연동 경험</h4>
                <p>
                  구글 로그인과 캘린더 API 연동을 통해 외부 서비스와의 연동
                  경험을 쌓았습니다. OAuth 인증 플로우와 API 호출 최적화에 대해
                  학습할 수 있었습니다.
                </p>
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
  padding: 40px 0 80px;
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

const FeatureItem = styled.div`
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

const CodeBlock = styled.pre`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem 0;
  overflow-x: auto;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 0.9rem;
  color: #333;
`;

const CollabItem = styled.div`
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: #f5f0ff;
  border-left: 4px solid #6f42c1;
  border-radius: 8px;

  h4 {
    color: #6f42c1;
    margin-bottom: 0.5rem;
  }

  em {
    color: #6c757d;
    font-style: italic;
  }
`;

export default ProjectDetail;
