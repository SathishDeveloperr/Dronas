import React, { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import Model from './Model'
import CardModel from './CardModel'

const CardScene = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight 
                position={[1, 1, 1]}  
                intensity={1}
                castShadow={true}
            />
            <OrbitControls enableZoom={false} enableRotate={false} />
            <Suspense fallback={null}>
                <CardModel />
            </Suspense>
        </>
    )
}

export default CardScene
