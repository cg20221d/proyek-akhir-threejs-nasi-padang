import Box from "@/components/Box";
import Floor from "@/components/Floor";
import House from "@/components/House";
import Island from "@/components/Island";
import LightBulb from "@/components/LightBulb";
import Rain from "@/components/Rain";
import Roof from "@/components/Roof";
import { OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-slate-600">
      <Head>
        <title>Weathery</title>
        <meta
          name="description"
          content="Weathery, forcast app with interactive 3D design"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="h-screen w-screen">
        <div className="absolute top-5 left-10 p-5 text-white rounded-lg shadow-md bg-slate-500 z-10">
          <h1>Interactions</h1>
          <ul className=" ">
            <li>🖱️ Drag/scroll to adjust the camera</li>
          </ul>
        </div>
        <Canvas
          shadows={true}
          className="bg-sky-500"
          camera={{
            position: [-6, 7, 7],
          }}
        >
          <OrbitControls />
          <ambientLight color={"white"} intensity={0.4} />
          <LightBulb position={[0, 5, 0]} scale={[3, 3, 3]}/>
          <Suspense fallback={null}>
            <Rain/>
            <Box rotateX={3} rotateY={0.2} />
            <Roof />
            <House />
            <Island />
          </Suspense>
          <Floor position={[0, -1, 0]} />
        </Canvas>
      </main>
    </div>
  );
}
