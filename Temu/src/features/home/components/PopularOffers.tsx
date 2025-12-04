// src/features/home/components/PopularOffers.tsx
import React from 'react';
import ProductCard from './ProductCard';
import '../../../styles/popularoffers.css';

interface Product {
  id: number;
  title: string;
  price: string;
  originalPrice?: string;
  sales?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
}

const PopularOffers: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      title: "Juego de 2 cajas de ahorro ajustables en altura, Taburete de Bar",
      price: "1,156.69",
      sales: 195,
      rating: 4.5,
      reviews: 17,
      image: "https://img.kwcdn.com/local-goods-image-g/2066d90958/3ccd6704-67b5-46b9-bb58-da56db83005f_1200x1200.jpeg.format.jpg?imageView2/2/w/500/q/70/format/avif",
    },
    {
      id: 2,
      title: "GameSir G7 SE Mando con Cable para Xbox Series X/S, Xbox One",
      price: "946.46",
      originalPrice: "1,837.10",
      rating: 4.5,
      reviews: 4752,
      image: "https://img.kwcdn.com/product/fancy/08567cad-492b-4b18-908b-b7a7ade18eb0.jpg?imageView2/2/w/500/q/70/format/avif",
    },
    {
      id: 3,
      title: "Nuevo 1pc Edredón de Alta Calidad Tres Capas Cálido para Otoño e Invierno, Colcha Gruesa con Núcleo Aislante que Se Enfría al Instante",
      price: "449.14",
      originalPrice: "1,521.76",
      sales: 818,
      rating: 4.5,
      reviews: 79,
      image: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/6e4ecf3433cde7062db419c4c06a581c.jpg?imageView2/2/w/500/q/70/format/avif",
    },
    {
      id: 4,
      title: "Smartphone, Desbloqueo de Celular Varias Versiones Android",
      price: "1,461.24",
      originalPrice: "3,500.00",
      sales: 146,
      rating: 4.5,
      reviews: 20,
      image: "https://img.kwcdn.com/product/fancy/2afb1a08-56ee-4ecb-aea3-1e9998fde1d7.jpg?imageView2/2/w/500/q/70/format/avif",
      badge: "$25 Ultra",
    },
    {
      id: 5,
      title: "Árbol de Navidad Encriptado, Decoración Navideña Verde - Abeto Artificial para Patio, Jardín, Hogar y Tienda. Múltiples Tamaños Disponibles, Construcción de Plástico Duradero con Ramas Realistas, Realista y Fácil de Montar, Perfecto para Exteriores o Interiores.",
      price: "3,915.21",
      sales: 44,
      rating: 4.5,
      reviews: 7,
      image: "https://img.kwcdn.com/local-goods-image-g/2066d919cc/d2e7a7a3-3baf-4396-bfb7-5323be95e712_800x800.jpeg.format.jpg?imageView2/2/w/500/q/70/format/avif",
    },
  ];

  return (
    <section className="popular-offers-section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="fire-icon">🔥</span> Ofertas populares
        </h2>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularOffers;