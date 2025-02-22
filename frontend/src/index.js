import React from 'react';
import { createRoot } from 'react-dom/client'; // Importação correta para React 18+
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importação do Bootstrap

// Substitua ReactDOM.render por createRoot
const container = document.getElementById('root');
const root = createRoot(container); // Cria a raiz do React
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();