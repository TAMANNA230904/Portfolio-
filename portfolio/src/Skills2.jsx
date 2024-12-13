import React from "react";

const Skills2 = () => {
  return (
    <div className="flex flex-col items-center mt-10 h-screen justify-center">
    {/* Heading */}
    <h3 className="font-bold text-7xl mb-8">Technical Skills</h3>

    {/* Card Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-4/5">

     {/* Card 1 - Programming Tools and Frameworks */}
      <div className="group relative w-full h-64 bg-green-500 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="absolute inset-0 bg-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h4 className="text-3xl font-bold mb-3">Programming Languages</h4>
          {/* <ul className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <li className="mb-2">C++</li>
            <li className="mb-2">Python</li>
            <li className="mb-2">Git & GitHub</li>
            <li className="mb-2">SQL</li>
          </ul> */}
          <p className="text-lg mb-3 justify-center items-center p-3">I have experience in programming languages such as C++ and Python. I have basic knowledge of JavaScript and visualization through R and query languages such as SQL.</p>
        </div>
      </div>
      

      {/* Card 2 - Web Development */}
      <div className="group relative w-full h-64 bg-blue-500 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h4 className="text-3xl font-bold mb-3">Web Development</h4>
          {/* <ul className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <li className="mb-2">HTML & CSS</li>
            <li className="mb-2">JavaScript</li>
            <li className="mb-2">React.js</li>
            <li className="mb-2">Node.js</li>
          </ul> */}
          <p className="text-lg mb-3 justify-center items-center p-3"> I am proficient in React for building
             dynamic and interactive
             user interfaces. Additionally, I have a solid foundation in HTML, CSS, and JavaScript.On the backend, I am well-versed in Node.js 
              and Express, where I have implemented server-side logic.</p>
        </div>
      </div>

     {/* Card 3 - Machine Learning */}
      <div className="group relative w-full h-64 bg-purple-500 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="absolute inset-0 bg-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h4 className="text-3xl font-bold mb-3">Machine Learning</h4>
          {/* <ul className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <li className="mb-2">TensorFlow</li>
            <li className="mb-2">NLP</li>
            <li className="mb-2">Scikit-Learn</li>
            <li className="mb-2">Pandas</li>
          </ul> */}
          <p className="text-lg mb-3 justify-center items-center p-3"> I have gained experience in working with 
            machine learning algorithms, both supervised and unsupervised.Additionally,
             I have learned to work with popular libraries and frameworks such as Python, Scikit-learn. </p>
        </div>
      </div>

       {/* Card 4 - tools */}
      <div className="group relative w-full h-64 bg-lime-600 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="absolute inset-0 bg-lime-600	 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h4 className="text-3xl font-bold mb-3">Tools and Technologies</h4>
          {/* <ul className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <li className="mb-2">TensorFlow</li>
            <li className="mb-2">NLP</li>
            <li className="mb-2">Scikit-Learn</li>
            <li className="mb-2">Pandas</li>
          </ul> */}
          <p className="text-lg mb-3 justify-center items-center p-3">With experience in Git and GitHub, I've managed code and collaborated with teams. 
            AWS has been used for deploying applications and managing storage, while MongoDB has been 
            leveraged for handling databases and improving performance.</p>
        </div>
      </div>

    </div>

    {/* Additional Styling for Animation */}
    <style jsx>{`
      .group:hover .absolute {
        transform: translateY(0);
        opacity: 1;
      }
    `}</style>
  </div>
  );
};

export default Skills2;
