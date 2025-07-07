import React from 'react'
import StarRating from '../components/StarRating'
import img1 from '../assets/pic-1.png'
import img2 from '../assets/pic-2.png'
import img3 from '../assets/pic-3.png'
import quote from '../assets/quote-img.png'

const Review = () => {
  return (
    <div id='review'>
      <h1 className='w-full text-3xl md:text-5xl text-white bg-black font-bold text-center py-10'>
        CUSTOMER'S <span className='text-amber-300'>REVIEW</span>
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 bg-black px-4 md:px-5 xl:px-7 pb-10'>
        <div className='flex flex-col items-center gap-5 text-white bg-black border border-white p-6 rounded-lg'>
          <img className='w-[60px] md:w-[80px]' src={quote} alt="quote" />
          <p className='text-center text-sm md:text-base'>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ea, Cum Atque Maiores Placeat Laborum Impedit.
          </p>
          <img className='rounded-full w-[80px] h-[80px] object-cover' src={img1} alt="img1" />
          <h3 className='text-xl font-bold'>John Doe</h3>
          <StarRating rating={4.5} />
        </div>

        <div className='flex flex-col items-center gap-5 text-white bg-black border border-white p-6 rounded-lg'>
          <img className='w-[60px] md:w-[80px]' src={quote} alt="quote" />
          <p className='text-center text-sm md:text-base'>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ea, Cum Atque Maiores Placeat Laborum Impedit.
          </p>
          <img className='rounded-full w-[80px] h-[80px] object-cover' src={img2} alt="img2" />
          <h3 className='text-xl font-bold'>Jane Smith</h3>
          <StarRating rating={4.5} />
        </div>

        <div className='flex flex-col items-center gap-5 text-white bg-black border border-white p-6 rounded-lg'>
          <img className='w-[60px] md:w-[80px]' src={quote} alt="quote" />
          <p className='text-center text-sm md:text-base'>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ea, Cum Atque Maiores Placeat Laborum Impedit.
          </p>
          <img className='rounded-full w-[80px] h-[80px] object-cover' src={img3} alt="img3" />
          <h3 className='text-xl font-bold'>Alex Lee</h3>
          <StarRating rating={4.5} />
        </div>
      </div>
    </div>
  )
}

export default Review
