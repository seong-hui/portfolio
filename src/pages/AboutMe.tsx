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
      </Container>
    </AboutMeSection>
  );
};

const AboutMeSection = styled.section`
  min-height: 100vh;
  padding: 120px 0 80px;
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

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: #666;
  }
`;

export default AboutMe;
