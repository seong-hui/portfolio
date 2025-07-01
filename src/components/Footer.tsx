import React from "react";
import styled from "@emotion/styled";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <p>&copy; 2025 Portfolio. All rights reserved.</p>
          <SocialLinks>
            <a
              href="https://github.com/seong-hui"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/seonghui-moon-86499934b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:msh9980@naver.com">Email</a>
          </SocialLinks>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  padding: 40px 0;
  margin-top: auto;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

export default Footer;
