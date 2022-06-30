import React from 'react';
import App from './App';

import { createRoot } from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
import { RecoilRoot } from 'recoil';
import axios from 'axios';
axios.defaults.withCredentials = true;
const container = document.getElementById('root');
if (!container) throw new Error('Cannot find root element!');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <CookiesProvider>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </CookiesProvider>
);
