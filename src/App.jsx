/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./assets/hero-img.png";
import { Briefcase, Contact, Download, Github, Linkedin } from "lucide-react";
import AboutImg from "./assets/about.avif";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={`${dark && "dark"} dark:bg-black w-full  `}>
      {/* <div className="max-w-[1240px] "> */}
      <div className="mx-auto">
        <Navbar dark={dark} setDark={setDark} />
        {/* hero section */}
        <div className=" dark:bg-black dark:text-white">
          <div
            id="Home"
            className="flex flex-col  items-center  md:justify-center gap-10 h-[100vh] pt-36 md:pt-0"
          >
            <div className="flex flex-col md:flex-row gap-10">
              <img
                src={Hero}
                alt="Sibil Sarjam Soren"
                className="inline-block h-80 w-80 rounded-full ring-2 ring-white aspect-auto"
              />
              <div className="flex flex-col text-center md:text-left  items-center md:items-start justify-center gap-10">
                <h1 className="text-4xl font-bold ">Full Stack Developer 👋🏼</h1>
                <h3 className="text-xl">
                  Hello I'm Sibil Sarjam Soren. A passionate Full Stack
                  Developer.
                  <br />
                  Based in Odisha, India 📍
                </h3>
                <div className="flex gap-5">
                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 dark:text-white font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 dark:border-white hover:border-transparent rounded-3xl  flex items-center gap-4">
                    <Download /> Download Resume
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-3xl flex items-center gap-4">
                    <Contact /> Contact Info
                  </button>
                </div>
                <div className="flex gap-5">
                  <a href="https://www.linkedin.com/in/sibilsarjamsoren/">
                    <Linkedin size={25} className="cursor-pointer" />
                  </a>
                  <a href="https://github.com/SibilSoren">
                    <Github size={25} className="cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>

            <div className="h-auto">
              Tech Stack{" "}
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                <img
                  src="https://skillicons.dev/icons?i=html,css"
                  alt="skill-icon"
                />
                <img
                  src="https://skillicons.dev/icons?i=js,ts"
                  alt="skill-icon"
                />
                <img
                  src="https://skillicons.dev/icons?i=react,nextjs"
                  alt="skill-icon"
                />
                <img
                  src="https://skillicons.dev/icons?i=tailwind,materialui"
                  alt="skill-icon"
                />
                <img
                  src="https://skillicons.dev/icons?i=nodejs,postgres"
                  alt="skill-icon"
                />
                <img
                  src="https://skillicons.dev/icons?i=mongodb,express"
                  alt="skill-icon"
                />
                <img
                  src="https://skillicons.dev/icons?i=aws,netlify"
                  alt="skill-icon"
                />
              </div>
            </div>
          </div>
        </div>
        {/* about me */}
        <div className=" dark:bg-black dark:text-white">
          <div
            id="About"
            className="flex flex-col items-center justify-center h-[100vh] pt-28 md:pt-0 max-w-[1240px] w-full mx-auto px-10"
          >
            <h3>Get to know more</h3>
            <h1 className="text-4xl font-bold">About me</h1>
            <div className="flex flex-col md:flex-row gap-20 mt-20">
              <div className="flex-1 rounded-2xl overflow-hidden">
                <img src={AboutImg} alt="About image" className="flex-1" />
              </div>

              <div className="flex-1 flex flex-col gap-5 justify-center">
                <div className="border w-fit p-4 rounded-xl">
                  <Briefcase />
                  <h3>3+ years of experience </h3>
                </div>
                <p className="text-xl">
                  Hey, my name is Sibil, and I'm a Full Stack Developer. My
                  passion is to create and develop End-to-End software
                  solutions. <br /> My main stack for Frontend currently is
                  React/Next.js in combination with Tailwind CSS and TypeScript
                  & for Backend NodeJs,Express, MongoDB/Postgres
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
