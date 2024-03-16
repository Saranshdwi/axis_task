import React from "react";
import NumberCounter from "number-counter";
import events from "../assests/n.png";
import college from "../assests/a.png";
import footfall from "../assests/c.png";
import prize from '../assests/download.png';

const counter = () => {
  return (
    <>
      <div className="sm:flex gap-5 justify-evenly py-6 text-lg p-20 grid grid-cols-1 justify-items-center">
        <div className="flex-column ">
          <img src={events} alt="Events" width={80} />
          <span>
            <NumberCounter end={35} start={4} delay="4" postFix="+" />
          </span>
          <span>EVENTS</span>
        </div>
        <div className="">
          <span>
            <img src={college} alt="Events" width={100} />
            <NumberCounter end={200} start={27} delay="4" postFix="+" />
          </span>
          <span>COLLEGES</span>
        </div>
        <div className="">
          <span>
            <img src={footfall} alt="Events" width={80} />
            <NumberCounter end={25000} start={1000} delay="4" postFix="+" />
          </span>
          <span>FOOTFALL</span>
        </div>
        <div className="">
          <span>
            <img src={prize} alt="prize" width={80} />
            <NumberCounter end={100} start={10} delay="4" postFix="K+" />
          </span>
          <span>PRIZES WORTH</span>
        </div>
      </div>
    </>
  );
};

export default counter;
