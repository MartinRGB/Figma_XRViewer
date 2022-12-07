import * as React from 'react';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('react-page');
const root = createRoot(rootElement);


if(process.env.PLUGIN === 'gltf'){
      const App = require('@Applications/GLTFViewerApp')
      const GLTFViewerApp = App.default;
      root.render(
            <GLTFViewerApp envBuild={process.env.BUILD} width={Number(process.env.WIDTH)} height={Number(process.env.HEIGHT)}/>
      )

}
else{
      const App = require('@Applications/PluginApp')
      const PluginApp = App.default;
      root.render(
            <PluginApp platform={process.env.PLUGIN}/>
      )

}


