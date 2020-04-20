export const tetrominos = {
  0: {
    shape: [[0]],
    color: "0,0,0",
  },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "123, 255 , 143",
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "199, 200, 176",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "121,192, 54",
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "98, 61, 52",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "129, 211 , 2",
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "111, 219 , 173",
  },
  T: {
    shape: [
      ["T", "T", "T"],
      [0, "T", 0],
      [0, 0, 0],
    ],
    color: "172 , 132, 165",
  },
};

export const randomTetrominos = () => {
  let tetrisDesign = "IJLOZST";
  return tetrominos[tetrisDesign[Math.floor(Math.random() * 7)]];
};
