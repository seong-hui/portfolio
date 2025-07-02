import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { colors } from "../styles/colors";
import { PROJECTS, type Project } from "../constants/projects";

const Projects: React.FC = () => {
  const renderProjectLinks = (project: Project) => (
    <ProjectLinks onClick={(e) => e.stopPropagation()}>
      {project.links.map((link, index) => (
        <ProjectLink key={index} href={link.href} target="_blank">
          {link.icon === "external" ? <FaExternalLinkAlt /> : <FaGithub />}{" "}
          {link.label}
        </ProjectLink>
      ))}
    </ProjectLinks>
  );

  const renderProjectInfo = (project: Project) => (
    <ProjectInfo>
      <InfoItem>
        <strong>기간</strong>: {project.period}
      </InfoItem>
      <InfoItem>
        <strong>역할</strong>: {project.role}
      </InfoItem>
      <InfoItem>
        <strong>팀 구성</strong>: {project.team}
      </InfoItem>
      <InfoItem>
        <strong>기술 스택</strong>: {project.techStack}
      </InfoItem>
      {project.award && (
        <InfoItem>
          <strong>수상</strong>: {project.award}
        </InfoItem>
      )}
    </ProjectInfo>
  );

  const renderAchievements = (project: Project) => (
    <ProjectAchievements>
      {project.achievements.map((achievement, index) => (
        <AchievementItem key={index}>
          <strong>{achievement.title}</strong>
          <ul>
            {achievement.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </AchievementItem>
      ))}
    </ProjectAchievements>
  );

  const renderProject = (project: Project) => {
    const projectContent = (
      <>
        <ProjectImage>
          <img src={project.image} alt={`${project.title} 프로젝트`} />
        </ProjectImage>
        <ProjectHeader>
          <ProjectTitle>{project.title}</ProjectTitle>
          {renderProjectLinks(project)}
        </ProjectHeader>

        <ProjectDescription>{project.description}</ProjectDescription>

        {project.note && <ProjectNote>{project.note}</ProjectNote>}

        {renderProjectInfo(project)}
        {renderAchievements(project)}
      </>
    );

    if (project.detailPath) {
      return (
        <ProjectItem key={project.id} to={project.detailPath}>
          {projectContent}
        </ProjectItem>
      );
    }

    return <ProjectCard key={project.id}>{projectContent}</ProjectCard>;
  };

  return (
    <ProjectsSection>
      <Container>
        <Title>Projects</Title>
        {PROJECTS.map(renderProject)}
      </Container>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
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
  margin-bottom: 4rem;
  color: ${colors.textPrimary};
`;

const ProjectItemBase = styled.div`
  background: ${colors.surface};
  border-radius: 12px;
  padding: 0;
  margin-bottom: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectItem = styled(ProjectItemBase.withComponent(Link))``;

const ProjectCard = styled(ProjectItemBase)`
  cursor: default;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding: 2rem 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  color: ${colors.textPrimary};
  margin: 0;
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
  background: ${colors.primary};
  color: ${colors.white};
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.primaryDark};
    transform: translateY(-2px);
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${colors.textSecondary};
  margin-bottom: 1rem;
  padding: 0 2rem;
`;

const ProjectNote = styled.p`
  font-size: 0.95rem;
  color: #777;
  font-style: italic;
  margin-bottom: 1.5rem;
  padding: 0 2rem;
`;

const ProjectInfo = styled.div`
  background: ${colors.gray50};
  padding: 1.5rem;
  border-radius: 8px;
  margin: 0 2rem 2rem;
`;

const InfoItem = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  color: ${colors.textSecondary};

  &:last-child {
    margin-bottom: 0;
  }

  strong {
    color: ${colors.textPrimary};
  }
`;

const ProjectAchievements = styled.div`
  margin-top: 2rem;
  padding: 0 2rem 2rem;
`;

const AchievementItem = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  strong {
    display: block;
    color: ${colors.textPrimary};
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  ul {
    margin: 0;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
      line-height: 1.6;
      color: ${colors.textSecondary};

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export default Projects;
