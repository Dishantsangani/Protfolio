import React from "react";
import code from "../assets/code3.jpg";
import cv from "../assets/cv.svg";
import { BlurText } from "../Animations/BlurText";
import pdf from "../assets/PDF/Dishant Sangani.pdf";

function Skills() {
  return (
    <>
      <div className="bg-neutral-900">
        {/* Approach */}
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20  mx-auto">
          {/* Title */}
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
              <BlurText
                text="Professional Skills"
                className="custom-class "
                delay={50}
              />
            </h2>
            <p className="mt-1 text-neutral-400">
              Expert in React.js and JavaScript Development: Crafting dynamic,
              interactive <br /> web applications with clean and efficient code.
            </p>
          </div>
          {/* End Title */}
          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <img
                className="w-full object-cover rounded-xl"
                src={code}
                alt="Image Description"
              />
            </div>
            {/* End Col */}

            {/* Timeline */}
            <div>
              {/* Heading */}
              <div className="mb-4">
                <h3 className="text-xs font-medium uppercase text-[#ff0]">
                  Skills
                </h3>
              </div>
              {/* End Heading */}
              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      1
                    </span>
                  </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-neutral-400">
                    <span className="text-white">HTML :</span> Crafting semantic
                    and structured web layouts.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      2
                    </span>
                  </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-neutral-400">
                    <span className="text-white">CSS :</span> Designing
                    responsive and visually appealing interfaces
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      3
                    </span>
                  </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-neutral-400">
                    <span className="text-white">JavaScript :</span> Adding
                    interactivity and functionality to web applications.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      4
                    </span>
                  </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-neutral-400">
                    <span className="text-white">React.js :</span> Building
                    dynamic, component-based user interfaces.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      5
                    </span>
                  </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-neutral-400">
                    <span className="text-white">API Integration :</span>{" "}
                    Connecting frontend with backend systems.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      6
                    </span>
                  </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-neutral-400">
                    <span className="text-white">Version Control :</span>{" "}
                    Collaborating seamlessly using Git and GitHub.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
              <a
                className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                download
                href={pdf}
                target="_blank"
              >
                <img
                  src={cv}
                  alt="CV"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="flex-shrink-0 size-4"
                />
                Download CV
              </a>
            </div>
            {/* End Timeline */}
          </div>
          {/* End Grid */}
        </div>
      </div>
    </>
  );
}

export default Skills;
