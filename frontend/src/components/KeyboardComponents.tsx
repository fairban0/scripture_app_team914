import * as React from "react";

interface KeyProps {
  children: React.ReactNode;
  className?: string;
}

export function Key({ children, className = "" }: KeyProps) {
  return (
    <div className="flex-1 shrink rounded-md basis-0">
      <div
        className={`px-2.5 pt-1 pb-2.5 bg-white rounded-md shadow-[0px_1px_0px_rgba(0,0,0,0.35)] ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

export function SpecialKey({ children, className = "" }: KeyProps) {
  return (
    <div className="rounded-md">
      <div
        className={`rounded-md bg-neutral-400 shadow-[0px_1px_0px_rgba(0,0,0,0.35)] ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

export function AutocorrectionBar() {
  return (
    <div className="flex overflow-hidden z-0 items-start py-0.5 w-full">
      <div className="flex flex-1 shrink gap-0.5 px-px w-full basis-0 min-h-[39px] min-w-60">
        <div className="flex-1 shrink px-11 py-3.5 text-lg tracking-tight leading-none text-center text-black whitespace-nowrap bg-gray-200 rounded-md basis-[26px] text-ellipsis">
          "The"
        </div>
        <div className="flex justify-center px-0.5 my-auto min-h-[25px] w-[5px]">
          <div className="flex w-px bg-black min-h-[25px]" />
        </div>
        <div className="flex-1 shrink px-14 py-3.5 text-lg tracking-tight leading-none text-center text-black whitespace-nowrap rounded-md basis-0 text-ellipsis">
          the
        </div>
        <div className="flex justify-center px-0.5 my-auto min-h-[25px] w-[5px]">
          <div className="flex w-px bg-black min-h-[25px]" />
        </div>
        <div className="flex-1 shrink px-14 py-3.5 text-lg tracking-tight leading-none text-center text-black whitespace-nowrap rounded-md basis-0 text-ellipsis">
          to
        </div>
      </div>
    </div>
  );
}
