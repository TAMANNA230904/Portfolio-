import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col items-center  h-screen justify-center">
    {/* Heading */}
    <h3 className="font-bold text-6xl mb-8">Technical Skills</h3>
    <div className="grid grid-cols-6 w-full px-16 border-10 border-white">
          <div className="text-pink-600 text-2xl font-dancing-script self-start">C++</div>
          <div className="text-purple-600 text-2xl font-dancing-script self-end">HTML</div>
          <div className="text-teal-600 text-2xl font-dancing-script self-start">CSS</div>
          <div className="text-blue-600 text-2xl font-dancing-script self-end">Python</div>
          <div className="text-amber-400 text-2xl font-dancing-script self-start">SQL</div>
          <div className="text-aqua-600 text-2xl font-dancing-script self-end">JavaScript</div>

          <div className="text-purple-600 text-2xl font-dancing-script self-end">MongoDB</div>
          <div className="text-blue-600 text-2xl font-dancing-script self-end">Express</div>
          <div className="text-pink-600 text-2xl font-dancing-script self-start">React</div>
          <div className="text-teal-600 text-2xl font-dancing-script self-start">Node.js</div>
          <div className="text-red-300 text-2xl font-dancing-script self-start">R</div>
          <div className="text-orange-600 text-2xl font-dancing-script self-end">AWS</div>

          <div className="text-orange-600 text-2xl font-dancing-script self-end">Pandas</div>
          <div className="text-pink-200 text-2xl font-dancing-script self-end">NumPy</div>
          <div className="text-lime-600 text-2xl font-dancing-script self-start">ScikitLearn</div>
          <div className="text-purple-300 text-2xl font-dancing-script self-start">Tensorflow</div>
          <div className="text-green-600 text-2xl font-dancing-script self-start">Seaborn</div>
          <div className="text-yellow-600 text-2xl font-dancing-script self-end">Matplotlib</div>
        </div>

        

    {/* Card Section */}
    <div className="grid grid-cols-2 gap-8 w-4/5 mt-6 gap-y-4">

     {/* Card 1 - Programming Tools and Frameworks */}
      <div className="group relative w-full h-64 border-2 border-amber-600 shadow-lg shadow-amber-600 rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
      <div className="group relative w-full h-64 border-2 border-blue-700 shadow-lg shadow-blue-700 rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="absolute inset-0 shadow-lg shadow-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
      <div className="group relative w-full h-64 shadow-lg shadow-purple-700 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="absolute inset-0 shadow-lg shadow-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
      <div className="group relative w-full h-64 shadow-lg shadow-lime-600 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="absolute inset-0 shadow-lg shadow-lime-700	 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

export default Skills;
