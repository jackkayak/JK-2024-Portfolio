"use client";

import React from "react";
import * as S from "./Paragraph.styles";

interface ParagraphProps {
  text: string;
  size?: "sm" | "md";
  weight?: "light" | "normal" | "bold";
}

export const Paragraph = ({
  text,
  size = "md",
  weight = "normal",
}: ParagraphProps) => {
  return (
    <S.Paragraph size={size} weight={weight}>
      {text}
    </S.Paragraph>
  );
};
