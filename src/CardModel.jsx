import React, { useEffect } from 'react'

import { useGLTF, useAnimations } from '@react-three/drei'

const CardModel = () => {
  const model = useGLTF("./model/dog.glb");
  const model1 = useGLTF("./model/hovering_drone (1).glb");
  const Animations = useAnimations(model.animations, model.scene);
  const Animations1 = useAnimations(model1.animations, model1.scene);

  console.log(Animations1);

  useEffect(() => {
    Animations1.actions.hover.play();
  }, [])

  return (
    <>
      <primitive object={model1.scene} scale={1.7} rotation={[10.2,10,9.5]}/>
    </>
  )
}

export default CardModel