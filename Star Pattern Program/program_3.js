const printRightAlignedTriangle  = (getSize) => {
  // console.log(getSize);
  for (let row = 1; row <= getSize; row++) {
    // console.log(row);
    let line = "";
    for (let col = 1; col <= getSize; col++) {
      if (col >= row) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
};
printRightAlignedTriangle (5);
