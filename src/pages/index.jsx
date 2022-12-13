import React, { useState } from "react";
// import { Rain, useTheme } from 'threejs-weather'
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
import SkyEnv from "@/components/Sky";
import Snow from "@/components/Snow";
import Cloud from "@/components/Cloud";

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
    let date = new Date
    let hour = date.getHours()-6
    let minutes = date.getMinutes()
    if(minutes == 0) minutes = 1
    console.log(hour, minutes)
    let degree = (360*(((hour*60)+minutes)/(24*60)))
    let radian = Math.PI*degree/180


    let sunPositionX = 10*Math.cos(radian)
    let sunPositionY = 10*Math.sin(radian)
    console.log(sunPositionX, sunPositionY)

  React.useEffect(() => {
    weather === null && (
      search()
   ) 
   setInterval(() => search(), 100000);
      
  }, []);

  // const { bind } = useTheme({ type: 'rain', mode: 'day' })

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
          color="white"
          shadows={true}
          className="bg-sky-500"
          camera={{
            position: [0, 0, 0],
            fov: 75,
          }}
          // {...bind()}
        >
          <OrbitControls 
            enablePan={false}
            maxDistance={30}
            minDistance={10}
            maxPolarAngle={1.5}
            enableDamping={true}
            target={[0, 1, 0]}
          />

          <ambientLight color={"white"} intensity={0.4} />
          <LightBulb position={[0, 5, 0]} scale={[3, 3, 3]}/>
          <SkyEnv sunPosition={[sunPositionX,sunPositionY,0]}/>
          <Suspense fallback={null}>
            <Rain />
            <Cloud position={[0, 10, 0]}/>
            <Cloud position={[4, 10, 2]}/>
            {/* <Snow /> */}
            <Model />
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
