import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Container>
        <Logo>
          <h1>
            <Link to="/">Seonghui Portfolio</Link>
          </h1>
        </Logo>
        <Nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/notion">Note</Link>
            </li>
            <li>
              <Link to="/blog">Velog</Link>
            </li>
          </ul>
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Logo = styled.div`
  h1 {
    margin: 0;
    color: #333;
    font-size: 1.5rem;
  }
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 30px;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

export default Header;
