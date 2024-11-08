import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className="bg-[#040F4E]">
      
      <div className="flex flex-col md:flex-row justify-evenly  md:p-14 font-bold text-white ">

        <div className="items-center basis-full md:basis-1/2 md:p-[2rem] space-y-4 md:space-y-8 w-full">

            <div className="w-full h-full items-center lg:py-6 py-8 md:py-24">

              <h1 className="text-2xl md:text-6xl">Information Technology And Software Development Consultants</h1>

              <p className="text-lg md:text-2xl mt-4">
              The most secure marketplace for buying and selling unique crypto assets.
              </p>

              <button className="mt-6 px-6 py-2 bg-black text-white hover:bg-opacity-80">GET IN TOUCH</button>
              <button className="mt-6 px-6 py-2 bg-black text-white hover:bg-opacity-80">ABOUT US</button>

            </div>

        </div>

        <div className="basis-full md:basis-1/2 p-4 md:p-[2rem] w-full mx-auto">
          <Image
            width={500}
            height={500}
            className="m-auto object-contain"
            src="/images/hero-img.jpg"
            alt="hero-banner"
            priority
          />
        </div>

      </div>
    </div>
  )
}