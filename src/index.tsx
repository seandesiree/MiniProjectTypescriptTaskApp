import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Auth0ProviderNavigate from "./components/Auth0Provider.tsx"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Auth0ProviderNavigate domain={''} clientId={''}>
      <App />
    </Auth0ProviderNavigate>
  </BrowserRouter>
  
);

