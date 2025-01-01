import React from 'react'
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import './App.css';

const Card1 = () => {
    return (
        <> 
            <Canvas style={{ marginTop:'300px' }}>
                <Scene />
            </Canvas>
        </>
    )
}

export default Card1
