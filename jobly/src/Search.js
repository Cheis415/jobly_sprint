import React, { useState } from "react";

function Search({ searching }) {
    console.debug("SearchForm", "searchFor=", typeof searching);

  const [searchFor, setSearchFor] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    searching(searchFor.trim() || undefined);
    setSearchFor(searchFor.trim());
   
  }

  function handleChange(evt) {
    setSearchFor(evt.target.value);
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
              name="searchFor"
              placeholder="What are you looking for?"
              value={searchFor}
              onChange={handleChange}
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
  );
}

export default Search;
