import React from 'react'
import img from "../assets/home-img.jpeg"

const Home = () => {
  return (
    <div className="xl:flex flex-col justify-center items-center bg-cover bg-center h-screen md:w-full flex flex-col sm:flex flex-col justify-center items-center  w-full pt-[20px]" id='home' style={{ backgroundImage: `url(${img})` }}>
      <h1 className='text-white text-xl pl-[100px]  md:text-4xl xl:text-6xl mx-auto sm:text-4xl  '>FRESH COFFEE IN THE MORNING</h1>
      <p className=' sm: w-full flex items-center justify-center text-center text-white xl:text-white text-xl xl: pt-[50px] mx-auto'>Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Quidem Voluptatem, Natus Illo Nulla At Inventore.</p>
      <button
        className='w-1/2 sm:w-[180px] hover:w-[220px] transition-all duration-500 ease-in-out 
             max-w-[250px] whitespace-nowrap px-4 py-3 bg-amber-500 text-white mx-auto mt-6 mb-6'>
        Read More
      </button>

    </div>
  )
}

export default Home 
