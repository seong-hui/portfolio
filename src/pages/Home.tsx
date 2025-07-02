import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <>
      <HomeSection id="home">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroContent>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                안녕하세요, 개발자입니다
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                창의적이고 효율적인 솔루션을 만드는 것을 좋아합니다.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <SocialButtons>
                  <SocialButton
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                    GitHub
                  </SocialButton>
                  <SocialButton
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={20} />
                    LinkedIn
                  </SocialButton>
                  <SocialButton href="mailto:your-email@example.com">
                    <FaEnvelope size={20} />
                    Email
                  </SocialButton>
                </SocialButtons>
              </motion.div>
            </HeroContent>
          </motion.div>
        </Container>
      </HomeSection>

      <AboutSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionTitle>About Me</SectionTitle>
            <AboutContent>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                안녕하세요! 저는 사용자 중심의 웹 애플리케이션을 개발하는 것을
                좋아하는 개발자입니다.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                새로운 기술을 배우고 적용하는 것에 열정을 가지고 있으며,
                깔끔하고 효율적인 코드를 작성하기 위해 노력합니다.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <AboutButton to="/about">더 자세히 보기</AboutButton>
              </motion.div>
            </AboutContent>
          </motion.div>
        </Container>
      </AboutSection>

      <ProjectSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Projects</SectionTitle>
            <ProjectContent>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                다양한 기술을 활용하여 제작한 프로젝트들을 소개합니다.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <ProjectButton to="/projects">프로젝트 보기</ProjectButton>
              </motion.div>
            </ProjectContent>
          </motion.div>
        </Container>
      </ProjectSection>
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

const SocialButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutSection = styled.section`
  padding: 80px 0;
  background: #f8f9fa;
`;

const ProjectSection = styled.section`
  padding: 80px 0;
  background: #fff;
`;

const ProjectContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: #666;
  }
`;

const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
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

const ProjectButton = styled(Link)`
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  background: #007bff;
  color: white;

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
  }
`;

const AboutButton = styled(Link)`
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

export default Home;
