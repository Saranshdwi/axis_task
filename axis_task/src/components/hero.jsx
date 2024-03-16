import React from "react";
import robohand from "../assets/robohand.gif";
import Axis from "../assets/Logosmall.png";
const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:flex sm:p-20 h-dvh bg-black">
        <img
          className="rotate-90 mt-20 md:rotate-0 md:w-1/2 "
          src={robohand}
          alt=""
        />
        <img
          className=" md:w-1/2 scale-x hover:scale-x-[-1] bg-[url('https://i.pinimg.com/originals/3d/08/e0/3d08e03cb40252526fee2036a67f07f1.gif')] bg-cover bg-no-repeat transition-all delay-100 duration-[5000ms]"
          src={Axis}
          alt=""
        />
      </div>
    </>
  );
};

export default Hero;
