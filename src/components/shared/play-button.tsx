import React from "react";
import { Button } from "../ui/button";
import { PlayCircle, RotateCcw } from "lucide-react";
import { PauseCircle } from "lucide-react";
import { useSortVisualizer } from "@/context/visualizerUtils";
import { animation } from "@/lib/utils";

const PlayButton: React.FC = () => {
  const {
    isSorting,
    array,
    setIsSorting,
    setArray,
    speed,
    sortingAlgoName,
    requiresReset,
    generateArray,
  } = useSortVisualizer();
  const handelClick = async () => {
    console.log(array);
    await animation(sortingAlgoName, array, speed[0], setArray, setIsSorting);
  };

  return (
    <div className='flex gap-2'>
      <Button
        className='gap-2'
        disabled={isSorting}
        onClick={handelClick}
        whileTap={{ scale: 0.9 }}
      >
        {isSorting ? <PauseCircle /> : <PlayCircle />}
        <span>Play</span>
      </Button>
      <Button
        className='gap-2'
        disabled={requiresReset}
        onClick={() => generateArray()}
        whileTap={{ scale: 0.9 }} // Remove rotate property from whileTap animation
      >
        <RotateCcw />
        <span>Regenerate array</span>
      </Button>
    </div>
  );
};

export default PlayButton;
