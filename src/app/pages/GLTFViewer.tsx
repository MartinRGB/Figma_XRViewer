import * as React from 'react';
import GLTFViewerApp from '@Applications/GLTFViewerApp';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('react-page');
const root = createRoot(rootElement);

root.render(
      <GLTFViewerApp/>
);