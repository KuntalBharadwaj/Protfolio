import React from "react";
import { skills } from "./SkillsData";

function Skills() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-gradient-to-tr from-black via-black to-[#01023c]">
      {skills.map((e, i) => {
        return (
          <div key={i} className="m-2 p-4 rounded-sm flex flex-col justify-center bg-[#fff] shadow-md shadow-[#888888] hover:translate-y-2">
            <h1 className="text-lg font-semibold text-center">{e.Name}</h1>
            <img src={e.img} className="w-[200px] h-auto mx-auto" alt="not found"></img>
            <div className="bg-slate-500 rounded-md m-4">
              <div className={`w-[${e.Proficiency}%] rounded-md h-[10px] bg-blue-950`}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
