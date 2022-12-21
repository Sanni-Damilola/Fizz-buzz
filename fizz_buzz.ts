const data = (n: number) => {
  for (let i = 0; i < n; i++) {
    if (i === 17) {
      console.log(i, "found");
      break;
    }
    console.log(i);
  }
};

// data(20);

const point = (n: number) => {
  let result: number;
  outer: for (let x = 0; x <= n; x++) {
    for (let y = n; y >= 0; y--) {
      console.log(x, y);
      if (x === 0 && y === 3) {
        console.log(y, x, "found".toUpperCase());
        break outer;
      } else {
        console.log(x, y);
      }

      // new
      result = x * y;
      console.log(`${x} X ${y} = ${result}`);

      if (result % 3 === 0) {
        console.log(x, y, "fizz");
      }
      if (result % 5 === 0) {
        console.log(x, y, "buzz");
      }
    }
  }
};

// point(3);


