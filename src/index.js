import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Route } from 'react-router-dom'
import Root from './Root';
import { ActiveProvider } from './Context/Active';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
       <ActiveProvider>
          <Root />
       </ActiveProvider>
    </BrowserRouter>
  // </React.StrictMode>
);

