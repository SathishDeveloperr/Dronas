import React from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import './App.css';
import { ContactShadows } from '@react-three/drei';

const FinalModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 10, 5], fov: 60 }}
    >
      <ContactShadows opacity={0.5}/>
      <Scene />
    </Canvas>
  );
};

export default FinalModel;
