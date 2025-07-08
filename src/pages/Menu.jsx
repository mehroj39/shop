import React from 'react'
import menu1 from '../assets/menu-1.png'
import menu2 from '../assets/menu-2.png'
import menu3 from '../assets/menu-3.png'
import menu4 from '../assets/menu-4.png'
import menu5 from '../assets/menu-5.png'
import menu6 from '../assets/menu-6.png'


const Menu = () => {
  return (
    <div className='w-full   bg-black flex flex-col gap-10' id='menu'>
      <h1 className='w-full h-[75px] text-5xl text-white bg-black font-bold flex items-center justify-center pt-5'>OUR <span className='text-amber-300'>MENU</span></h1>
      <div className='grid grid-cols-1 px-4 md:px-64 gap-7 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='flex flex-col items-center justify-center gap-5 bg-black text-white border border-white hover:bg-white hover:text-black py-6'>
          <img src={menu4} alt="menu4" />
          <h3 className='text-2xl font-normal'>Tasty And Healthy</h3>
          <p>$15.99 <span className='line-through'>$20.99</span></p>

          <button
            className='w-1/2 hover:w-2/3 transition-all duration-500 ease-in-out
             whitespace-nowrap overflow-hidden text-ellipsis
             tracking-widest px-4 py-3 text-white bg-amber-500 mt-[30px] mx-auto'>
            Get Yours Now
          </button>


        </div>

        <div className='flex flex-col items-center justify-center gap-5 bg-black text-white border border-white hover:bg-white hover:text-black py-6'>
          <img src={menu4} alt="menu4" />
          <h3 className='text-2xl font-normal'>Tasty And Healthy</h3>
          <p>$15.99 <span className='line-through'>$20.99</span></p>

          <button
            className='w-1/2 hover:w-2/3 transition-all duration-500 ease-in-out
             whitespace-nowrap overflow-hidden text-ellipsis
             tracking-widest px-4 py-3 text-white bg-amber-500 mt-[30px] mx-auto'>
            Get Yours Now
          </button>

        </div>

        <div className='flex flex-col items-center justify-center gap-5 bg-black text-white border border-white hover:bg-white hover:text-black py-6'>
          <img src={menu4} alt="menu4" />
          <h3 className='text-2xl font-normal'>Tasty And Healthy</h3>
          <p>$15.99 <span className='line-through'>$20.99</span></p>

          <button
            className='w-1/2 hover:w-2/3 transition-all duration-500 ease-in-out
             whitespace-nowrap overflow-hidden text-ellipsis
             tracking-widest px-4 py-3 text-white bg-amber-500 mt-[30px] mx-auto'>
            Get Yours Now
          </button>

        </div>



        <div className='flex flex-col items-center justify-center gap-5 bg-black text-white border border-white hover:bg-white hover:text-black py-6'>
          <img src={menu4} alt="menu4" />
          <h3 className='text-2xl font-normal'>Tasty And Healthy</h3>
          <p>$15.99 <span className='line-through'>$20.99</span></p>

          <button
            className='w-1/2 hover:w-2/3 transition-all duration-500 ease-in-out
             whitespace-nowrap overflow-hidden text-ellipsis
             tracking-widest px-4 py-3 text-white bg-amber-500 mt-[30px] mx-auto'>
            Get Yours Now
          </button>


        </div>

        <div className='flex flex-col items-center justify-center gap-5 bg-black text-white border border-white hover:bg-white hover:text-black py-6'>
          <img src={menu4} alt="menu4" />
          <h3 className='text-2xl font-normal'>Tasty And Healthy</h3>
          <p>$15.99 <span className='line-through'>$20.99</span></p>
          <button
            className='w-1/2 hover:w-2/3 transition-all duration-500 ease-in-out
             whitespace-nowrap overflow-hidden text-ellipsis
             tracking-widest px-4 py-3 text-white bg-amber-500 mt-[30px] mx-auto'>
            Get Yours Now
          </button>


        </div>

        <div className='flex flex-col items-center justify-center gap-5 bg-black text-white border border-white hover:bg-white hover:text-black py-6'>
          <img src={menu4} alt="menu4" />
          <h3 className='text-2xl font-normal'>Tasty And Healthy</h3>
          <p>$15.99 <span className='line-through'>$20.99</span></p>

          <button
            className='w-1/2 hover:w-2/3 transition-all duration-500 ease-in-out
             whitespace-nowrap overflow-hidden text-ellipsis
             tracking-widest px-4 py-3 text-white bg-amber-500 mt-[30px] mx-auto'>
            Get Yours Now
          </button>

        </div>
      </div>
    </div>
  )
}

export default Menu
