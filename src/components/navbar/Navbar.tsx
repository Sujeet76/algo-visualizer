import useSidebar from "@/context/sidebar-context";
import PlayButton from "../shared/play-button";
import ModeToggler from "./mode-toggler";
import { motion } from "framer-motion";

const Navbar = () => {
  const { setSidebarOpen } = useSidebar();
  return (
    <nav className='flex justify-between items-center h-[4.5rem] px-6  border-b dark:border-gray-600 border-gray-300 z-50 bg-transparent backdrop-blur-sm relative'>
      <div className='text-lg font-semibold uppercase font-poppins tracking-wider'>
        Algo <span className='text-sky-400'>Visualizer.</span>
      </div>
      <div>
        <PlayButton />
      </div>
      <div className='flex gap-3 items-center justify-center'>
        <ModeToggler />
        <motion.label
          className='hamburger lg:hidden md:hidden'
          whileTap={{
            scale: 0.8,
          }}
        >
          <input
            type='checkbox'
            onChange={(e) => setSidebarOpen(e.target.checked)}
          />
          <svg viewBox='0 0 32 32'>
            <path
              className='line line-top-bottom'
              d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'
            ></path>
            <path
              className='line'
              d='M7 16 27 16'
            ></path>
          </svg>
        </motion.label>
      </div>
    </nav>
  );
};

export default Navbar;
