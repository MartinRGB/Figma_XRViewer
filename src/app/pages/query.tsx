import * as React from 'react';
import QueryApp from '../components/QueryApp';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('react-page');
const root = createRoot(rootElement);

root.render(
      <QueryApp />
);