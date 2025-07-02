import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { colors } from "../styles/colors";
import { fetchNotionItems } from "../apis/getNotionPosts";
import { NotionTag } from "../components/NotionTag";

const Home: React.FC = () => {
  const { data: notionPosts = [] } = useQuery({
    queryKey: ["notion-posts-home"],
    queryFn: async () => {
      const data = await fetchNotionItems();
      return data.results.slice(0, 3).map((page: any) => ({
        id: page.id,
        title: page.properties["이름"]?.title?.[0]?.plain_text || "Untitled",
        icon: page.icon?.emoji || "📝",
        content:
          page.properties["내용"]?.rich_text
            ?.map((text: any) => text.plain_text)
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
            <AboutContentWrapper>
              <AboutImageWrapper>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <AboutImage>
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                      alt="Developer"
                    />
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
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <AboutButton to="/about">더 자세히 보기</AboutButton>
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
                  <ProjectButton to="/projects">프로젝트 보기</ProjectButton>
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
              {notionPosts.map((post: any, index: number) => (
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
            <NotionButton to="/notion">모든 글 보기</NotionButton>
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

const Container = styled.div`
  max-width: 820px;
  margin: 0 auto;
  padding: 0 16px;
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

const ProjectButton = styled(Link)`
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  background: ${colors.primary};
  color: ${colors.white};

  &:hover {
    background: ${colors.primaryDark};
    transform: translateY(-2px);
  }
`;

const AboutButton = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  padding: 12px 30px;
  background: ${colors.primary};
  color: ${colors.white};
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.primaryDark};
    transform: translateY(-2px);
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

const NotionButton = styled(Link)`
  display: block;
  text-align: center;
  padding: 12px 30px;
  background: ${colors.primary};
  color: ${colors.white};
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;
  max-width: 200px;
  margin: 0 auto;

  &:hover {
    background: ${colors.primaryDark};
    transform: translateY(-2px);
  }
`;

export default Home;
