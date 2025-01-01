import { ContactShadows, Environment, OrbitControls, useAnimations, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect } from 'react';

const Model = () => {
  const model1 = useGLTF('./model/hovering_drone (1).glb');
  const model2 = useGLTF('./model/drone.glb');
  const model3 = useGLTF('./model/drone_scifi.glb');
  const  Animations1  = useAnimations(model1.animations, model1.scene);
  const  Animations2  = useAnimations(model2.animations, model2.scene);
  const  Animations3  = useAnimations(model3.animations, model3.scene);

  console.log(Animations2);

  useEffect(() => {
    const hoverAction = Animations2.actions.Scene;
    if (hoverAction) {
      hoverAction.play();
      hoverAction.timeScale = 0.1;
    }
  }, [Animations2.actions]);

  return <primitive object={model2.scene} scale={0.1} position={[0, -2, 0]} />;
};

const PrductDetail = () => {
  return (
    <Canvas shadows camera={{ position: [0, 10, 5], fov: 60 }} style={{ height: '100vh' }}>
      <ContactShadows opacity={0.2} blur={3}/>
      <OrbitControls enableZoom={false}/>      
      <directionalLight intensity={2} />
      <directionalLight position={[-1,-1,-1]}/>
      <Environment preset='forest' background blur={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default PrductDetail;
