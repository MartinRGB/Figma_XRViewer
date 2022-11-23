import * as React from 'react';
import CallbackApp from '@Applications/CallBackApp';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('react-page');
const root = createRoot(rootElement);

root.render(
      <CallbackApp />
);