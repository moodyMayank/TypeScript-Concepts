// Rest Parameters

// collection of numbers are stored in nums

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

console.log(total(1, 2, 3, 4)); // Only gives output 9 , since 1 is stored in `a`.
