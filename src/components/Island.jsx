import { useFrame } from "@react-three/fiber";
import React, { useState, useEffect, useRef } from "react";

function Island(props) {

    const meshRef = useRef()

    useFrame(()=>{
        var mesh = meshRef.current
        mesh.position.set(0, 0, 0)
        mesh.scale.set(3, 1.5, 3)
    })
  return (
    <mesh ref={meshRef} recieveShadow={true} castShadow={true}>
      <sphereBufferGeometry />
      <meshPhysicalMaterial  color={"#49be25"} />
    </mesh>
  );
}
export default Island;