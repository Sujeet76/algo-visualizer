import PlayButton from "../shared/play-button";
import ModeToggler from "./mode-toggler";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-4 px-6 min-h-4 border-b dark:border-gray-600 border-gray-300 z-50 bg-transparent backdrop-blur-sm relative'>
      <div className='text-lg font-semibold uppercase font-poppins tracking-wider'>
        Algo <span className='text-sky-400'>Visualizer.</span>
      </div>
      <div>
        <PlayButton />
      </div>
      <ModeToggler />
    </nav>
  );
};

export default Navbar;
