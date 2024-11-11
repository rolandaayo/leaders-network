import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className="text-black px-4 sm:px-8 md:px-20 bg-gradient-to-br from-white to-gray-100">
      
      <div className="flex flex-col md:flex-row justify-evenly md:p-14 font-bold max-w-7xl mx-auto">

        <div className="items-center basis-full md:basis-1/2 md:p-[2rem] space-y-4 md:space-y-8 w-full">

            <div className="w-full h-full items-center py-6 md:py-16 lg:py-24">

              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#EC5E2A] to-orange-600">Information Technology And Software Development Consultants</h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 text-gray-700 font-medium">
              The most secure marketplace for buying and selling unique crypto assets.
              </p>

              <div>
                <div className='flex flex-col sm:flex-row gap-4 sm:space-x-5'>
                <button className="mt-4 sm:mt-6 px-6 sm:px-8 py-3 bg-[#EC5E2A] rounded-full text-white hover:bg-opacity-80 w-full sm:w-auto transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl">GET IN TOUCH</button>
                <button className="mt-2 sm:mt-6 px-6 sm:px-8 py-3 bg-transparent rounded-full border border-[#EC5E2A] text-[#EC5E2A] hover:bg-[#EC5E2A] hover:text-white transition-colors duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl">ABOUT US</button>
                </div>
              </div>
            </div>

        </div>

        <div className="basis-full md:basis-1/2 p-4 md:p-[2rem] w-full mx-auto flex items-center justify-center">
          <div className="transform transition-transform duration-500 hover:scale-105 max-w-md">
            <Image
              width={400}
              height={400}
              className="object-contain w-full h-auto rounded-2xl shadow-2xl"
              src="/images/software-development.png"
              alt="hero-banner"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  )
}