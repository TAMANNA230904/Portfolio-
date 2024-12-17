import React from "react";

const Project = () => {
  return (
    <div className=" min-h-screen ">
      <h1 className="text-6xl font-bold text-center mb-8">My Projects</h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Project 1 */}

        <div className="border-2 border-amber-600 shadow-lg shadow-amber-600 rounded-md p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold">Resume Parser</h2>
          <p className="mt-2">
          Developed a robust resume parser model using NLP techniques and pre-trained models like Spacy
having 84% accuracy. This project extracts and organizes key information from resume and provides a score to the user’s 
resume based on the given job description. It is beneficial and efficient approach in recruitment process.
          </p>
          <a
            href="https://colab.research.google.com/drive/1Egvp6BCDiZg1rF4L3efADPVuEqDFbaxD?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mt-4 inline-block hover:underline"
          >
            Visit Project
          </a>
        </div>
     
       {/* Project 2 */}
        <div className="border-2 border-rose-600 shadow-lg shadow-rose-600 rounded-md p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold ">JourneyGenie</h2>
          <p className="text-gray-200 mt-2">
          A responsive and user-friendly interface using HTML and CSS to ensure seamless navigation 
and an engaging user experience. Developed server-side scripts in PHP to handle form submissions, interact with the 
MySQL database, and manage booking records efficiently. HTML, CSS, PHP, MySQL          </p>
         
        </div>

        {/* Project 3 */}
        <div className="border-2 border-teal-600 shadow-lg shadow-teal-600 rounded-md p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold ">Real Time Weather Monitoring</h2>
          <p className=" mt-2">
          Implemented a Real Time Weather Monitoring system that fetches weather 
data of the 10 major cities of India from the OpenWeatherMap API and displays real-time temperature and dominant 
conditions using a responsive user interface.
          </p>
          <a
            href="https://github.com/TAMANNA230904/Weather-Monitoring-System"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mt-4 inline-block hover:underline"
          >
            Visit Project
          </a>
        </div>

        {/* Project 4 */}
        <div className="border-2 border-orange-600 shadow-lg shadow-orange-600 rounded-md p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold ">Anomaly Detector</h2>
          <p className=" mt-2">
           Implemented an algorithm to detect anomalous behavior in computer servers using throughput and latency 
           metrics.Achieved an F1 score of 0.87 using a Gaussian model, contributing to improved server reliability 
           monitoring.Tools: NumPy, Scikit-learn
          </p>
          <a
            href="https://github.com/TAMANNA230904/Anomaly-Detection"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mt-4 inline-block hover:underline"
          >
            Visit Project
          </a>
        </div>


         {/* Project 5 */}
        <div className="border-2 border-green-600 shadow-lg shadow-green-600 rounded-md p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold ">Image Compressor</h2>
          <p className=" mt-2">
          Designed an image compression tool using the K-means algorithm to reduce image colors while preserving quality.
          Enabled optimized storage and transmission of large-scale images.Tools: NumPy, Matplotlib.
          </p>
          <a
            href="https://github.com/TAMANNA230904/image-compressor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mt-4 inline-block hover:underline"
          >
            Visit Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
