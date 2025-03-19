import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Opcional: archivo de estilos globales, si existe
import App from './App'; // Importa el componente principal App
import 'bootstrap/dist/css/bootstrap.min.css'; // Agrega Bootstrap

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
