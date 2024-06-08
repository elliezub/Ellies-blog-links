"use client";

import React, { useState } from "react";
import SocialIcons from "./components/SocialIcons";
import ThingsILove from "./components/ThingILove";
import About from "./components/About";
import Link from "next/link";

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
    <div className="md:min-h-screen px-4">
      <div className="w-full">
        {/* this was where the bottom border was */}
        <main className="max-w-7xl lg:px-10 px-3 mx-auto flex  md:justify-between md:flex-nowrap flex-wrap md:mt-24 mt-12 md:pb-24 pb-12">
          <div className="md:pr-12 ">
            <h1 className="md:text-8xl text-6xl font-bold mb-6 text-nowrap">
              Hi, I&apos;m Ellie
            </h1>
            <div className="lg:text-2xl text-xl">
              <div className="md:max-w-xl">
                <p className="md:mb-0 mb-5 text-pretty font-medium">
                  I&apos;m a software developer & technical writer who loves
                  cats. This is my portfolio site, here you can find links to
                  all my articles, projects, & collabs.
                </p>
                <p className="mt-6 text-pretty max-w-lg font-medium">
                  Currently, I am open to collaborations. If you&apos;re
                  interested, check out my{" "}
                  <Link href="/collabs" className="text-teal-200">
                    community
                  </Link>{" "}
                  page for more info 😊
                </p>
                <div className="mt-8">
                  {/* self end */}
                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>
          <div
            className="max-w-[435px] hidden lg:block card shadow-md"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/elliepfplighter.png"
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
