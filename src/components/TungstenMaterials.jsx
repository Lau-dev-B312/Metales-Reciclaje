import React from 'react';

import barrasInteriorImg from '../assets/video and images/Barras de interior de carburo de tungsteno.jpeg';
import boquillasArenadoImg from '../assets/video and images/Boquillas de arenado.jpeg';
import boquillasPerforacionImg from '../assets/video and images/Boquillas de perforacion.jpeg';
import botonesImg from '../assets/video and images/Botones de triconos, insertos de triconos, pepas de triconos..jpeg';
import brocasImg from '../assets/video and images/Brocas, fresas, mechas..jpeg';
import cuchillasCepilladoraImg from '../assets/video and images/Cuchillas de cepilladora industrial.jpeg';
import dadosExtrusionImg from '../assets/video and images/Dados de extrusion.jpeg';
import dientesBaldesImg from '../assets/video and images/Dientes de baldes de pala de mineria.jpeg';
import escariadoresImg from '../assets/video and images/Escariadores de carburo de tungsteno.jpeg';
import fresasImg from '../assets/video and images/Fresas, limas rotativas.jpeg';
import guiasBujesImg from '../assets/video and images/Guias, bujes y asientos de valvulas de carburo.jpeg';
import insertosMartillosImg from '../assets/video and images/Insertos de martillos dth.jpeg';
import insertosSierrasImg from '../assets/video and images/Insertos de sierras de corte..jpeg';
import machosCarburoImg from '../assets/video and images/Machos de carburo de tungsteno.jpeg';
import martillosDthImg from '../assets/video and images/Martillos dth.jpeg';
import matricesTrefiladoImg from '../assets/video and images/Matrices de trefilado.jpeg';
import matricesEstampadoImg from '../assets/video and images/Matrices y dados de estampado.jpeg';
import pastillasCoronaImg from '../assets/video and images/Pastillas de corona de perforacion.jpeg';
import pastillasEstabilizadoresImg from '../assets/video and images/Pastillas de estabilizadores.jpeg';
import placasChancadoresImg from '../assets/video and images/Placas antidesgaste de chancadores.jpeg';
import polvoImg from '../assets/video and images/Polvo de Tungsteno.jpeg';
import portaHerramientasImg from '../assets/video and images/Porta herramientas.jpeg';
import puntasPicadoImg from '../assets/video and images/Puntas de picado o cincel.jpeg';
import punzonesCarburoImg from '../assets/video and images/Punzones de carburo de tungsteno.jpeg';
import rodillosLaminacionImg from '../assets/video and images/Rodillos de laminacion.jpeg';
import sellosImg from '../assets/video and images/Sellos Mecánicos.jpeg';
import triconosImg from '../assets/video and images/Triconos, trepanos.jpeg';
import widiasImg from '../assets/video and images/widias, insertos, placas..jpeg';

