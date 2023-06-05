import * as React from 'react';
import {createRoot} from 'react-dom/client';
import XRViewerApp from '@Applications/XRViewerApp';
import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension' ;
// # init Theatre Studio
studio.initialize({usePersistentStorage:false}) 
studio.extend(extension)
window.studio = studio;

const rootElement = document.getElementById('react-page');
const root = createRoot(rootElement);


root.render(
      <XRViewerApp/>
);
