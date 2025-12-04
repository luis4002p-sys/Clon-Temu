import "../../styles/securitybar.css";

const SecurityBar = () => {
  return (
    <div className="security-bar" style={{ width: '100%' }}>
      <div>
        <div className="security-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-8-4z" fill="currentColor"/>
            <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Pagos seguros</span>
        </div>

        <div className="security-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 10h18M5 6h14c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>Logística segura</span>
        </div>

        <div className="security-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>Privacidad segura</span>
        </div>

        <div className="security-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-8-4z" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
          </svg>
          <span>Protección de compras</span>
        </div>

        <div className="security-info">
          <span>Temu te mantiene seguro</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SecurityBar;