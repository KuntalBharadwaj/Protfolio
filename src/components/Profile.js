import React from 'react';
import profileData from './profileData';

const Profile = () => {
  return (
    <div className=" mx-auto py-8 bg-gradient-to-tr from-black via-black to-[#01023c]">
      <h2 className="text-center mt-2 text-5xl font-bold animated-heading text-white">Coding Profiles</h2>
      <div className="flex flex-wrap justify-around items-center mt-8">
        {profileData.map((el, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg m-4 w-[300px] flex flex-col justify-center items-center hover:translate-y-2">
            <img className="w-auto h-[180px] object-cover" src={el.imgsrc} alt={el.profileName} />
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">{el.profileName}</h3>
              <a href={el.demo} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all">Click here!</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
