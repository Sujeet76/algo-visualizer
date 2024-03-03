import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import GridBackground from "../grid-bg";
import { useSortVisualizer } from "@/context/visualizer-context";
import LineBar from "./line-bar";

const ArrayContainer: React.FC = () => {
  const { array } = useSortVisualizer();
  const [barWidth, setBarWidth] = useState(0);

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
      <div className='w-full h-full relative'>
        {/* represent array into line bar */}
        <div>Hello </div>
        <div className='h-full pb-6'>
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
