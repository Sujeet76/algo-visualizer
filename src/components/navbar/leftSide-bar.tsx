import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// icons import
import { CheckIcon, ChevronLeftCircle } from "lucide-react";
import { CaretSortIcon } from "@radix-ui/react-icons";

// ui import
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

// constant import
import { algoOptions, sortingAlgoData } from "@/lib/utils/constants";

// utils import
import { cn } from "@/lib/utils";
import { useSortVisualizer } from "@/context/visualizer-context";
import useSidebar from "@/context/sidebar-context";

const SIDEBAR_WIDTH = 290;

const LeftSideBar = () => {
  const {
    speed,
    setSpeed,
    array,
    isSorting,
    setArray,
    sortingAlgoName,
    setSortingAlgoName,
    ref,
  } = useSortVisualizer();

  const { isSidebarOpen, toggleSidebar, isMobile } = useSidebar();
  const [input, setInput] = useState(array.join(","));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const formArr = input.split(",");
    const tempArr = formArr
      .map((v) => parseInt(v.trim()))
      .filter((v) => !isNaN(v));
    setArray(tempArr);
  }, [input, setArray]);

  return (
    <motion.aside
      className='h-[calc(100dvh-4rem)] lg:relative md:relative  lg:top-0 lg:left-0 md:top-0 md:left-0 fixed inset-0 top-[4rem] lg:z-auto md:z-auto z-50'
      animate={{
        width: isMobile ? "100%" : isSidebarOpen ? SIDEBAR_WIDTH : 0,
        x: isMobile ? (isSidebarOpen ? 0 : "-100%") : 0,
      }}
      transition={{
        type: "tween",
      }}
    >
      <motion.button
        role='button'
        className='absolute top-4 -right-[20px] z-50 bg-white dark:bg-zinc-700 dark:text-zinc-200 p-1 rounded-full shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50 hidden lg:block md:block'
        onClick={() => toggleSidebar()}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeftCircle className='text-zinc-200 size-8' />
      </motion.button>

      <ScrollArea className='w-full h-[calc(100dvh-4rem)] border-r dark:border-gray-600 border-gray-300 dark:bg-zinc-900  bg-zinc-100 px-3'>
        <div className='flex flex-col gap-5 mt-6'>
          {/* slider to change the speed */}
          <div className='space-y-4'>
            <Label htmlFor='speed'>Change the speed to animation</Label>
            <Slider
              id='speed'
              max={1500}
              step={1}
              defaultValue={speed}
              min={1}
              onValueChange={(v) => setSpeed(v)}
              disabled={isSorting}
            />
            <Badge>Current speed: {speed}ms</Badge>
          </div>
          {/* input the array */}
          <div className='space-y-1 px-1'>
            <Label htmlFor='array'>Input the array</Label>
            <Textarea
              id='array'
              defaultValue={array.join(", ")}
              placeholder='1, 2, 3, 4, 5, ...'
              className=' focus:outline-none focus:right-2 dark:focus:ring-white focus:ring-black'
              onChange={(e) => setInput(e.target.value)}
              disabled={isSorting}
              ref={ref}
            />
            {array.length > 0 && (
              <Badge className='!mt-4'>
                Array:&nbsp; [ {array.join(", ")} ]
              </Badge>
            )}
          </div>

          {/* select options */}
          <div className='flex flex-col gap-2'>
            <Label>Select the algorithm</Label>
            <Popover
              open={open}
              onOpenChange={setOpen}
            >
              <PopoverTrigger
                asChild
                disabled={isSorting}
              >
                <Button
                  variant='outline'
                  role='combobox'
                  aria-expanded={open}
                  className='w-[200px] justify-between'
                >
                  {sortingAlgoName
                    ? algoOptions.find((algo) => algo.value === sortingAlgoName)
                        ?.label
                    : "Select algo..."}
                  <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-[200px] p-0'>
                <Command>
                  <CommandInput
                    placeholder='Search algo...'
                    className='h-9'
                  />
                  <CommandEmpty>No Algo found.</CommandEmpty>
                  <CommandGroup defaultValue={sortingAlgoName}>
                    {algoOptions.map((algo) => (
                      <CommandItem
                        key={algo.value}
                        value={algo.value}
                        onSelect={(currentValue) => {
                          console.log(currentValue);
                          // @ts-expect-error we are confirm that currentValue is of SortingAlgoName type not string;
                          setSortingAlgoName(currentValue);
                          setOpen(false);
                        }}
                      >
                        {algo.label}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            sortingAlgoName === algo.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>

            {sortingAlgoName && (
              <Badge className='capitalize w-fit'>
                selected : {sortingAlgoName} sort
              </Badge>
            )}
          </div>

          {/* display info about algo */}
          <div className='flex flex-col gap-2 mb-6'>
            <Label className='text-lg underline'>Algo info.</Label>
            <div className='flex flex-col gap-3'>
              <h1 className='text-xl font-poppins font-bold text-sky-500 tracking-widest decoration-wavy underline decoration-2'>
                {sortingAlgoData[sortingAlgoName]?.title}
              </h1>
              <p className='text-base dark:text-white text-black'>
                {sortingAlgoData[sortingAlgoName]?.description}
              </p>
              <Label className='text-lg underline'>Time Complexity</Label>
              <Badge className='text-sm text-yellow-900 bg-yellow-300 border-yellow-900 hover:bg-yellow-300/90'>
                Average case: {sortingAlgoData[sortingAlgoName]?.averageCase}
              </Badge>
              <Badge className='text-sm text-emerald-950 bg-emerald-500 hover:bg-emerald-500/90 border-emerald-800'>
                Best case: {sortingAlgoData[sortingAlgoName]?.bestCase}
              </Badge>
              <Badge className='text-sm text-rose-950 bg-rose-400 hover:bg-rose-400/90 border-rose-600'>
                Worst case: {sortingAlgoData[sortingAlgoName]?.worstCase}
              </Badge>
            </div>
          </div>
        </div>
      </ScrollArea>
    </motion.aside>
  );
};

export default LeftSideBar;
