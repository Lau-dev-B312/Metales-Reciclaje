import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#home" className="brand-logo-link" title="Metales Reciclaje" onClick={closeMenu}>
          <img src={logoImg} alt="Logo Metales Reciclaje" className="brand-logo-img" />
          <div className="brand-text-group">
            <span className="brand-title">
              Metales <span>Reciclaje</span>
            </span>
            <span className="brand-subtitle">Alcance Internacional</span>
          </div>
        </a>

        <nav 
          id="main-navigation"
          className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}
          aria-label="Navegación principal"
        >
          <a 
            href="https://wa.me/5492612193613?text=Hola%20Metales%20Reciclaje,%20quiero%20realizar%20una%20consulta%20general" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link" 
            onClick={closeMenu}
          >
            Home
          </a>
          <a 
            href="https://wa.me/5492612193613?text=Hola%20Metales%20Reciclaje,%20deseo%20conocer%20m%C3%A1s%20sobre%20su%20empresa" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link" 
            onClick={closeMenu}
          >
            Quienes Somos
          </a>
          <a 
            href="https://wa.me/5492612193613?text=Hola%20Metales%20Reciclaje,%20deseo%20consultar%20sobre%20su%20forma%20de%20trabajo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link" 
            onClick={closeMenu}
          >
            Como Trabajamos
          </a>
          <a 
            href="https://wa.me/5492612193613?text=Hola%20Metales%20Reciclaje,%20quiero%20consultar%20por%20los%20materiales%20que%20compran" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link" 
            onClick={closeMenu}
          >
            Materiales que Compramos
          </a>
          <a 
            href="https://wa.me/5492612193613?text=Hola%20Metales%20Reciclaje,%20deseo%20consultar%20por%20sus%20servicios" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link" 
            onClick={closeMenu}
          >
            Servicios
          </a>
          <a 
            href="https://wa.me/5492612193613?text=Hola%20Metales%20Reciclaje,%20deseo%20contactarme%20con%20ustedes" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link" 
            onClick={closeMenu}
          >
            Contacto
          </a>
        </nav>

        <button 
          type="button" 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="main-navigation"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}
