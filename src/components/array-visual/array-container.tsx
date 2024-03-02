import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import GridBackground from "../grid-bg";
import { useSortVisualizer } from "@/context/visualizerUtils";
import LineBar from "./line-bar";

const ArrayContainer: React.FC = () => {
  const { array, isSorting } = useSortVisualizer();
  const containerRef = useRef<HTMLDivElement>(null);
  const [barWidth, setBarWidth] = useState(0);

  const maxElement = Math.max(...array);

  const calcHeight = (ele: number) => {
    return ((ele * 100) / maxElement).toFixed(2);
  };
  console.log("render");
  /**
   * Calculates the width of the array container and updates the barWidth state.
   */
  const calcArrayWidth = useCallback(() => {
    if (containerRef.current && !isSorting) {
      const { width } = containerRef.current.getBoundingClientRect();
      setBarWidth((width - 100) / array.length); // Update barWidth state
    }
  }, [array.length, isSorting]);

  useEffect(() => {
    window.addEventListener("resize", calcArrayWidth);

    return () => window.removeEventListener("resize", calcArrayWidth);
  }, [calcArrayWidth]);

  useEffect(() => {
    calcArrayWidth(); // Recalculate barWidth when array length changes
  }, [array.length, calcArrayWidth, containerRef.current?.clientWidth]);

  return (
    <GridBackground>
      <div
        className='w-full h-full relative'
        ref={containerRef}
      >
        {/* represent array into line bar */}
        <div>adslfajlj</div>
        <div className='h-full pb-6'>
          <div className='flex items-center justify-center gap-3 h-full'>
            <AnimatePresence>
              {array.map((ele, i) => {
                const height = parseFloat(calcHeight(ele));

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
