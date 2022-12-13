import React from "react";
import { Sky } from "@react-three/drei";

export default function SkyEnv(props) {

  return (
    <Sky
      distance={15000}
      turbidity={100}
      rayleigh={0}
      luminance={1}
      sunPosition={props.sunPosition}
      inclination={0}
      azimuth={0.25}
    />
  );
}