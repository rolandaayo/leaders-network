import React from "react";
import Image from "next/image";

export default function Ourservices() {
  return (
    <div className="p-4 md:p-20 bg-gradient-to-b from-white to-gray-50">
      <div>
        <div className="text-center flex-col space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">Our Services</h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Leaders Network offers the following Products and Services
          </p>
        </div>

        {/* document-management-section */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center gap-8">
          <div className="flex-col space-y-6 p-6 md:p-16 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center">
              <Image
                src={"/images/document-management.jpg"}
                alt="about-img"
                width={"500"}
                height={"500"}
                className="object-contain w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Document Management</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Leaders Network Ventures Ltd offer services in Digital
              Information, Work Flow evaluation, Project Management, Scanning,
              Capturing and ....
            </p>
            <button className="bg-transparent hover:bg-[#EC5E2A] hover:text-white text-black rounded-full border-2 border-[#EC5E2A] p-3 md:p-4 text-sm md:text-base transition-colors duration-300 font-medium">READ MORE</button>
          </div>

          {/* software-development-section */}
          <div className="space-y-6 p-6 md:p-16 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center">
              <Image
                src={"/images/software-development.png"}
                alt="about-img"
                width={"600"}
                height={"600"}
                className="object-contain w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Software Development</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Leaders Network Limited is a Software development & Solution firm that is focused on developing high standard and cost persuasive ....
            </p>
            <button className="bg-transparent hover:bg-[#EC5E2A] hover:text-white text-black  rounded-full border-2 border-[#EC5E2A] p-3 md:p-4 text-sm md:text-base transition-colors duration-300 font-medium">READ MORE</button>
          </div>

          {/* Resource-As-A-Service-(RAAS) */}
          <div className="space-y-6 p-6 md:p-16 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center">
              <Image
                src={"/images/RaaS.png"}
                alt="about-img"
                width={"500"}
                height={"500"}
                className="object-contain w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Resource As A Service (RAAS)</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Leaders Network is experienced in Human resource outsourcing for Information Technology and Management jobs whereby an employer transfers ....
            </p>
            <button className="bg-transparent hover:bg-[#EC5E2A] hover:text-white text-black  rounded-full border-2 border-[#EC5E2A] p-3 md:p-4 text-sm md:text-base transition-colors duration-300 font-medium">READ MORE</button>
          </div>
        </div>
      </div>

      {/* Social-Media-Campaigns*/}
      <div className="mt-12">
        <div className="flex flex-col md:flex-row items-center justify-center text-center gap-8">
          <div className="flex-col space-y-6 p-6 md:p-16 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center">
              <Image
                src={"/images/social-media.png"}
                alt="about-img"
                width={"500"}
                height={"500"}
                className="object-contain w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Social Media Campaigns</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              In view of the fact that the present social media platforms being used by politicians in Nigeria now rely so much on followership ....
            </p>
            <button className="bg-transparent hover:bg-[#EC5E2A] hover:text-white text-black  rounded-full border-2 border-[#EC5E2A] p-3 md:p-4 text-sm md:text-base transition-colors duration-300 font-medium">READ MORE</button>
          </div>

          {/* Management-Training-section */}
          <div className="space-y-6 p-6 md:p-16 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center">
              <Image
                src={"/images/management-trainning.jpg"}
                alt="about-img"
                width={"500"}
                height={"500"}
                className="object-contain w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Management Training</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We train on the following: Leadership Training,Time Management and Human Development Training ....
            </p>
            <button className="bg-transparent hover:bg-[#EC5E2A] hover:text-white text-black  rounded-full border-2 border-[#EC5E2A] p-3 md:p-4 text-sm md:text-base transition-colors duration-300 font-medium">READ MORE</button>
          </div>

          {/* Smart-Card-Programming-section */}
          <div className="space-y-6 p-6 md:p-16 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center">
              <Image
                src={"/images/smartcard.jpg"}
                alt="about-img"
                width={"500"}
                height={"500"}
                className="object-contain w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Smart-Card Programming</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Leaders Network offers solution for clients through the Smartcard technology. This comprise of smartcards and card readers....
            </p>
            <button className="bg-transparent hover:bg-[#EC5E2A] hover:text-white text-black  rounded-full border-2 border-[#EC5E2A] p-3 md:p-4 text-sm md:text-base transition-colors duration-300 font-medium">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}