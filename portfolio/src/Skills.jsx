import { useState } from 'react'
import './App.css'

const Skills=()=>{
    const onButtonClick = () => {
        const pdfUrl = "Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
   <div className="flex">
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
    
        <a href="https://leetcode.com/u/tamannasheikh2304/">
        <img className="w-12 h-12 rounded-3xl"src="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png" alt="leetcode" />
        </a>

        <a href="https://www.geeksforgeeks.org/user/tamannashi5kn/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user">
        <img className="w-12 h-12 rounded-3xl"src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png" alt="leetcode" />
        </a>

        <button onClick={onButtonClick} className="">Resume</button>
    
   </div>
    )
};

export default Skills