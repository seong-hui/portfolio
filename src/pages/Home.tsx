import React from 'react';
import styled from '@emotion/styled';

const Home: React.FC = () => {
  return (
    <HomeSection id="home">
      <Container>
        <HeroContent>
          <h1>안녕하세요, 개발자입니다</h1>
          <p>창의적이고 효율적인 솔루션을 만드는 것을 좋아합니다.</p>
          <CTAButtons>
            <Button href="#projects" variant="primary">프로젝트 보기</Button>
            <Button href="#contact" variant="secondary">연락하기</Button>
          </CTAButtons>
        </HeroContent>
      </Container>
    </HomeSection>
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

const Button = styled.a<{ variant: 'primary' | 'secondary' }>`
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;

  ${({ variant }) => variant === 'primary' ? `
    background: #007bff;
    color: white;
    
    &:hover {
      background: #0056b3;
      transform: translateY(-2px);
    }
  ` : `
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

export default Home;