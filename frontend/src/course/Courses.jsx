import React from 'react'
import Navbar from '../componets/Navbar'
import Course from '../componets/Course'
import Footer from '../componets/Footer'

function Courses() {
    
  return (
    <div>
      <Navbar/>
     <div className='min-h-screen'>
     <Course/>
     </div>
      <Footer/>
    </div>
  )
}

export default Courses
