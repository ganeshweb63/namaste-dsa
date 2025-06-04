function reverseInteger(n) {
  const original = n;
  let reverse = 0;
  n = Math.abs(n);
  while (n > 0) {
    const reminder = n % 10;
    reverse = 10 * reverse + reminder;
    n = Math.floor(n / 10);
  }

  const limit = Math.pow(2, 31);
  if (reverse < -limit || reverse > limit) return 0;

  return original < 0 ? -reverse : reverse;
}

console.log(reverseInteger(-21211000));
console.log(reverseInteger(12332100111));
