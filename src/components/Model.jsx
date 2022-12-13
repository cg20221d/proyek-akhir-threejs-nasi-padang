import { useFrame } from "@react-three/fiber";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const meshRef = useRef()

  const { nodes, materials } = useGLTF('./house-island.gltf')
  // console.log("house : ", nodes, materials)
  useFrame(()=>{
    var mesh = meshRef.current
    mesh.position.set(0, 0, 0)
    mesh.scale.set(0.5, 0.5, 0.5)
})
  return (
    <group ref={meshRef} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.node_id26.geometry} material={materials[""]} />
    </group>
  )
}

useGLTF.preload('./house-island.gltf')
