import visualizeBubbleSort from "@/algorithm/bubble-sort";
import visualizeInsertionSort from "@/algorithm/insertion-sort";
import visualizeMergeSort from "@/algorithm/merge-sort";
import visualizeSelectionSort from "@/algorithm/selection-sort";
import { SortingAlgoType } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

export const setBGColor = (ele: HTMLElement, color: string) => {
  switch (color) {
    case "compare-ele":
      ele.classList.add("compare-ele");
      ele.classList.remove(
        "default-ele-bg",
        "swap-ele",
        "sorted-ele",
        "key-ele",
        "correct-ele",
        "partition-ele",
        "left-half",
        "right-half"
      );
      break;
    case "default-ele-bg":
      ele.classList.add("default-ele-bg");
      ele.classList.remove(
        "compare-ele",
        "swap-ele",
        "sorted-ele",
        "key-ele",
        "correct-ele",
        "partition-ele",
        "left-half",
        "right-half"
      );
      break;
    case "sorted-ele":
      ele.classList.add("sorted-ele");
      ele.classList.remove(
        "default-ele-bg",
        "compare-ele",
        "swap-ele",
        "key-ele",
        "correct-ele",
        "partition-ele",
        "left-half",
        "right-half"
      );
      break;
    case "swap-ele":
      ele.classList.add("swap-ele");
      ele.classList.remove(
        "default-ele-bg",
        "compare-ele",
        "sorted-ele",
        "key-ele",
        "correct-ele",
        "partition-ele",
        "left-half",
        "right-half"
      );
      break;
    case "key-ele":
      ele.classList.add("key-ele");
      ele.classList.remove(
        "default-ele-bg",
        "compare-ele",
        "sorted-ele",
        "swap-ele",
        "correct-ele",
        "partition-ele",
        "left-half",
        "right-half"
      );
      break;
    case "correct-ele":
      ele.classList.add("correct-ele");
      ele.classList.remove(
        "default-ele-bg",
        "compare-ele",
        "sorted-ele",
        "swap-ele",
        "key-ele",
        "partition-ele",
        "left-half",
        "right-half"
      );
      break;
    case "partition-ele":
      ele.classList.add("partition-ele");
      ele.classList.remove(
        "default-ele-bg",
        "compare-ele",
        "sorted-ele",
        "swap-ele",
        "key-ele",
        "correct-ele",
        "left-half",
        "right-half"
      );
      break;
    case "left-half":
      ele.classList.add("left-half");
      ele.classList.remove(
        "default-ele-bg",
        "compare-ele",
        "sorted-ele",
        "swap-ele",
        "key-ele",
        "correct-ele",
        "right-half",
        "partition-ele"
      );
      break;
    case "right-half":
      ele.classList.add("right-half");
      ele.classList.remove(
        "default-ele-bg",
        "compare-ele",
        "sorted-ele",
        "swap-ele",
        "key-ele",
        "correct-ele",
        "partition-ele",
        "left-half"
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
    default:
      console.error("Invalid sorting algo name");
      break;
  }
};
