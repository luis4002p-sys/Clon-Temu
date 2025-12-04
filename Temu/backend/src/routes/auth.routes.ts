// src/routes/auth.routes.ts
import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller";

const router = Router();

// POST /api/auth/login
router.post("/login", loginUser);

// POST /api/auth/register
router.post("/register", registerUser);

export default router;