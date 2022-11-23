import * as React from 'react';
import ImporterApp from '@Applications/ImporterApp';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('react-page');
const root = createRoot(rootElement);

root.render(
      <ImporterApp />
);