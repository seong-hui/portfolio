import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "../styles/colors";

interface ButtonProps {
  centered?: boolean;
}

export const Button = styled(Link)<ButtonProps>`
  display: ${({ centered }) => (centered ? "block" : "inline-flex")};
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  color: ${colors.gray600};
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  text-align: center;
  border: 2px solid ${colors.gray300};

  ${({ centered }) =>
    centered &&
    `
    max-width: 200px;
    margin: 0 auto;
  `}

  &:hover {
    background: ${colors.gray200};
    transform: translateY(-2px);
  }
`;
