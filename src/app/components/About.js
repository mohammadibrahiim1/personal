import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen" id="about">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="https://i.ibb.co/8Pst2r2/profile-img.jpg"
            width={500}
            height={500}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Picture of the author"
          />
          <div>
            <h5>Hello,My name is</h5>
            <h1 className="text-5xl font-bold"> Mohammad Ebrahim</h1>
            <h3 className="text-lg font-bold pb-4">
              MERN maestro weaving web wonders with MongoDB, Express, React, and
              Node.js.
            </h3>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
