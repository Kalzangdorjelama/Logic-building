function StartPattern(getSize) {
    // console.log(getSize);
    let k = 0
    let n = Math.ceil(getSize / 2)
    for (let i = 1; i <= getSize; i++) {
        if (getSize % 2 === 0) {
            if (i <= n) {
                k++;
            }
            if (i > n + 1) {
                k--
            }
        } else {
            i <= n ? k++ : k--;
        }
        let line = "";
        for (let j = 1; j <= getSize; j++) {
            if (j >= n + 1 - k && j <= n - 1 + k) {
                line += "*"
            } else {
                line += " "
            }
        }
        console.log(line);
    }
}
StartPattern(10)

// console.log(Math.ceil(7 / 2));
