import { useState, useCallback } from "react";
import { randomTetrominos, tetrominos } from "../Utils/tetrisDesigns";
import { isCollidedHandler } from "../Utils/gameHelper";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: tetrominos[0].shape,
    isCollided: false,
  });
  const updatePlayerPos = ({ x, y, isCollided }) => {
    // console.log(x, y);
    setPlayer((prev) => {
      // console.log(prev);
      return {
        ...prev,
        pos: { x: prev.pos.x + x, y: prev.pos.y + y },
        isCollided,
      };
    });
    // console.log(player)
  };
  const rotate = (tetrominoArray, dir) => {
    const rotatedTetrominoArray = tetrominoArray.map((col, index) => tetrominoArray.map((row) => row[index]));
    if (dir > 0) return rotatedTetrominoArray.map((row) => row.reverse());
    return rotatedTetrominoArray.reverse();
  };

  const playerRotate = (stage, dir) => {
    const playerCopy = JSON.parse(JSON.stringify(player));
    playerCopy.tetromino = rotate(playerCopy.tetromino, dir);

    const pos=playerCopy.pos.x;
    let offset=1;
    while(isCollidedHandler(playerCopy , stage , {x:0 , y:0})){
      playerCopy.pos.x+=offset;
      offset = (offset + (offset > 0 ? 1 : -1))
      if(offset > playerCopy.tetromino[0].length){
        rotate(playerCopy.tetromino , -dir);
        playerCopy.pos.x=pos;
        return
      }
    }
    setPlayer(playerCopy);
  };
  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: 0, y: 0 },
      tetromino: randomTetrominos().shape,
      isCollided: false,
    });
  }, []);
  return [player, updatePlayerPos, resetPlayer , playerRotate];
};
