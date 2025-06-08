function reverseString(n) {
  // ["h","e","l","l","o"]
  let loopTimes = Math.floor(n.length / 2);
  for (let i = 0; i < loopTimes; i++) {
    let temp = n[i];
    n[i] = n[n.length - 1 - i];
    n[n.length - 1 - i] = temp;
  }

  return n;
}
console.log(reverseString(["h", "e", "l", "l", "o"]));
