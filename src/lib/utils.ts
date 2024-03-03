import visualizeBubbleSort from "@/algorithm/bubble-sort";
import visualizeInsertionSort from "@/algorithm/insertion-sort";
import visualizeMergeSort from "@/algorithm/merge-sort";
import visualizeQuickSort from "@/algorithm/quick-sort";
import visualizeSelectionSort from "@/algorithm/selection-sort";
import { SortingAlgoType, cssClassNameType, cssUtilName } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cssClassNames: cssClassNameType = {
  "default-ele-bg": "default-ele-bg",
  "compare-ele": "compare-ele",
  "key-ele": "key-ele",
  "swap-ele": "swap-ele",
  "left-half": "left-half",
  "right-half": "right-half",
  "partition-ele": "partition-ele",
  "correct-ele": "correct-ele",
  "sorted-ele": "sorted-ele",
};

const removeObjVal = (cssClassName: cssClassNameType, t: cssUtilName) => {
  return Object.values(cssClassName).filter((className) => className !== t);
};

export const generateRandomArray = (length: number) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }
  return array;
};

export const swapHeight = (ele1: HTMLElement, ele2: HTMLElement) => {
  const temp = ele1.style.height;
  ele1.style.height = ele2.style.height;
  ele2.style.height = temp;
};

export const setBGColor = (ele: HTMLElement, color: cssUtilName) => {
  switch (color) {
    case cssClassNames["compare-ele"]:
      ele.classList.add(cssClassNames["compare-ele"]);
      ele.classList.remove(
        ...removeObjVal(cssClassNames, cssClassNames["compare-ele"])
      );
      break;

    case cssClassNames["default-ele-bg"]:
      ele.classList.add(cssClassNames["default-ele-bg"]);
      ele.classList.remove(
        ...removeObjVal(cssClassNames, cssClassNames["default-ele-bg"])
      );
      break;

    case cssClassNames["sorted-ele"]:
      ele.classList.add(cssClassNames["sorted-ele"]);
      ele.classList.remove(
        ...removeObjVal(cssClassNames, cssClassNames["sorted-ele"])
      );
      break;

    case cssClassNames["swap-ele"]:
      ele.classList.add(cssClassNames["swap-ele"]);
      ele.classList.remove(
        ...removeObjVal(cssClassNames, cssClassNames["swap-ele"])
      );
      break;

    case cssClassNames["key-ele"]:
      ele.classList.add(cssClassNames["key-ele"]);
      ele.classList.remove(
        ...removeObjVal(cssClassNames, cssClassNames["key-ele"])
      );
      break;

    case cssClassNames["correct-ele"]:
      ele.classList.add(cssClassNames["correct-ele"]);
      ele.classList.remove(
        ...removeObjVal(cssClassNames, cssClassNames["correct-ele"])
      );
      break;

    case cssClassNames["partition-ele"]:
      ele.classList.add(cssClassNames["partition-ele"]);
      ele.classList.remove(
        ...removeObjVal(cssClassNames, cssClassNames["partition-ele"])
      );
      break;

    case cssClassNames["left-half"]:
      ele.classList.add(cssClassNames["left-half"]);
      ele.classList.remove(
        ...removeObjVal(cssClassNames, cssClassNames["left-half"])
      );
      break;

    case cssClassNames["right-half"]:
      ele.classList.add(cssClassNames["right-half"]);
      ele.classList.remove(
        ...removeObjVal(cssClassNames, cssClassNames["right-half"])
      );
      break;

    default:
      break;
  }
};

export const delay = (milliSec: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milliSec);
  });
};

export const giveMax = (num1: number, num2: number) =>
  Math.max(Math.floor(num1), Math.floor(num2));

/**
 * Animates the sorting process based on the selected algorithm.
 *
 * @param algoName - The name of the sorting algorithm.
 * @param array - The array to be sorted.
 * @param delay - The delay (in milliseconds) between each step of the sorting process.
 * @param setArray - A function to update the state with the sorted array.
 * @param setIsSorting - A function to update the state indicating whether the sorting is in progress.
 */
export const animation = async (
  algoName: SortingAlgoType,
  array: number[],
  delay: number,
  setArray: (arr: number[]) => void,
  setIsSorting: (value: boolean) => void
) => {
  const tempArr = array.slice();
  switch (algoName) {
    case "bubble":
      await visualizeBubbleSort(tempArr, delay, setArray, setIsSorting);
      break;
    case "insertion":
      await visualizeInsertionSort(tempArr, delay, setArray, setIsSorting);
      break;
    case "selection":
      await visualizeSelectionSort(tempArr, delay, setArray, setIsSorting);
      break;
    case "merge":
      await visualizeMergeSort(tempArr, delay, setArray, setIsSorting);
      break;
    case "quick":
      await visualizeQuickSort(tempArr, delay, setArray, setIsSorting);
      break;
    default:
      console.error("Invalid sorting algo name");
      break;
  }
};
