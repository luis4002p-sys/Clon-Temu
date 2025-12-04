// src/router/index.tsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../features/home/pages/HomePage";
import ProductPage from "../features/product/pages/ProductPage";
import SearchResultsPage from "../features/search/pages/SearchResultsPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/search" element={<SearchResultsPage />} />
      {/* Agrega más rutas según necesites */}
    </Routes>
  );
};

export default Router;