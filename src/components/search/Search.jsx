import React from "react";
import "@/sass/__search.scss";

const Search = () => {
  return (
    <div className="search__wrapper">
      <div className="container">
        <div className="search__section">
          <input type="text " placeholder="Search query..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
