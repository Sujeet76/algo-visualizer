import { SelectOptionType, SortingAlgoType } from "@/types";

export const DEFAULT_ARRAY_LENGTH = 20;
export const DEFAULT_SPEED = 400;
export const DEFAULT_ALGO_NAME: SortingAlgoType = "merge";

export const algoOptions: SelectOptionType[] = [
  { label: "Bubble sort", value: "bubble" },
  { label: "Quick sort", value: "quick" },
  { label: "Merge sort", value: "merge" },
  { label: "Insertion sort", value: "insertion" },
  { label: "Selection sort", value: "selection" },
];

export const sortingAlgoData = {
  bubble: {
    title: "Bubble Sort",
    description:
      "A simple comparison-based sorting algorithm. Bubble sort repeatedly compares and swaps adjacent elements if they are in the wrong order, moving larger elements towards the end with each pass through the list. This process continues until the list is sorted and no more swaps are needed.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  insertion: {
    title: "Insertion Sort",
    description:
      "Insertion sort builds the final sorted array one element at a time, by repeatedly taking the next unsorted element and inserting it into its correct position among the previously sorted elements. This process continues until all elements have been inserted into their proper place, resulting in a sorted list.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  selection: {
    title: "Selection Sort",
    description:
      "Selection sort works by repeatedly finding the minimum element from the unsorted portion of the list and swapping it with the element at the current position. This process is continued for each position in the list, moving the boundary of the sorted and unsorted portions one element forward each time until the entire list is sorted.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n²)",
  },
  merge: {
    title: "Merge Sort",
    description:
      "Merge sort divides the unsorted list into n sub-lists, each containing one element (a list of one element is considered sorted), and then repeatedly merges these sub-lists to produce new sorted sub-lists until there is only one sub-list remaining, which is the sorted list. This algorithm uses a divide-and-conquer approach, splitting the list in half recursively and merging the sorted halves back together.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  quick: {
    title: "Quick Sort",
    description:
      "Quick sort selects a 'pivot' element from the array and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively, and the sorted sub-arrays are combined with the pivot to form the sorted array.",
    worstCase: "O(n²)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
};
