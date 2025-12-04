export function useProducts() {
  const products = [
    { id: 1, name: "Producto 1", price: 10 },
    { id: 2, name: "Producto 2", price: 20 }
  ];

  return { products };
}
