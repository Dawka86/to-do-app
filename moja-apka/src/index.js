import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Todoit } from './componets/Todoit';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Todoit/>
  </React.StrictMode>
);


