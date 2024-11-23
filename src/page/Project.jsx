import React from "react";
import b from "../assets/Project icon/B.svg";
import D from "../assets/Project icon/D.svg";
import S from "../assets/Project icon/S.svg";
import F from "../assets/Project icon/F.svg";
import I from "../assets/Project icon/I.png";
import W from "../assets/Project icon/W.svg";
import { BlurText } from "../Animations/BlurText";

function Project() {
  return (
    <>
      <div className="bg-neutral-900 bg-gradient-to-t from-black to-transparent">
        <div className="max-w-5xl px-4 xl:px-0 py-24 mx-auto">
          {/* Title */}
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
              <BlurText text="Project" className="custom-class " delay={50} />
            </h2>
            <p className="mt-1 text-neutral-400">
              Take a look at some of my standout projects that demonstrate my
              skills in React.js, web development, and responsive design. Each
              project showcases my ability to create dynamic, user-friendly, and
              visually appealing applications.
            </p>
          </div>
          {/* End Title */}

          {/* Part 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center border border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl">
            {/* Digitalden */}
            <a
              href="https://digitalden27.netlify.app/"
              className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
              target="_blank"
            >
              <div className="mb-5">
                <img
                  src={D}
                  alt="Digitalden"
                  className="flex-shrink-0 w-8 h-8"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                />
                <div className="mt-5">
                  <p className="font-semibold text-5xl text-white">
                    Digitalden
                  </p>
                  <h3 className="mt-5 font-medium text-lg text-white">
                    E-commerce Store
                  </h3>
                  <p className="mt-1 text-neutral-400">
                    Offering the latest tech at competitive prices, we focus on
                    delivering an exceptional online shopping experience with
                    fast shipping, secure transactions, and unmatched customer
                    support..
                  </p>
                </div>
              </div>
              <p className="mt-auto">
                <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] transition focus:outline-none group-focus:border-[#ff0]">
                  Click me
                </span>
              </p>
            </a>
            {/* End Digitalden */}

            {/* BloggerStricks */}
            <a
              className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
              href="https://blogger-stricks.netlify.app/"
              target="_blank"
            >
              <div className="mb-5">
                <img
                  src={b}
                  alt="Bloggerstricks"
                  className="flex-shrink-0 w-8 h-8"
                  width={33}
                  height={32}
                  viewBox="0 0 33 32"
                />

                <div className="mt-5">
                  <p className="font-semibold text-5xl text-white">
                    BloggerStricks
                  </p>
                  <h3 className="mt-5 font-medium text-lg text-white">
                    Blog,News Web + APP
                  </h3>
                  <p className="mt-1 text-neutral-400">
                    Dive into the world of finance with Blogger Stricks, your
                    go-to platform for expert trading tips, stock market
                    analysis, personal finance advice, and the latest financial
                    reports.
                  </p>
                </div>
              </div>
              <p className="mt-auto">
                <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] transition focus:outline-none group-focus:border-[#ff0]">
                  Click Me
                </span>
              </p>
            </a>
            {/* End BloggerStricks */}

            {/* SkillSquad */}
            <a
              className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
              href="https://skillsquad-group.netlify.app/"
              target="_blank"
            >
              <div className="mb-5">
                <img
                  src={S}
                  alt="SkillSquad"
                  className="flex-shrink-0 w-8 h-8"
                />
                <div className="mt-5">
                  <p className="font-semibold text-5xl text-white">
                    SkillSquad
                  </p>
                  <h3 className="mt-5 font-medium text-lg text-white">
                    Student Marks Management System
                  </h3>
                  <p className="mt-1 text-neutral-400">
                    {" "}
                    SkillSquad is a React.js application designed for adding,
                    managing, and tracking student marks in a streamlined,
                    user-friendly interface.
                  </p>
                </div>
              </div>
              <p className="mt-auto">
                <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] transition focus:outline-none group-focus:border-[#ff0]">
                  Click Me
                </span>
              </p>
            </a>
            {/* End SkillSquad */}
          </div>

          {/*Part 2  */}
          <div className="grid grid-cols-1 mt-2 lg:grid-cols-3 items-center border border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl">
            {/* fickleflight */}
            <a
              className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
              href="https://fickleflight27.netlify.app/"
              target="_blank"
            >
              <div className="mb-5">
                <img
                  src={F}
                  alt="fickleflight"
                  className="flex-shrink-0 w-8 h-8"
                  width={32}
                  height={32}
                />
                <div className="mt-5">
                  <p className="font-semibold text-5xl text-white">
                    Fickle Flight
                  </p>
                  <h3 className="mt-5 font-medium text-lg text-white">
                    Flight Data Web + App
                  </h3>
                  <p className="mt-1 text-neutral-400">
                    FickleFlight is a dynamic web application built using
                    React.js that displays real-time flight data in a clean and
                    intuitive interface.
                  </p>
                </div>
              </div>
              <p className="mt-auto">
                <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] transition focus:outline-none group-focus:border-[#ff0]">
                  Click me
                </span>
              </p>
            </a>
            {/* End fickleflight */}

            {/* i-coder */}
            <a
              className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
              href="https://i-coderweb.netlify.app/"
              target="_blank"
            >
              <div className="mb-5">
                <img
                  src={I}
                  alt="i-coder"
                  className="flex-shrink-0 w-8 h-8"
                  width={33}
                  height={32}
                />

                <div className="mt-5">
                  <p className="font-semibold text-5xl text-white">i-Coder</p>
                  <h3 className="mt-5 font-medium text-lg text-white">
                    Tech News & Blog Web
                  </h3>
                  <p className="mt-1 text-neutral-400">
                    Built a dynamic React.js website dedicated to tech news and
                    blogs, delivering the latest updates on technology,
                    development trends, and industry insights..
                  </p>
                </div>
              </div>
              <p className="mt-auto">
                <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] transition focus:outline-none group-focus:border-[#ff0]">
                  Click Me
                </span>
              </p>
            </a>
            {/* End i-coder */}

            {/* weathermust */}
            <a
              className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
              href="https://weathermust.netlify.app/"
              target="_blank"
            >
              <img
                src={W}
                alt="weathermust"
                className="flex-shrink-0 w-8 h-8"
                width={33}
                height={32}
              />
              <div className="mb-5">
                <div className="mt-5">
                  <p className="font-semibold text-5xl text-white">
                    WeatherMust
                  </p>
                  <h3 className="mt-5 font-medium text-lg text-white">
                    Weather Web + App
                  </h3>
                  <p className="mt-1 text-neutral-400">
                    Developed a React.js application that provides real-time
                    weather updates and forecasts. Integrated API data to
                    display current weather conditions, temperature, and
                    forecasts for various locations.
                  </p>
                </div>
              </div>
              <p className="mt-auto">
                <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] transition focus:outline-none group-focus:border-[#ff0]">
                  Click Me
                </span>
              </p>
            </a>
          </div>
          {/* End weathermust */}
        </div>
      </div>
    </>
  );
}

export default Project;
