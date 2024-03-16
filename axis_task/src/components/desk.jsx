import React from "react";
import Director from "../assets/padolesir.jpg";
// import Avatar from "../assets/aipadole.jpg";
// import { ReactDOM } from "react";

const desk = () => {
  return (
    <>
      <div className="bg-[#001845]">
        <h1 className="text-center text-2xl sm:text-4xl font-bold mb-1 text-white p-10">
          Director's Desk
        </h1>
        <div className="grid grid-cols-1 justify-items-center lg:flex ">
          <img
            className="rounded-lg  p-10 md:w-2/3 lg:w-1/3 lg:m-10"
            src={Director}
            alt=""
          />
          <div className="bg-slate-300 sm:m-10 p-10 lg:p-20">
            <span className="text-lg">
              I am elated to witness the diverse participation from universities
              and schools nationwide in AXIS from last 24 years.Year after year,
              AXIS continues to bridge the gap between technology and tech
              enthusiasts. The competitions held during AXIS showcased some of
              India's brightest minds, competing and surmounting challenges for
              the betterment of society.I sincerely hope that AXIS continues its
              upward trajectory, achieving new milestones with each passing year
              and bringing honor to VNIT. My best wishes go out to AXIS.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default desk;
