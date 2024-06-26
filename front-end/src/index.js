import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <App />

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
