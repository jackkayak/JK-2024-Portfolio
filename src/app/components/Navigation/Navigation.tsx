"use client";

import React from "react";
import * as S from "./Navigation.styles";

export const Navigation = () => {
  return (
    <S.NavBarContainer>
      <S.Brand>Jack Kay</S.Brand>
      <S.NavLinks>
        <S.NavLink
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </S.NavLink>
        <S.NavLink
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </S.NavLink>
      </S.NavLinks>
    </S.NavBarContainer>
  );
};
