// star pattern
// 1.
//*  *  *  *
//*  *  *  *
//*  *  *  *
//*  *  *  *
const ROWS = 4;
const COLUMNS = 4;
for (let i = 0; i < ROWS; i++) {
  let row = "";
  for (let j = 0; j < COLUMNS; j++) {
    row = row + " * ";
  }
  console.log(row);
}

// 2.
//*
//*  *
//*  *  *
//*  *  *  *
const ROWS1 = 4;
for (let i = 1; i <= ROWS1; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row = row + " * ";
  }
  console.log(row);
}

// 3.
//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5
function printStarPatternNumbers() {
  for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + " " + (i + 1);
    }
    console.log(row);
  }
}
// printStarPatternNumbers()

//4

//1 2 3 4 5
//1 2 3 4
//1 2 3
//1 2
//1

function printStarPatternNumbers2() {
  for (let i = 5; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row = row + " " + (j + 1);
    }
    console.log(row);
  }
}
// printStarPatternNumbers()

//            *
//          * *
//        * * *
//      * * * *
//    * * * * *

function printStarPattern(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (j < i - 1) {
        row = row.concat("   ");
      } else {
        row = row.concat(" * ");
      }
    }
    console.log(row);
  }
}
printStarPattern(10);

//
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0

function printStarPatternNumbers(n) {
  for (let i = 2; i <= n; i++) {
    let row = "";
    for (let j = 2; j < i + 1; j++) {
      if (j % 2 == 0) {
        row = row + " " + "1";
      } else {
        row = row + " " + "0";
      }
    }
    console.log(row);
  }
}
// or
function printStarPatternNumbers(n) {
  for (let i = 0; i <= n; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j < i + 1; j++) {
      row = row + toggle;
      if (toggle === 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}

// printStarPatternNumbers(7)

// 1
// 01
// 010
// 1010
// 10101
// 010101
// 0101010
// 10101010

let toggle = 1;
function printStarPatternNumbers(n) {
  for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + toggle;
      if (toggle === 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}

// printStarPatternNumbers(6)
