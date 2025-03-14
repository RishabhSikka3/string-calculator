export const add = (numbers: string): number => {
  if (numbers.length === 0) return 0;

  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    numbers = parts[1];
  }

  const numArray = numbers.split(delimiter).map(Number);
  const negatives = numArray.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
};

console.log(add(""));
console.log(add("1"));
console.log(add("1,2"));
console.log(add("1\n2,3"));
console.log(add("//;\n1;2"));
console.log(add("1,2,-3,-4"));
