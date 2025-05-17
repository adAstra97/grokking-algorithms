const sumFunc = (array) => {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result;
};

// console.log(sumFunc([1, 2, 3, 0, -1]));

const reduceSum = (array) => {
  return array.reduce((acc, item) => acc + item, 0);
}

// console.log(reduceSum([1, 2, 3, 0, -1]));

const recursiveSum = array => {
  if (!array.length) return 0;

  return array[0] + recursiveSum(array.slice(1));
};

// console.log(recursiveSum([1, 2, 3, 0, -1]));

