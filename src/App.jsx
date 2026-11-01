import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TungstenMaterials from './components/TungstenMaterials';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  const [bgImageUrl, setBgImageUrl] = useState('');
  const [showHelper, setShowHelper] = useState(false);

  return (
    <div className="app-container">
      <div className="fixed-background-wrapper" aria-hidden="true">
        <div 
          className="fixed-background-image" 
          style={bgImageUrl ? { backgroundImage: `url(${bgImageUrl})` } : undefined}
        />
        <div className="fixed-background-overlay" />
      </div>

      <Header />

      <main>
        {showHelper && (
          <div className="bg-instruction-banner">
            <div>
              <strong>📸 Configuración de Imagen de Fondo:</strong> Guarda tu imagen en la carpeta <code>public/</code> (por ejemplo <code>fondo.jpg</code>) e ingresa la ruta abajo para verla difuminada de fondo:
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <input 
                type="text" 
                placeholder="/fondo.jpg" 
                value={bgImageUrl}
                onChange={(e) => setBgImageUrl(e.target.value)}
                style={{ padding: '0.3rem 0.6rem', borderRadius: '4px', border: '1px solid var(--accent-light-blue)', background: '#030810', color: '#fff' }}
              />
              <button 
                type="button" 
                onClick={() => setShowHelper(false)}
                style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}
              >
                ✕ Cerrar
              </button>
            </div>
          </div>
        )}

        <Hero />

        <TungstenMaterials />

        <Services />

        <AboutUs />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}

export default App;
