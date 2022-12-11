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
   setInterval(() => search(), 3600000);
      
  }, []);

  const envSwitch = (main) => {
    switch (main) {
      case "Thunderstorm":
        return "/assets/Cloud 3 zap.png";
      case "Drizzle":
        return "/assets/Sun cloud little rain.png";
      case "Clouds":
        return "/assets/cloudy.png";
      case "Rain":
        return (<><Rain/></>);
      case "Snow":
        return "/";
      case "Clear":
        return "/assets/sun shine.png";
      default:
        return "/assets/sun shine.png";
    }
  };

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
            position: [-6, 7, 7],
          }}
        >
          <OrbitControls />
          <ambientLight color={"white"} intensity={0.4} />
          <LightBulb position={[0, 20, 0]} scale={[3, 3, 3]}/>
          <Suspense fallback={null}>
            <Model />
            {envSwitch(weather.weather[0].main)}
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
