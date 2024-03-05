import { MutableRefObject, ReactNode } from "react";

// currently only support sorting algo but can be extended to other types of algo like sorting , searching or graph
export type AlgoType = "sorting" | "searching";

export type SortingAlgoType =
  | "bubble"
  | "insertion"
  | "selection"
  | "merge"
  | "quick";

export type cssUtilName =
  | "default-ele-bg"
  | "compare-ele"
  | "key-ele"
  | "swap-ele"
  | "left-half"
  | "right-half"
  | "partition-ele"
  | "correct-ele"
  | "sorted-ele";

export type cssClassNameType = {
  [key in cssUtilName]: key;
};

export type AlgoInfo = {
  title: string;
  description: string;
  averageCase: string;
  bestCase: string;
  worstCase: string;
};

export type SortingAlgoInfo = {
  [key in SortingAlgoType]: AlgoInfo;
};

export type SelectSortingOptionType = {
  label: string;
  value: SortingAlgoType;
};

export type ColorInfoType = {
  [key in SortingAlgoType]: {
    color: cssUtilName;
    label: string;
  }[];
};

// context types
export type VisualizerProviderProps = {
  children: ReactNode;
  sortingAlgoName: SortingAlgoType;
  algoName: AlgoType;
  isSorted: boolean;
  isSorting: boolean;
  requiresReset: boolean;
  array: number[];
  speed: number[];
  setAlgoName: (algoType: AlgoType) => void;
  setArray: (array: number[]) => void;
  setIsSorted: (isSorted: boolean) => void;
  setIsSorting: (isSorting: boolean) => void;
  setSortingAlgoName: (algo: SortingAlgoType) => void;
  setSpeed: (speed: number[]) => void;
  generateArray: (length?: number) => void;
  ref: MutableRefObject<HTMLTextAreaElement | null>;
};
