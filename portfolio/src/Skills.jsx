import { useState } from 'react'
import './App.css'

const Skills=()=>{
    return (
   <div>
   {/* Technical Skills with bar */}
   <div className="flex-row m-9  justify-items-center  items-center w-2/3">
    <h3 className="mb-7 p-0 font-bold text-4xl  ">Technical Skills</h3>
    <div className=" grid grid-cols-2 gap-4  w-1/2">

   <div className="">
    <div className="text-white-700 m-1">C++</div>
    <div className="h-3 w-40 relative bg-neutral-500 rounded-lg">
        <div className=" absolute left-0 h-3 w-4/5 bg-red-400 rounded-lg "></div>
    </div>
   </div>


   <div className="">
    <div className="text-white-700 m-1">HTML</div>
    <div className="h-3 w-40 relative bg-neutral-500 rounded-lg">
        <div className=" absolute left-0 h-3 w-4/5 bg-red-400 rounded-lg "></div>
    </div>
   </div>

    <div className="">
    <div className="text-white-700 m-1">CSS</div>
    <div className="h-3 w-40 relative bg-neutral-500 rounded-lg">
        <div className=" absolute left-0 h-3 w-3/5 bg-red-400 rounded-lg "></div>
    </div>
   </div>

   <div className="">
    <div className="text-white-700 m-1">Python</div>
    <div className="h-3 w-40 relative bg-neutral-500 rounded-lg">
        <div className=" absolute left-0 h-3 w-3/5 bg-red-400 rounded-lg "></div>
    </div>
   </div>

   <div className="">
    <div className="text-white-700 m-1">SQL</div>
    <div className="h-3 w-40 relative bg-neutral-500 rounded-lg">
        <div className=" absolute left-0 h-3 w-4/5 bg-red-400 rounded-lg "></div>
    </div>
   </div>

   <div className="">
    <div className="text-white-700 m-1">Javascript</div>
    <div className="h-3 w-40 relative bg-neutral-500 rounded-lg">
        <div className=" absolute left-0 h-3 w-2/5 bg-red-400 rounded-lg "></div>
    </div>
   </div>
   </div>
   </div>
 {/* Profiles section */}

   </div>
    )
};

export default Skills