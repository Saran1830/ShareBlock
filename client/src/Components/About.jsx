import React from "react";
import aboutImage from '../assets/aboutImage.png'
const About = () => {
  return (
    <div className="flex flex-1 items-center justify-center p-0 m-0 w-full h-screen bg-gray-900" id="about">
      <div className="w-1/2 flex flex-col justify-center px-3">
        <h1 className="text-4xl mb-6 font-extrabold text-white text-center">About Us</h1>
        <p className="mb-4 leading-loose text-white">
         At ShareBlock, we're committed to redefining how files are shared—securely and privately. Our goal is to deliver a platform that puts data privacy and user ownership at the forefront. By leveraging cutting-edge decentralized technology and robust encryption, we ensure your files remain under your full control at all times.

We also believe that secure sharing shouldn't come at the cost of convenience. That's why ShareBlock is designed to be simple, intuitive, and collaborative. Whether you're a professional handling confidential documents or a creator showcasing your work, ShareBlock makes it easy to share with confidence and clarity.
</p>
      </div>
      {/* <div className="flex w-25 mr-8"> */}
      <div className="w-full md:w-1/2 px-3">
        <img src={aboutImage} alt="About Us" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default About;
