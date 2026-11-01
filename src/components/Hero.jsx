import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-eyebrow">
            ESPECIALISTAS EN TUNGSTENO
          </div>

          <h1 className="hero-title">
            Recuperación De Tungsteno Industrial Con Alcance Internacional.
          </h1>

          <p className="hero-description">
            Nos especializamos en la compra, recuperación y valorización de carburo de tungsteno y metales duros industriales. Brindamos asesoramiento personalizado, cotizaciones directas y logística integral con alcance nacional e internacional.
          </p>

          <div className="hero-cta-group">
            <a 
              href="https://wa.me/5492612193613?text=Hola%20Metales%20Reciclaje,%20deseo%20solicitar%20una%20cotización%20de%20tungsteno" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              <span>Solicitar Cotización</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#materiales-compramos" className="btn-secondary">
              Ver Objetos de Tungsteno
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="feature-glass-card">
            <div className="card-category-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <span>COMPRA Y RECUPERACIÓN</span>
            </div>
            <p className="card-text">
              Adquirimos rezagos, herramientas desgastadas, widias e insertos en cualquier volumen, garantizando retiro ágil y pago inmediato.
            </p>
          </div>

          <div className="feature-glass-card">
            <div className="card-category-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <path d="M11 8v6M8 11h6"></path>
              </svg>
              <span>EVALUACIÓN TÉCNICA</span>
            </div>
            <p className="card-text">
              Analizamos la pureza, peso y grado de tus materiales para garantizar la cotización más precisa y competitiva del mercado metalúrgico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
