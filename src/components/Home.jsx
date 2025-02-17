import React from "react";
import HeroImage from "../assets/Bharath.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row  ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-3xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Frontend Developer with 1.2 years of experience specializing in
            HTML, CSS, JavaScript, React, MUI, and Supabase. Skilled in
            developing tailored applications that meet business requirements.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto  w-3/4 md:w-2/3  lg:w-1/2  max-h-[450px]  md:pb-0 pb-8 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
