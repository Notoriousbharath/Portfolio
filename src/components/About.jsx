import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          As a dedicated Frontend Developer with over 1.2 years of experience, I
          specialize in creating intuitive and engaging user interfaces using a
          robust foundation in web technologies. My technical expertise spans
          HTML, CSS, JavaScript, and React, where I excel in developing seamless
          and responsive designs that prioritize user experience. I have a
          proven track record of building diverse applications that align with
          business objectives, leveraging my deep understanding of UI principles
          and modern development practices.
        </p>
        <br />
        <p className="text-xl md:pb-0 pb-8 ">
          In addition to my core skills, I have hands-on experience with
          Material-UI (MUI) and Supabase, which I use to create dynamic,
          scalable solutions that meet the evolving needs of clients. My focus
          on frontend development has enabled me to deliver high-quality,
          tailored applications that drive engagement and enhance functionality.
          I am passionate about continuously expanding my skill set and staying
          up-to-date with the latest industry trends to provide innovative
          solutions in the ever-changing landscape of web development.
        </p>
      </div>
    </div>
  );
};

export default About;
