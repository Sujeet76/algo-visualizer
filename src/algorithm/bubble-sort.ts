import { setBGColor, swapHeight, delay, giveMax } from "@/lib/utils";

/**
 * Sorts an array using the bubble sort algorithm and visualizes the sorting process.
 * @param arr - The array to be sorted.
 * @param delayMilliSec - The delay in milliseconds between each step of the visualization.
 * @param setArray - A function to update the state or value of the array being sorted.
 * @param setIsSorting - A function to update the state or value indicating whether the sorting is in progress.
 */
const visualizeBubbleSort = async (
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

  // actual logic for bubble sort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // change color of the bars being compared
      setBGColor(arrNode[j], "compare-ele");
      setBGColor(arrNode[j + 1], "compare-ele");

      // add delay to visualization purpose set by user (in milliSecond)
      await delay(delayMilliSec);

      // compare the ele if it is greater
      if (arr[j] > arr[j + 1]) {
        // set different color to the element to be swapped
        setBGColor(arrNode[j], "swap-ele");
        setBGColor(arrNode[j + 1], "swap-ele");

        // add delay to that user can visually see which element is going to swapped
        await delay(giveMax(delayMilliSec / 3 / 2, 50));

        // swap the elements height or swap the whole node
        // i swap height
        swapHeight(arrNode[j], arrNode[j + 1]);
        await delay(giveMax(delayMilliSec / 3 / 2, 50));

        // actually swapped
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }

      // set default color which element is swapped or compared
      setBGColor(arrNode[j], "default-ele-bg");
      setBGColor(arrNode[j + 1], "default-ele-bg");
    }
    // set the different color for element which is in its sorted position
    setBGColor(arrNode[arr.length - i - 1], "sorted-ele");
  }

  // set the color for last element because it is already in sorting position
  setBGColor(arrNode[0], "sorted-ele");
  setIsSorting(false);

  // set sorted array to useState hook or update sorted array to its original position
  setArray(arr);
};

export default visualizeBubbleSort;
