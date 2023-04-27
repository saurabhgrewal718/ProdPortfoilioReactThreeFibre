import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Canvas } from '@react-three/fiber'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }} >
      <App />
    </Canvas>
  </React.StrictMode>
);


