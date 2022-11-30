import * as THREE from 'three'
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useState, useEffect, useRef } from "react";
import { TextureLoader } from "three";

function Floor(props) {
  const texture = useLoader(TextureLoader, "/assets/floor-texture.jpg");
  const meshRef = useRef()

  let tick = 0
  useFrame(()=>{
    tick++
    // const time = state.clock.getElapsedTime()
    var mesh = meshRef.current
    mesh.position.set(0, 0, 0)
    let positionArr = mesh.geometry.attributes.position.array
    for(var i=0;i<positionArr.length;i++){
      if((i+2)%3==0){
          if(positionArr[i]>0) positionArr[i]+= Math.sin(tick * .015) * 0.04
      }
    }
    // mesh.position.set(0, 3, 3)
    // mesh.instanceMatrix.needsUpdate = true
    // console.log(mesh)
    // mesh.rotation.set(3, 3, 3)
    // meshRef.current.needsUpdate = true
  })


  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry args={[10, 1, 10, 22, 22]} />
      <meshPhongMaterial color='#2596be' />
    </mesh>
  );
}

export default Floor;