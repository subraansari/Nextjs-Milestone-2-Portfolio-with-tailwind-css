"use client"
import Image from 'next/image';
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-200 p-10">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
           Hello! I am Subra <br /> a passionate
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "UI/UX Designer",
                  "Graphic Designer",
                  "Freelancer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[100px] h-[2px] bg-blue-700"></div>
          <p className="mb-8 leading-relaxed">
            Welcome to my portfolio! I'm Subra Ansari a passionate Web developer with expertise in html, css, typescript, nextjs and tailwind. I specialize in building fast, scalable, and beautiful web applications that meet clients' needs. With a strong focus on user experience and performance, I deliver high-quality solutions. Whether you're looking to revamp your existing website or create a new one, I'm here to help. Feel free to explore my skills and expertise below.
           
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          
          <Image
  src="/image.jpg"
  alt="hero"
  width={500}
  height={500}
  className="object-cover object-center rounded mx-auto w-[15rem]"
/>



        </div>
      </div>
    </section>
  );
};

export default Hero;

