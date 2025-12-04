// src/services/mail.service.ts
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// IMPORTANTE: Cargar variables de entorno PRIMERO
dotenv.config();

// Validar que las variables de entorno estén configuradas
const validateEmailConfig = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("ERROR: Faltan variables de entorno para email");
    console.error("   EMAIL_USER:", process.env.EMAIL_USER ? "Configurado" : "No configurado");
    console.error("   EMAIL_PASS:", process.env.EMAIL_PASS ? "Configurado" : "No configurado");
    return false;
  }
  return true;
};

// Crear transporter solo si las credenciales están disponibles
let transporter: nodemailer.Transporter | null = null;

if (validateEmailConfig()) {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Verificar la conexión al iniciar
  transporter.verify(function (error, success) {
    if (error) {
      console.error("Error de configuración de email:", error.message);
      console.error("   Verifica que:");
      console.error("   1. Hayas generado una 'Contraseña de aplicación' en Google");
      console.error("   2. No estés usando tu contraseña normal de Gmail");
      console.error("   3. El archivo .env tenga las credenciales correctas");
    } else {
      console.log("Servidor de email listo para enviar mensajes");
    }
  });
} else {
  console.warn("Email no configurado. Las notificaciones no se enviarán.");
}

export const sendLoginNotification = async (email: string, loginMethod: string) => {
  if (!transporter) {
    console.error("No se puede enviar email: transporter no configurado");
    return false;
  }

  const mailOptions = {
    from: `"Temu Clone Notificaciones" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL || "practicatemu@gmail.com",
    subject: "Nuevo inicio de sesión en Temu Clone",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #FF6B00 0%, #FF8C00 100%); padding: 30px; border-radius: 10px 10px 0 0;">
          <h2 style="color: white; margin: 0; font-size: 24px;">Nuevo inicio de sesión</h2>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
          <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #333; margin-top: 0;">Detalles del inicio de sesión:</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; color: #666; font-weight: bold;">Email/Teléfono:</td>
                <td style="padding: 12px 0; color: #333;">${email}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; color: #666; font-weight: bold;">Método:</td>
                <td style="padding: 12px 0; color: #333;">${loginMethod}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #666; font-weight: bold;">Fecha y Hora:</td>
                <td style="padding: 12px 0; color: #333;">${new Date().toLocaleString('es-MX', {
                  timeZone: 'America/Mexico_City',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                })}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-left: 4px solid #2196F3; border-radius: 4px;">
            <p style="margin: 0; color: #1976D2; font-size: 14px;">
              <strong>Nota:</strong> Este es un mensaje automático del sistema de notificaciones de Temu Clone.
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
          <p>Este email fue generado automáticamente, por favor no responder.</p>
          <p>© ${new Date().getFullYear()} Temu Clone - Sistema de Notificaciones</p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email de login enviado correctamente");
    console.log("   Para:", process.env.ADMIN_EMAIL);
    console.log("   Message ID:", info.messageId);
    return true;
  } catch (error: any) {
    console.error("Error enviando email:", error.message);
    return false;
  }
};

export const sendRegisterNotification = async (userData: {
  email: string;
  telefono: string;
  nombres: string;
  apellidos: string;
  edad: string;
  direccion: string;
  ciudad: string;
  codigoPostal: string;
}) => {
  if (!transporter) {
    console.error("No se puede enviar email: transporter no configurado");
    return false;
  }

  const mailOptions = {
    from: `"Temu Clone Notificaciones" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL || "practicatemu@gmail.com",
    subject: "Nuevo registro de usuario en Temu Clone",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #10B981 0%, #059669 100%); padding: 30px; border-radius: 10px 10px 0 0;">
          <h2 style="color: white; margin: 0; font-size: 24px;">Nuevo Usuario Registrado</h2>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
          <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #333; margin-top: 0;">Información del nuevo usuario:</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; color: #666; font-weight: bold;">Nombre Completo:</td>
                <td style="padding: 12px 0; color: #333;">${userData.nombres} ${userData.apellidos}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; color: #666; font-weight: bold;">Email:</td>
                <td style="padding: 12px 0; color: #333;">${userData.email}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; color: #666; font-weight: bold;">Teléfono:</td>
                <td style="padding: 12px 0; color: #333;">${userData.telefono}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; color: #666; font-weight: bold;">Edad:</td>
                <td style="padding: 12px 0; color: #333;">${userData.edad} años</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; color: #666; font-weight: bold;">Dirección:</td>
                <td style="padding: 12px 0; color: #333;">${userData.direccion}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; color: #666; font-weight: bold;">Ciudad:</td>
                <td style="padding: 12px 0; color: #333;">${userData.ciudad || 'No especificada'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; color: #666; font-weight: bold;">Código Postal:</td>
                <td style="padding: 12px 0; color: #333;">${userData.codigoPostal || 'No especificado'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #666; font-weight: bold;">Fecha de Registro:</td>
                <td style="padding: 12px 0; color: #333;">${new Date().toLocaleString('es-MX', {
                  timeZone: 'America/Mexico_City',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                })}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #d1fae5; border-left: 4px solid #10B981; border-radius: 4px;">
            <p style="margin: 0; color: #065f46; font-size: 14px;">
              <strong>Estado:</strong> Usuario registrado exitosamente en la plataforma.
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
          <p>Este email fue generado automáticamente, por favor no responder.</p>
          <p>© ${new Date().getFullYear()} Temu Clone - Sistema de Notificaciones</p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email de registro enviado correctamente");
    console.log("   Para:", process.env.ADMIN_EMAIL);
    console.log("   Message ID:", info.messageId);
    return true;
  } catch (error: any) {
    console.error("Error enviando email:", error.message);
    return false;
  }
};