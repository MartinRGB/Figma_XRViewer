import * as React from 'react';
import PluginApp from '@Applications/PluginApp';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('react-page');
const root = createRoot(rootElement);

root.render(
      <PluginApp platform={process.env.PLUGIN}/>
);