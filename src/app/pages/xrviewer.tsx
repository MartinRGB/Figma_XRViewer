import * as React from 'react';
import {createRoot} from 'react-dom/client';
import XRViewerApp from '@Applications/XRViewerApp';

const rootElement = document.getElementById('react-page');
const root = createRoot(rootElement);

root.render(
      <XRViewerApp />
);

