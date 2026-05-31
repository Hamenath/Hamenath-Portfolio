/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { GradientWave } from "@/components/ui/gradient-wave";
import { Button } from "@/components/ui/button";
import { FiGithub, FiMousePointer } from "react-icons/fi";
import { SiOpenai, SiAnthropic, SiX, SiGoogle } from "react-icons/si";
import { Marquee } from "@/components/ui/marquee";

const technologies = [
  {
    name: "Figma",
    designation: "UI/UX Design Tool",
    description: "Collaborative interface design.",
    logo: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/dalim-www.jpg",
    icon: <FiGithub className="h-6 w-6 text-black" />,
  },
  {
    name: "Adobe XD",
    designation: "Design & Prototyping",
    description: "Create wireframes, prototypes.",
    logo: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/dalim-ui.jpg",
    icon: <SiOpenai className="h-6 w-6 text-black" />,
  },
  {
    name: "Sketch",
    designation: "Vector Design Tool",
    description: "Professional digital design for macOS",
    logo: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/dalim-icons.jpg",
    icon: <FiMousePointer className="h-6 w-6 text-black" />,
  },
  {
    name: "Canva",
    designation: "Graphic Design Platform",
    description: "Easily create social media posts.",
    logo: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/dalim-fonts.jpg",
    icon: <SiGoogle className="h-6 w-6 text-black" />,
  },
];

export function HeroSection02() {
  return (
    <div className="min-h-screen relative bg-white border-t border-neutral-100 py-16">
      <div className="overflow-hidden flex flex-col px-6 items-center justify-center relative">
        <GradientWave className="absolute inset-0 opacity-20 pointer-events-none" /> 
        
        <div className="flex w-full absolute z-20 top-4 px-4 justify-between items-center">
          <div>
            <img
              src="https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/brand/ai-logo.png"
              alt="Design Logo"
              height={50}
              width={50}
              className="h-10 w-auto object-contain"
            />
          </div>
          <Button className="rounded-full">Explore Designs</Button>
        </div>

        <div className="z-10 mt-28 my-20 space-y-10 border border-neutral-100 bg-white/70 backdrop-blur-sm rounded-3xl p-10 lg:p-20 mx-auto max-w-7xl flex flex-col shadow-sm">
          <div className="flex justify-center flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-neutral-900 text-center">
              Design Code
            </h1>
            <p className="max-w-md text-sm text-center lg:text-left text-neutral-500 leading-relaxed">
              Discover top-notch design tools and resources that help you craft
              stunning interfaces and graphics. Learn and create with the best
              in the design industry.
            </p>
          </div>

          {/* Logos Row */}
          <div className="flex flex-col lg:flex-row items-center gap-10 justify-between">
            <div className="flex justify-center flex-wrap -space-y-4 -space-x-6 items-center">
              <div className="bg-white border border-neutral-200 text-neutral-900 shadow-sm h-20 w-20 rounded-full p-5 flex items-center justify-center">
                <SiOpenai className="h-8 w-8" />
              </div>
              <div className="bg-white border border-neutral-200 shadow-sm h-20 w-20 rounded-full p-5 flex items-center justify-center text-neutral-900">
                <SiAnthropic className="h-8 w-8" />
              </div>
              <div className="bg-white border border-neutral-200 shadow-sm h-20 w-20 rounded-full p-5 flex items-center justify-center text-neutral-900">
                <FiMousePointer className="h-8 w-8" />
              </div>
              <div className="bg-white border border-neutral-200 text-neutral-900 shadow-sm h-20 w-20 rounded-full p-5 flex items-center justify-center">
                <FiGithub className="h-8 w-8" />
              </div>
              <div className="bg-white border border-neutral-200 shadow-sm h-20 w-20 rounded-full p-5 flex items-center justify-center text-neutral-900">
                <SiX className="h-8 w-8" />
              </div>
              <div className="bg-white border border-neutral-200 shadow-sm h-20 w-20 rounded-full p-5 flex items-center justify-center text-neutral-900">
                <SiGoogle className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-neutral-900 text-center">
              Creative Tools
            </h1>
          </div>
 
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <h1 className="underline font-bold tracking-tight text-4xl md:text-6xl lg:text-7xl text-neutral-900 text-center decoration-neutral-300">
              Learn & Create
            </h1>
            <Button className="px-20 h-16 rounded-full text-base">Explore Designs</Button>
          </div>
        </div>
      </div>

      <div className="w-full z-10 relative flex flex-col items-center mt-12">
        <p className="text-center text-neutral-500 mb-10 text-lg font-medium z-10 relative">
          Some of the top design tools used by professionals
        </p>
        <Marquee className="w-full py-4">
          {technologies.map((tech, index) => (
            <div key={index} className="h-28 flex items-center">
              <div className="flex items-center gap-4 border border-neutral-100 bg-white backdrop-blur-md rounded-2xl mx-6 p-4 min-w-[280px] shadow-2xs hover:shadow-xs transition-shadow duration-300">
                <div className="p-3 bg-neutral-50 border border-neutral-100 rounded-xl text-neutral-700">
                  {tech.icon}
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="font-bold text-sm text-neutral-900">{tech.name}</h3>
                  <p className="text-xs text-neutral-400">
                    {tech.designation}
                  </p>
                  <p className="text-[10px] text-neutral-500 mt-1">
                    {tech.description}
                  </p>
                </div>
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-16 w-16 object-cover rounded-xl border border-neutral-100"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
