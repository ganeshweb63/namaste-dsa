function singleNumber(nums) {
  // let map = {};
  // for (let i = 0; i < nums.length; i++) {
  //     if (!map[nums[i]]) {
  //         map[nums[i]] = 1;
  //     } else {
  //         map[nums[i]]++
  //     }
  // }
  // console.log(map)
  // for (let j = 0; j < nums.length; j++) {
  //     if (map[nums[j]] === 1) {
  //         return nums[j];
  //     }
  // }
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }

  return xor;
}

console.log(singleNumber([4, 1, 2, 1, 2]));
