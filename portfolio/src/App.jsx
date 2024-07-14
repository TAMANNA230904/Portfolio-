import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="heading-box">
      <div className="text-pink-700 font-bold text-5xl pb-5">WELCOME TO MY PORTFOLIO WEBSITE !!</div>
      <div className="glow-box">
      <div className="text-pink-700 font-bold text-3xl" >I am Tamanna Sheikh</div>
        </div>
     </div>
    </>
  )
}

export default App
