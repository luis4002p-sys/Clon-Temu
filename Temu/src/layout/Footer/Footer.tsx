// src/layout/Footer/Footer.tsx
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Primera fila - Columnas de información */}
        <div className="footer-row-1">
          {/* Columna 1 */}
          <div className="footer-list">
            <h6 className="footer-title">Información de la empresa</h6>
            <ul className="footer-content">
              <li className="footer-list-item">
                <a href="/mx/about-temu.html" className="footer-link">Acerca de Temu</a>
              </li>
              <li className="footer-list-item">
                <a href="/mx/affiliate_influencer_program.html" className="footer-link">Programa de afiliados e influencers: Únete para ganar</a>
              </li>
              <li className="footer-list-item">
                <a href="/mx/contact-us.html" className="footer-link">Contáctanos</a>
              </li>
              <li className="footer-list-item">
                <a href="/mx/careers.html" className="footer-link">Carreras profesionales</a>
              </li>
              <li className="footer-list-item">
                <a href="/mx/press.html" className="footer-link">Prensa</a>
              </li>
              <li className="footer-list-item">
                <a href="/mx/tree-landing.html" className="footer-link">Programa de plantación de árboles Temu</a>
              </li>
            </ul>
          </div>

          {/* Columna 2 */}
          <div className="footer-list">
            <h6 className="footer-title">Atención al cliente</h6>
            <ul className="footer-content">
              <li className="footer-list-item">
                <a href="/mx/return-and-refund-policy.html" className="footer-link">Política de devolución y reembolso</a>
              </li>
              <li className="footer-list-item">
                <a href="/mx/intellectual-property-policy.html" className="footer-link">Política de propiedad intelectual</a>
              </li>
              <li className="footer-list-item">
                <a href="/mx/shipping-info.html" className="footer-link">Política de envíos</a>
              </li>
              <li className="footer-list-item">
                <a href="/mx/bgch_report_suspicious.html" className="footer-link">Reportar actividad sospechosa</a>
              </li>
              <li className="footer-list-item">
                <a href="/mx/common-policy.html" className="footer-link">Valor de pedido mínimo</a>
              </li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div className="footer-list">
            <h6 className="footer-title">Ayuda</h6>
            <ul className="footer-content">
              <li className="footer-list-item">
                <a href="/mx/support-center.html" className="footer-link">Centro de ayuda y preguntas frecuentes</a>
              </li>
              <li className="footer-list-item">
                <a href="mx/safety-center.html" className="footer-link">Centro de seguridad</a>
              </li>
              <li className="footer-list-item">
                <a href="/mx/temu-purchase-protection.html" className="footer-link">Protección de compras de Temu</a>
              </li>
              <li className="footer-list-item">
                <a href="/mx/sitemap.html" className="footer-link">Mapa del sitio</a>
              </li>
              <li className="footer-list-item">
                <a href="/mx/partner-with-temu.html" className="footer-link">Asóciate a Temu</a>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Descarga App */}
          <div className="footer-app-section">
            <div className="app-download-wrapper">
              <a href="/mx/app.html" className="footer-gray-link">
                <h6 className="footer-title">Descarga la App de Temu</h6>
              </a>
              <div className="benefits-wrap">
                <div className="benefits-row">
                  <div className="benefit-item">
                    <img src="https://aimg.kwcdn.com/upload_aimg_b/web/pc/deb081e4-e46b-4b2d-bc1d-6a0e1800c73c.png.slim.png?imageView2/2/w/30/q/70/format/avif" alt="Alertas de baja de precios" className="benefit-icon" />
                    <div className="benefit-text">Alertas de baja de precios</div>
                  </div>
                  <div className="benefit-line"></div>
                  <div className="benefit-item">
                    <img src="https://aimg.kwcdn.com/upload_aimg_b/web/pc/c19eefdc-4dfd-4106-8074-ed8521cacb6e.png.slim.png?imageView2/2/w/30/q/70/format/avif" alt="Rastrea pedidos" className="benefit-icon" />
                    <div className="benefit-text">Rastrea pedidos en todo momento</div>
                  </div>
                </div>
                <div className="benefits-row">
                  <div className="benefit-item">
                    <img src="https://aimg.kwcdn.com/upload_aimg_b/web/pc/98996646-47c5-4020-ab1f-8e6b2ee39358.png.slim.png?imageView2/2/w/30/q/70/format/avif" alt="Pago rápido" className="benefit-icon" />
                    <div className="benefit-text">Pago más rápido y seguro</div>
                  </div>
                  <div className="benefit-line"></div>
                  <div className="benefit-item">
                    <img src="https://aimg.kwcdn.com/upload_aimg_b/web/pc/ab4a5d92-4b54-45f6-b18a-fbb16529d2b3.png.slim.png?imageView2/2/w/30/q/70/format/avif" alt="Poco stock" className="benefit-icon" />
                    <div className="benefit-text">Alertas de artículos con poco stock</div>
                  </div>
                </div>
                <div className="benefits-row">
                  <div className="benefit-item">
                    <img src="https://aimg.kwcdn.com/upload_aimg_b/web/pc/728e2277-96f9-4787-bd89-d87e3b6bc2f2.png.slim.png?imageView2/2/w/30/q/70/format/avif" alt="Ofertas" className="benefit-icon" />
                    <div className="benefit-text">Ofertas exclusivas</div>
                  </div>
                  <div className="benefit-line"></div>
                  <div className="benefit-item">
                    <img src="https://aimg.kwcdn.com/upload_aimg_b/web/pc/2077debf-6cf5-463a-84ab-969eee3593a1.png.slim.png?imageView2/2/w/30/q/70/format/avif" alt="Cupones" className="benefit-icon" />
                    <div className="benefit-text">Alertas de cupones y ofertas</div>
                  </div>
                </div>
              </div>
              <div className="download-list">
                <a href="https://apps.apple.com/MX/app/id1641486558" target="_blank" rel="nofollow noreferrer" className="download-item">
                  <img src="https://aimg.kwcdn.com/upload_aimg/pc/5c5f0a0f-db6f-4205-a0d3-c745b6c672ea.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="App Store" className="download-icon" />
                  <div className="download-desc">
                    <div className="download-subtitle">Descargar en</div>
                    <div className="download-title">App Store</div>
                  </div>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.einnovation.temu" target="_blank" rel="nofollow noreferrer" className="download-item">
                  <img src="https://aimg.kwcdn.com/upload_aimg/pc/427c29ba-bef6-439c-9d4c-edbdde47c7e0.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="Google Play" className="download-icon" />
                  <div className="download-desc">
                    <div className="download-subtitle">Descargar en</div>
                    <div className="download-title">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="social-section">
              <h6 className="footer-title">Conectar con Temu</h6>
              <div className="social-list">
                <a href="https://www.instagram.com/temu/" target="_blank" rel="nofollow noreferrer" className="social-item">
                  <img src="https://aimg.kwcdn.com/upload_aimg/pc/a817be22-932c-43b3-95e4-c768af711c34.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="Instagram" className="social-icon" />
                </a>
                <a href="https://www.facebook.com/shoptemu" target="_blank" rel="nofollow noreferrer" className="social-item">
                  <img src="https://aimg.kwcdn.com/upload_aimg/pc/0d1c5252-2094-4504-b6fc-34a6a3f87804.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="Facebook" className="social-icon" />
                </a>
                <a href="https://x.com/shoptemu" target="_blank" rel="nofollow noreferrer" className="social-item">
                  <img src="https://aimg.kwcdn.com/upload_aimg/temupch5/4eb16ee6-f4ed-426e-9ce3-574a2ab4ba6c.png?imageView2/2/w/120/q/70/format/avif" alt="Twitter" className="social-icon" />
                </a>
                <a href="https://www.tiktok.com/@temu" target="_blank" rel="nofollow noreferrer" className="social-item">
                  <img src="https://aimg.kwcdn.com/upload_aimg/web/7edd0665-db19-4e7a-aa42-5301e5ea396f.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="TikTok" className="social-icon" />
                </a>
                <a href="https://www.youtube.com/@temu" target="_blank" rel="nofollow noreferrer" className="social-item">
                  <img src="https://aimg.kwcdn.com/upload_aimg/web/18e81de4-adca-4b74-bd52-1aa2d7ebe771.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="YouTube" className="social-icon" />
                </a>
                <a href="https://www.pinterest.com/shoptemu/" target="_blank" rel="nofollow noreferrer" className="social-item">
                  <img src="https://aimg.kwcdn.com/upload_aimg/web/2ba1be46-f0c5-4f59-aa05-1ab05ef41126.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="Pinterest" className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Segunda fila - Certificaciones y Pagos */}
        <div className="footer-row-2">
          {/* Certificación de seguridad */}
          <div className="payment-section security-section">
            <h6 className="footer-title">Certificación de seguridad</h6>
            <div className="brand-area">
              <img src="https://aimg.kwcdn.com/upload_aimg/temu/80d57653-6e89-4bd5-82c4-ac1e8e2489fd.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="" className="brand-img" />
              <img src="https://aimg.kwcdn.com/upload_aimg/temu/bcb8bf23-78c9-45ab-b480-f7020d1a5f66.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="" className="brand-img" />
              <img src="https://aimg.kwcdn.com/upload_aimg/temu/28a227c9-37e6-4a82-b23b-0ad7814feed1.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="" className="brand-img" />
              <img src="https://aimg.kwcdn.com/upload_aimg/temu/f1c00d04-7dde-4d4a-ae3d-b8aad2de8f96.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="" className="brand-img" />
              <img src="https://aimg.kwcdn.com/upload_aimg/temu/65e96f45-9ff5-435a-afbf-0785934809ef.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="" className="brand-img" />
              <img src="https://aimg.kwcdn.com/upload_aimg/temu/1f29a857-fe21-444e-8617-f57f5aa064f4.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="" className="brand-img" />
              <img src="https://aimg.kwcdn.com/upload_aimg/temukr/c882af4f-f9f0-4c7f-b49c-3438e0278efa.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="" className="brand-img" />
            </div>
          </div>

          {/* Aceptamos */}
          <div className="payment-section">
            <h6 className="footer-title">Aceptamos</h6>
            <div className="cards-list">
              <div className="payment-wrapper"><img src="https://commimg.kwcdn.com/upload_commimg/payment/paypal/61e1e415-4225-44bb-9af1-a95e1b2b1b0e.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="PayPal" className="payment-img" /></div>
              <div className="payment-wrapper"><img src="https://aimg.kwcdn.com/upload_aimg/temu/da7f463a-916f-4d91-bcbb-047317a1c35e.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="Visa" className="payment-img" /></div>
              <div className="payment-wrapper"><img src="https://aimg.kwcdn.com/upload_aimg/temu/b79a2dc3-b089-4cf8-a907-015a25ca12f2.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="Mastercard" className="payment-img" /></div>
              <div className="payment-wrapper"><img src="https://aimg.kwcdn.com/upload_aimg/temu/936bf9dc-9bb2-4935-9c5a-a70b800d4cf1.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="American Express" className="payment-img" /></div>
              <div className="payment-wrapper"><img src="https://aimg.kwcdn.com/upload_aimg/temu/219cc18d-0462-47ae-bf84-128d38206065.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="Discover" className="payment-img" /></div>
              <div className="payment-wrapper"><img src="https://aimg.kwcdn.com/upload_aimg/temu/fb599a1d-6d42-49f2-ba7a-64b16d01b226.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="Maestro" className="payment-img" /></div>
              <div className="payment-wrapper"><img src="https://aimg.kwcdn.com/upload_aimg/temu/7be318de-3f5d-4bfd-96c6-8cd397904388.png?imageView2/2/w/120/q/70/format/avif" alt="Diners Club" className="payment-img" /></div>
              <div className="payment-wrapper"><img src="https://aimg.kwcdn.com/upload_aimg/temu/c3e5eb19-1b60-4c2b-87e1-4528fb390cbf.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="JCB" className="payment-img" /></div>
              <div className="payment-wrapper"><img src="https://aimg.kwcdn.com/upload_aimg/payment/card%20brand/47c15b09-f039-4cb8-82d3-f7a549c1bafe.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="UnionPay" className="payment-img" /></div>
              <div className="payment-wrapper"><img src="https://aimg.kwcdn.com/upload_aimg/temu/41f99f99-7569-4825-ace3-f82157497206.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="Klarna" className="payment-img" /></div>
              <div className="payment-wrapper"><img src="https://aimg.kwcdn.com/upload_aimg/temu/2b33ee3b-a89a-4f0e-af70-a8572164e27e.png.slim.png?imageView2/2/w/120/q/70/format/avif" alt="Afterpay" className="payment-img" /></div>
              <div className="payment-wrapper"><img src="https://aimg.kwcdn.com/upload_aimg/temu/bca30494-21ee-4dd1-b9f4-35fab8446bf4.png?imageView2/2/w/120/q/70/format/avif" alt="Apple Pay" className="payment-img" /></div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="copyright">
            © 2022－2025 Whaleco Inc.
            <a href="/mx/terms-of-use.html" className="declaration-item">
              <span>Términos de uso</span>
            </a>
            <a href="/mx/privacy-and-cookie-policy.html" className="declaration-item">
              <span>Política de privacidad</span>
            </a>
            <a href="/mx/bgp-privacy-policy-and-setting.html" className="declaration-item">
              <span>Tus preferencias de privacidad</span>
              <img src="https://aimg.kwcdn.com/upload_aimg/bgcountry/8ef10c76-45e5-4998-b3c7-d19dea4c5375.png.slim.png?imageView2/2/w/50/q/70/format/avif" alt="" className="declaration-icon" />
            </a>
            <a href="/mx/cookie-and-similar-technologies-policy.html" className="declaration-item">
              <span>Gestión de anuncios</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;