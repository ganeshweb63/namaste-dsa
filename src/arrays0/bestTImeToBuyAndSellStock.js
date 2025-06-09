function buyAndSellStock(arr) {
  let min = arr[0];
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - min > maxProfit) {
      maxProfit = arr[i] - min;
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return maxProfit;
}
console.log(buyAndSellStock([7, 1, 5, 3, 6, 4]));
