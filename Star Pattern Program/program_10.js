function starPattern1(getSize) {
  // console.log(getSize);
  for (let i = 1; i <= getSize; i++) {
    let line = ""
    let k = 0
    for (let j = 1; j <= getSize * 2 - 1; j++) {
      if (j >= getSize + 1 - i && j <= getSize - 1 + i) {
        j <= getSize ? k++ : k--
        line += k
      } else {
        line += " "
      }
    }
    console.log(line);
  }
}
starPattern1(4)

function starPattern2(getSize) {
    // console.log(getSize)
    for (let i = 1; i <= getSize; i++) {
        let row = ""
        let k = 1
        for (let j = 1; j <= getSize * 2 - 1; j++) {
            if (j >= getSize + 1 - i && j <= getSize - 1 + i) {
                row += k
                j >= getSize ? k-- : k++
            } else {
                row += " "
            }
        }
        console.log(row)
    }
}

starPattern2(4)