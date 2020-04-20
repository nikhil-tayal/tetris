import React from "react";
import Cell from "./Cell";
import { StyledStage } from "./styles/StyledStage";
export default function Stage(props) {
  // console.log(props)
  return (
    <StyledStage width={props.stage[0].length} height={props.stage.length}>
      {props.stage.map((row, index) => row.map((cell, index) => <Cell key={index} type={cell[0]} />))}
    </StyledStage>
  );
}
