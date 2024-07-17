import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios'

function Freebook() {
  const [book, setBook]=useState([])
  useEffect(() =>{
    const getBook= async()=>{
      try {
        const res = await axios.get("http://localhost:4002/book");
        console.log(res.data);
        setBook(res.data.filter((data) => data.category === "free") )
      } catch (error){
        console.log(error);
      }
    }
    getBook();
  }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
     <h1 className='font-semibold text-xl-pb-1'>Free Offered Courses</h1> 
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab cupiditate iste fugit reprehenderit sequi? Voluptates cumque dignissimos, sint, saepe maiores minus qui ducimus itaque accusamus nam nobis quae accusantium quas!</p>
    
    <div>
    <div className="slider-container">
      <Slider {...settings}>
        {book.map((item)=>(
            <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Freebook
