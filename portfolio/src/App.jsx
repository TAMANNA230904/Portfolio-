import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css'
import image from './image.png';
import Contact from './Contact.jsx';
import Skills from './Skills.jsx';
import Project from './Projects.jsx';
function App() {

  return (
    <Router>
     <div className="flex h-screen bg-black-300">
        {/* Side Navigation Bar */}
        <nav className=" h-screen text-white flex flex-col font-dancing-script items-center justify-center place-items-start p-4">
        
          <ul className="flex flex-col gap-10 ">
            <li>
              <Link
                to="/"
                className="hover:bg-gray-700  rounded transition  text-5xl items-start"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:bg-gray-700  rounded transition  text-5xl"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/skills"
                className="hover:bg-gray-700  rounded transition  text-5xl items-start"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                className="hover:bg-gray-700  rounded transition  text-5xl items-start"
              >
                Projects
              </Link>
            </li>

          </ul>
        </nav>
        <div className="flex-1 p-6 ">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="heading-box rounded-md p-4">
                    
                    <div className="text-white-900 font-bold text-6xl mb-6">
                      Hey, I am Tamannaah 👋
                    </div>
                   

                  </div>

                  <div className="flex items-start gap-4 p-4">
                    <p className="text-2xl leading-relaxed border-2 border-blue-800 shadow-lg shadow-blue-800 p-2 flex-1 rounded-lg">
                      I am pursuing my B.Tech in AI/ML. I
                      completed my schooling from Carmel Convent School.
                      Throughout my academic career,I consistently achieved
                      top ranks in my school and college. My aggregate CGPA is
                      8.89. My interests lie in Programming and Machine
                      Learning. I have strong knowledge about Data Structures
                      and Algorithms. I have worked on various machine learning
                      projects and have various certifications. I always try to
                      learn new things and adapt to new technologies. My
                      greatest strengths are my perseverance and dedication towards what I do. I love singing and have been learning to
                      play guitar these days. I enjoy writing in a journal because it brings a sense of nostalgia, keeping me connected
                      to the simpler times when we used to write in notebooks, offering a refreshing break from this fast-paced digital world. 
                    </p>
                    <img
                      className="w-1/3 h-[448.2px] object-cover rounded-lg"
                      src={image}
                      alt="Tammy"
                    />
                  </div>           
                  </>
  }
            />
            
            <Route path="/contact" element={<Contact/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/projects" element={<Project/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App
