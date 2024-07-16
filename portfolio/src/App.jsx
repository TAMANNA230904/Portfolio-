import { useState } from 'react'
import './App.css'
import image from './image.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="heading-box">
      <div className="text-white text-shadow-md font-bold text-5xl pb-5">WELCOME TO MY PORTFOLIO WEBSITE !!</div>
      <div className="text-white font-bold text-3xl mb-10">I am Tamanna Sheikh</div>
     </div>

     <div className="grid grid-cols-2 gap-4">
     <img className="max-w-auto max-h-auto justify-start"src='' alt='Tammy'/>
     <p className="text-xl indent-0 border-2 border-pink-700 p-2">My name is Tamanna Sheikh. I am currently pursuing my B.Tech in Artificial Intelligence and Machine Learning.
      I completed my schooling from Carmel Convent School.Throughout my academic career,I consistently achieved top ranks in my school and college.
      My aggregate CGPA is 8.89.My interests lie in Programming and machine learning.I have strong knowledge about Data Structures and Algorithms.
      I have worked on various machine learning projects such as House Price Prediction,Handwritten Digit Recognition.
      Skils included in my tech stack are C++,HTML,CSS,React,Javascript,SQL.I always try to learn new things and adaptive to new technologies.
      My greatest strenghts are my perseverance and sense of righteousness.I love singing and have been learning to play guitar these days.
     </p>
     

     </div>
    </>
  )
}

export default App
