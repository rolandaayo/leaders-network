import React from 'react'
import Image from 'next/image'

export default function Solutions() {
  const solutions = [
    {
      image: "/images/document-management.jpg",
      title: "Document Management",
      description: "Leaders Network Ventures Ltd offer services in Digital Information, Work Flow evaluation, Project Management, Scanning, Capturing and ....",
    },
    {
      image: "/images/software-development.png",
      title: "Software Development",
      description: "Leaders Network Limited is a Software development & Solution firm that is focused on developing high standard and cost persuasive ....",
    },
    {
      image: "/images/RaaS.png",
      title: "Resource As A Service (RAAS)",
      description: "Leaders Network is experienced in Human resource outsourcing for Information Technology and Management jobs whereby an employer transfers ....",
    }
  ]

  const additionalSolutions = [
    {
      image: "/images/social-media.png",
      title: "Social Media Campaigns",
      description: "In view of the fact that the present social media platforms being used by politicians in Nigeria now rely so much on followership ....",
    },
    {
      image: "/images/management-trainning.jpg",
      title: "Management Training",
      description: "We train on the following: Leadership Training,Time Management and Human Development Training ....",
    },
    {
      image: "/images/smartcard.jpg",
      title: "Smart-Card Programming",
      description: "Leaders Network offers solution for clients through the Smartcard technology. This comprise of smartcards and card readers....",
    }
  ]

  return (
    <div className='px-4 md:px-20 py-10'>
      <div className='bg-[#040F4E] text-white px-4 md:px-10 py-12 md:py-16 rounded-2xl shadow-2xl'>
        <div>
          <div className="text-center flex-col space-y-6 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#EC5E2A] to-white bg-clip-text text-transparent">Our Solutions</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              We have the following solutions to solve challenges being faced by governments
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch justify-center text-center gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="flex-col gap-6 md:gap-10 space-y-6 p-6 md:p-16 bg-[#071263] rounded-xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-center">
                  <Image
                    src={solution.image}
                    alt="about-img"
                    width={"500"}
                    height={"500"}
                    className="object-contain w-full h-auto rounded-lg hover:opacity-90 transition-opacity"
                  />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-[#EC5E2A]">{solution.title}</h2>
                <p className="text-sm md:text-base text-gray-300">
                  {solution.description}
                </p>
                <button className="bg-transparent rounded-full border-2 border-[#EC5E2A] text-white px-8 md:px-12 py-3 md:py-4 hover:bg-[#EC5E2A] transition-all duration-300 font-medium">READ MORE</button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-col lg:flex-row items-stretch justify-center text-center gap-8">
            {additionalSolutions.map((solution, index) => (
              <div key={index} className="flex-col gap-6 md:gap-10 space-y-6 p-6 md:p-16 bg-[#071263] rounded-xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-center">
                  <Image
                    src={solution.image}
                    alt="about-img"
                    width={"500"}
                    height={"500"}
                    className="object-contain w-full h-auto rounded-lg hover:opacity-90 transition-opacity"
                  />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-[#EC5E2A]">{solution.title}</h2>
                <p className="text-sm md:text-base text-gray-300">
                  {solution.description}
                </p>
                <button className="bg-transparent rounded-full border-2 border-[#EC5E2A] text-white px-8 md:px-12 py-3 md:py-4 hover:bg-[#EC5E2A] transition-all duration-300 font-medium">READ MORE</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}