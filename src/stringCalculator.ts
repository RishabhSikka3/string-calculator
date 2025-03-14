export const add = (numbers: string): number => {
  if (numbers.length === 0) return 0;

  const numArray = numbers.split(",").map((num) => Number(num));

  return numArray.reduce((sum, num) => sum + num, 0);
};
