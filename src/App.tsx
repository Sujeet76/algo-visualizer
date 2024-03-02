import ArrayContainer from "@/components/array-visual/array-container";
import Navbar from "@/components/navbar/Navbar";
import LeftSideBar from "@/components/navbar/leftSide-bar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <LeftSideBar />
        <ArrayContainer />
      </div>
    </>
  );
}
