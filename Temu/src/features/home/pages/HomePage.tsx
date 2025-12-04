// src/features/home/pages/HomePage.tsx

import React, { useEffect } from 'react';
import CouponBanner from '../components/CouponBanner';
import PopularOffers from '../components/PopularOffers';
import { useStore } from '../../../store/useStore';  
import LoginModal from '../../auth/components/pages/LoginModal'; 
import '../../../styles/homepage.css';

const HomePage: React.FC = () => {
  const openLoginModal = useStore((s) => s.openLoginModal);

  useEffect(() => {
    const modalShown = sessionStorage.getItem("loginPromptShown");

    if (!modalShown) {
      openLoginModal();
      sessionStorage.setItem("loginPromptShown", "true");
    }
  }, []);

  return (
    <main className="homepage-body">

      {/* 🔥 Aquí aparece el modal */}
      <LoginModal />

      <div className="container">
        <CouponBanner />
        <PopularOffers />
      </div>
    </main>
  );
};

export default HomePage;
