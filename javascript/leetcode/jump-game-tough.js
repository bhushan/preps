// You are given an array A containing N integers, and a starting position S, as well as offset integer X.
//
// You need to identify the final position of a jumping game which has the following rules:
//
// - In every odd round, you jump left from current position (C) to the closest position CL,
//   such that arr[CL] = arr[C] + 1.
// - In every even round, you jump right from current position (C) to the closest position CR,
//   such that arr[CR] = arr[C] + 1.
// - if there is no valid position for the next jump, stop jumping and return the position C.
// - After a successful jump (odd or even), the array value at the position before the jump (C)
// is incremented by X, i.e. arr[C] := arr[C] + X. Then proceed to the next round at the new position (CL/CR).
// jumpGame((arr = [3, 2, 3, 4, 5]), (startingIndex = 1), (offset = 4));

const isEven = (num) => num % 2 === 0;
const jumpGame = (arr, idx, offset) => {
  let index = idx;
  while (true) {
    let searchArr, position;
    if (isEven(index)) {
      // search on right side arr[index] + 1
      searchArr = arr.slice(index);
    } else {
      // search on left side arr[index] + 1
      searchArr = arr.slice(0, index);
    }

    position = searchArr.indexOf(arr[index] + 1, 0);
    console.log({ searchArr, index, position });

    if (position !== -1) {
      // found element
      arr[index] += offset;
      index = position;
      console.log({ arr });
    } else {
      return index;
    }
  }
};

console.log({ result: jumpGame([3, 2, 3, 4, 5], 1, 4) });
// console.log({ result: jumpGame([1, 2], 0, 2) }); TODO: fix infinite loop
