import React, { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

const Scene = () => {
  return (
    <>

      <OrbitControls enableZoom={false} enableRotate={true} enablePan={false} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </>
  );
};

export default Scene;
