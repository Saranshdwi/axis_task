import React from "react";
import { useState } from "react";
import logo from "../assests/Axis.png";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-around border-b border-gray-400 px-4 bg-[#0466C8]">
      <a href="/">
        <img src={logo} alt="logo" width={140} />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">Home</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Events</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">CA Portal</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Sponsors</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Workshop</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Team</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-white justify-center items-center">
          <li>
            <a href="/about">Home</a>
          </li>
          <li>
            <a href="/portfolio">Events</a>
          </li>
          <li>
            <a href="/contact">CA Portal</a>
          </li>
          <li>
            <a href="/contact">Sponsors</a>
          </li>
          <li>
            <a href="/contact">Workshop</a>
          </li>
          <li>
            <a href="/contact">Team</a>
          </li>
          <li>
            <button className="bg-red-700 rounded-lg p-2 font-bold">
              Register
            </button>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
