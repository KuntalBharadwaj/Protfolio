import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";

const Header = () => {
  const common = "mr-4 text-lg tracking-wide";
  
  return (
    <>
      <nav className="bg-gradient-to-br from-black via-[#04042c] to-[#010215] py-1">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h2 className="mt-2 text-white">
              <NavLink to="/" className="font-serif text-3xl ">KUNTAL BHARADWAJ</NavLink>
            </h2>
          </div>
          <div className="mt-2">
            <NavLink to="/" className={`text-white no-underline headerLinkAnimation ${common}`}>Home</NavLink>
            <NavLink to="/profile" className={`text-white no-underline headerLinkAnimation ${common}`}>Profiles</NavLink>
            <NavLink to="/playlist" className={`text-white no-underline headerLinkAnimation ${common}`}>Projects</NavLink>
            <NavLink to="/skill" className={`text-white no-underline headerLinkAnimation ${common}`}>Skills</NavLink>
            <NavLink to="/contact" className={`text-white no-underline headerLinkAnimation ${common}`}>Contact Us</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
