import React from "react";
import { Sky } from "@react-three/drei";

export default function SkyEnv() {

  return (
    <Sky
      distance={15000}
      turbidity={100}
      rayleigh={0}
      luminance={0}
      sunPosition={[0, 1, 0]}
      inclination={0}
      azimuth={0.25}
    />
  );
}