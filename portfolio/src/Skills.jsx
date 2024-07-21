import { useState } from 'react'
import './App.css'

const Skills=()=>{
    return (
   <div className="mt-9 p-9">
    <h3>Technical Skills</h3>
   <div className="">
    <div className="text-white-700 m-5">C++</div>
    <div className="h-4 relative bg-neutral-500 rounded-lg">
        <div className=" absolute left-0 h-4 w-4/5 bg-red-400 "></div>
    </div>
   </div>


   <div className="skill">
    <div className="text-white-700 text-lg m-5">HTML</div>
    <div className="skill-bar">
        <div className="skill-per" ></div>
    </div>
   </div>

   <div className="skill">
    <div className="text-white-700 m-5">CSS</div>
    <div className="skill-bar">
        <div className="skill-per" ></div>
    </div>
   </div>

   <div className="skill">
    <div className="text-white-700">Python</div>
    <div className="skill-bar">
        <div className="skill-per" ></div>
    </div>
   </div>

   <div className="skill">
    <div className="text-white-700">SQL</div>
    <div className="skill-bar">
        <div className="skill-per" ></div>
    </div>
   </div>


   </div>
    )
};

export default Skills