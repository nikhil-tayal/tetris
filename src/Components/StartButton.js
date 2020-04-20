import React from "react";
import { StyledButton } from "./styles/StyledDisplay";
export default function StartButton({ callBack }) {
  return <StyledButton onClick={callBack}>State Game</StyledButton>;
}
