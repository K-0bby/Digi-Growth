"use client";

import { Navbar } from "@/components/Navbar";
import CountUp from "react-countup";

export default function Home() {
  return (
    <main className="max-w-screen-7xl overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#1f1f1f] px-4 py-14 xl:px-28 mt-[0.5px] relative">
        <div className="flex flex-col xl:flex-row gap-12 items-center xl:px-10">
          
          {/* Left Section with Large Header */}
          <div className="text-center xl:text-left">
            <h1 className="font-primary text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight xl:leading-[80px] pb-6 ">
              Empower Your <br />Business with Digital Excellence
            </h1>
          </div>

          {/* Right Section with Paragraph and Stats */}
          <div className="text-center xl:text-left">
            {/* Paragraph */}
            <p className="font-secondary text-white max-w-full sm:max-w-md md:max-w-lg text-sm sm:text-base md:text-lg mb-8">
              Unlock your business's full potential with tailored digital strategies that drive growth, enhance visibility, and deliver measurable results.
            </p>

            {/* Statistics Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-32 text-center xl:text-left font-secondary">
              {/* Clients */}
              <div>
                <h2 className="text-white text-4xl sm:text-5xl font-bold">
                  <CountUp start={0} end={400} duration={2} suffix="+" />
                </h2>
                <p className="text-gray-400 text-lg mt-2">Clients</p>
              </div>

              {/* Products */}
              <div>
                <h2 className="text-white text-4xl sm:text-5xl font-bold">
                  <CountUp start={0} end={2500} duration={2} suffix="+" />
                </h2>
                <p className="text-gray-400 text-lg mt-2">Products</p>
              </div>

              {/* Years of Experience */}
              <div>
                <h2 className="text-white text-4xl sm:text-5xl font-bold">
                  <CountUp start={0} end={12} duration={2} suffix="+" />
                </h2>
                <p className="text-gray-400 text-lg mt-2">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 pt-10">
          <img 
            src="/images/Digital-Marketing-Experts.jpg" 
            alt="Digital marketing experts working together" 
            className="rounded-2xl w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[1200px] mx-auto" 
          />
        </div>
      </section>

      <section>
        {/* Additional content goes here */}
      </section>
    </main>
  );
}
