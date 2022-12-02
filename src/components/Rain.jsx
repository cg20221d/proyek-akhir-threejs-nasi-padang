import * as THREE from 'three'
import { useFrame } from "@react-three/fiber";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { Color } from 'three';

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  

function Rain(props) {
    const tempObject = new THREE.Object3D()
    const tempColor = new THREE.Color()

    const meshRef = useRef()
    const prevRef = useRef()

    const colorArray = Float32Array.from(new Array(3000).fill(1))
    console.log(colorArray)

    var tick = 0
    var init = true
    useFrame((state) => {
        tick += 0.02
        meshRef.current.rotation.x = 0
        meshRef.current.rotation.y = 0
        let i = 0
        for (let x = 0; x < 10; x++)
            for (let y = 0; y < 10; y++)
                for (let z = 0; z < 10; z++) {
                    const id = i++
                    tempObject.position.set(4.5 - x, y-tick%1, z - 4.5)
                    tempObject.rotation.y = 0
                    tempObject.rotation.z = 0
                    tempObject.updateMatrix()
                    meshRef.current.setMatrixAt(id, tempObject.matrix)
                }
        meshRef.current.instanceMatrix.needsUpdate = true
    })
    return (
        <instancedMesh
            ref={meshRef}
            args={[null, null, 1000]}>
            <capsuleGeometry args={[0.01, 0.2, 4, 8]}>
            </capsuleGeometry >
            <meshBasicMaterial color={"#3873E0"} />
        </instancedMesh>
    );
}
export default Rain;