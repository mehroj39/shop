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
                <a href="#home"><li className='text-center list-none text-2xl border border-white text-white hover:bg-amber-300 px-5 py-2' id='home'>Home</li></a>
                <a href="#about"><li className='text-center list-none text-2xl border border-white text-white hover:bg-amber-300 px-5 py-2' id='about'>About</li></a>
                <a href="#menu"><li className='text-center list-none text-2xl border border-white text-white hover:bg-amber-300 px-5 py-2' id='menu'>Menu</li></a>
                <a href="#products"><li className='text-center list-none text-2xl border border-white text-white hover:bg-amber-300 px-5 py-2' id='products'>Products</li></a>
                <a href="#contact"><li className='text-center list-none text-2xl border border-white text-white hover:bg-amber-300 px-5 py-2'id='contact'>Contact</li></a>
                <a href="#review"><li className='text-center list-none text-2xl border border-white text-white hover:bg-amber-300 px-5 py-2'id='review'>Review</li></a>
                <a href="#blogs"><li className='text-center list-none text-2xl border border-white text-white hover:bg-amber-300 px-5 py-2' id='blogs'>Blogs</li></a>
            </ul>
            <h2 className='text-white text-4xl text-center'>Created By <span className='text-amber-300'>Mr.Quvonch Web Designer</span> | All Right Reserved</h2>
        </div>


    )
}

export default Footer
