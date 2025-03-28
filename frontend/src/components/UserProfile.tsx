import * as React from "react";

export function UserProfile() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex self-center mt-3 w-full max-w-[350px]">
        <div className="flex z-10 gap-10 justify-between items-start self-end mr-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/723e127d8b450268965d98b3ab4798c763676977?placeholderIfAbsent=true"
            alt="Left icon"
            className="object-contain shrink-0 aspect-square w-[38px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a282eb1ee316183d4158467f49b9faada1840846?placeholderIfAbsent=true"
            alt="Right icon"
            className="object-contain shrink-0 aspect-square w-[38px]"
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6be8c7974e0b55521945b2a622ab628a14b24159?placeholderIfAbsent=true"
          alt="Andrea Johnson profile"
          className="object-contain shrink-0 rounded-full aspect-square w-[50px]"
        />
      </div>
      <h1 className="self-center mt-3 text-lg text-black">Andrea Johnson</h1>
    </section>
  );
}
