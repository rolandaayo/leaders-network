import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-[#040F4E]'>

        <nav className='flex items-center justify-evenly h-12'>

            <div>logo</div>
            
            <div>
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
