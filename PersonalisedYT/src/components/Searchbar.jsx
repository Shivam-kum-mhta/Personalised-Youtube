import React from "react";
const SearchBar = ({ searchInput ,handleSearchChange }) => {
    return (
      <div>
        <input className="search"
        style={{ width:"15vw" ,padding:"2px",borderRadius:"10px"}}
          type="text"
          placeholder="Search...🔎"
          value={searchInput}
          onChange={handleSearchChange}
        />
      </div>
    );
}
export default SearchBar;