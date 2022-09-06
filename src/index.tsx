import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from './stories/Button';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Button label="Label de prueba storybook" />
  </React.StrictMode>
);

