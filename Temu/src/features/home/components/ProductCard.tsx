// src/features/home/components/ProductCard.tsx
import React from 'react';
import '../../../styles/product-card.css';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: string;
    originalPrice?: string;
    sales?: number;
    rating: number;
    reviews: number;
    image: string;
    badge?: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const renderStars = (rating: number) => {
    const percentage = (rating / 5) * 100;
    return (
      <div className="rate-wrap" role="img" aria-label={`${rating} de cinco estrellas`}>
        <div className="hollow-star" style={{ width: '70px', height: '14px' }}></div>
        <div className="solid-star" style={{ width: `${percentage}%`, height: '14px' }}></div>
      </div>
    );
  };

  return (
    <div 
      className="tooltip-item" 
      data-tooltip={`goodContainer-${product.id}`}
      data-tooltip-title={product.title}
    >
      {/* Image Container */}
      <div className="adaptor-wrapper" style={{ paddingBottom: '100%' }}>
        <div className="child-container">
          <div className="goods-img-container">
            <span 
              className="wrap img-wrap" 
              style={{ backgroundImage: `url('${product.image}')` }}
            >
              <img
                src={product.image}
                alt={product.title}
                aria-label="imagen del artículo"
                className="lazy-image goods-img loaded"
              />
            </span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '12px' }}></div>

      {/* Title */}
      <div className="tag-and-name-box" id="card-simple-v3">
        <h3 className="container flex">
          <span className="text">{product.title}</span>
          <span className="sr-only">Abrir en una nueva pestaña.</span>
        </h3>
      </div>

      {/* Price and Sales Info */}
      <div className="sale-info item">
        <div className="left">
          <div className="sale-info-inner new-style" data-sales="true">
            {/* Price */}
            <div className="price-wrap" data-ignore="true">
              <div className="goods-price" data-type="price">
                <span className="sr-only">MX${product.price}</span>
                <div className="price" aria-hidden="true">
                  <span className="price-prefix" aria-hidden="true">MX$</span>
                  {product.price}
                </div>
              </div>
            </div>

            {/* Original Price and Sales */}
            <div className="flex-container" data-ignore="true">
              <div className="market-price-and-sales" data-ignore="true">
                {product.originalPrice && (
                  <div className="market-price" data-type="marketPrice">
                    <span className="original-price">${product.originalPrice}</span>
                  </div>
                )}
                {product.sales && (
                  <div className="sale-text-wrap" data-type="saleTips" aria-hidden="false">
                    <span className="sale-text" dir="ltr">
                      <span className="sr-only">{product.sales}ventas</span>
                      <span className="sale-text-span" aria-hidden="true">{product.sales}</span>
                      <span className="sale-text-span" aria-hidden="true">ventas</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="container rating-container" role="region">
        <span className="sr-only">
          {product.rating} de cinco estrellas
        </span>
        {renderStars(product.rating)}
        <span className="num-tips">
          <span className="sr-only">{product.reviews} dieron su reseña</span>
          <span aria-hidden="true">{product.reviews}</span>
        </span>
      </div>

      {/* Add to Cart Button */}
      <div className="cart-wrapper" data-uniqid={product.id}>
        <div 
          className="wrap-cart" 
          aria-label="Agregar al carrito" 
          data-type="goodsCart" 
          tabIndex={0} 
          role="button"
        >
          <div aria-hidden="true" className="cart orange-cart cart-exp">
            <svg className="cart-icon icon" aria-label="Agregar al carrito">
              <path d="M8 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8-3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM3.34 4l1.67 9.2c.1.54.54.93 1.09.93h10.8c.55 0 .99-.4 1.09-.94L20 4H3.34zm13.48 9H6.18L4.82 5h13.36l-1.36 8z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Badge if exists */}
      {product.badge && (
        <div className="product-badge-overlay">
          {product.badge}
        </div>
      )}
    </div>
  );
};

export default ProductCard;