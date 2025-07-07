import React from 'react'
import StarRating from '../components/StarRating'
import product1 from '../assets/product-1.png'
import product2 from '../assets/product-2.png'
import product3 from '../assets/product-3.png'


const Products = () => {
  return (
    <div className=' bg-black' id='products'>
      <h1 className='w-full h-[75px] text-5xl text-white bg-black font-bold flex items-center justify-center pt-16 pb-20'><span className='text-amber-300'>OUR</span> PRODUCTS</h1>
      <div className='grid grid-cols-1 md:grid-cols-1 py-4 px-4 gap-4 xl:grid-cols-3'>
        <div className='flex flex-col items-center justify-center gap-4 bg-black border border-white py-20 px-12'>
          <div className='flex gap-4'>
            <i className='bxr bx-cart  hover:bg-amber-300 bg-black text-white font-normal text-5xl px-2 py-2 border border-white'></i>
            <i className='bx bx-heart  hover:bg-amber-300 bg-black text-white font-normal text-5xl px-2 py-2 border border-white'></i>
            <i className='bxr bx-eye  hover:bg-amber-300   bg-black text-white font-normal text-5xl px-2 py-2 border border-white'></i>
          </div>
          <img src={product1} alt="product1" />
          <span className='line-through font-bold text-3xl text-white'>Fresh Coffee</span>
          <div className='inline-block'>
            <StarRating rating={4.5} />
          </div>          
        </div>
        <div className='flex flex-col items-center gap-4 bg-black border border-white py-24 px-16'>
          <div className='flex gap-4'>
            <i className='bxr bx-cart hover:bg-amber-300 bg-black text-white font-normal text-5xl px-2 py-2 border border-white'></i>
            <i className='bx bx-heart hover:bg-amber-300 bg-black text-white font-normal text-5xl px-2 py-2 border border-white'></i>
            <i className='bxr bx-eye hover:bg-amber-300   bg-black text-white font-normal text-5xl px-2 py-2 border border-white'></i>
          </div>
          <img src={product1} alt="product1" />
          <span className='line-through font-bold text-3xl text-white'>Fresh Coffee</span>
          <div className='inline-block'>
            <StarRating rating={4.5} />
          </div>          
        </div>
        <div className='flex flex-col items-center gap-4 bg-black border border-white py-24 px-16'>
          <div className='flex gap-4 '>
            <i className='bxr bx-cart hover:bg-amber-300 bg-black text-white font-normal text-5xl px-2 py-2 border border-white'></i>
            <i className='bx bx-heart hover:bg-amber-300 bg-black text-white font-normal text-5xl px-2 py-2 border border-white'></i>
            <i className='bxr bx-eye hover:bg-amber-300   bg-black text-white font-normal text-5xl px-2 py-2 border border-white'></i>
          </div>
          <img src={product1} alt="product1" />
          <span className='line-through font-bold text-3xl text-white'>Fresh Coffee</span>
          <div className='inline-block'>
            <StarRating rating={4.5} />
          </div>          
        </div>
      </div>
    </div>
  )
}

export default Products
