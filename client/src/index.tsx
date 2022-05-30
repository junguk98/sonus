import React from 'react';
import App from './App';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
if (!container) throw new Error('Cannot find root element!');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
