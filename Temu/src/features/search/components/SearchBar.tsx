import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const search = () => {
    if (query.trim() !== "") {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <div className="search-bar">
      <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar productos"
      />
      <button onClick={search}>Buscar</button>
    </div>
  );
}
