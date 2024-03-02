import * as React from "react";
import { Root, Track, Range, Thumb } from "@radix-ui/react-slider";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => {
  return (
    <Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <Track className='relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20'>
        <Range className='absolute h-full bg-primary' />
      </Track>
      <Thumb asChild>
        <motion.span
          className='block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-grab'
          whileTap={{
            scale: 1.1,
            cursor: "grabbing",
          }}
        />
      </Thumb>
    </Root>
  );
});
Slider.displayName = Root.displayName;

export { Slider };
