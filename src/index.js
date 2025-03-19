import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Opcional: archivo de estilos globales, si existe
import App from './App'; // Importa el componente principal App

// Crea la raíz de renderizado para React 18+ (Create React App usa esta sintaxis moderna)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);