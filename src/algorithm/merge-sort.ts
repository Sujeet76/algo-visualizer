import { delay, giveMax, setBGColor } from "@/lib/utils";

const copyHeight = (ele1: HTMLElement, ele2: HTMLElement | string) => {
  if (typeof ele2 === "string") {
    ele1.style.height = ele2;
    return;
  }
  ele1.style.height = ele2.style.height;
};

let maxEle: number;

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
  console.log({ arr });
  setArray(arr);
};

const getNewHeight = (num: number) => {
  return `${((num * 100) / maxEle).toFixed(2)}%`;
};

const mergeSort = async (
  arrNode: HTMLCollectionOf<HTMLElement>,
  delayInMilliSec: number,
  arr: number[],
  s: number,
  e: number
) => {
  if (s < e) {
    const m = s + Math.floor((e - s) / 2);

    // sub array 1
    await mergeSort(arrNode, delayInMilliSec, arr, s, m);

    // sub array 2
    await mergeSort(arrNode, delayInMilliSec, arr, m + 1, e);

    // merge sub array
    await merge(arrNode, delayInMilliSec, arr, s, m, e);
  }
};

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

  for (let i = 0; i < n1; i++) {
    setBGColor(arrNode[l + i], "left-half");
    L[i] = arr[l + i];
  }
  for (let j = 0; j < n2; j++) {
    setBGColor(arrNode[m + j + 1], "right-half");
    R[j] = arr[m + 1 + j];
  }
  await delay(delayInMilliSec * 2);

  let i = 0;
  let j = 0;
  let k = l;
  let comI = l + 0;
  let comJ = m + 1;

  while (i < n1 && j < n2) {
    // set compare color mean these are the elements which are going to be compared
    setBGColor(arrNode[comI], "compare-ele");
    setBGColor(arrNode[comJ], "compare-ele");
    await delay(delayInMilliSec);

    // set swap color mean these are the elements which are going to be swapped
    setBGColor(arrNode[comI], "swap-ele");
    setBGColor(arrNode[comJ], "swap-ele");
    await delay(giveMax(delayInMilliSec / 3, 300));

    if (L[i] <= R[j]) {
      // copy height of the elements
      copyHeight(arrNode[k], getNewHeight(L[i]));
      arr[k] = L[i];
      // set swap color mean these are the elements which are going to be swapped
      // setBGColor(arrNode[l + i], "left-half");
      setBGColor(arrNode[l + i], "default-ele-bg");
      i++;
    } else {
      // copy height of the elements
      copyHeight(arrNode[k], getNewHeight(R[j]));
      // set swap color mean these are the elements which are going to be swapped
      arr[k] = R[j];

      setBGColor(arrNode[m + j + 1], "default-ele-bg");
      j++;
    }

    // set sorted color mean this element is sorted mean it in its correct position
    setBGColor(arrNode[k], "sorted-ele");
    await delay(giveMax(delayInMilliSec / 3, 300));
    comI++;
    comJ++;
    k++;
  }

  while (i < n1) {
    // copy height of the elements
    copyHeight(arrNode[k], getNewHeight(L[i]));

    arr[k] = L[i];
    setBGColor(arrNode[k], "sorted-ele");
    await delay(giveMax(delayInMilliSec / 3, 300));
    i++;
    k++;
  }

  while (j < n2) {
    copyHeight(arrNode[k], getNewHeight(R[j]));

    arr[k] = R[j];
    setBGColor(arrNode[l], "sorted-ele");
    await delay(giveMax(delayInMilliSec / 3, 300));
    j++;
    k++;
  }
};

export default visualizeMergeSort;
