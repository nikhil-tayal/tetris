import { useState, useEffect } from "react";
import { createStage } from "../Utils/gameHelper";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);
  // console.log(player);
  useEffect(() => {
    setRowsCleared(0);
    const clearRow = (newStage) =>
      newStage.reduce((accumulator, currentRow) => {
        console.log(accumulator, currentRow);
        if (currentRow.findIndex((cell) => cell[0] === 0) === -1) {
          setRowsCleared((prev) => prev + 1);
          accumulator.unshift(new Array(newStage[0].length).fill([0, "clear"]));
          return accumulator;
        }
        accumulator.push(currentRow);
        return accumulator;
      }, []);

    const updateStage = (prevStage) => {
      const newStage = prevStage.map((row) => row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell)));
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [value, `${player.isCollided ? "merged" : "clear"}`];
          }
        });
      });
      if (player.isCollided) {
        resetPlayer();
        return clearRow(newStage);
      }
      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player, resetPlayer]);
  // console.log(stage);
  return [stage, setStage, rowsCleared];
};
