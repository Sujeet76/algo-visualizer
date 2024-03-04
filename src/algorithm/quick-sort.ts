import { delay, giveMax, setBGColor, swapHeight } from "@/lib/utils";

/**
 * Visualizes the Quick Sort algorithm on an array of numbers.
 *
 * @param arr - The array of numbers to be sorted.
 * @param delayMilliSec - The delay in milliseconds between each step of the sorting process.
 * @param setArray - A function to update the state with the sorted array.
 * @param setIsSorting - A function to update the state indicating whether the sorting is in progress.
 */
const visualizeQuickSort = async (
  arr: number[],
  delayMilliSec: number,
  setArray: (arr: number[]) => void,
  setIsSorting: (value: boolean) => void
) => {
  // Represents a collection of HTML elements with the class "array-line-bar".
  const arrNode = document.getElementsByClassName(
    "array-line-bar"
  ) as HTMLCollectionOf<HTMLElement>;

  setIsSorting(true);

  await quickSort(arrNode, arr, delayMilliSec, 0, arr.length - 1);

  setIsSorting(false);
  setArray(arr);
};

/**
 * Sorts an array of numbers using the Quick Sort algorithm.
 *
 * @param arrNode - The HTMLCollection of HTMLElements representing the array elements.
 * @param arr - The array of numbers to be sorted.
 * @param delayMilliSec - The delay in milliseconds between each step of the sorting process.
 * @param low - The starting index of the subarray to be sorted.
 * @param heigh - The ending index of the subarray to be sorted.
 * @returns A Promise that resolves when the sorting is complete.
 */
const quickSort = async (
  arrNode: HTMLCollectionOf<HTMLElement>,
  arr: number[],
  delayMilliSec: number,
  low: number,
  heigh: number
) => {
  if (low < heigh) {
    // index of pivot element
    const pi = await partition(arrNode, arr, delayMilliSec, low, heigh);

    // calling quickSort on the left of pivot
    await quickSort(arrNode, arr, delayMilliSec, low, pi - 1);

    // set bg color of sorted elements
    for (let i = low; i <= pi; i++) {
      setBGColor(arrNode[i], "sorted-ele");
    }

    // calling quickSort on the right of pivot
    await quickSort(arrNode, arr, delayMilliSec, pi + 1, heigh);

    // set bg color of sorted elements
    for (let i = pi + 1; i <= heigh; i++) {
      setBGColor(arrNode[i], "sorted-ele");
    }
  }
};

/**
 * Partitions the array around a pivot element and returns the index of the pivot element.
 *
 * @param arrNode - The HTMLCollection of HTMLElements representing the array elements.
 * @param arr - The array of numbers to be sorted.
 * @param delayMilliSec - The delay in milliseconds for visualization purposes.
 * @param low - The starting index of the partition.
 * @param heigh - The ending index of the partition.
 * @returns The index of the pivot element after partitioning.
 */
const partition = async (
  arrNode: HTMLCollectionOf<HTMLElement>,
  arr: number[],
  delayMilliSec: number,
  low: number,
  heigh: number
) => {
  // select right most element as pivot
  const pivot = arr[heigh];
  setBGColor(arrNode[heigh], "key-ele");

  // int pointer to keep track of the greater element
  let i = low - 1;

  // loop through the array and compare each element with the pivot
  for (let j = low; j < heigh; j++) {
    // set bg color of compared elements
    setBGColor(arrNode[j], "compare-ele");
    setBGColor(arrNode[heigh], "compare-ele");
    await delay(delayMilliSec);

    // if current element is smaller than or equal to pivot
    if (arr[j] <= pivot) {
      i++;

      // set bg color of swap elements
      setBGColor(arrNode[i], "swap-ele");
      setBGColor(arrNode[j], "swap-ele");
      await delay(giveMax(delayMilliSec / 3, 50));

      // swap arr[i] and arr[j] height
      swapHeight(arrNode[i], arrNode[j]);
      // actual swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // set right-half bg color means that this element is greater than pivot
    setBGColor(arrNode[j], "right-half");

    // set left-half bg color means that this element is less than pivot
    if (i >= 0) setBGColor(arrNode[i], "left-half");

    // set key-ele bg color means that this is a pivot element
    setBGColor(arrNode[heigh], "key-ele");
    await delay(giveMax(delayMilliSec / 3, 50));
  }

  // swap pivot element with the greater element
  setBGColor(arrNode[i + 1], "swap-ele");
  setBGColor(arrNode[heigh], "swap-ele");

  await delay(giveMax(delayMilliSec / 3, 50));

  // set right-half bg color means that this element is greater than pivot
  setBGColor(arrNode[heigh], "right-half");
  // set left-half bg color means that this element is less than pivot
  setBGColor(arrNode[i + 1], "left-half");

  // swap arr[i+1] and arr[heigh] height
  swapHeight(arrNode[i + 1], arrNode[heigh]);
  // add delay
  await delay(delayMilliSec);

  // actual swap
  [arr[i + 1], arr[heigh]] = [arr[heigh], arr[i + 1]];

  // index of pivot element
  return i + 1;
};

export default visualizeQuickSort;
