import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsLinkedin,} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gray-300">
      <footer className="text-gray-900 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={require("/public/logo.avif")}
              alt="Loading"
              width={100}
              height={100}
              className="w-[50px]"
            />
            <span className="ml-3 text-xl">Subra's Portfolio</span>
          </a>
          <p className="text-sm text-gray-900 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">
            © 2024 Subra Ansari Portfolio 
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"www.linkedin.com/in/subra-ansari-144a5328a"}
              className="text-gray-900"
            >
              <BsLinkedin  />
               
              
            </Link>
         </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;


        

                    