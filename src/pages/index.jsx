import React, { useState } from "react";
import Box from "@/components/Box";
import Floor from "@/components/Floor";
import House from "@/components/House";
import Island from "@/components/Island";
import LightBulb from "@/components/LightBulb";
import Model from "@/components/Model";
import Rain from "@/components/Rain";
import Roof from "@/components/Roof";
import WeatherWidget from "@/components/WheaterWidget";
import { OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { Suspense } from "react";
import SkyEnv from "@/components/sky";

export default function Home() {
  const [weather, setWeather] = useState(null);

  const api = {
    key: "4f927311c182ce5391d2408e15c9dc21",
    base: "https://api.openweathermap.org/data/2.5/",
    cityName: 'Surabaya'
  }

  const search = () => {
    fetch(`${api.base}weather?q=${api.cityName}&units=metric&APPID=${api.key}`).then(res => res.json()).then(result => {
      setWeather(result);
    });

  }
  
  React.useEffect(() => {
    weather === null && (
      search()
   ) 
   setInterval(() => search(), 100000);
      
  }, []);

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
            <li>🖱️ Drag/scroll to adjust the camera
            </li>
          </ul>
        </div>
        <WeatherWidget {...weather} />
        <Canvas
          shadows={true}
          className="bg-sky-500"
          camera={{
            position: [0, 0, 0],
            fov: 75,
          }}
        >
          <OrbitControls 
            enablePan={false}
            maxDistance={50}
            minDistance={15}
            maxPolarAngle={1.5}
            enableDamping={true}
            target={[0, 1, 0]}
          />

          <ambientLight color={"white"} intensity={0.4} />
          <LightBulb position={[0, 20, 0]} scale={[3, 3, 3]}/>
          <SkyEnv />
          <Suspense fallback={null}>
            <Model />
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
