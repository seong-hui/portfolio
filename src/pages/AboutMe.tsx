import React from "react";
import styled from "@emotion/styled";

const AboutMe: React.FC = () => {
  return (
    <AboutMeSection>
      <Container>
        <Title>About Me</Title>
        <Content>
          <p>
            안녕하세요! 저는 사용자 중심의 웹 애플리케이션을 개발하는 것을
            좋아하는 개발자입니다.
          </p>
          <p>
            새로운 기술을 배우고 적용하는 것에 열정을 가지고 있으며, 깔끔하고
            효율적인 코드를 작성하기 위해 노력합니다.
          </p>
          <p>
            문제 해결을 통해 사용자에게 가치를 제공하는 것이 저의 개발
            철학입니다.
          </p>
        </Content>

        <Section>
          <SectionTitle>☑︎ Work Experience</SectionTitle>

          <ExperienceItem>
            <ExperienceHeader>
              <ExperienceTitle>리콘랩스</ExperienceTitle>
              <ExperiencePeriod>2025.07 - 진행중</ExperiencePeriod>
            </ExperienceHeader>
            <ExperienceDescription>Software Engineer</ExperienceDescription>
          </ExperienceItem>
        </Section>

        <Section>
          <SectionTitle>☑︎ Activities</SectionTitle>

          <ExperienceItem>
            <ExperienceHeader>
              <ExperienceTitle>SOPT Makers</ExperienceTitle>
              <ExperiencePeriod>2025.03 - 진행중</ExperiencePeriod>
            </ExperienceHeader>
            <ExperienceDescription>
              SOPT에 새로운 가치를 제공하는 프로덕트를 만드는 SOPT 정식기구
            </ExperienceDescription>
            <ExperienceDetail>
              36기 프론트엔드 개발자 | 플레이그라운드 팀
            </ExperienceDetail>
          </ExperienceItem>

          <ExperienceItem>
            <ExperienceHeader>
              <ExperienceTitle>SOPT</ExperienceTitle>
              <ExperiencePeriod>2024.09 - 2024.07</ExperiencePeriod>
            </ExperienceHeader>
            <ExperienceDescription>
              대학생연합 IT벤처 창업 동아리
            </ExperienceDescription>
            <ExperienceDetail>
              35기 web 파트 (2024.09 - 2025.01)
              <br />
              34기 web 파트 (2024.03 - 2024.07)
            </ExperienceDetail>
          </ExperienceItem>

          <ExperienceItem>
            <ExperienceHeader>
              <ExperienceTitle>멋쟁이 사자처럼</ExperienceTitle>
              <ExperiencePeriod>2023.03 - 2024.01</ExperiencePeriod>
            </ExperienceHeader>
            <ExperienceDescription>대학생 창업 IT 동아리</ExperienceDescription>
            <ExperienceDetail>세종대학교 11기 운영진</ExperienceDetail>
          </ExperienceItem>
        </Section>

        <Section>
          <SectionTitle>☑︎ Education</SectionTitle>

          <ExperienceItem>
            <ExperienceHeader>
              <ExperienceTitle>세종대학교</ExperienceTitle>
              <ExperiencePeriod>2019.03 - 2025.02 졸업</ExperiencePeriod>
            </ExperienceHeader>
            <ExperienceDescription>
              지능기전공학부 스마트기기공학전공
            </ExperienceDescription>
          </ExperienceItem>

          <ExperienceItem>
            <ExperienceHeader>
              <ExperienceTitle>42Seoul</ExperienceTitle>
              <ExperiencePeriod>2023.03 - 2025.04</ExperiencePeriod>
            </ExperienceHeader>
            <ExperienceDescription>9기 카뎃</ExperienceDescription>
          </ExperienceItem>
        </Section>
      </Container>
    </AboutMeSection>
  );
};

const AboutMeSection = styled.section`
  min-height: 100vh;
  padding: 40px 0 80px;
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
  margin-bottom: 3rem;
  color: #333;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 4rem;

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: #666;
  }
`;

const Section = styled.div`
  max-width: 800px;
  margin: 0 auto 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  font-weight: 600;
`;

const ExperienceItem = styled.div`
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const ExperiencePeriod = styled.span`
  font-size: 0.9rem;
  color: #888;
  font-style: italic;
`;

const ExperienceDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0;
  font-weight: 500;
`;

const ExperienceDetail = styled.div`
  font-size: 0.95rem;
  color: #777;
  line-height: 1.5;
`;

export default AboutMe;
