import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I&apos;m Utkarsh Sharma</p>
            <p className="subtext">
        Final-year B.Tech IT student with hands-on experience in building scalable web applications and GenAI-powered systems. Proven ability to deliver production-ready backend and full-stack solutions, with a strong focus on performance, reliability, and real-world impact.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-2xl md:text-3xl text-gray-500 font-light tracking-wide">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "15deg", top: "8%", left: "15%" }}
              text="GenAI"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-12deg", top: "45%", left: "8%" }}
              text="Database"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "8deg", top: "75%", left: "18%" }}
              text="Langchain"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "15%", left: "62%" }}
              text="API"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "25deg", top: "50%", left: "72%" }}
              text="Cloud"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "12deg", top: "28%", left: "5%" }}
              text="Backend"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-18deg", top: "82%", left: "48%" }}
              text="Full Stack"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-8deg", top: "78%", left: "65%" }}
              image="assets/logos/python.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "18deg", top: "48%", left: "38%" }}
              image="assets/logos/nodejs.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", top: "12%", left: "38%" }}
              image="assets/logos/Chatgpt.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "22deg", top: "65%", left: "0%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I&apos;m based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in JavaScript and Python, working with React, Node.js, Express, FastAPI, and MongoDB.
I use this stack to build robust, scalable web and backend applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
