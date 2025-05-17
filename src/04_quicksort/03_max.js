const maxFunc = (arr) => {
  let result = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }

  return result;
};

// console.log(maxFunc([0, -1, 6, -3]));

const maxReduce = (arr) => {
  return arr.reduce((acc, item) => (acc > item ? acc : item), 0);
};

// console.log(maxReduce([0, -1, 6, -3]));

const recursiveMax = (arr) => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) {
    return arr[0];
  }

  const subMax = recursiveMax(arr.slice(1));
  return arr[0] > subMax ? arr[0] : subMax;
};

console.log(recursiveMax([1, 5, 10, 25, 16, 1]));
