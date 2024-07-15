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

     <div className="flex">
     <img className="max-w-auto max-h-auto justify-start"src={image} alt='Tammy'/>
     <p className="">My name is Tamanna Sheikh. I am currently pursuing my B.Tech in Artificial Intelligence and Machine Learning.
      I completed my schooling from Carmel Convent School.Throughout my academic career,I consistently achieved top ranks in my school and college.
      My aggregate CGPA is 8.89.My interests lie in Programming and machine learning.I have strong knowledge about Data Structures and Algorithms.My greatest strenghts are my perseverance and sense of righteousness.
     </p>
      

     </div>
    </>
  )
}

export default App
