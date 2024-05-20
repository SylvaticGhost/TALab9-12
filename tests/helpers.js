export function generateArray(length) {
  const arr = []
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 10000))
    }
    return arr
}

export async function sortingContext(sortingFunction, arr) {
  const start = new Date().getTime();
  sortingFunction(arr);
  const end = new Date().getTime();
  // if (!isSorted(arr)) throw new Error("Array is not sorted");
  return end - start;
}

export function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}