'use client'
import React, { useState } from 'react'
import Image from 'next/image';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className='flex items-center justify-evenly pt-2 '>
                <div className='flex items-center justify-evenly gap-3'>
                    <Image src="/Vector.png" alt="logo image" width={256} height={256} className='h-8 w-8'></Image>
                    <h3 className='font-semibold'>NeoFi</h3>
                </div>
                {/* mobile-icon */}
                <button onClick={() => setIsOpen(!isOpen)}><Image src="/hamburgericon.png" alt="icon" height={50} width={50} className='relative cursor-pointer ml-30 sm:hidden'></Image></button>
                <div className='hidden sm:flex items-center justify-evenly sm:gap-20 md:gap-5 lg:gap-20'>

                    <h4 className='text-white/70 hover:text-white'>Home</h4>
                    <h4 className='text-white/70 hover:text-white'>Features</h4>
                    <h4 className='text-white/70 hover:text-white'>Testimonials</h4>
                    <h4 className='text-white/70 hover:text-white'>FAQ</h4>
                </div>
                <div className=' hidden sm:flex items-center justify-around gap-6'>
                    <h4>Log in</h4>
                    <button className=' text-black px-4 py-1 rounded-2xl bg-[#9DFF3A]'>
                        Try For Free
                    </button>
                </div>


                {/* nav-icon drop down */}

                {isOpen && (

                     <div className='absolute top-15 right-0 mt-2 w-48 bg-black text-white rounded-md shadow-lg p-4 z-50 text-center'>
              <h4 className='hover:text-[#9DFF3A] cursor-pointer py-1'>Home</h4>
              <h4 className='hover:text-[#9DFF3A] cursor-pointer py-1'>Features</h4>
              <h4 className='hover:text-[#9DFF3A] cursor-pointer py-1'>Testimonials</h4>
              <h4 className='hover:text-[#9DFF3A] cursor-pointer py-1'>FAQ</h4>
              <hr className='my-2 border-gray-600' />
              <h4 className='hover:text-[#9DFF3A] cursor-pointer py-1'>Log in</h4>
              <button className='text-black w-full px-2 py-2 rounded-2xl bg-[#9DFF3A] mt-2'>
                Try For Free
              </button>
            </div>
                )}
            </nav>

        </>
    )
}

export default Navbar
