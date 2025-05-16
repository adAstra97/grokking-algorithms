/**
 * Finds the index of the element with the smallest value in the array
 * @param {Array} array Source array
 * @returns {number} Index of the element with the smallest value
 */
const findSmallestIndex = (array) => {
  let smallestEl = array[0];
  let smallesIdx = 0;

  for (let i = 1; i < array.length; i++) {
    if (smallestEl > array[i]) {
      smallestEl = array[i];
      smallesIdx = i;
    }
  }

  return smallesIdx;;
};

/**
 * Sort array by increment
 * @param {Array} array Source array
 * @returns {Array} New sorted array
 */
const selectionSort = (array) => {
  const sortedArray = [];
  const copiedArray = [...array];

  for (let i = 0; i < array.length; i++ ) {
    const smallestIdx = findSmallestIndex(copiedArray);
    sortedArray.push(copiedArray.splice(smallestIdx, 1)[0]);
  }

  return sortedArray;
};

const sourceArray = [5, 3, 6, 2, 10];
const sourtedArray = selectionSort([5, 3, 6, 2, 10]);

console.log('Source array - ', sourceArray); // [5, 3, 6, 2, 10]
console.log('New sorted array - ', sourtedArray); // [2, 3, 5, 6, 10]
