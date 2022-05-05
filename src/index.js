import React from 'react'; //libreria de react que trae las funciones
import ReactDOM from 'react-dom/client';//es loq ue hace que se muestre en pantalla
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));// dom toma dos parametros, que va a imprimir y donde lo va a imprimir
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
