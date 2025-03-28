import * as React from "react";
import { Key, SpecialKey, AutocorrectionBar } from "./KeyboardComponents";

export function KeyboardLayout() {
  return (
    <section className="flex relative flex-col pt-1 mt-56 w-full h-[331px]">
      <div className="flex absolute inset-x-0 top-2/4 z-0 items-center pt-1.5 w-full -translate-y-2/4 bg-neutral-600 bg-opacity-90 min-h-[334px] translate-x-[0%]" />

      <AutocorrectionBar />

      <div className="flex z-0 w-full min-h-[5px]" />

      <div className="z-0 px-1 w-full text-2xl leading-none text-center text-black whitespace-nowrap">
        <div className="flex gap-1.5 items-start">
          {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((letter) => (
            <Key key={letter}>{letter}</Key>
          ))}
        </div>

        <div className="flex gap-1.5 items-start mx-5 mt-3">
          {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((letter) => (
            <Key key={letter}>{letter}</Key>
          ))}
        </div>

        <div className="flex gap-4 mt-3 w-full text-xl leading-snug">
          <SpecialKey className="px-2.5 h-[43px] w-[43px]">􀆝</SpecialKey>
          <div className="flex gap-1.5 items-start text-2xl leading-none">
            {["z", "x", "c", "v", "b", "n", "m"].map((letter) => (
              <Key key={letter}>{letter}</Key>
            ))}
          </div>
          <SpecialKey className="px-2 h-[43px] w-[43px]">􀆛</SpecialKey>
        </div>

        <div className="flex gap-1.5 mt-3 text-base tracking-tight leading-none text-black">
          <SpecialKey className="px-8 py-4">ABC</SpecialKey>
          <SpecialKey className="px-16 py-4 bg-white">space</SpecialKey>
          <SpecialKey className="px-7 py-4">return</SpecialKey>
        </div>
      </div>

      <div className="flex z-0 gap-10 justify-between items-start pt-7 pr-6 pl-5 w-full h-[55px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/06247590192e0e90d2d3eccc7fe1894926e6d97a?placeholderIfAbsent=true"
          alt="Emoji"
          className="object-contain shrink-0 aspect-square w-[27px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/decd3007ce04f43ddc870d05ff1b92f2e0018397?placeholderIfAbsent=true"
          alt="Microphone"
          className="object-contain shrink-0 aspect-[0.68] w-[19px]"
        />
      </div>

      <div className="flex z-0 flex-col justify-center items-center self-center px-20 py-3 w-full">
        <div className="flex shrink-0 w-36 bg-black h-[5px] rounded-[100px]" />
      </div>
    </section>
  );
}
