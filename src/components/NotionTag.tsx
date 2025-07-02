import styled from "@emotion/styled";
import { getNotionColor } from "../styles/colors";

export const NotionTag = styled.span<{ color: string }>`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${({ color }) => getNotionColor(color, "background")};
  color: ${({ color }) => getNotionColor(color, "text")};
  display: inline-block;
`;
