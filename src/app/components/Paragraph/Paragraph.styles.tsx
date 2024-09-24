import styled, { css } from "styled-components";

export const Paragraph = styled.p<{
  size?: "sm" | "md";
  weight?: "light" | "normal" | "bold";
}>`
  ${({ size }) =>
    size === "sm" &&
    css`
      font-size: 14px;
    `}

  ${({ size }) =>
    size === "md" &&
    css`
      font-size: 18px;
    `}

  ${({ weight }) =>
    weight === "light" &&
    css`
      font-weight: 300;
    `}
  
  ${({ weight }) =>
    weight === "normal" &&
    css`
      font-weight: 400;
    `}
  
  ${({ weight }) =>
    weight === "bold" &&
    css`
      font-weight: 700;
    `}
`;
