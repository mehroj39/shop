import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='bg-gray-900 flex flex-col gap-12 items-center justify-center py-6'>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-5 place-items-center px-4 py-6">
                <a href="https://www.facebook.com/RealMadrid/"><FaFacebook className="text-6xl text-white border border-white rounded-full hover:bg-amber-300 p-2 transition" /></a>
                <a href="https://x.com/realmadrid?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><FaTwitter className="text-6xl text-white border border-white rounded-full hover:bg-amber-300 p-2 transition" /></a>
                <a href="https://www.instagram.com/realmadrid/?source=omni_redirect"><FaInstagram className="text-6xl text-white border border-white rounded-full hover:bg-amber-300 p-2 transition" /></a>
                <a href="https://www.linkedin.com/company/automatictechnologysolutuionsllcss/?viewAsMember=true"><FaLinkedin className="text-6xl text-white border border-white rounded-full hover:bg-amber-300 p-2 transition" /></a>
                <a href="https://x.com/pinterest"><FaPinterest className="text-6xl text-white border border-white rounded-full hover:bg-amber-300 p-2 transition" /></a>
            </div>
            <ul className='grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-7 text-center gap-7 px-4'>
                <a href="#home">
                    <li
                        className='text-center list-none border border-white text-white 
               text-base sm:text-lg md:text-xl lg:text-2xl 
               hover:bg-amber-300 px-3 sm:px-4 md:px-5 py-2'>
                        Home
                    </li>
                </a>
                <a href="#home">
                    <li
                        className='text-center list-none border border-white text-white 
               text-base sm:text-lg md:text-xl lg:text-2xl 
               hover:bg-amber-300 px-3 sm:px-4 md:px-5 py-2'>
                        Home
                    </li>
                </a>
                <a href="#home">
                    <li
                        className='text-center list-none border border-white text-white 
               text-base sm:text-lg md:text-xl lg:text-2xl 
               hover:bg-amber-300 px-3 sm:px-4 md:px-5 py-2'>
                        Home
                    </li>
                </a>
                <a href="#home">
                    <li
                        className='text-center list-none border border-white text-white 
               text-base sm:text-lg md:text-xl lg:text-2xl 
               hover:bg-amber-300 px-3 sm:px-4 md:px-5 py-2'>
                        Home
                    </li>
                </a>
                <a href="#home">
                    <li
                        className='text-center list-none border border-white text-white 
               text-base sm:text-lg md:text-xl lg:text-2xl 
               hover:bg-amber-300 px-3 sm:px-4 md:px-5 py-2'>
                        Home
                    </li>
                </a>
                <a href="#home">
                    <li
                        className='text-center list-none border border-white text-white 
               text-base sm:text-lg md:text-xl lg:text-2xl 
               hover:bg-amber-300 px-3 sm:px-4 md:px-5 py-2'>
                        Home
                    </li>
                </a>
                <a href="#home">
                    <li
                        className='text-center list-none border border-white text-white 
               text-base sm:text-lg md:text-xl lg:text-2xl 
               hover:bg-amber-300 px-3 sm:px-4 md:px-5 py-2'>
                        Home
                    </li>
                </a>
            </ul>
            <h2 className='text-white text-4xl text-center'>Created By <span className='text-amber-300'>Mr.Quvonch Web Designer</span> | All Right Reserved</h2>
        </div>


    )
}

export default Footer
