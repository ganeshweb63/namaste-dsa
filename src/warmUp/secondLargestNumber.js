const arr = [3, 5, 1, 66, 33, 77, 78, 11, 56];

function findSecondLargestNumber(arr) {
  let firstLargestNumber = -Infinity;
  let secondLargestNumber = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargestNumber) {
      secondLargestNumber = firstLargestNumber;
      firstLargestNumber = arr[i];
    } else if (arr[i] > secondLargestNumber) {
      secondLargestNumber = arr[i];
    }
  }
  return { firstLargestNumber, secondLargestNumber };
}

console.log(findSecondLargestNumber(arr));
