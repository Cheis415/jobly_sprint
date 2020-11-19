import React, { useState } from "react";

function Search({ searching }) {

  const [searchFor, setSearchFor] = useState("");

  /** Tell parent to filter */
  function handleSubmit(evt) {
    // take care of accidentally trying to search for just spaces
    evt.preventDefault();
    searching(searchFor.trim() || undefined);
    setSearchFor(searchFor.trim());
  }

  /** Update form fields */
  function handleChange(evt) {
    setSearchFor(evt.target.value);
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
              name="searching"
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
