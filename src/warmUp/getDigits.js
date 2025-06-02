let n = 10000;
function getDigits(n) {
  if (n === 0) return 1;
  n = Math.abs(n);
  let count = 0;
  console.log(n / 10);
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
}

console.log(getDigits(n));
