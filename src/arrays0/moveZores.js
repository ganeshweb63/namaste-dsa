// [0,1,0,3,12]
function moveZerosLast(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] !== 0) {
      arr[x] = arr[i];
      x++;
    }
  }
  for (let j = x; j < arr.length; j++) {
    console.log(arr[j]);
    arr[j] = 0;
  }
  return arr;
}
console.log(moveZerosLast([0, 1, 0, 3, 12]));
