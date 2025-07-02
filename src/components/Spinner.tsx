import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { colors } from "../styles/colors";

interface SpinnerProps {
  text?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ text = "로딩 중..." }) => {
  return (
    <SpinnerWrapper>
      <SpinnerRing />
      <SpinnerText>{text}</SpinnerText>
    </SpinnerWrapper>
  );
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;

const SpinnerRing = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${colors.gray200};
  border-top: 3px solid ${colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const SpinnerText = styled.div`
  margin-left: 1rem;
  font-size: 1rem;
  color: ${colors.textSecondary};
`;
