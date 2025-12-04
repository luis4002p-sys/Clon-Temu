import { useLocation } from "react-router-dom";

export default function SearchResultsPage() {
  const params = new URLSearchParams(useLocation().search);
  const query = params.get("query");

  return (
    <div className="search-results">
      <h1>Resultados de búsqueda</h1>
      <p>Búsqueda: {query}</p>
    </div>
  );
}
