import * as React from 'react';
// import PluginApp from '@Applications/PluginApp';
// import GLTFViewerApp from '@Applications/GLTFViewerApp';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('react-page');
const root = createRoot(rootElement);


if(process.env.PLUGIN === 'gltf'){
      const App = require('@Applications/GLTFViewerApp')
      const GLTFViewerApp = App.default;
      root.render(
            <GLTFViewerApp envBuild={process.env.BUILD}/>
      )

}
else{
      const App = require('@Applications/PluginApp')
      const PluginApp = App.default;
      root.render(
            <PluginApp platform={process.env.PLUGIN}/>
      )

}


