export const SearchBar = () => {
  return (
    <div className="flex overflow-hidden gap-1 mt-6 bg-white rounded-3xl border border-black border-solid min-h-[41px] min-w-[360px]">
      <div className="flex flex-1 shrink gap-1 p-1 basis-0 min-w-60 size-full">
        <input
          type="search"
          placeholder="Search Conversation"
          className="flex-1 shrink gap-2.5 self-stretch h-full text-base tracking-wide basis-0 min-w-60 text-zinc-700 bg-transparent outline-none"
        />
        <div className="flex items-center my-auto w-12">
          <button
            aria-label="Search"
            className="flex flex-col justify-center items-center self-stretch my-auto w-12 min-h-12"
          >
            <div className="flex overflow-hidden gap-2.5 justify-center items-center w-full max-w-10 rounded-[100px]">
              <div className="flex gap-2.5 justify-center items-center self-stretch p-2 my-auto w-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/40e8634cec94e7cf3b9790b947e74bb34b8f0095?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc"
                  alt="Search"
                  className="object-contain self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
