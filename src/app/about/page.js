import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">About Leaders Network</h1>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                Since the year 2005, Leaders Network has been delivering trusted
                technology solutions for Corporate Bodies, Government,
                Telecommunication, Educational, Insurance and Financial Services all
                over the world.
              </p>
              <p className="mb-4">
                In view of the global village nature of the world,
                we also collaborate together on several projects with various
                organisations and consultants as partners in a team thereby
                increasing the knowledge base of team members and enhancing
                capacities.
              </p>
              <p className="mb-4">
                We always seek for the most experienced organization on
                a particular project and collaborate to give our customers the full
                benefit. We continue to innovate and improve the product experience
                for all our customers
              </p>
              <p className="mb-4">
                Leaders Network Ltd is a firm of Management
                and Information Technology Consultants providing services on
                Document Management, Resource As A Service (RAAS), Software
                Development, Social Media Campaigns, Management Training and
                Smartcard Solutions.
              </p>
              <p>
                Our goal is to assist corporate bodies, states
                and organizations to motivate and inspire their employees to peak
                performance as evidence has shown this to be the key drive for
                successful corporate performance. Our consulting methodology is
                driven by world-class tools sourced from our international partner
                firms in the USA, India, United Kingdom and South Africa. This
                partnership provides us with excellent training
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image
                src={"/images/about-leaders-network.png"}
                alt="about"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
