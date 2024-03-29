import { AlgoType, SortingAlgoType } from "@/types";
import { ReactNode, useRef, useState } from "react";
import { VisualizerContext } from "./visualizer-context";
import { generateRandomArray } from "@/lib/utils";
import {
  DEFAULT_ALGO_NAME,
  DEFAULT_ALGO_TYPE,
  DEFAULT_ARRAY_LENGTH,
  DEFAULT_SPEED,
} from "@/lib/utils/constants";

export function VisualizerProvider({ children }: { children: ReactNode }) {
  const [isSorting, setIsSorting] = useState(false);

  const [isSorted, setIsSorted] = useState(false);

  const ref = useRef<HTMLTextAreaElement | null>(null);

  const [algoName, setAlgoName] = useState<AlgoType>(DEFAULT_ALGO_TYPE);

  const [array, setArray] = useState<number[]>(
    generateRandomArray(DEFAULT_ARRAY_LENGTH)
  );

  const [speed, setSpeed] = useState([DEFAULT_SPEED]);

  const [sortingAlgoName, setSortingAlgoName] =
    useState<SortingAlgoType>(DEFAULT_ALGO_NAME);

  const generateArray = (length = DEFAULT_ARRAY_LENGTH) => {
    const arrNode = document.getElementsByClassName(
      "array-line-bar"
    ) as HTMLCollectionOf<HTMLElement>;
    if (arrNode.length > 0 && arrNode[0].classList.contains("sorted-ele")) {
      for (let i = 0; i < arrNode.length; i++) {
        arrNode[i].classList.add("default-ele-bg");
        arrNode[i].classList.remove("sorted-ele");
      }
    }

    setArray(generateRandomArray(length));
    if (ref.current) ref.current.value = array.join(", ");
  };

  const requiresReset = isSorting || isSorted;

  const value = {
    children,
    isSorting,
    isSorted,
    algoName,
    array,
    speed,
    sortingAlgoName,
    requiresReset,
    setAlgoName,
    setArray,
    setIsSorting,
    setSpeed,
    setIsSorted,
    setSortingAlgoName,
    generateArray,
    ref,
  };
  return (
    <VisualizerContext.Provider value={value}>
      {children}
    </VisualizerContext.Provider>
  );
}
