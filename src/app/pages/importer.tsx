import * as React from 'react';
import ImporterApp from '@Apps/ImporterApp';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('react-page');
const root = createRoot(rootElement);

root.render(
      <ImporterApp />
);