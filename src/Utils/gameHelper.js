const NO_OF_ROWS = 20,
  NO_OF_COLUMNS = 12;

export const createStage = () => Array.from(Array(NO_OF_ROWS), () => new Array(NO_OF_COLUMNS).fill([0, "clear"]));

export const isCollidedHandler = (player, stage, { x: moveX, y: moveY }) => {
  let { tetromino } = player;
  for (let y = 0; y < tetromino.length; y = y + 1) {
    for (let x = 0; x < tetromino[y].length; x = x + 1) {
      // console.log(y , player.pos.y ,moveY , tetromino)
      if (tetromino[y][x] !== 0) {
        if (
          !stage[y+ player.pos.y + moveY] ||
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== "clear"
        ) {
          // debugger
          return true;
        }
      }
    }
  }
};
