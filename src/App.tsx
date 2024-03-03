import ArrayContainer from "@/components/array-visual/array-container";
import Navbar from "@/components/navbar/Navbar";
import LeftSideBar from "@/components/navbar/leftSide-bar";

export default function App() {
  return (
    <div className='h-dvh'>
      <Navbar />
      <div className='flex h-[calc(100dvh-4rem)]'>
        <LeftSideBar />
        <ArrayContainer />
      </div>
    </div>
  );
}
