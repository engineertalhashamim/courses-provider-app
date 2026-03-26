import React from 'react'

function Footer() {
  return (
    <footer className='bg-black text-gray-400 py-12'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8'>
             <div>
              <h2 className='text-white text-lg font-semibold mb-4'>About</h2>
              <div className='flex flex-col space-x-4'>
                <p className='hover:text-white transition-colors duration-300'>
                  Welcome to Harmony Music School!
                  We offer music lessons for all ages in instruments, vocals, and theory.
                  Our goal is to make learning music fun, inspiring, and rewarding.
                  Join us and discover the joy of music!
                </p>
              </div>
            </div>
             <div>
              <h2 className='text-white text-lg font-semibold mb-4'>Quick Links</h2>
              <div className='flex flex-col space-x-4'>
                <a href="#" className='hover:text-white transition-colors duration-300'>Home</a>
                <a href="#" className='hover:text-white transition-colors duration-300'>About</a>
                <a href="#" className='hover:text-white transition-colors duration-300'>Courses</a>
                <a href="#" className='hover:text-white transition-colors duration-300'>Contact</a>
              </div>
            </div>
            <div>
              <h2 className='text-white text-lg font-semibold mb-4'>Follow Us</h2>
              <div className='flex flex-col space-x-4'>
                <a href="#" className='hover:text-white transition-colors duration-300'>Facebook</a>
                <a href="#" className='hover:text-white transition-colors duration-300'>Twitter</a>
                <a href="#" className='hover:text-white transition-colors duration-300'>Instagram</a>
              </div>
            </div>
             <div>
              <h2 className='text-white text-lg font-semibold mb-4'>Contact Us</h2>
              <div className='flex flex-col space-x-4'>
                <a href="#" className='hover:text-white transition-colors duration-300'>Ne Karachi, PAkistan <br /> Karachi 10001</a>
                <a href="#" className='hover:text-white transition-colors duration-300'>Email: engr.talhashamim@gmail.com</a>
                <a href="#" className='hover:text-white transition-colors duration-300'>Phone: (123) 456 7890</a>
              </div>
            </div>
        </div>
            <p className='text-center text-xs pt-8'>@ 2024 Music School. All rights reserved.</p>
    </footer>
  )
}

export default Footer
