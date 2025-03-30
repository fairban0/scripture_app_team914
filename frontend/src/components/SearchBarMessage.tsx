export const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="search"
          placeholder="Search Conversation"
          className="search-input"
        />
        <div className="search-button-container">
          <button aria-label="Search" className="search-button">
            <div className="icon-container">
              <div className="icon-wrapper">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/40e8634cec94e7cf3b9790b947e74bb34b8f0095?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc"
                  alt="Search"
                  className="icon"
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
