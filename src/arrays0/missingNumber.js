function missingNumber(nums) {
  const n = nums.length;
  const totalSum = (n * (n + 1)) / 2;
  let sumWithMissingNumber = 0;
  for (let i = 0; i < n; i++) {
    sumWithMissingNumber += nums[i];
  }

  return totalSum - sumWithMissingNumber;
}

console.log(missingNumber([2, 4, 0, 1, 5, 6]));
