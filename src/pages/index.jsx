import Box from "@/components/Box";
import Floor from "@/components/Floor";
import House from "@/components/House";
import Island from "@/components/Island";
import LightBulb from "@/components/LightBulb";
import Model from "@/components/Model";
import Rain from "@/components/Rain";
import Roof from "@/components/Roof";
import { OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { Suspense } from "react";
import WheaterWidget from "@/components/WheaterWidget";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="h-screen w-screen font-roboto">
        <WheaterWidget />
        <Canvas
          shadows={true}
          className="bg-sky-500"
          camera={{
            position: [-6, 7, 7],
          }}
        >
          <OrbitControls />
          <ambientLight color={"white"} intensity={0.4} />
          <LightBulb position={[0, 20, 0]} scale={[3, 3, 3]} />
          <Suspense fallback={null}>
            <Model />
            <Rain />
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
