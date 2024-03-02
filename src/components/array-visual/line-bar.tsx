import React from "react";
import { motion } from "framer-motion";

interface Props {
  arrElement?: number;
  barWidth: number;
  barHeight: number;
}

const LineBar: React.FC<Props> = ({ barWidth, barHeight }) => {
  return (
    <motion.div
      className='default-ele-bg array-line-bar transition-all duration-300 self-end ease-in-out'
      initial={{ width: 0, height: 0 }}
      animate={{ width: `${barWidth}%`, height: `${barHeight}%` }}
      transition={{ duration: 0.2 }}
      exit={{ width: 0 }}
    ></motion.div>
  );
};

export default LineBar;
