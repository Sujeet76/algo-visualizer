import { delay, giveMax, setBGColor, swapHeight } from "@/lib/utils";

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
    setBGColor(arrNode[i], "key-ele");
    await delay(giveMax(delayMilliSec / 3, 100));

    for (let j = i + 1; j < arr.length; j++) {
      setBGColor(arrNode[j], "compare-ele");
      setBGColor(arrNode[min_idx], "compare-ele");
      await delay(delayMilliSec);

      if (arr[j] < arr[min_idx]) {
        setBGColor(arrNode[min_idx], "default-ele-bg");
        min_idx = j;
        // setBGColor(arrNode[min_idx], "key-ele");
      }
      setBGColor(arrNode[j], "default-ele-bg");
      setBGColor(arrNode[min_idx], "key-ele");
      await delay(giveMax(delayMilliSec / 3, 100));
    }

    setBGColor(arrNode[min_idx], "swap-ele");
    setBGColor(arrNode[i], "swap-ele");
    await delay(giveMax(delayMilliSec / 3, 100));
    swapHeight(arrNode[i], arrNode[min_idx]);
    [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
    setBGColor(arrNode[min_idx], "default-ele-bg");
    setBGColor(arrNode[i], "sorted-ele");
  }
  setBGColor(arrNode[arr.length - 1], "sorted-ele");
  setIsSorting(false);
  setArray(arr);
};

export default visualizeSelectionSort;
