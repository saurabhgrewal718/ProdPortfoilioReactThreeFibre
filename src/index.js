import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Loader} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }} >
      <App />
    </Canvas>
    <Loader
      // innerStyles={...inner} // Inner container styles
      // barStyles={...bar} // Loading-bar styles
      dataStyles={{fontSize: '5em',fontFamily: 'Abril Fatface'}} // Text styles
      dataInterpolation={(p) => `${p.toFixed(0)}%`} // Text
      initialState={(active) => active} // Initial black out state
    />
  </React.StrictMode>
);


