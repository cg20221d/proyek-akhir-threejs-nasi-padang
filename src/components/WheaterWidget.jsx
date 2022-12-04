import { Transition } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import { MdOutlineWidgets, MdWidgets } from "react-icons/md";

export default function WheaterWidget() {
  const [today, setToday] = React.useState(new Date());
  let [isShowing, setIsShowing] = React.useState(false);
  React.useEffect(() => {
    setInterval(() => setToday(new Date()), 600000);
  }, []);
  return (
    <>
      <button
        onClick={() => setIsShowing(!isShowing)}
        className="p-2 text-white absolute top-10 right-10 z-10 rounded bg-slate-600 glass-light"
      >
        {isShowing ? <MdOutlineWidgets size={30} /> : <MdWidgets size={30} /> }
      </button>
      <Transition
        as={React.Fragment}
        show={isShowing}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div className="absolute top-10 flex justify-end right-24 z-10 sm:w-4/12">
          <div className="flex flex-col w-11/12 p-5 gap-y-3 text-white rounded-lg shadow-md glass-light">
            <div className="text-center">
              <h1 className="text-3xl drop-shadow-big ">Surabaya Indonesia</h1>
              <p className="font-light drop-shadow-big">
                {today.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="text-center drop-shadow-big sm:text-[40px]">
              <span className="">
                {today.toLocaleTimeString("en-Us", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </span>
              <Image
                src="/assets/Sun cloud little rain.png"
                width={230}
                height={230}
                quality={100}
                className="drop-shadow-big mx-auto"
              />
              <span className="inline-block font-semibold sm:text-[60px] drop-shadow-big">
                26°C
              </span>
            </div>
            <div className="flex justify-around text-center drop-shadow-big [&>*>p]:font-extralight [&>*>p]:text-sm ">
              <div>
                <p>Temp</p>
                <span>26°C</span>
              </div>
              <div>
                <p>Wind</p>
                <span>3.1 m/s</span>
              </div>
              <div>
                <p>Humidity</p>
                <span>70%</span>
              </div>
              <div>
                <p>Pressure</p>
                <span>1013 hPa</span>
              </div>
            </div>
            <div className="mx-auto text-center flex flex-col gap-y-2 ">
              <p>Today</p>
              <div className="flex flex-wrap gap-2">
                <div className="p-2 text-center bg-white/30 rounded-2xl flex shadow-xl items-center">
                  <Image
                    src="/assets/Sun cloud little rain.png"
                    width={55}
                    height={55}
                  />
                  <div>
                    <p className="text-xs font-light">
                      {today.toLocaleTimeString("en-Us", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </p>
                    <p>26°C</p>
                  </div>
                </div>
                <div className="p-2 text-center bg-white/80 text-black rounded-2xl flex shadow-xl items-center">
                  <Image
                    src="/assets/Sun cloud angled rain.png"
                    width={55}
                    height={55}
                  />
                  <div>
                    <p className="text-xs font-light">12:00 AM</p>
                    <p>26°C</p>
                  </div>
                </div>
                <div className="p-2 text-center bg-white/80 text-black rounded-2xl flex shadow-xl items-center">
                  <Image
                    src="/assets/Moon cloud fast wind.png"
                    width={55}
                    height={55}
                  />
                  <div>
                    <p className="text-xs font-light">08:00 PM</p>
                    <p>26°C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}
