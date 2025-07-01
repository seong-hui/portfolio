import React from "react";
import styled from "@emotion/styled";
import { FaReact, FaJs, FaNodeJs, FaGitAlt, FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Home: React.FC = () => {
  return (
    <>
      <HomeSection id="home">
        <Container>
          <HeroContent>
            <h1>안녕하세요, 개발자입니다</h1>
            <p>창의적이고 효율적인 솔루션을 만드는 것을 좋아합니다.</p>
            <CTAButtons>
              <Button href="#projects" variant="primary">
                프로젝트 보기
              </Button>
              <Button href="#contact" variant="secondary">
                연락하기
              </Button>
            </CTAButtons>
          </HeroContent>
        </Container>
      </HomeSection>

      <AboutSection>
        <Container>
          <SectionTitle>About Me</SectionTitle>
          <AboutContent>
            <p>
              안녕하세요! 저는 사용자 중심의 웹 애플리케이션을 개발하는 것을
              좋아하는 개발자입니다.
            </p>
            <p>
              새로운 기술을 배우고 적용하는 것에 열정을 가지고 있으며, 깔끔하고
              효율적인 코드를 작성하기 위해 노력합니다.
            </p>
            <AboutButton href="/aboutme">더 자세히 보기</AboutButton>
          </AboutContent>
        </Container>
      </AboutSection>

      <SkillsSection>
        <Container>
          <SectionTitle>Skills</SectionTitle>
          <SkillsGrid>
            <SkillItem>
              <FaReact size={40} />
              <span>React</span>
            </SkillItem>
            <SkillItem>
              <SiTypescript size={40} />
              <span>TypeScript</span>
            </SkillItem>
            <SkillItem>
              <FaJs size={40} />
              <span>JavaScript</span>
            </SkillItem>
            <SkillItem>
              <FaNodeJs size={40} />
              <span>Node.js</span>
            </SkillItem>
            <SkillItem>
              <FaCss3Alt size={40} />
              <span>CSS</span>
            </SkillItem>
            <SkillItem>
              <FaGitAlt size={40} />
              <span>Git</span>
            </SkillItem>
          </SkillsGrid>
        </Container>
      </SkillsSection>
    </>
  );
};

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.a<{ variant: "primary" | "secondary" }>`
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;

  ${({ variant }) =>
    variant === "primary"
      ? `
    background: #007bff;
    color: white;
    
    &:hover {
      background: #0056b3;
      transform: translateY(-2px);
    }
  `
      : `
    background: transparent;
    color: white;
    border: 2px solid white;
    
    &:hover {
      background: white;
      color: #333;
      transform: translateY(-2px);
    }
  `}
`;

const AboutSection = styled.section`
  padding: 80px 0;
  background: #f8f9fa;
`;

const SkillsSection = styled.section`
  padding: 80px 0;
  background: #fff;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #666;
  }
`;

const AboutButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 12px 30px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const SkillItem = styled.div`
  background: #007bff;
  color: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 123, 255, 0.3);
  }

  span {
    font-size: 0.9rem;
  }
`;

export default Home;
