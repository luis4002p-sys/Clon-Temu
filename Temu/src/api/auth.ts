// src/api/auth.ts
import axios from "axios";

const API_URL = "http://localhost:4000/api/auth";

export const sendLogin = async (email: string, method: string = "Email/Teléfono") => {
  try {
    const response = await axios.post(`${API_URL}/login`, { 
      email,
      method 
    });
    return response.data;
  } catch (error) {
    console.error("Error en sendLogin:", error);
    throw error;
  }
};

export const sendRegister = async (userData: {
  email: string;
  telefono: string;
  nombres: string;
  apellidos: string;
  edad: string;
  direccion: string;
  ciudad: string;
  codigoPostal: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error en sendRegister:", error);
    throw error;
  }
};