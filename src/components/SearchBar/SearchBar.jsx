import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        placeholder="Search"
        type="search"
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}
