import React, { useState } from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { createStage, isCollidedHandler } from "../Utils/gameHelper";
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
export default function Tetris() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);
  const movePlayer = (dir) => {
    // console.log(dir);
    if (!isCollidedHandler(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0, isCollided: false });
    }
  };
  const startGame = () => {
    //reset
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  };
  const drop = () => {
    if (!isCollidedHandler(player, stage, { x: 0, y: 1 })) {
      // console.log("debugger");
      updatePlayerPos({ x: 0, y: 1, isCollided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, isCollided: true });
    }
  };
  const dropPlayer = () => {
    drop();
  };
  const move = ({ keyCode }) => {
    // console.log(keyCode);
    if (!gameOver) {
      if (keyCode === 37) {
        //left arrow
        movePlayer(-1);
      } else if (keyCode === 39) {
        // right arrow
        movePlayer(1);
      } else if (keyCode === 40) {
        //down arrow
        dropPlayer();
      } else if (keyCode === 38) {
        //down arrow
        playerRotate(stage, 1);
      }
    }
  };
  // console.log(stage)
  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display text={"Level"} value={""} />
          ) : (
            <>
              <Display text={"Level"} value={""} />
              <Display text={"Score"} value={""} />
              <Display text={"None"} value={""} />
            </>
          )}

          <StartButton callBack={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}
