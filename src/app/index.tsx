import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import {createRoot} from 'react-dom/client';

import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'

const rootElement = document.getElementById('react-page');
const root = createRoot(rootElement);

// # init theatre studio
studio.initialize({usePersistentStorage:false}) 
studio.extend(extension)

root.render(
      <App />
);