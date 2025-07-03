import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { layout } from "../styles/layout";
import { colors } from "../styles/colors";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Container>
        <Logo>
          <h1>
            <Link to="/" onClick={closeMenu}>
              seonghui
            </Link>
          </h1>
        </Logo>
        <Nav isOpen={isMenuOpen}>
          <ul>
            <li>
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/notion" onClick={closeMenu}>
                Notion
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMenu}>
                Velog
              </Link>
            </li>
          </ul>
        </Nav>
        <HamburgerButton onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </HamburgerButton>
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
  max-width: ${layout.maxWidth};
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

const Nav = styled.nav<{ isOpen: boolean }>`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 30px;

    @media (max-width: 768px) {
      position: fixed;
      top: 70px;
      left: 0;
      right: 0;
      background: white;
      flex-direction: column;
      padding: 2rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-100%")});
      transition: transform 0.3s ease;
      z-index: 999;
    }
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;

    @media (max-width: 768px) {
      padding: 1rem 0;
      border-bottom: 1px solid ${colors.gray200};
      display: block;
    }

    &:hover {
      color: ${colors.primary};
    }
  }

  @media (min-width: 769px) {
    display: block;
  }

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default Header;
