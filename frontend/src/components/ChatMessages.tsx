import * as React from "react";

export function ChatMessages() {
  return (
    <section className="flex flex-col px-3 mt-5 w-full text-sm text-black">
      <p className="px-2.5 py-1.5 max-w-full rounded-2xl bg-zinc-300 bg-opacity-90 w-[168px]">
        Hello, Claire! It's nice to meet you!
      </p>
      <p className="self-end px-2 py-1.5 mt-5 max-w-full rounded-2xl bg-slate-500 bg-opacity-70 w-[170px]">
        Hey, Andrea! Thanks for reaching out to me
      </p>
    </section>
  );
}
