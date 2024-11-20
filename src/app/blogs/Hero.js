import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="text-black px-2 sm:px-8 md:px-16 max-w-[1440px] mx-auto">
      <div className="text-3xl sm:text-5xl md:text-7xl py-3 sm:py-8 font-bold">
        <h1 className="transition-all duration-300 hover:text-slate-700">
          Hey, we&apos;re Leaders Network. See our thoughts, stories and ideas.
        </h1>
      </div>

      <div className="my-4 sm:my-12">
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input 
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg border-2 border-slate-300 focus:border-slate-500 outline-none w-full sm:w-80 transition-all duration-300 hover:shadow-lg text-sm sm:text-base" 
            type="text" 
            placeholder="Your email address"
          />
          <button className="rounded-lg px-6 sm:px-8 py-2 sm:py-3 bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105 text-sm sm:text-base">
            Subscribe
          </button>
        </div>

        <div>
          <p className="text-sm sm:text-lg text-slate-600 transition-colors duration-300 hover:text-slate-800">
            Get the email newsletter and unlock access to members-only content and updates
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mt-16">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8 transition-all duration-300 hover:text-slate-700">
          Get started with our best stories
        </h2>

        <div className="space-x-3 sm:space-x-8 flex overflow-x-auto pb-4 sm:pb-8 scroll-smooth scrollbar-hide snap-x snap-mandatory">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className="min-w-[250px] sm:min-w-[400px] md:min-w-[500px] snap-start transform transition-all duration-300 hover:scale-[1.02]">
              <Image
                width={500}
                height={500}
                className="rounded-xl sm:rounded-2xl object-cover hover:opacity-90 transition-all duration-300 h-[150px] sm:h-[250px] md:h-[300px] hover:shadow-xl"
                src={`/images/featured-${((index % 4) + 1)}.jpg`}
                alt={`featured-image-${index + 1}`}
                priority
              />
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4 mb-2 sm:mb-3">
                <p className="bg-slate-800 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-white text-xs sm:text-sm transform transition-all duration-300 hover:scale-105 hover:bg-slate-700">Design</p>
                <p className="bg-slate-800 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-white text-xs sm:text-sm transform transition-all duration-300 hover:scale-105 hover:bg-slate-700">Idea</p>
                <p className="bg-slate-800 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-white text-xs sm:text-sm transform transition-all duration-300 hover:scale-105 hover:bg-slate-700">Review</p>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-3 transition-all duration-300 hover:text-slate-700">
                Perfection has to do with the end product
              </h2>
              <p className="text-sm sm:text-lg text-slate-600 transition-colors duration-300 hover:text-slate-800">
                Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta, ullamcorper massa eu, ullamcorper sapien.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}