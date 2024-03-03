import React from "react";
import { Button } from "../ui/button";
import { PlayCircle, RotateCcw } from "lucide-react";
import { PauseCircle } from "lucide-react";
import { useSortVisualizer } from "@/context/visualizer-context";
import { animation, cn } from "@/lib/utils";

interface PlayButtonProps {
  className?: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ className }) => {
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
    <div className={cn("lg:flex md:flex hidden gap-2", className)}>
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
