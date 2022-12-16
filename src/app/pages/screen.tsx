import * as React from 'react';
import ScreenApp from '@Applications/ScreenApp';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('react-page');
const root = createRoot(rootElement);

root.render(
      <ScreenApp />
);