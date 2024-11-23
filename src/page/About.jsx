import React from "react";
import dev from "../assets/my-photo.png";
import linkdin from "../assets/Linkdin.svg";
import whatsapp from "../assets/whatsapp.svg";
import github from "../assets/github.svg";
import { BlurText } from "../Animations/BlurText";

function About() {
  return (
    <>
      <div className="bg-neutral-900">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
              <BlurText text="About Me" className="custom-class " delay={50} />
            </h2>
            <p className="mt-1 text-neutral-400">
              Crafting modern, dynamic, and user-friendly digital solutions.
            </p>
          </div>
          {/* End Title */}
          {/* Grid */}
          <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
            <div>
              {/* Blockquote */}
              <blockquote>
                <p className="font-medium text-xl text-white md:text-2xl  md:leading-normal xl:text-xl xl:leading-normal">
                  I am a passionate and dedicated web developer with expertise
                  in HTML, CSS, JavaScript, Tailwind CSS, and React.js. I build
                  dynamic, responsive, and user-friendly websites and web
                  applications, ensuring a smooth and engaging user experience
                  across all devices.
                </p>
                <footer className="mt-6">
                  <div className="flex items-center">
                    <div className="md:hidden flex-shrink-0">
                      <img
                        className="size-10 rounded-full"
                        src={dev}
                        alt="Image Description"
                      />
                    </div>
                    <div className="ms-4 md:ms-0">
                      <div className="text-base font-semibold text-white">
                        Dishant Sangani
                      </div>
                      <div className="text-xs text-neutral-400">
                        Frontend Developer
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
              {/* End Blockquote */}
            </div>
            {/* End Col */}
            <div className="hidden md:block mb-24 md:mb-0">
              <img className="rounded-xl" src={dev} alt="Image Description" />
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </div>
      <div className="bg-neutral-900">
          <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
            <div className="border border-neutral-800 rounded-xl">
              <div className="p-4 lg:p-8 bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                  {/* Github */}
                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <a href="https://github.com/Dishantsangani" target="_blank">
                      <img
                        src={github}
                        alt="Github"
                        width={32}
                        height={32}
                        viewBox="0 0 32 32 "
                        className="flex-shrink-0 size-6 sm:size-8 mx-auto"
                      />

                      <div className="mt-3 sm:mt-5">
                        <h3 className="text-lg sm:text-3xl font-semibold text-white">
                          Github
                        </h3>
                        <p className="mt-1 text-sm sm:text-base text-neutral-400">
                          Check Out My Github
                        </p>
                      </div>
                    </a>
                  </div>
                  {/* End Github */}

                  {/* Linkedin */}
                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <a
                      href="https://www.linkedin.com/in/dishant-sangani-31b9b6267/"
                      target="_blank"
                    >
                      <div className="flex justify-center items-center -space-x-5">
                        <img
                          src={linkdin}
                          alt="Linkdin"
                          className="flex-shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                        />
                      </div>
                      <div className="mt-3 sm:mt-5">
                        <h3 className="text-lg sm:text-3xl font-semibold text-white">
                          Linkedin
                        </h3>
                        <p className="mt-1 text-sm sm:text-base text-neutral-400">
                          Let's Connect On Linkedln
                        </p>
                      </div>
                    </a>
                  </div>
                  {/* End Linkedin */}

                  {/* Whatsapp */}
                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <a href="https://wa.me/9173623532" target="_blank">
                      <img
                        src={whatsapp}
                        alt="whatsapp"
                        className="flex-shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      />

                      <div className="mt-3 sm:mt-5">
                        <h3 className="text-lg sm:text-3xl font-semibold  text-white">
                          Whatsapp
                        </h3>
                        <p className="mt-1 text-sm sm:text-base text-neutral-400">
                          Chat on WhatsApp
                        </p>
                      </div>
                    </a>
                  </div>
                  {/* End Whatsapp */}
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default About;
