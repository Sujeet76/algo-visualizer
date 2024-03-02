import { setBGColor, delay } from "@/lib/utils";

const copyHeight = (ele1: HTMLElement, ele2: HTMLElement | string) => {
  if (typeof ele2 === "string") {
    ele1.style.height = ele2;
    return;
  }
  ele1.style.height = ele2.style.height;
};

const visualizeInsertionSort = async (
  arr: number[],
  delayMilliSec: number,
  setArray: (arr: number[]) => void,
  setIsSorting: (value: boolean) => void
) => {
  // get html node form DOM
  const arrNode = document.getElementsByClassName(
    "array-line-bar"
  ) as HTMLCollectionOf<HTMLElement>;

  // set is sorting true
  setIsSorting(true);

  // loop through array
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    const keyH = arrNode[i].style.height;
    let j = i - 1;
    let k = i - 1;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (j < 0) break;
      setBGColor(arrNode[i], "compare-ele");
      setBGColor(arrNode[j], "compare-ele");
      await delay(delayMilliSec);
      if (arr[j] <= key) {
        setBGColor(arrNode[j], "default-ele-bg");
        setBGColor(arrNode[i], "default-ele-bg");
        break;
      }

      setBGColor(arrNode[j], "swap-ele");
      setBGColor(arrNode[j + 1], "swap-ele");
      await delay(Math.max(delayMilliSec / 3, 100));

      copyHeight(arrNode[j + 1], arrNode[j]);

      setBGColor(arrNode[j], "default-ele-bg");
      setBGColor(arrNode[j + 1], "default-ele-bg");

      arr[j + 1] = arr[j];
      j -= 1;
    }

    // setBGColor(arrNode[i + 2], "swap-ele");
    setBGColor(arrNode[j + 1], "correct-ele");
    await delay(Math.max(delayMilliSec / 3, 100));
    copyHeight(arrNode[j + 1], keyH);

    arr[j + 1] = key;

    while (k >= 0) {
      setBGColor(arrNode[k], "sorted-ele");
      k--;
    }
  }
  setBGColor(arrNode[arr.length - 1], "sorted-ele");

  setIsSorting(false);
  setArray(arr);
};

export default visualizeInsertionSort;
