function isPalindromeNumber(n) {
  if (n < 0) return false;
  const original = n;
  let reverse = 0;
  while (n > 0) {
    const reminder = n % 10;
    reverse = 10 * reverse + reminder;
    n = Math.floor(n / 10);
  }

  return original == reverse;
}

console.log(isPalindromeNumber(-212));
console.log(isPalindromeNumber(123321));
