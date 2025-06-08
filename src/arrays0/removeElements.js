function removeElement(arr, element) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== element) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }
  console.log(arr);
  return x;
}
// 3,2,2,3 - 3
//2,2,3,3
console.log(removeElement([3, 2, 2, 3, 1, 3], 3));
