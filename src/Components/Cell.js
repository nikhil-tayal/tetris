import React from "react";
import { StyledCell } from "./styles/StylesCell";
import { tetrominos } from "../Utils/tetrisDesigns";
export default function Cell({ type }) {
  return (
    <StyledCell type={type} color={tetrominos[type].color}>
    </StyledCell>
  );
}
