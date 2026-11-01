import React from 'react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const phoneNumber = '+54 9 2612 19-3613';
  const cleanPhone = '5492612193613';

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-col footer-col-brand">
          <div className="footer-brand">
            <img src={logoImg} alt="Logo Metales Reciclaje" className="footer-logo-img" />
            <span className="footer-brand-title">METALES RECICLAJE</span>
          </div>
          <p className="footer-desc">
            Compra y comercialización de tungsteno en todo Chile.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">NAVEGACIÓN</h4>
          <ul className="footer-nav-list">
            <li><a href="#materiales-compramos">Materiales</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#quienes-somos">Nosotros</a></li>
            <li>
              <a 
                href={`https://wa.me/${cleanPhone}?text=Hola%20Metales%20Reciclaje,%20deseo%20solicitar%20una%20cotización`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Cotizar
              </a>
            </li>
            <li><a href="#privacidad">Política de privacidad</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">CONTACTO</h4>
          <p className="footer-contact-item">
            <span>Teléfono: </span>
            <a 
              href={`https://wa.me/${cleanPhone}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-phone-link"
              title="Contactar por WhatsApp"
            >
              <strong>{phoneNumber}</strong>
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <span>© 2026 Metales Reciclaje. Todos los derechos reservados.</span>
          <span className="footer-country">Chile</span>
        </div>
      </div>
    </footer>
  );
}
