// src/layout/Header/TopBar.tsx
import "../../styles/topbar.css";
import caminaraja from "../../assets/images/caminaraja.png";
import Camion from "../../assets/images/Camion.png";
import celphone from "../../assets/images/celphone.png";
import fondo from "../../assets/images/fondo.avif";

const TopBar = () => {
  const carouselItems = [
    {
      icon: caminaraja,
      title: "Entrega garantizada",
      subtitle: "Reembolso por cualquier problema"
    },
    {
      icon: Camion,
      title: "Devoluciones gratis",
      subtitle: "Hasta 90 días*"
    },
    {
      icon: caminaraja,
      title: "Ajuste de precios",
      subtitle: "En un plazo de 30 días"
    },
    {
      icon: Camion,
      title: "Importe mínimo por pedido",
      subtitle: "Valor mínimo del pedido: MX$160 para el primer pedido, MX$240 después"
    }
  ];

  return (
    <div className="topbar-wrapper">
      <div className="topbar-main-content">
        {/* Primer item - Envío gratis (Verde - Camión) */}
        <div className="topbar-item-green">
          <div className="topbar-clickable">
            <img src={Camion} alt="Envío gratis" className="topbar-icon-img green" />
            <div className="topbar-text-wrapper">
              <div className="topbar-title-row">
                <div className="topbar-title-green">Envío gratis</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" className="arrow-icon">
                  <path d="M323.7 111.7c19.8-19.8 50.7-21.8 72.7-5.9l6.9 5.9 362.1 362.1c19.8 19.8 21.8 50.7 5.9 72.6l-5.9 7-362.1 362.1c-22 22-57.7 22-79.6 0-19.8-19.8-21.8-50.7-5.9-72.7l5.9-7 322.1-322.2-322.1-322.2c-19.8-19.8-21.8-50.7-5.9-72.7l5.9-7z"></path>
                </svg>
              </div>
              <div className="topbar-subtitle-green">Especial para ti</div>
            </div>
          </div>
        </div>

        <span className="topbar-gradient-separator separator-left"></span>

        {/* Carrusel animado */}
        <div className="topbar-carousel-container">
          <div className="topbar-carousel-mask"></div>
          <div className="topbar-carousel-wrapper">
            <ul className="topbar-carousel-list">
              {[...carouselItems, ...carouselItems].map((item, index) => (
                <li key={index} className="topbar-carousel-item">
                  <div className="topbar-clickable">
                    <img src={item.icon} alt={item.title} className="topbar-icon-img yellow" />
                    <div className="topbar-text-wrapper">
                      <div className="topbar-title-row">
                        <div className="topbar-title-yellow">{item.title}</div>
                      </div>
                      <div className="topbar-subtitle-yellow">{item.subtitle}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <span className="topbar-gradient-separator separator-right"></span>

        {/* Descarga app - Celular */}
        <div className="topbar-item-yellow">
          <div className="topbar-clickable">
            <img src={celphone} alt="Descarga la app" className="topbar-icon-img yellow" />
            <div className="topbar-text-wrapper">
              <div className="topbar-title-yellow">Descarga la app de Temu</div>
            </div>
          </div>
        </div>

        <span className="topbar-gradient-separator"></span>

        {/* Vende en Temu */}
        <div className="topbar-seller">
          <div className="seller-content">
            <div className="seller-text">
              <span className="seller-text-white">Vende en Temu a millones de compradores</span>
            </div>
            <a href="#" className="seller-button-link">
              <div className="seller-button-wrapper">
                <div className="seller-button-text">Únete ahora</div>
                <svg className="seller-button-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em" fill="#222222">
                  <path d="M323.7 111.7c19.8-19.8 50.7-21.8 72.7-5.9l6.9 5.9 362.1 362.1c19.8 19.8 21.8 50.7 5.9 72.6l-5.9 7-362.1 362.1c-22 22-57.7 22-79.6 0-19.8-19.8-21.8-50.7-5.9-72.7l5.9-7 322.1-322.2-322.1-322.2c-19.8-19.8-21.8-50.7-5.9-72.7l5.9-7z"></path>
                </svg>
              </div>
            </a>
          </div>
          <span className="seller-background-image" style={{ backgroundImage: `url(${fondo})` }}></span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;