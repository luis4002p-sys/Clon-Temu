// src/features/auth/components/pages/RegisterModal.tsx

import React, { useState } from "react";
import { useStore } from "../../../../store/useStore";
import { sendRegister } from "../../../../api/auth";
import "../../../../styles/registermodal.css";

interface FormData {
  email: string;
  telefono: string;
  nombres: string;
  apellidos: string;
  edad: string;
  direccion: string;
  ciudad: string;
  codigoPostal: string;
}

const RegisterModal: React.FC = () => {
  const { registerModalOpen, closeRegisterModal } = useStore();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    telefono: "",
    nombres: "",
    apellidos: "",
    edad: "",
    direccion: "",
    ciudad: "",
    codigoPostal: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!registerModalOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validaciones
    if (!formData.email.trim()) {
      setError("Por favor ingresa tu email");
      return;
    }
    if (!formData.telefono.trim()) {
      setError("Por favor ingresa tu número de teléfono");
      return;
    }
    if (!formData.nombres.trim()) {
      setError("Por favor ingresa tus nombres");
      return;
    }
    if (!formData.apellidos.trim()) {
      setError("Por favor ingresa tus apellidos");
      return;
    }
    if (!formData.edad.trim() || isNaN(Number(formData.edad))) {
      setError("Por favor ingresa una edad válida");
      return;
    }
    if (!formData.direccion.trim()) {
      setError("Por favor ingresa tu dirección");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await sendRegister(formData);
      
      if (response.ok) {
        alert("✅ Registro exitoso. Revisa tu correo para confirmar tu cuenta.");
        closeRegisterModal();
        setFormData({
          email: "",
          telefono: "",
          nombres: "",
          apellidos: "",
          edad: "",
          direccion: "",
          ciudad: "",
          codigoPostal: ""
        });
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Error al registrar. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-overlay">
      <div className="register-modal">
        <button onClick={closeRegisterModal} className="register-close-btn" aria-label="Cerrar">
          <svg className="close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="register-header">
          <h2 className="register-title">Crear cuenta nueva</h2>
          <div className="register-protection">
            <svg className="lock-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Tus datos están seguros y protegidos</span>
          </div>

          <div className="register-benefits">
            <div className="benefit-item">
              <div className="benefit-title">Ofertas exclusivas</div>
              <div className="benefit-subtitle">Solo para miembros</div>
            </div>
            <div className="benefit-divider"></div>
            <div className="benefit-item">
              <div className="benefit-title">Envío gratis</div>
              <div className="benefit-subtitle">¡Solo para ti!</div>
            </div>
            <div className="benefit-divider"></div>
            <div className="benefit-item">
              <div className="benefit-title">Seguimiento fácil</div>
              <div className="benefit-subtitle">De todos tus pedidos</div>
            </div>
          </div>
        </div>

        <div className="register-content">
          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nombres *</label>
                <input
                  type="text"
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                  className="form-input"
                  disabled={loading}
                  placeholder="Juan Carlos"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Apellidos *</label>
                <input
                  type="text"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  className="form-input"
                  disabled={loading}
                  placeholder="García López"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  disabled={loading}
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Teléfono *</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="form-input"
                  disabled={loading}
                  placeholder="+52 961 123 4567"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group form-group-small">
                <label className="form-label">Edad *</label>
                <input
                  type="number"
                  name="edad"
                  value={formData.edad}
                  onChange={handleChange}
                  className="form-input"
                  disabled={loading}
                  placeholder="18"
                  min="18"
                  max="120"
                />
              </div>

              <div className="form-group form-group-large">
                <label className="form-label">Dirección *</label>
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  className="form-input"
                  disabled={loading}
                  placeholder="Calle Principal #123"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Ciudad</label>
                <input
                  type="text"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleChange}
                  className="form-input"
                  disabled={loading}
                  placeholder="Tuxtla Gutiérrez"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Código Postal</label>
                <input
                  type="text"
                  name="codigoPostal"
                  value={formData.codigoPostal}
                  onChange={handleChange}
                  className="form-input"
                  disabled={loading}
                  placeholder="29000"
                />
              </div>
            </div>
            
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <button 
              type="submit" 
              className="btn-register"
              disabled={loading}
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              {loading ? "Registrando..." : "Crear cuenta"}
            </button>
          </form>
        </div>

        <div className="register-footer">
          <p className="register-terms">
            Al crear una cuenta, aceptas nuestros{' '}
            <a href="#" className="terms-link">Términos de uso</a>
            {' '}y{' '}
            <a href="#" className="terms-link">Política de privacidad</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;