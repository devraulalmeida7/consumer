// /src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';  // Certifique-se de que os estilos sejam aplicados
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);