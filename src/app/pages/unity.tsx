import * as React from 'react';
import UnityApp from '../components/UnityApp';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('react-page');
const root = createRoot(rootElement);

root.render(
      <UnityApp />
);