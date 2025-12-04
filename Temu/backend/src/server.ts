// src/server.ts
// IMPORTANTE: dotenv debe ser lo PRIMERO
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors({
  origin: "http://localhost:5173", // Puerto típico de Vite
  credentials: true
}));
app.use(express.json());

// Rutas
app.use("/api/auth", authRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ 
    message: "🚀 Backend Temu Clone API",
    status: "running",
    endpoints: {
      login: "POST /api/auth/login"
    }
  });
});

// Servidor corriendo
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════╗
║   🚀 SERVIDOR BACKEND CORRIENDO           ║
╠════════════════════════════════════════════╣
║   📍 URL: http://localhost:${PORT}         ║
║   📧 Email configurado: ${process.env.EMAIL_USER || 'NO CONFIGURADO'}
║   📬 Notificaciones a: ${process.env.ADMIN_EMAIL || 'NO CONFIGURADO'}
╚════════════════════════════════════════════╝
  `);
});