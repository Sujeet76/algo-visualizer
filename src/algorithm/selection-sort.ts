import {
  cssClassNames,
  delay,
  giveMax,
  setBGColor,
  swapHeight,
} from "@/lib/utils";

const visualizeSelectionSort = async (
  arr: number[],
  delayMilliSec: number,
  setArray: (arr: number[]) => void,
  setIsSorting: (value: boolean) => void
) => {
  // get html node form DOM
  const arrNode = document.getElementsByClassName(
    "array-line-bar"
  ) as HTMLCollectionOf<HTMLElement>;

  setIsSorting(true);

  for (let i = 0; i < arr.length - 1; i++) {
    let min_idx = i;
    setBGColor(arrNode[i], cssClassNames["key-ele"]);
    await delay(giveMax(delayMilliSec / 3, 100));

    for (let j = i + 1; j < arr.length; j++) {
      setBGColor(arrNode[j], cssClassNames["compare-ele"]);
      setBGColor(arrNode[min_idx], cssClassNames["compare-ele"]);
      await delay(delayMilliSec);

      if (arr[j] < arr[min_idx]) {
        setBGColor(arrNode[min_idx], cssClassNames["default-ele-bg"]);
        min_idx = j;
        // setBGColor(arrNode[min_idx], cssClassNames["key-ele"]);
      }
      setBGColor(arrNode[j], cssClassNames["default-ele-bg"]);
      setBGColor(arrNode[min_idx], cssClassNames["key-ele"]);
      await delay(giveMax(delayMilliSec / 3, 100));
    }

    setBGColor(arrNode[min_idx], cssClassNames["swap-ele"]);
    setBGColor(arrNode[i], cssClassNames["swap-ele"]);
    await delay(giveMax(delayMilliSec / 3, 100));
    swapHeight(arrNode[i], arrNode[min_idx]);
    [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
    setBGColor(arrNode[min_idx], cssClassNames["default-ele-bg"]);
    setBGColor(arrNode[i], cssClassNames["sorted-ele"]);
  }
  setBGColor(arrNode[arr.length - 1], cssClassNames["sorted-ele"]);
  setIsSorting(false);
  setArray(arr);
};

export default visualizeSelectionSort;
