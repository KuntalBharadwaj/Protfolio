import React from 'react';
import Typewriter from "typewriter-effect";
import logo from "../assests/logo.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className='h-[full] shadow-blue-950 shadow-lg bg-gradient-to-tr from-black via-black to-[#01023c]'>
        <div className="flex flex-col md:flex-row items-center justify-around ml-10 pl-16 pb-16">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold text-white">Hi I'm, <span className='typewriter-container'>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Kuntal Bharadwaj")
                    .pauseFor(1000)
                    .start();
                }}
              />
            </span></h2>
            <p className="text-gray-300 mt-10 tracking-wide text-xl">I am a BE student passionate about coding. I have interested in MERN stack development and made a couple of projects using this tech stack. I also have a good grasp on Data Structures and Algorithms.</p>
            <div className='mt-4'>
              <a href='https://drive.google.com/file/d/1N29froLEqYlKFQPZ3PQrVoILmKSt3Ko6/view?usp=sharing' target='_blank' rel="noopener noreferrer">
                <button className='bg-[#0f0156] text-white px-4 py-2 rounded hover:bg-blue-600 transition-all tracking-wider'>Resume</button>
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img src={logo} alt="Kuntal Bharadwaj" className="w-3/4 rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
