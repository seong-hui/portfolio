import React from "react";
import styled from "@emotion/styled";
import { FaReact, FaJs, FaNodeJs, FaCss3Alt, FaPython } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { colors } from "../styles/colors";

const AboutMe: React.FC = () => {
  return (
    <AboutMeSection>
      <Container>
        <Title>About Me</Title>
        <Content>
          <p>
            안녕하세요 문성희입니다 ~~~~~~
            <br />
            !!!
          </p>
        </Content>

        <Section>
          <SectionTitle>☑︎ Work Experience</SectionTitle>

          <ExperienceItem>
            <ExperienceHeader>
              <ExperienceTitle>리콘랩스</ExperienceTitle>
              <ExperiencePeriod>2025.07 - 재직중</ExperiencePeriod>
            </ExperienceHeader>
            <ExperienceDescription>
              Software Engineer Intern
            </ExperienceDescription>
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

        <Section>
          <SectionTitle>☑︎ Skills</SectionTitle>
          <SkillsContainer>
            <SkillCategory>
              {/* <SkillCategoryTitle>Frontend</SkillCategoryTitle> */}
              <SkillGrid>
                <SkillItem>
                  <FaReact size={24} color="#61DAFB" />
                  <span>React</span>
                </SkillItem>
                <SkillItem>
                  <SiNextdotjs size={24} color="#000000" />
                  <span>Next.js</span>
                </SkillItem>
                <SkillItem>
                  <SiTypescript size={24} color="#3178C6" />
                  <span>TypeScript</span>
                </SkillItem>
                <SkillItem>
                  <FaJs size={24} color="#F7DF1E" />
                  <span>JavaScript</span>
                </SkillItem>

                <SkillItem>
                  <FaCss3Alt size={24} color="#1572B6" />
                  <span>CSS3</span>
                </SkillItem>
                <SkillItem>
                  <SiTailwindcss size={24} color="#06B6D4" />
                  <span>Tailwind</span>
                </SkillItem>
              </SkillGrid>
            </SkillCategory>
          </SkillsContainer>
        </Section>
      </Container>
    </AboutMeSection>
  );
};

const AboutMeSection = styled.section`
  min-height: 100vh;
  padding: 40px 0 80px;
  background: ${colors.background};
`;

const Container = styled.div`
  max-width: 820px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
  color: ${colors.textPrimary};
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 4rem;

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: ${colors.textSecondary};
  }
`;

const Section = styled.div`
  max-width: 800px;
  margin: 0 auto 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${colors.textPrimary};
  font-weight: 600;
`;

const ExperienceItem = styled.div`
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: ${colors.surface};
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
  color: ${colors.textPrimary};
  margin: 0;
`;

const ExperiencePeriod = styled.span`
  font-size: 0.9rem;
  color: ${colors.textTertiary};
  font-style: italic;
`;

const ExperienceDescription = styled.p`
  font-size: 1rem;
  color: ${colors.textSecondary};
  margin: 0.5rem 0;
  font-weight: 500;
`;

const ExperienceDetail = styled.div`
  font-size: 0.95rem;
  color: #777;
  line-height: 1.5;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SkillCategory = styled.div`
  background: ${colors.surface};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: ${colors.gray50};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.gray200};
    transform: translateY(-2px);
  }

  span {
    font-size: 0.9rem;
    font-weight: 500;
    color: ${colors.textPrimary};
  }
`;

export default AboutMe;
