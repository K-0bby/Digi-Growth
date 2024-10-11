"use client";

import { Navbar } from "@/components/Navbar";
import CountUp from "react-countup";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-screen-7xl overflow-x-hidden">
      <Navbar />
      <hr />
      {/* Hero section */}
      <section className="bg-[#1f1f1f] h-screen px-4 xl:px-28 relative">
        <div className="flex flex-col xl:flex-row items-center justify-around gap-16 py-10">
          <div className="text-center xl:text-left">
            <h1 className="font-bold font-primary text-white text-3xl md:text-5xl xl:text-6xl xl:w-[700px] xl:leading-[70px]">
              Empower Your <br />Business with Digital Excellence
            </h1>
          </div>
          <div className="text-center xl:text-left">
            <p className="font-secondary text-white text-base md:text-lg xl:w-[500px] pb-10">
            Unlock your business full potential with tailored digital strategies that drive growth, enhance visibility, and deliver measurable results.
            </p>

            <div className="font-secondary text-white grid grid-cols-1 xl:grid-cols-3 gap-y-10">
              <div>
                <h2 className="text-white text-4xl font-bold">
                  <CountUp start={0} end={400} duration={2} suffix="+" />
                </h2>
                <p className="text-gray-400 text-lg">Clients</p>
              </div>
              <div>
                <h2 className="text-white text-4xl font-bold">
                  <CountUp start={0} end={2500} duration={2} suffix="+" />
                </h2>
                <p className="text-gray-400 text-lg">Products</p>
              </div>
              <div>
                <h2 className="text-white text-4xl font-bold">
                  <CountUp start={0} end={12} duration={2} suffix="+" />
                </h2>
                <p className="text-gray-400 text-lg">Year experience</p>
              </div>
            </div>
          </div>
        </div>

        <Image src="/images/Digital-Marketing-Experts.jpg" alt="Digital marketing experts working together"  width={1200} height={600} className="xl:absolute top-[45%] left-[15%] rounded-xl"/>
      </section>

      <section className="h-screen">
        
      </section>
    </main>
  );
}
