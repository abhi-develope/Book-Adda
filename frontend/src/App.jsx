import React from 'react'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import Courses from './course/Courses'


function App() {
  return (
    <div>
     {/* <Home/> 
     <Course/> */}
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
     </Routes>
    </div>
  )
}

export default App
