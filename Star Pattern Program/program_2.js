const printRightTriangle = (size) => {
  for (let row = size; row >= 1; row--) {
    let line = "";
    for (let col = 1; col <= size; col++) {
      line += col >= row ? "*" : " ";
    }
    console.log(line);
  }
};

printRightTriangle(5);
