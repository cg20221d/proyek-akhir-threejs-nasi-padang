import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";

function Floor(props) {
    const texture = useLoader(TextureLoader, "/assets/floor-texture.jpg");
  return (
    <mesh {...props} recieveShadow={true}  castShadow={true}>
      <boxBufferGeometry args={[10,1, 8]} />
      <meshPhysicalMaterial map={texture} color='white' />
    </mesh>
  );
}

export default Floor;