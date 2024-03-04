import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import GridBackground from "../grid-bg";
import { useSortVisualizer } from "@/context/visualizer-context";
import LineBar from "./line-bar";
import PlayButton from "../shared/play-button";
import { colorsInfo } from "@/lib/utils/constants";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ArrayContainer: React.FC = () => {
  const { array, sortingAlgoName } = useSortVisualizer();
  const [barWidth, setBarWidth] = useState(0);

  console.log({ sortingAlgoName });

  const maxElement = Math.max(...array);

  const calcHeight = (ele: number) => {
    if (maxElement === 0) return 100;
    return parseFloat(((ele * 100) / maxElement).toFixed(2));
  };
  console.log("render");
  /**
   * Calculates the width of the array container and updates the barWidth state.
   */
  const calcArrayWidth = useCallback(() => {
    setBarWidth(100 / array.length); // Update barWidth state
  }, [array.length]);

  useEffect(() => {
    window.addEventListener("resize", calcArrayWidth);

    return () => window.removeEventListener("resize", calcArrayWidth);
  }, [calcArrayWidth]);

  useEffect(() => {
    calcArrayWidth(); // Recalculate barWidth when array length changes
  }, [array.length, calcArrayWidth]);

  return (
    <GridBackground>
      <div className='flex flex-col gap-2 w-full h-full relative'>
        {/* represent array into line bar */}
        <div className='flex gap-4 w-full justify-center items-center lg:w-fit lg:ml-auto md:w-fit md:ml-auto flex-wrap-reverse mb-2'>
          <div className='flex gap-2 items-center'>
            {colorsInfo[sortingAlgoName].map(({ color, label }) => (
              <DropdownMenu key={color}>
                <DropdownMenuTrigger asChild>
                  <motion.div
                    key={label}
                    className={cn(
                      "size-7 rounded-full border-2 dark:border-white border-gray-700 cursor-pointer",
                      color
                    )}
                    whileTap={{ scale: 0.9 }}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>{label}</DropdownMenuLabel>
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>
          <PlayButton className='lg:hidden md:hidden flex' />
        </div>
        <div className='flex-1'>
          <div className='flex items-center justify-center gap-1 h-full'>
            <AnimatePresence>
              {array.map((ele, i) => {
                const height = calcHeight(ele);

                return (
                  <LineBar
                    key={i}
                    arrElement={ele}
                    barWidth={barWidth}
                    barHeight={height}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </GridBackground>
  );
};

export default ArrayContainer;
