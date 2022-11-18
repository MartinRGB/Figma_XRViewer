import * as React from 'react';
import WebXRApp from '../components/WebXRApp';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('react-page');
const root = createRoot(rootElement);

root.render(
      <WebXRApp/>
);