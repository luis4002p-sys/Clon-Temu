// src/store/useStore.ts

import { create } from "zustand";

interface StoreState {
  cart: any[];
  addToCart: (item: any) => void;

  // Modal de Login
  loginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;

  // Modal de Registro
  registerModalOpen: boolean;
  openRegisterModal: () => void;
  closeRegisterModal: () => void;
}

export const useStore = create<StoreState>((set) => ({
  // ---- Carrito ----
  cart: [],
  addToCart: (item) =>
    set((state) => ({ cart: [...state.cart, item] })),

  // ---- Modal de Login ----
  loginModalOpen: false,
  openLoginModal: () => set({ loginModalOpen: true }),
  closeLoginModal: () => set({ loginModalOpen: false }),

  // ---- Modal de Registro ----
  registerModalOpen: false,
  openRegisterModal: () => set({ 
    registerModalOpen: true, 
    loginModalOpen: false // Cierra el login si está abierto
  }),
  closeRegisterModal: () => set({ registerModalOpen: false }),
}));