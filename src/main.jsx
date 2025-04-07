import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
// src/main.jsx
import '@fortawesome/fontawesome-free/css/all.min.css';
// src/main.jsx
import 'normalize.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
