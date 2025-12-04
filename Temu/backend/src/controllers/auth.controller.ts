// src/controllers/auth.controller.ts
import { Request, Response } from "express";
import { sendLoginNotification, sendRegisterNotification } from "../services/mail.service";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, method = "Email/Teléfono" } = req.body;

    // Validación
    if (!email) {
      return res.status(400).json({ 
        ok: false, 
        error: "El email es requerido" 
      });
    }

    console.log("📩 Nuevo intento de login:");
    console.log("   - Email:", email);
    console.log("   - Método:", method);

    // Enviar notificación por email
    const emailSent = await sendLoginNotification(email, method);

    if (!emailSent) {
      console.warn("⚠️  El email no se pudo enviar, pero el login se procesó");
    }

    return res.json({
      ok: true,
      message: "Login recibido correctamente",
      email,
      method,
      emailSent
    });

  } catch (error) {
    console.error("❌ Error en login:", error);
    return res.status(500).json({ 
      ok: false, 
      error: "Error interno del servidor" 
    });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { 
      email, 
      telefono, 
      nombres, 
      apellidos, 
      edad, 
      direccion, 
      ciudad, 
      codigoPostal 
    } = req.body;

    // Validación de campos requeridos
    if (!email || !telefono || !nombres || !apellidos || !edad || !direccion) {
      return res.status(400).json({ 
        ok: false, 
        error: "Todos los campos obligatorios deben estar completos" 
      });
    }

    console.log("🎉 Nuevo registro de usuario:");
    console.log("   - Nombre:", nombres, apellidos);
    console.log("   - Email:", email);
    console.log("   - Teléfono:", telefono);

    // Enviar notificación por email
    const emailSent = await sendRegisterNotification({
      email,
      telefono,
      nombres,
      apellidos,
      edad,
      direccion,
      ciudad: ciudad || "No especificada",
      codigoPostal: codigoPostal || "No especificado"
    });

    if (!emailSent) {
      console.warn("⚠️  El email no se pudo enviar, pero el registro se procesó");
    }

    return res.json({
      ok: true,
      message: "Registro recibido correctamente",
      user: {
        nombres,
        apellidos,
        email,
        telefono
      },
      emailSent
    });

  } catch (error) {
    console.error("❌ Error en registro:", error);
    return res.status(500).json({ 
      ok: false, 
      error: "Error interno del servidor" 
    });
  }
};