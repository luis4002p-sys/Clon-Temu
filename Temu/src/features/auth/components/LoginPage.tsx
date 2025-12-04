// LoginPage.tsx
import { useState } from "react";
import "./login.css";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem("temuTempUser", JSON.stringify(formData));
    alert("Datos guardados temporalmente");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar sesión/Registrarse</h2>
        <p className="secure-text">🔒 Todos los datos están protegidos</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email o número de teléfono</label>
          <input
            type="text"
            name="email"
            placeholder="Ingresa tu email o número"
            value={formData.email}
            onChange={handleChange}
          />

          <button type="submit" className="btn-primary">Continuar</button>
        </form>

        <div className="divider">o</div>

        <div className="social-login">
          <button className="social-btn google">Continuar con Google</button>
          <button className="social-btn facebook">Continuar con Facebook</button>
          <button className="social-btn apple">Continuar con Apple</button>
        </div>
      </div>
    </div>
  );
}

