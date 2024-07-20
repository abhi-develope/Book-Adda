import React from 'react'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import Courses from './course/Courses'
import Signup from './componets/Signup'
import  { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
     </Routes>
     <Toaster />
    </div>
  )
}

export default App
