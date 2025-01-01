import React, { useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Model = () => {
  const model = useGLTF("./model/dog.glb");
  const model1 = useGLTF("./model/hovering_drone (1).glb");
  const Animations = useAnimations(model.animations, model.scene);
  const Animations1 = useAnimations(model1.animations, model1.scene);

  useEffect(() => {
    const hoverAction = Animations1.actions.hover;
    if (hoverAction) {
      hoverAction.play();
      hoverAction.timeScale = .5;
    }
  }, [Animations1.actions]);

  console.log(Animations1);

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={1} intensity={0.8}/>
      <primitive object={model1.scene} scale={2.5} position={[0, -1.5, 0]} />
      
    </>
  );
};

export default Model;
