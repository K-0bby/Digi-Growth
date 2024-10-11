"use client";

import { Navbar } from "@/components/Navbar";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import ArrowCard from "@/components/ArrowCard";


export default function Home() {
  return (
    <main className="max-w-screen-7xl overflow-x-hidden">
      <Navbar />
      <hr />
      
      {/* Hero section */}
      <section className="bg-[#1f1f1f] min-h-screen px-4 sm:px-8 py-10 relative">
        <div className="flex flex-col xl:flex-row items-center justify-around gap-10 xl:mt-12">
          <div className="text-center xl:text-left">
            <h1 className="font-bold font-primary text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl xl:w-[700px] xl:leading-[70px]">
              Empower Your <br /> Business with Digital Excellence
            </h1>
          </div>
          <div className="text-center xl:text-left">
            <p className="font-secondary text-white text-base sm:text-lg md:text-xl xl:w-[500px] pb-8 sm:pb-10">
              Unlock your business’s full potential with tailored digital strategies that drive growth, enhance visibility, and deliver measurable results.
            </p>

            <div className="font-secondary text-white grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-y-10">
              <div>
                <h2 className="text-white text-3xl sm:text-4xl font-bold">
                  <CountUp start={0} end={400} duration={2} suffix="+" />
                </h2>
                <p className="text-gray-400 text-base sm:text-lg">Clients</p>
              </div>
              <div>
                <h2 className="text-white text-3xl sm:text-4xl font-bold">
                  <CountUp start={0} end={2500} duration={2} suffix="+" />
                </h2>
                <p className="text-gray-400 text-base sm:text-lg">Products</p>
              </div>
              <div>
                <h2 className="text-white text-3xl sm:text-4xl font-bold">
                  <CountUp start={0} end={12} duration={2} suffix="+" />
                </h2>
                <p className="text-gray-400 text-base sm:text-lg">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/images/Digital-Marketing-Experts.jpg"
          alt="Digital marketing experts working together"
          width={1200}
          height={600}
          className="mt-10 rounded-xl max-w-full h-auto mx-auto xl:absolute top-[45%] left-[15%]"
        />
      </section>

      {/* Why Choose Section */}
      <section className="min-h-screen px-4 sm:px-8 py-10 xl:px-28">
        <div className="flex flex-col xl:flex-row items-center justify-around gap-10 mt-10 xl:mt-56">
          <div className="text-center xl:text-left">
            <h1 className="font-bold font-primary text-black text-3xl sm:text-4xl md:text-5xl xl:text-6xl xl:w-[700px] xl:leading-[70px]">
              Why Choose DigiGrowth Pro?
            </h1>
          </div>
          <div className="text-center xl:text-left">
            <p className="font-secondary text-black text-base sm:text-lg md:text-xl xl:w-[800px] xl:mt-10 pb-8">
              At DigiGrowth Pro, we understand that every business is unique. Our customized digital strategies are crafted to meet your specific needs, ensuring you stand out in a competitive market.
            </p>

            <Link
              href="/get-started"
              className="inline-block border border-black bg-black text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 px-4 mt-36 gap-10">
        <ArrowCard
          title="Tailored Strategies"
          description="We create customized digital marketing strategies that align with your unique business objectives. By taking the time to understand your brand and audience, we develop targeted solutions that drive meaningful engagement and growth."
          bgColor="bg-[#E2E2E2]"
          textColor="text-[#000000]"
          borderColor="border-black"
        />
        <ArrowCard
          title="Proven Results"
          description="Our approach is results-driven. We’ve helped businesses across various industries achieve significant growth and ROI through our innovative digital solutions. With DigiGrowth Pro, you can trust that your investment will lead to measurable success."
          bgColor="bg-[#1B1D20]"
          textColor="text-white"
          borderColor="border-white"
          className="xl:transform xl:translate-y-[-40px] shadow-none"
          disableArrow={true}
        />
        <ArrowCard
          title="Expert Team"
          description="Our team comprises industry professionals with years of experience in digital marketing, SEO, content creation, and more. We leverage this expertise to deliver strategies that are not only cutting-edge but also effective in achieving your business goals."
          bgColor="bg-[#E2E2E2]"
          textColor="text-[#000000]"
          borderColor="border-black"
        />
        </div>
      </section>
      
      <section>

      </section>
    </main>
  );
}
