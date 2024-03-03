import { delay, giveMax, setBGColor } from "@/lib/utils";

const copyHeight = (ele1: HTMLElement, ele2: HTMLElement | string) => {
  if (typeof ele2 === "string") {
    ele1.style.height = ele2;
    return;
  }
  ele1.style.height = ele2.style.height;
};

const getNewHeight = (num: number) => {
  return `${((num * 100) / maxEle).toFixed(2)}%`;
};

let maxEle: number;

/**
 * Visualizes the Merge Sort algorithm on an array of numbers.
 *
 * @param arr - The array of numbers to be sorted.
 * @param delayMilliSec - The delay in milliseconds between each step of the sorting process.
 * @param setArray - A function to update the state with the sorted array.
 * @param setIsSorting - A function to update the state indicating whether the sorting is in progress.
 */
const visualizeMergeSort = async (
  arr: number[],
  delayMilliSec: number,
  setArray: (arr: number[]) => void,
  setIsSorting: (value: boolean) => void
) => {
  setIsSorting(true);

  maxEle = Math.max(...arr);
  console.log(maxEle);

  const arrNode = document.getElementsByClassName(
    "array-line-bar"
  ) as HTMLCollectionOf<HTMLElement>;

  await mergeSort(arrNode, delayMilliSec, arr, 0, arr.length - 1);

  setIsSorting(false);
  setArray(arr);
};

/**
 * Sorts an array using the merge sort algorithm.
 *
 * @param arrNode - The HTML collection of elements representing the array nodes.
 * @param delayInMilliSec - The delay in milliseconds between each step of the sorting process.
 * @param arr - The array to be sorted.
 * @param s - The starting index of the subarray to be sorted.
 * @param e - The ending index of the subarray to be sorted.
 * @returns A Promise that resolves when the sorting is complete.
 */
const mergeSort = async (
  arrNode: HTMLCollectionOf<HTMLElement>,
  delayInMilliSec: number,
  arr: number[],
  s: number,
  e: number
) => {
  if (s < e) {
    const m = s + Math.floor((e - s) / 2);

    // set partition color mean these are the elements which are going to be partitioned
    setBGColor(arrNode[s], "partition-ele");
    setBGColor(arrNode[m], "partition-ele");
    await delay(delayInMilliSec / 2);

    // sub array 1
    await mergeSort(arrNode, delayInMilliSec, arr, s, m);

    // set partition color mean these are the elements which are going to be partitioned
    setBGColor(arrNode[m + 1], "partition-ele");
    setBGColor(arrNode[e], "partition-ele");
    await delay(delayInMilliSec / 2);
    // sub array 2
    await mergeSort(arrNode, delayInMilliSec, arr, m + 1, e);

    // merge sub array
    await merge(arrNode, delayInMilliSec, arr, s, m, e);
  }
};

/**
 * Merges two sub-arrays of the given array.
 * @param arrNode - The HTMLCollection of HTMLElements representing the array elements.
 * @param delayInMilliSec - The delay in milliseconds for visualization.
 * @param arr - The array to be sorted.
 * @param l - The starting index of the subarray.
 * @param m - The mid index of the subarray.
 * @param r - The ending index of the subarray.
 */
const merge = async (
  arrNode: HTMLCollectionOf<HTMLElement>,
  delayInMilliSec: number,
  arr: number[],
  l: number,
  m: number,
  r: number
) => {
  const n1 = m - l + 1;
  const n2 = r - m;

  const L = new Array<number>(n1);
  const R = new Array<number>(n2);

  // TODO : display these copy of array on DOM(HTML) for better visualization
  // ADD : setBGColor(arrNode[l + i], "sorted-ele");

  for (let i = 0; i < n1; i++) {
    // set left half color mean these are the elements which are going to be merged
    setBGColor(arrNode[l + i], "left-half");

    L[i] = arr[l + i];
    await delay(delayInMilliSec / 5);
  }
  for (let j = 0; j < n2; j++) {
    // set right half color mean these are the elements which are going to be merged
    setBGColor(arrNode[m + j + 1], "right-half");

    R[j] = arr[m + 1 + j];
    await delay(delayInMilliSec / 5);
  }

  await delay(delayInMilliSec);

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      // copy height of the elements
      copyHeight(arrNode[k], getNewHeight(L[i]));
      arr[k] = L[i];

      i++;
    } else {
      // copy height of the elements
      copyHeight(arrNode[k], getNewHeight(R[j]));

      // set swap color mean these are the elements which are going to be swapped
      arr[k] = R[j];

      j++;
    }

    // set sorted color mean this element is sorted mean it in its correct position
    setBGColor(arrNode[k], "sorted-ele");
    await delay(giveMax(delayInMilliSec / 3, 50));
    k++;
  }

  while (i < n1) {
    // copy height of the elements
    await delay(giveMax(delayInMilliSec / 3, 50));
    copyHeight(arrNode[k], getNewHeight(L[i]));

    arr[k] = L[i];
    setBGColor(arrNode[k], "sorted-ele");
    await delay(giveMax(delayInMilliSec / 3, 50));
    i++;
    k++;
  }

  while (j < n2) {
    await delay(giveMax(delayInMilliSec / 3, 50));
    copyHeight(arrNode[k], getNewHeight(R[j]));

    arr[k] = R[j];
    setBGColor(arrNode[k], "sorted-ele");
    await delay(giveMax(delayInMilliSec / 3, 50));
    j++;
    k++;
  }
};

export default visualizeMergeSort;
