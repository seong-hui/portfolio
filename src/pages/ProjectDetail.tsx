import React, { useState } from "react";
import styled from "@emotion/styled";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  PROJECT_DETAILS,
  type ProjectDetailData,
} from "../constants/projectDetails";
import { colors } from "../styles/colors";
import { layout } from "../styles/layout";

interface ImageSliderProps {
  images: string[];
  title: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 150);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 150);
  };

  const goToImage = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  if (images.length === 0) return null;

  return (
    <ProjectImageSlider>
      <SliderContainer>
        <SliderImage isTransitioning={isTransitioning}>
          <img
            src={images[currentIndex]}
            alt={`${title} 프로젝트 ${currentIndex + 1}`}
          />
        </SliderImage>
        {images.length > 1 && (
          <>
            <SliderButton onClick={prevImage} position="left">
              <FaChevronLeft />
            </SliderButton>
            <SliderButton onClick={nextImage} position="right">
              <FaChevronRight />
            </SliderButton>
            <SliderDots>
              {images.map((_, index) => (
                <Dot
                  key={index}
                  active={index === currentIndex}
                  onClick={() => goToImage(index)}
                />
              ))}
            </SliderDots>
          </>
        )}
      </SliderContainer>
    </ProjectImageSlider>
  );
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const projectData = PROJECT_DETAILS.find((project) => project.id === id);

  if (!projectData) {
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
  }

  const renderLinks = (links: ProjectDetailData["links"]) => (
    <Links>
      {links.map((link, index) => (
        <ProjectLink key={index} href={link.href} target="_blank">
          {link.icon === "external" ? <FaExternalLinkAlt /> : <FaGithub />}{" "}
          {link.label}
        </ProjectLink>
      ))}
    </Links>
  );

  const renderContentItem = (
    item: ProjectDetailData["sections"][0]["content"][0],
    index: number
  ) => {
    if (typeof item === "string") {
      return (
        <Content key={index}>
          <p>{item}</p>
        </Content>
      );
    }

    switch (item.type) {
      case "paragraph":
        return (
          <Content key={index}>
            <p>{item.content}</p>
            {item.items && (
              <ul>
                {item.items.map((listItem: string, listIndex: number) => (
                  <li key={listIndex}>{listItem}</li>
                ))}
              </ul>
            )}
          </Content>
        );

      case "problem":
        return (
          <ProblemItem key={index}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </ProblemItem>
        );

      case "subsection":
        return (
          <SubSection key={index}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </SubSection>
        );

      case "policy":
        return (
          <PolicyItem key={index}>
            <h4>{item.title}</h4>
            {item.items && (
              <ul>
                {item.items.map((listItem: string, listIndex: number) => (
                  <li key={listIndex}>{listItem}</li>
                ))}
              </ul>
            )}
          </PolicyItem>
        );

      case "dev":
        return (
          <DevItem key={index}>
            <h4>{item.title}</h4>
            {item.content && <p>{item.content}</p>}
            {item.items && (
              <ul>
                {item.items.map((listItem: string, listIndex: number) => (
                  <li key={listIndex}>{listItem}</li>
                ))}
              </ul>
            )}
          </DevItem>
        );

      case "result":
        return (
          <ResultItem key={index}>
            <h4>{item.title}</h4>
            {item.content && <p>{item.content}</p>}
            {item.items && (
              <ul>
                {item.items.map((listItem: string, listIndex: number) => (
                  <li key={listIndex}>{listItem}</li>
                ))}
              </ul>
            )}
          </ResultItem>
        );

      case "feature":
        return (
          <FeatureItem key={index}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            {item.items && (
              <ul>
                {item.items.map((listItem: string, listIndex: number) => (
                  <li key={listIndex}>{listItem}</li>
                ))}
              </ul>
            )}
          </FeatureItem>
        );

      case "collab":
        return (
          <CollabItem key={index}>
            <h4>{item.title}</h4>
            {item.content && <p>{item.content}</p>}
            {item.items && (
              <ul>
                {item.items.map((listItem: string, listIndex: number) => (
                  <li key={listIndex}>{listItem}</li>
                ))}
              </ul>
            )}
          </CollabItem>
        );

      case "code":
        return <CodeBlock key={index}>{item.code || item.content}</CodeBlock>;

      default:
        return null;
    }
  };

  const renderSection = (
    section: ProjectDetailData["sections"][0],
    index: number
  ) => (
    <Section key={index}>
      <SectionTitle>{section.title}</SectionTitle>
      {Array.isArray(section.content) ? (
        section.content.map(renderContentItem)
      ) : (
        <Content>
          <p>{section.content}</p>
        </Content>
      )}
    </Section>
  );

  return (
    <DetailSection>
      <Container>
        <BackButton to="/projects">
          <FaArrowLeft /> 프로젝트 목록으로 돌아가기
        </BackButton>

        <Header>
          <Title>{projectData.title}</Title>
          {renderLinks(projectData.links)}
          <ImageSlider images={projectData.images} title={projectData.title} />
        </Header>

        {projectData.sections.map(renderSection)}
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
  max-width: ${layout.maxWidth};
  margin: 0 auto;
  padding: ${layout.containerPadding};
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  color: ${colors.gray600};
  border: 2px solid ${colors.gray300};
  background: ${colors.gray50};

  &:hover {
    background: ${colors.gray200};
    transform: translateY(-2px);
  }
`;

const ProjectImageSlider = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background: ${colors.gray100};

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const SliderImage = styled.div<{ isTransitioning: boolean }>`
  width: 100%;
  height: 100%;
  opacity: ${({ isTransitioning }) => (isTransitioning ? 0 : 1)};
  transition: opacity 0.3s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    padding: 1rem;
  }
`;

const SliderButton = styled.button<{ position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${({ position }) => position}: 1rem;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    transform: translateY(-50%) scale(1.1);
  }
`;

const SliderDots = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${({ active }) =>
    active ? "white" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    transform: scale(1.2);
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
  font-size: 2.5rem;
  color: ${colors.textPrimary};
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
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
  text-decoration: none;
  border-radius: 26px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  color: ${colors.gray600};
  border: 2px solid ${colors.gray300};

  &:hover {
    background: ${colors.gray200};
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
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid ${colors.gray200};
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
