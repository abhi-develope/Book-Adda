import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'


function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-red-500'>Here! :)</span></h1>
        <p className='mt-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perspiciatis voluptas facere nesciunt, blanditiis nam? Laudantium optio animi aliquam sit alias dicta officia iusto unde maxime quaerat reprehenderit debitis culpa beatae praesentium esse tempora, enim atque sunt soluta cum voluptatum!
        </p>
        <Link to ="/">
        <button className='bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer mt-6'>Back</button>
        </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
            {list.map((item)=>(
              <Cards key={item.jsx} item={item}/>  

            ))}
        </div>

      
    </div>
    </>
  )
}

export default Course
