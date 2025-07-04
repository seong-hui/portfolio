import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { colors } from "../styles/colors";
import { layout } from "../styles/layout";
import { fetchNotionItems } from "../apis/getNotionPosts";
import { NotionTag } from "../components/NotionTag";
import { Button } from "../components/Button";

interface NotionPost {
  id: string;
  title: string;
  icon: string;
  content: string;
  organization: {
    name: string;
    color: string;
  } | null;
  created_time: string;
}

interface NotionPage {
  id: string;
  icon?: {
    emoji?: string;
  };
  properties: {
    이름?: {
      title?: Array<{
        plain_text: string;
      }>;
    };
    내용?: {
      rich_text?: Array<{
        plain_text: string;
      }>;
    };
    소속?: {
      multi_select?: Array<{
        name: string;
        color: string;
      }>;
    };
  };
  created_time: string;
}

const Home: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["개발자", "프론트엔드 개발자", "문성희"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const { data: notionPosts = [] } = useQuery<NotionPost[]>({
    queryKey: ["notion-posts-home"],
    queryFn: async () => {
      const data = await fetchNotionItems();
      return data.results.slice(0, 3).map((page: NotionPage) => ({
        id: page.id,
        title: page.properties["이름"]?.title?.[0]?.plain_text || "Untitled",
        icon: page.icon?.emoji || "📝",
        content:
          page.properties["내용"]?.rich_text
            ?.map((text) => text.plain_text)
            .join("")
            .substring(0, 100) || "",
        organization: page.properties["소속"]?.multi_select?.[0] || null,
        created_time: page.created_time,
      }));
    },
  });

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
                안녕하세요,
                <br />
                <AnimatedText key={currentText}>
                  {texts[currentText]}
                </AnimatedText>
                입니다
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                문성희입니다 ~~~
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <SocialButtons>
                  <SocialButton
                    href="https://github.com/seong-hui"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                    GitHub
                  </SocialButton>
                  <SocialButton
                    href="https://www.linkedin.com/in/seonghui-moon-86499934b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={20} />
                    LinkedIn
                  </SocialButton>
                  <SocialButton href="mailto:msh9980@naver.com">
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
            <AboutContentWrapper>
              <AboutImageWrapper>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <AboutImage>
                    <img src="/images/profile.png" alt="Developer" />
                  </AboutImage>
                </motion.div>
              </AboutImageWrapper>
              <AboutContent>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  안녕하세요! 저는 프론트엔드 개발자 문성희입니다.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  열심히 공부해요
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Button to="/about">더 자세히 보기</Button>
                </motion.div>
              </AboutContent>
            </AboutContentWrapper>
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
            <ProjectContentWrapper>
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
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Button to="/projects">더 자세히 보기</Button>
                </motion.div>
              </ProjectContent>
              <ProjectImageWrapper>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ProjectImage>
                    <img
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop"
                      alt="Projects"
                    />
                  </ProjectImage>
                </motion.div>
              </ProjectImageWrapper>
            </ProjectContentWrapper>
          </motion.div>
        </Container>
      </ProjectSection>

      <NotionSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Recent Posts</SectionTitle>
            <NotionGrid>
              {notionPosts.map((post: NotionPost, index: number) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <NotionCard to={`/notion/${post.id}`}>
                    <NotionHeader>
                      <NotionIcon>{post.icon}</NotionIcon>
                      <NotionTitle>{post.title}</NotionTitle>
                    </NotionHeader>
                    <NotionContent>{post.content}...</NotionContent>
                    <NotionFooter>
                      <NotionDate>
                        {new Date(post.created_time).toLocaleDateString(
                          "ko-KR"
                        )}
                      </NotionDate>
                      <NotionTag color={post.organization?.color || "default"}>
                        {post.organization?.name || "기타"}
                      </NotionTag>
                    </NotionFooter>
                  </NotionCard>
                </motion.div>
              ))}
            </NotionGrid>
            <Button to="/notion" centered>
              더 자세히 보기
            </Button>
          </motion.div>
        </Container>
      </NotionSection>
    </>
  );
};

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgb(102, 113, 234) 0%,
    rgb(159, 188, 202) 100%
  );
  color: white;
`;

const Container = styled.div`
  max-width: ${layout.maxWidth};
  margin: 0 auto;
  padding: ${layout.containerPadding};
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

const AnimatedText = styled(motion.span)`
  display: inline-block;
  animation: fadeInOut 0.5s ease-in-out;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
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
  background: ${colors.background};
`;

const ProjectSection = styled.section`
  padding: 80px 0;
  background: ${colors.surface};
`;

const ProjectContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: ${colors.textSecondary};
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
  color: ${colors.textPrimary};
`;

const AboutContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const AboutImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AboutImage = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AboutContent = styled.div`
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: ${colors.textSecondary};
  }
`;

const ProjectContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const ProjectImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectImage = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const NotionSection = styled.section`
  padding: 80px 0;
  background: ${colors.background};
`;

const NotionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const NotionCard = styled(Link)`
  background: ${colors.surface};
  padding: 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const NotionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

const NotionIcon = styled.span`
  font-size: 1.2rem;
`;

const NotionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.textPrimary};
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`;

const NotionContent = styled.p`
  font-size: 0.9rem;
  color: ${colors.textSecondary};
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`;

const NotionFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const NotionDate = styled.span`
  font-size: 0.8rem;
  color: ${colors.textTertiary};
`;

export default Home;
