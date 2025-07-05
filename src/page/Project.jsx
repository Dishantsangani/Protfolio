import React from "react";
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
            <a
              href="https://digitalden27.netlify.app/"
              className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
              target="_blank"
            >
              <div className="mt-5">
                <p className="font-semibold text-5xl text-white">Digitalden</p>
                <h3 className="mt-5 font-medium text-lg text-white">
                  E-commerce Store
                </h3>
                <p className="mt-1 text-neutral-400">
                  Offering the latest tech at competitive prices, we focus on
                  delivering an exceptional online shopping experience with fast
                  shipping, secure transactions, and unmatched customer
                  support..
                </p>
              </div>
              <p className="mt-auto">
                <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] transition focus:outline-none group-focus:border-[#ff0]">
                  Click me
                </span>
              </p>
            </a>

            {/* BloggerStricks */}
            <a
              className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
              href="https://blogelevate.netlify.app/"
              target="_blank"
            >
              <div className="mt-5">
                <p className="font-semibold text-5xl text-white">BlogElevate</p>
                <h3 className="mt-5 font-medium text-lg text-white">
                  Blogging Website
                </h3>
                <p className="mt-1 text-neutral-400">
                  Blog Elevate is a modern blogging platform that offers
                  insightful articles on various topics, featuring a clean and
                  user-friendly interface for an enhanced reading experience
                </p>
              </div>
              <p className="mt-auto">
                <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] transition focus:outline-none group-focus:border-[#ff0]">
                  Click Me
                </span>
              </p>
            </a>

            {/* Markmentor */}
            <a
              className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
              href="https://markmentor.netlify.app/"
              target="_blank"
            >
              <div className="mt-5">
                <p className="font-semibold text-5xl text-white">Markmentor</p>
                <h3 className="mt-5 font-medium text-lg text-white">
                  Student Management System
                </h3>
                <p className="mt-1 text-neutral-400">
                  {" "}
                  A full-featured School Management System built with the MERN
                  stack. It handles student records, attendance, marks,
                  homework, billing, and more, with a responsive user interface
                  and secure backend.
                </p>
              </div>
              <p className="mt-auto">
                <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] transition focus:outline-none group-focus:border-[#ff0]">
                  Click Me
                </span>
              </p>
            </a>
            {/* End Markmentor */}
          </div>

          {/* End weathermust */}
        </div>
      </div>
    </>
  );
}

export default Project;