export default function TungstenMaterials() {
  const materials = [
    {
      id: 'mat-1',
      name: 'Botones de Tricono',
      desc: 'Insertos de triconos, pepas de triconos.',
      image: botonesImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Botones de Tricono (Insertos de triconos, pepas de triconos)'
    },
    {
      id: 'mat-2',
      name: 'Brocas y Mechas',
      desc: 'Fresas, mechas y brocas integrales.',
      image: brocasImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Brocas y Mechas'
    },
    {
      id: 'mat-3',
      name: 'Fresas y Limas Rotativas',
      desc: 'Limas rotativas y fresas de metal duro.',
      image: fresasImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Fresas y Limas Rotativas'
    },
    {
      id: 'mat-4',
      name: 'Insertos de Sierras de Corte',
      desc: 'Pastillas e insertos de corte para sierras.',
      image: insertosSierrasImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Insertos de Sierras de Corte'
    },
    {
      id: 'mat-5',
      name: 'Widias e Insertos',
      desc: 'Insertos, placas y pastillas intercambiables.',
      image: widiasImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Widias e Insertos'
    },
    {
      id: 'mat-6',
      name: 'Triconos y Trépanos',
      desc: 'Conos y cabezales de perforación.',
      image: triconosImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Triconos y Trépanos'
    },
    {
      id: 'mat-7',
      name: 'Sellos Mecánicos',
      desc: 'Pistas y anillos de carburo de tungsteno.',
      image: sellosImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Sellos Mecánicos'
    },
    {
      id: 'mat-8',
      name: 'Polvo de Tungsteno',
      desc: 'Lodos, barros y polvos de afilado.',
      image: polvoImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Polvo de Tungsteno'
    },
    {
      id: 'mat-9',
      name: 'Barras de Interior',
      desc: 'Barras de interior de carburo de tungsteno.',
      image: barrasInteriorImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Barras de interior de carburo de tungsteno'
    },
    {
      id: 'mat-10',
      name: 'Boquillas de Arenado',
      desc: 'Boquillas industriales de alta resistencia.',
      image: boquillasArenadoImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Boquillas de arenado'
    },
    {
      id: 'mat-11',
      name: 'Boquillas de Perforación',
      desc: 'Boquillas de carburo para perforación.',
      image: boquillasPerforacionImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Boquillas de perforación'
    },
    {
      id: 'mat-12',
      name: 'Cuchillas Industriales',
      desc: 'Cuchillas de cepilladora industrial.',
      image: cuchillasCepilladoraImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Cuchillas de cepilladora industrial'
    },
    {
      id: 'mat-13',
      name: 'Dados de Extrusión',
      desc: 'Dados y matrices para extrusión.',
      image: dadosExtrusionImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Dados de extrusión'
    },
    {
      id: 'mat-14',
      name: 'Dientes de Pala Minera',
      desc: 'Dientes de baldes de pala de minería.',
      image: dientesBaldesImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Dientes de baldes de pala de minería'
    },
    {
      id: 'mat-15',
      name: 'Escariadores',
      desc: 'Escariadores de carburo de tungsteno.',
      image: escariadoresImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Escariadores de carburo de tungsteno'
    },
    {
      id: 'mat-16',
      name: 'Guías, Bujes y Asientos',
      desc: 'Asientos de válvulas y bujes de carburo.',
      image: guiasBujesImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Guías, bujes y asientos de válvulas de carburo'
    },
    {
      id: 'mat-17',
      name: 'Insertos Martillos DTH',
      desc: 'Insertos y botones para martillos DTH.',
      image: insertosMartillosImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Insertos de martillos DTH'
    },
    {
      id: 'mat-18',
      name: 'Machos de Roscado',
      desc: 'Machos de carburo de tungsteno.',
      image: machosCarburoImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Machos de carburo de tungsteno'
    },
    {
      id: 'mat-19',
      name: 'Martillos DTH',
      desc: 'Cabezales y martillos de perforación DTH.',
      image: martillosDthImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Martillos DTH'
    },
    {
      id: 'mat-20',
      name: 'Matrices de Trefilado',
      desc: 'Matrices e hileras para trefilado.',
      image: matricesTrefiladoImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Matrices de trefilado'
    },
    {
      id: 'mat-21',
      name: 'Matrices y Dados',
      desc: 'Matrices y dados de estampado industrial.',
      image: matricesEstampadoImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Matrices y dados de estampado'
    },
    {
      id: 'mat-22',
      name: 'Pastillas Corona Perforación',
      desc: 'Pastillas para coronas diamantadas y sacanúcleos.',
      image: pastillasCoronaImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Pastillas de corona de perforación'
    },
    {
      id: 'mat-23',
      name: 'Pastillas de Estabilizadores',
      desc: 'Pastillas antidesgaste para estabilizadores.',
      image: pastillasEstabilizadoresImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Pastillas de estabilizadores'
    },
    {
      id: 'mat-24',
      name: 'Placas Antidesgaste',
      desc: 'Placas para chancadores y trituradoras.',
      image: placasChancadoresImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Placas antidesgaste de chancadores'
    },
    {
      id: 'mat-25',
      name: 'Portaherramientas',
      desc: 'Portaherramientas para fresado y torneado.',
      image: portaHerramientasImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Portaherramientas'
    },
    {
      id: 'mat-26',
      name: 'Puntas de Picado o Cincel',
      desc: 'Puntas para martillos neumáticos e hidráulicos.',
      image: puntasPicadoImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Puntas de picado o cincel'
    },
    {
      id: 'mat-27',
      name: 'Punzones de Carburo',
      desc: 'Punzones de estampación y corte.',
      image: punzonesCarburoImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Punzones de carburo de tungsteno'
    },
    {
      id: 'mat-28',
      name: 'Rodillos de Laminación',
      desc: 'Rodillos y anillos para laminadoras.',
      image: rodillosLaminacionImg,
      tag: 'Tungsteno',
      whatsappText: 'Hola Metales Reciclaje, quiero consultar por Rodillos de laminación'
    }
  ];

  return (
    <section id="materiales-compramos" className="tungsten-materials-section">
      <div className="tungsten-materials-inner">
        <div className="tungsten-header">
          <span className="tungsten-eyebrow">COMPRAMOS</span>
          <h2 className="tungsten-title">Materiales que compramos</h2>
          <p className="tungsten-description">
            Compramos rezagos, herramientas y piezas industriales de carburo de tungsteno en cualquier estado y volumen. Contactanos para recibir una cotización rápida y personalizada según el valor actual del mercado.
          </p>
        </div>

        <div className="tungsten-grid">
          {materials.map((item) => (
            <div key={item.id} className="tungsten-card">
              <div className="tungsten-card-bg">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="tungsten-card-img" loading="lazy" />
                ) : (
                  <svg 
                    className="card-placeholder-icon" 
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
                <span className="tungsten-card-badge">{item.tag}</span>
              </div>
              <div className="tungsten-card-overlay"></div>

              <div className="tungsten-card-content">
                <div className="tungsten-card-text">
                  <h3 className="tungsten-card-title">{item.name}</h3>
                  {item.desc ? <p className="tungsten-card-desc">{item.desc}</p> : null}
                </div>

                <a
                  href={`https://wa.me/5492612193613?text=${encodeURIComponent(item.whatsappText)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="tungsten-wa-badge"
                  title="Contactar por WhatsApp"
                  aria-label="Contactar por WhatsApp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="wa-card-icon">
                    <path d="M20.52 3.449A11.956 11.956 0 0 0 11.986 0C5.352 0 0 5.348 0 11.982c0 2.115.552 4.18 1.597 5.997L0 24l6.191-1.625a11.954 11.954 0 0 0 5.795 1.476h.004c6.634 0 11.985-5.348 11.985-11.982 0-3.197-1.245-6.205-3.507-8.455zM11.986 21.849c-1.897 0-3.693-.496-5.289-1.428l-.379-.225-3.926 1.03 1.049-3.824-.247-.394a9.957 9.957 0 0 1-1.524-5.352c0-5.503 4.48-9.981 9.989-9.981 2.668 0 5.176 1.04 7.065 2.928a9.946 9.946 0 0 1 2.925 7.065c-.005 5.507-4.485 9.985-9.99 9.985zm5.474-7.485c-.302-.152-1.785-.881-2.062-.982-.276-.102-.477-.152-.678.151-.202.303-.782.983-.905 1.185-.124.202-.248.227-.55.076-.303-.151-1.28-.472-2.437-1.506-.9-.801-1.507-1.79-1.685-2.093-.178-.303-.019-.467.133-.618.136-.135.303-.353.454-.53.151-.177.202-.303.303-.505.101-.202.05-.379-.025-.53-.075-.152-.678-1.635-.929-2.238-.242-.589-.488-.508-.678-.517-.176-.009-.377-.01-.579-.01-.202 0-.53.076-.807.379-.277.303-1.057 1.032-1.057 2.516 0 1.483 1.082 2.916 1.233 3.118.151.202 2.122 3.243 5.138 4.549.718.309 1.278.494 1.717.63.722.228 1.378.196 1.895.118.579-.087 1.785-.729 2.036-1.434.251-.705.251-1.309.176-1.435-.075-.125-.276-.202-.578-.354z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
