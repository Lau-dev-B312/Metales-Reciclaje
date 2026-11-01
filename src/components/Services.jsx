import React from 'react';
import cotizacionImg from '../assets/video and images/cotizacion personalizada.jpg';
import retiroDomicilioImg from '../assets/video and images/retiro de materiales a domicilio.jpg';
import grandesVolumenesImg from '../assets/video and images/operaciones con grandes volumenes.jpg';
import retiroIntegralImg from '../assets/video and images/retiro integral en fabricas.jpg';

export default function Services() {
  const services = [
    {
      id: 'cotizacion',
      title: 'Cotización personalizada',
      desc: 'Evaluamos el tipo, estado, volumen y ubicación del material para ofrecer una cotización adecuada.',
      image: cotizacionImg
    },
    {
      id: 'retiro-domicilio',
      title: 'Retiro de materiales a domicilio',
      desc: 'Coordinamos el retiro de materiales en fábricas, depósitos, comercios e industrias.',
      image: retiroDomicilioImg
    },
    {
      id: 'grandes-volumenes',
      title: 'Operaciones con grandes volúmenes',
      desc: 'Gestionamos grandes cantidades de rezagos y materiales industriales con coordinación logística.',
      image: grandesVolumenesImg
    },
    {
      id: 'retiro-integral',
      title: 'Retiro integral en fábricas',
      desc: 'Retiramos la totalidad de los materiales acordados y dejamos liberado el sector ocupado.',
      image: retiroIntegralImg
    }
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="services-inner">
        <div className="services-header">
          <span className="services-eyebrow">QUÉ HACEMOS</span>
          <h2 className="services-title">Servicios</h2>
        </div>

        <div className="services-grid">
          {services.map((srv) => (
            <div key={srv.id} className="service-card">
              <div className="service-card-placeholder">
                {srv.image ? (
                  <img src={srv.image} alt={srv.title} className="service-card-img" />
                ) : (
                  <svg 
                    className="service-placeholder-icon" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    aria-label="Placeholder Imagen"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="3" ry="3"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                )}
              </div>

              <div className="service-card-overlay"></div>

              <div className="service-card-content">
                <h3 className="service-card-title">{srv.title}</h3>
                <p className="service-card-desc">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
