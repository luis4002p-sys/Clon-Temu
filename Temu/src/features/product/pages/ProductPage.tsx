import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();

  return (
    <div className="product-page">
      <h1>Producto {id}</h1>
      <p>Detalles del producto próximamente.</p>
    </div>
  );
}
