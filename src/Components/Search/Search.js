import React from "react";
import "./style.css";

function Search ({search, setSearch}) {
    return (
      <form className="d-flex align-middle">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    );
}
export default Search;