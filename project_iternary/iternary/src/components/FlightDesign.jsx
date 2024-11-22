import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Pla from './Pla'

const FlightDesign = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
            <Pla/>
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default FlightDesign