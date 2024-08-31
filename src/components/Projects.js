import React from 'react';
import Data from './data';
import './Profile.css'; // Import the CSS file 
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="w-[full] py-8 bg-gradient-to-tr from-black via-black to-[#01023c]">
      <h5 className='text-center mt-2 text-5xl font-bold animated-heading text-white'>Projects</h5>
      <div className="flex flex-wrap justify-around items-center mt-8">
        {Data.map((el, index) => (
          <div key={index} className='bg-white shadow-md rounded-lg overflow-hidden m-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 hover:translate-x-2'>
            <img className="w-full h-48 object-cover" src={el.imgsrc} alt={el.projectName} />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{el.projectName}</h3>
              <Link to={el.CodeLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#0f0156] text-white px-4 py-2 rounded hover:bg-blue-600 transition-all mt-2">Code</button>
              </Link>
              {(el.demo)?<Link to={el.demo} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#0f0156] ml-3 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all mt-2">See Demo</button>
              </Link>:""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
