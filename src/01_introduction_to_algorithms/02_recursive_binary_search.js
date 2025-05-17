const binarySearch = (list, item, low = 0, high = list.length - 1) => {
  if (low > high) return null;

  const midIdx = Math.floor((low + high) / 2);
  const midEl = list[midIdx];

  if (item === midEl) {
    return midIdx;
  } else if (item > midEl) {
    return binarySearch(list, item, midIdx + 1, high);
  } else {
    return binarySearch(list, item, low, midIdx - 1);
  }
}

const createArr = n => Array.from({ length: n }, (_v, k) => k + 1);

const myList = createArr(100);

console.log(binarySearch(myList, 3)); // 2
console.log(binarySearch(myList, -1)); // null
