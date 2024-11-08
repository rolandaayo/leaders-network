import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='bg-[#040F4E]'>
        <nav className='flex items-center justify-between px-16 h-12 py-10'>
        <div className="flex items-center">
          <Image
            width={150}
            height={60}
            className="object-contain"
            src="/images/logo.png"
            alt="hero-banner"
            priority
          />
        </div>
            
            <div className='mr-20'>
                <ul className='flex gap-5 items-center'>
                    <li>ABOUT US</li>
                    <li>OUR SERVICES</li>
                    <li>SOLUTIONS</li>
                    <li>FAQs</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}