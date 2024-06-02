"use client";

import React, { useState } from "react";
import SocialIcons from "./components/SocialIcons";
import ThingsILove from "./components/ThingILove";
import About from "./components/About";

export default function Home() {
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position
    const y = e.clientY - rect.top; // y position

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 5; // Adjust rotation
    const rotateY = ((x - centerX) / centerX) * -5;

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform("rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div className="md:min-h-screen">
      <div className="w-full">
        {/* this was where the bottom border was */}
        <main className="max-w-7xl px-10 mx-auto flex  md:justify-between md:flex-nowrap flex-wrap mt-6 md:mt-24 sm:mt-12 pb-24">
          <div className="lg:mr-12 sm:mr-4">
            <h1 className="md:text-8xl text-5xl font-bold mb-4 ">
              Hi, I&apos;m Ellie
            </h1>
            <div className="xl:text-2xl lg:text-lg lg:pr-12">
              <div className="md:max-w-xl">
                <p className="md:mb-0 mb-5 ">
                  Welcome to my portfolio site! Well, I just wanted to put
                  everything together somewhere, so why not here? I plan to
                  change this text later! Not sure what I will write here.
                </p>
                <div className="mt-6">
                  <SocialIcons />
                </div>
              </div>
              <img
                src="/elliepfp.jpg"
                alt="profile"
                className=" rounded-3xl md:hidden max-w-[200px]"
              />
            </div>
          </div>
          <div
            className="max-w-[395px] hidden md:block card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/elliepfp.jpg"
              alt="profile"
              className="rounded-3xl card-image w-full h-full object-cover transition-transform duration-100 transform"
              style={{ transform }}
            />
          </div>
        </main>
      </div>

      <About />
      <ThingsILove />
    </div>
  );
}
