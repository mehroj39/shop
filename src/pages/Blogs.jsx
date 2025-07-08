import React from 'react'
import pic1 from '../assets/blog-1.jpeg'
import pic2 from '../assets/blog-2.jpeg'
import pic3 from '../assets/blog-3.jpeg'

const Blogs = () => {
  return (
    <div className='bg-black' id='blogs'>
      <div>
        <h1 className="text-3xl md:text-5xl text-white font-bold text-center py-10">
          CONTACT <span className='text-amber-300'>US</span>
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-7 gap-7 '>
          <div className='flex flex-col gap-7 bg-black border border-white '>
            <img src={pic1} alt="pic1" />
            <h2 className='px-7 text-3xl font-bold text-amber-300'>Tasty And Refreshing Coffee</h2>
            <h3 className='px-7 text-white text-2xl font-bold'>By Admin / 7th july ,2025</h3>
            <p className='px-7 text-white'>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Minus Iure Eos Inventore,  </p>
            <button className='w-1/2 hover:w-2/3 min-w-[150px] sm:min-w-[170px] transition-all duration-500 ease-in-out 
             whitespace-nowrap overflow-hidden 
             tracking-widest px-4 py-3 text-white bg-amber-500 mt-[30px] mx-auto'>Read More</button>
          </div>
          <div className='flex flex-col gap-7 bg-black border border-white '>
            <img src={pic2} alt="pic1" />
            <h2 className='px-7 text-3xl font-bold text-amber-300'>Tasty And Refreshing Coffee</h2>
            <h3 className='px-7 text-white text-2xl font-bold'>By Admin / 7th july ,2025</h3>
            <p className='px-7 text-white'>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Minus Iure Eos Inventore,  </p>
            <button className='w-1/2 hover:w-2/3 min-w-[150px] sm:min-w-[170px] transition-all duration-500 ease-in-out 
             whitespace-nowrap overflow-hidden 
             tracking-widest px-4 py-3 text-white bg-amber-500 mt-[30px] mx-auto'>Read More</button>
          </div>
          <div className='flex flex-col gap-7 bg-black border border-white '>
            <img src={pic3} alt="pic1" />
            <h2 className='px-7 text-3xl font-bold text-amber-300'>Tasty And Refreshing Coffee</h2>
            <h3 className='px-7 text-white text-2xl font-bold'>By Admin / 7th july ,2025</h3>
            <p className='px-7 text-white'>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Minus Iure Eos Inventore,  </p>
            <button className='w-1/2 hover:w-2/3 min-w-[150px] sm:min-w-[170px] transition-all duration-500 ease-in-out 
             whitespace-nowrap overflow-hidden 
             tracking-widest px-4 py-3 text-white bg-amber-500 mt-[30px] mx-auto'>Read More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
