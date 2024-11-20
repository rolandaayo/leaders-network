'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-[#040F4E] text-white shadow-lg fixed top-0 left-0 right-0 z-50">
        <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 h-auto md:h-12 py-4 md:py-10 transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
            <Link href="/">
              <Image
                width={150}
                height={60}
                className="object-contain hover:opacity-90 transition-opacity duration-300"
                src="/images/logo.png"
                alt="hero-banner"
                priority
              />
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden hover:bg-blue-900 p-2 rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 transform transition-transform duration-200 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          <div className={`fixed md:static top-16 left-0 h-[calc(100vh-4rem)] md:h-auto bg-[#040F4E] w-3/4 md:w-auto md:bg-transparent md:mr-20 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-5 items-center p-4 md:p-0">
              <Link href="/about">
                <li className="w-full md:w-auto text-center py-2 md:py-0 hover:text-gray-300 hover:bg-blue-900 md:hover:bg-transparent px-4 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105">ABOUT US</li>
              </Link>

              <Link href="/ourservices">
                <li className="w-full md:w-auto text-center py-2 md:py-0 hover:text-grayhover:bg-blue-900 md:hover:bg-transparent px-4 rounded-md transition-all durationease-in-out transform hover:scale-105">OUR SERVICES</li>
              </Link>

              <Link href="/solutions">
                <li className="w-full md:w-auto text-center py-2 md:py-0 hover:text-grayhover:bg-blue-900 md:hover:bg-transparent px-4 rounded-md transition-all durationease-in-out transform hover:scale-105">SOLUTIONS</li>
              </Link>

                        
              <li className="w-full md:w-auto text-center py-2 md:py-0 hover:text-gray-300 hover:bg-blue-900 md:hover:bg-transparent px-4 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105">FAQs</li>

              <Link href="/contactus">
                <li className="w-full md:w-auto text-center py-2 md:py-0 hover:text-grayhover:bg-blue-900 md:hover:bg-transparent px-4 rounded-md transition-all durationease-in-out transform hover:scale-105">CONTACT US</li>
              </Link>

              <Link href="/blogs">
                <li className="w-full md:w-auto text-center py-2 md:py-0 hover:text-grayhover:bg-blue-900 md:hover:bg-transparent px-4 rounded-md transition-all durationease-in-out transform hover:scale-105">BLOGS</li>
              </Link>

              <Link href="/adminn">
                <li className="w-full md:w-auto text-center py-2 md:py-0 hover:text-grayhover:bg-blue-900 md:hover:bg-transparent px-4 rounded-md transition-all durationease-in-out transform hover:scale-105">ADMIN</li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
      <div className="h-24 md:h-32"></div>
    </>
  );
}