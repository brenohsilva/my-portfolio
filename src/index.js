import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import global_br from './translations/Portuguese/global.json'
import global_en from './translations/English/global.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next';

i18next.init ({
  interpolation: {escapeValue: false},
  lng: "pt",
  resources: {
    pt: {
      global: global_br
    },
    en: {
      global: global_en,
    }
  }

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </React.StrictMode>
);
