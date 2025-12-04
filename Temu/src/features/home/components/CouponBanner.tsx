// src/features/home/components/CouponBanner.tsx
import React from 'react';
import '../../../styles/couponbanner.css';

const CouponBanner: React.FC = () => {
  return (
    <div className="couponWarp">
      <div className="left">
        <div 
          className="coupon-ticket"
          style={{
            backgroundImage: 'url("https://aimg.kwcdn.com/upload_aimg/lp/1d17934c-6e91-4069-b7d3-aaa06ab815fb.png.slim.png?imageView2/2/w/750/q/80/format/avif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="coupon-amount">MX$200</div>
        </div>
        <div className="coupon-text">
          <span className="amount-highlight">MX$200</span> Oferta increíble
        </div>
      </div>
      <button className="claim-button" role="button">
        Reclamar
      </button>
    </div>
  );
};

export default CouponBanner;