const printStarPyramid = (size) => {
  for (let row = 1; row <= size; row++) {
    let line = "";
    let toggle = true;
    for (let col = 1; col <= size * 2; col++) {
      if (col >= size + 1 - row && col <= size - 1 + row && toggle) {
        line += "*";
        toggle = false;
      } else {
        line += " ";
        toggle = true;
      }
    }
    console.log(line);
  }
};

printStarPyramid(5);
