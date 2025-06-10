function maxConsecutiveOnes(nums) {
  // if (nums.length === 0) return 0;
  let prev = 0;
  let tempCount = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (prev !== nums[i]) {
      tempCount = 0;
    }
    if (tempCount === 0 && nums[i] === 1) {
      tempCount++;
    }
    if (prev === 1 && prev === nums[i]) {
      tempCount++;
    }
    if (count < tempCount) {
      count = tempCount;
    }
    prev = nums[i];
  }
  return count;
}
// console.log(maxConsecutiveOnes([0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0]))
// console.log(maxConsecutiveOnes([0]))
console.log(maxConsecutiveOnes([1, 1, 0, 1]));
