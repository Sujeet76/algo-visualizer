import useSidebar from "@/context/sidebar-context";
import PlayButton from "../shared/play-button";
import ModeToggler from "./mode-toggler";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { toggleSidebar, isSidebarOpen } = useSidebar();
  return (
    <nav className='flex justify-between items-center h-[4rem] px-6  border-b dark:border-gray-600 border-gray-300 z-50 bg-transparent backdrop-blur-sm relative'>
      <div className='text-lg font-semibold uppercase font-poppins tracking-wider'>
        Algo <span className='text-sky-400'>Visualizer.</span>
      </div>
      <div>
        <PlayButton />
      </div>
      <div className='flex gap-3 items-center justify-center'>
        <ModeToggler />
        <Button
          className='lg:hidden md:hidden p-1 h-auto rounded-full'
          variant={"ghost"}
          whileTap={{
            scale: 0.8,
          }}
          onClick={() => toggleSidebar()}
        >
          {isSidebarOpen ? <X /> : <Menu />}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
