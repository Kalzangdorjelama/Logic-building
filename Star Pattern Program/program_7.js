const printStar = (size) => {
  for (let row = 1; row <= size; row++) {
    let line = "";
    for (let col = 1; col <= size * 2 - 1; col++) {
      if (col <= size + 1 - row || col >= size - 1 + row) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
};

printStar(5);
