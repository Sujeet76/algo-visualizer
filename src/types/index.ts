import { ReactNode } from "react";

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

export type SelectOptionType = {
  label: string;
  value: SortingAlgoType;
};

export type AnimationArrayType = [number[], boolean][];

// context types
export type VisualizerProviderProps = {
  children: ReactNode;
  sortingAlgoName: SortingAlgoType;
  isSorted: boolean;
  isSorting: boolean;
  requiresReset: boolean;
  array: number[];
  speed: number[];
  setArray: (array: number[]) => void;
  setIsSorted: (isSorted: boolean) => void;
  setIsSorting: (isSorting: boolean) => void;
  setSortingAlgoName: (algo: SortingAlgoType) => void;
  setSpeed: (speed: number[]) => void;
  generateArray: (length?: number) => void;
};
