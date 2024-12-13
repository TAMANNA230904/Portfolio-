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
        <div className="flex flex-col rounded-md items-center">
        {/* Technical Skills Heading */}
        <h3 className="font-bold text-5xl text-indigo-700">Technical Skills</h3>
      
        {/* Technical Skills Section */}
        <div className="w-full px-16">
          <div className="text-pink-600 text-2xl font-dancing-script self-start">C++</div>
          <div className="text-purple-600 text-2xl font-dancing-script self-end">HTML</div>
          <div className="text-teal-600 text-2xl font-dancing-script self-start">CSS</div>
          <div className="text-blue-600 text-2xl font-dancing-script self-end">Python</div>
          <div className="text-green-600 text-2xl font-dancing-script self-start">SQL</div>
          <div className="text-orange-600 text-2xl font-dancing-script self-end">JavaScript</div>
        </div>
      
        {/* Profiles Section */}
        <div className='grid grid-cols-2 gap-5'>
          <button 
            onClick={onButtonClick} 
            className="col-span-2 bg-indigo-600 text-white p-1.5 rounded-lg hover:bg-indigo-700">
            Resume
          </button>
        </div>
      </div>    
    )
};

export default Skills