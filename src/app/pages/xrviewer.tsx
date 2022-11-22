import * as React from 'react';
import {createRoot} from 'react-dom/client';
import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension';
import XRViewerApp from '../components/XRViewerApp';

const rootElement = document.getElementById('react-page');
const root = createRoot(rootElement);
// # init theatre studio
studio.initialize({usePersistentStorage:false}) 
studio.extend(extension)

root.render(
      <XRViewerApp />
);

