import React from 'react'
import { Canvas } from '@react-three/fiber';
import './App.css';
import CardScene from './CardScene';

const FinalCardModel = () => {
    return (
        <> 
            <Canvas style={{ marginTop:'100px' }}>
                <CardScene />
            </Canvas>
        </>
    )
}

export default FinalCardModel
