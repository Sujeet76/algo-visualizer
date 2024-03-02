import { ReactNode, forwardRef } from "react";

const GridBackground = forwardRef<HTMLDivElement, { children: ReactNode }>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className='h-[calc(100dvh-4.5rem)] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative font-robot overflow-hidden p-6'
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
        {children}
      </div>
    );
  }
);

export default GridBackground;
