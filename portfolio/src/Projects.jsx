import React from 'react';

const Project = () => {
  const projects = [
    {
      name: 'Resume Parser',
      description: 'This is a brief description of Project 1.',
      link: 'https://www.example1.com', // External link for Project 1
      color: 'bg-blue-500', // Background color for Project 1
    },
    {
      name: 'Weather Monitoring App',
      description: 'This is a brief description of Project 2.',
      link: 'https://www.example2.com', // External link for Project 2
      color: 'bg-green-500', // Background color for Project 2
    },
    {
      name: 'Tour Booking',
      description: 'This is a brief description of Project 3.',
      link: 'https://www.example3.com', // External link for Project 3
      color: 'bg-red-500', // Background color for Project 3
    },
    {
      name: 'Image Compressor',
      description: 'This is a brief description of Project 4.',
      link: 'https://www.example4.com', // External link for Project 4
      color: 'bg-yellow-500', // Background color for Project 4
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-semibold text-white mb-8">My Projects</h1>
      <div className="flex flex-col space-y-8  w-full ">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link} // External link
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security measure when opening links in a new tab
            className={`${project.color} text-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <h2 className="text-2xl font-semibold">{project.name}</h2>
            <p className="mt-2">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
