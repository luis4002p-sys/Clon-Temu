// src/App.tsx

import MainLayout from "./layout/MainLayout/MainLayout";
import Router from "./router";
import LoginModal from "./features/auth/components/pages/LoginModal";
import RegisterModal from "./features/auth/components/pages/RegisterModal";

export default function App() {
  return (
    <>
      <MainLayout>
        <Router />
      </MainLayout>
      
      {/* Modales globales */}
      <LoginModal />
      <RegisterModal />
    </>
  );
}