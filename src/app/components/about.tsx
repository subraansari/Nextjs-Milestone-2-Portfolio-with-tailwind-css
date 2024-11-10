import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font bg-gray-200">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 p-20 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="hero"
              src={require("/public/image.jpg")}
              width={700}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
            Hi, I'm Subraan Sarai, a passionate web developer with a strong foundation in Next.js and Tailwind CSS. With 1 years of experience, I've honed my skills in crafting scalable, efficient, and visually stunning web applications.
            </p>
            <p className="mb-5 leading-relaxed">
            My expertise includes: <br />

- Front-end development with Next.js, React, and Tailwind CSS <br />
- Responsive and mobile-first design <br />

- Web performance optimization
            </p>
            <div className="flex justify-center">
              
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  View CV
                </button>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
