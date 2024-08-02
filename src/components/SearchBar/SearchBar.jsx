import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchBar({ onSubmit }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSearchParams({ query: value });
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
