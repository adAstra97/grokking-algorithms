const countFunc = (arr) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += 1;
  }

  return result;
};

// console.log(countFunc([1, 2, 3]));

const reduceFunc = (arr) => {
  return arr.reduce((acc, _item) => acc + 1, 0);
};

// console.log(reduceFunc([1, 2]))

const recursiveFunc = (arr) => {
  if (arr.length === 0) return 0;

  return 1 + recursiveFunc(arr.slice(1));
};

console.log(recursiveFunc([1, 2, 0, 6]))
