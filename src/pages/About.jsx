import React from 'react'
import about from '../assets/about-img.jpeg'

const About = () => {
    return (
        <div className='bg-black flex flex-col gap-[30px] sm: w-full' id='about'>
            <h1 className='w-full h-[75px] text-5xl text-white bg-black font-bold flex items-center justify-center'>ABOUT  <span className='text-amber-300'> US</span></h1>
            <div className='xl:flex w-[90%] bg-gray-900 mx-auto  md:w-[90%]      gap-[20px]   '>
                <div>
                    <img className='xl:w-900px md:w-full ' src={about} alt="about" />
                 </div>
                <div className='xl:w-1/2 flex flex-col gap-[30px] text-white sm:w-[200px] pl-4  mx-auto justify-center md:w-[90%]'>
                    <h3 className='text-3xl font-bold'>What Makes Our Coffee Special?
                    </h3>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Dicta Harum Hic Dolorem Rerum Delectus, Mollitia Amet Aliquam. Earum Voluptate Soluta Ducimus Ad Repudiandae, Unde Facere Dolor Maxime, Quibusdam Id Animi.
                    </p>
                    <p>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Molestias Temporibus Dolores Quis Eaque Iusto Ipsum, Voluptatibus Numquam Alias Perferendis Reprehenderit!
                    </p>
                    <button className=' hover:w-[300px] tracking-widest transition-all duration-500 ease-in-out 
                    w-[200px] h-[50px] text-white bg-amber-500 mt-[30px]  mx-auto '>Get Yours Now</button>
                </div>
            </div>
        </div>
    )
}

export default About
