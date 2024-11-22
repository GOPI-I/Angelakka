/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 pla.gltf --transform 
Files: pla.gltf [8.07MB] > C:\Users\AKASH\Desktop\pla\pla-transformed.glb [1.96MB] (76%)
Author: Noah (https://sketchfab.com/Noaah)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/plane-4c3598cd0ba547aeb10a4833d6a36566
Title: Plane
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/pla-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} position={[0.01, 1.132, -2.873]} rotation={[-0.087, Math.PI / 2, 0]} scale={0.001} />
      <mesh geometry={nodes.Object_8.geometry} material={materials['body_texture.001']} position={[0.011, 0.456, 0.036]} rotation={[-0.087, Math.PI / 2, 0]} scale={0.001} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.PaletteMaterial002} position={[0.016, 1.061, -0.366]} rotation={[-0.087, Math.PI / 2, 0]} scale={0.001} />
      <mesh geometry={nodes.Object_25.geometry} material={materials.PaletteMaterial003} position={[0.007, 1.244, 0.041]} rotation={[-0.087, Math.PI / 2, 0]} scale={0.001} />
      <mesh geometry={nodes.Object_29.geometry} material={materials.PaletteMaterial004} position={[0.046, 1.252, -1.521]} rotation={[-0.087, Math.PI / 2, 0]} scale={0.001} />
      <mesh geometry={nodes.Object_41.geometry} material={materials['board.001']} position={[0.011, 1.63, 2.614]} rotation={[-0.087, Math.PI / 2, 0]} scale={0.001} />
    </group>
  )
}

useGLTF.preload('/pla-transformed.glb')
