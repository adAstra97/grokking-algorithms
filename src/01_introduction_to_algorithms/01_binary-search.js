/**
 * Searches recursively number from the list
 * @param {Array} list Source array
 * @param {number} item Search item
 * @returns {(number|null)} Number if the value is found or NULL otherwise
 */
const binarySearch = (list, item) => {
  let start = 0;
  let end = list.length - 1;

  while (end >= start) {
    let mid = Math.ceil((end + start) / 2);

    if (list[mid] > item) {
      end = mid - 1;
    } else if (list[mid] < item) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return null;
};

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3)); // 1
console.log(binarySearch(myList, -1)); // null
