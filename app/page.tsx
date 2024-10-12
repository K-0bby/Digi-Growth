"use client";

import { Navbar } from "@/components/Navbar";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import ArrowCard from "@/components/ArrowCard";
import { ArrowRight } from "lucide-react";
import TestimonialCarousel from "@/components/Testimonial";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

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
              Unlock your business’s full potential with tailored digital
              strategies that drive growth, enhance visibility, and deliver
              measurable results.
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
                <p className="text-gray-400 text-base sm:text-lg">
                  Years Experience
                </p>
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
              At DigiGrowth Pro, we understand that every business is unique.
              Our customized digital strategies are crafted to meet your
              specific needs, ensuring you stand out in a competitive market.
            </p>

            <Link
              href="/get-started"
              className="inline-block border border-black bg-black text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 px-4 mt-28 gap-10">
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
            className="xl:transform xl:translate-y-[-40px] shadow-none filter-none drop-shadow-none"
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

      {/* How our proven process delivers results */}
      <section
        className="px-4 sm:px-8 xl:px-28 relative pb-20 mt-20"
        style={{
          backgroundImage: "url('/images/Background-Noise.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col xl:flex-row items-center justify-around ">
          <div className="text-center xl:text-left py-10 xl:py-20">
            <h1 className="font-bold font-primary text-black text-3xl sm:text-3xl md:text-4xl xl:text-5xl xl:w-[700px] xl:leading-[70px]">
              How Our Proven Process Delivers Results
            </h1>
          </div>
          <div className="text-center xl:text-left">
            <p className="font-secondary text-[#878C91] text-base sm:text-base md:text-lg xl:w-[800px] xl:mt-10 pb-8">
              Our proven process is designed to deliver results that drive your
              business forward. From the initial consultation to ongoing
              optimization, we ensure every step is tailored to meet your unique
              needs and objectives. We leverage this expertise to deliver
              strategies.
            </p>
          </div>
        </div>

        {/* Right Section: Number & Team Image */}
        <div className="flex flex-col xl:flex-row gap-10 items-center justify-between">
          {/* Stats Card */}
          <div
            className="text-white rounded-3xl p-10 w-full max-w-[583.7px] h-auto xl:h-[480px]"
            style={{
              backgroundImage: "url('/images/Card-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-5xl xl:text-8xl font-bold font-primary">
              <CountUp start={0} end={830} duration={2} suffix="+" />
            </h2>
            <p className="text-[#878C91] mt-4 font-primary text-md xl:text-2xl">
              Projects finished superbly
            </p>
            <div className="flex  mt-[160px] space-x-5 items-center justify-center">
              {/* Team Avatars */}
              <Image
                src="/images/avatar1.jpeg"
                alt="Avatar 1"
                width={97}
                height={97}
                className="rounded-full object-cover w-[50px] h-[50px] xl:w-[80px] xl:h-[80px]"
              />
              <Image
                src="/images/avatar2.jpeg"
                alt="Avatar 2"
                width={97}
                height={97}
                className="rounded-full object-cover w-[50px] h-[50px] xl:w-[80px] xl:h-[80px]"
              />
              <Image
                src="/images/avatar3.jpeg"
                alt="Avatar 3"
                width={97}
                height={97}
                className="rounded-full object-cover w-[50px] h-[50px] xl:w-[80px] xl:h-[80px]"
              />
              <Image
                src="/images/avatar4.jpeg"
                alt="Avatar 4"
                width={97}
                height={97}
                className="rounded-full object-cover w-[50px] h-[50px] xl:w-[80px] xl:h-[80px]"
              />
              <span className="flex justify-center items-center text-4xl xl:text-8xl font-semibold">
                +
              </span>
            </div>
          </div>

          {/* Team Image with Overlay */}
          <div className="relative w-full max-w-[900px]">
            <Image
              src="/images/Hire-a-Digital-Marketing-Team-or-Outsource-to-an-Agency-3-Options-for-You-to-Consider_1 1.jpg"
              alt="How We Work"
              width={500}
              height={500}
              className="rounded-3xl w-full h-[470px] object-cover"
            />
            <span className="absolute bottom-44 left-12 md:left-48 xl:top-52 xl:left-64 text-white text-2xl xl:text-4xl font-bold tracking-[8px]">
              HOW WE WORK
            </span>
          </div>
        </div>
      </section>

      <section className="h-auto px-4 sm:px-8 xl:px-28 relative pb-20 mt-20">
        <div className="flex flex-col xl:flex-row gap-10 items-center justify-between">
          {/* Stats Card */}
          <div
            className="text-white rounded-3xl p-10 w-full max-w-[1783px] h-auto xl:h-[280px] flex flex-col xl:flex-row items-center justify-between px-4 xl:px-40"
            style={{
              backgroundImage: "url('/images/Card-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-4xl sm:text-5xl xl:text-5xl font-bold font-primary text-center xl:text-left mb-4">
              Ready to work with us?
            </h2>
            <Link
              href="/get-started"
              className="flex justify-center items-center gap-4 w-full sm:w-[200px] border border-white bg-white text-black py-2 px-6 rounded-3xl transition-all duration-300 mt-4 xl:mt-0 xl:ml-4"
            >
              Get Started <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* testimonial section */}
      <TestimonialCarousel />

      {/* footer */}
      <footer className="bg-[#1f1f1f] text-white py-12 rounded-t-3xl px-4 sm:px-8 xl:px-20">
        {/* Company Section */}
        <div className="flex flex-col lg:flex-row items-center justify-around mb-8 pb-8 border-b border-gray-700">
          <h2 className="text-5xl font-bold font-primary">DigiGrowth</h2>
          <p className="mt-4 text-sm lg:w-1/4 font-secondary leading-6 text-center lg:text-left">
            Unlock your business full potential with tailored digital strategies
            that drive growth, enhance visibility, and deliver measurable
            results.
          </p>
        </div>
    
        <div className="container mx-auto px-4 xl:px-24 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Links Section */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4 text-xl font-primary uppercase">Company</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:underline">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="hover:underline">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4 text-xl font-primary uppercase">Support</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/getting-started" className="hover:underline">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link href="/help-center" className="hover:underline">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/server-status" className="hover:underline">
                    Server Status
                  </Link>
                </li>
                <li>
                  <Link href="/report-bug" className="hover:underline">
                    Report a Bug
                  </Link>
                </li>
                <li>
                  <Link href="/chat-support" className="hover:underline">
                    Chat Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-semibold mb-4 text-xl font-primary uppercase">Products</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/features" className="hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/review" className="hover:underline">
                    Review
                  </Link>
                </li>
                <li>
                  <Link href="/update" className="hover:underline">
                    Update
                  </Link>
                </li>
              </ul>
            </div>

            {/* Downloads */}
            <div>
              <h3 className="font-semibold mb-4 text-xl font-primary uppercase">Downloads</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/downloads/ios" className="hover:underline">
                    iOS
                  </Link>
                </li>
                <li>
                  <Link href="/downloads/android" className="hover:underline">
                    Android
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4 text-md font-primary uppercase">Subscribe to our Newsletter</h3>
            <p className="text-sm mb-4 leading-6">
              Subscribe today to receive the latest updates, exclusive content,
              and valuable insights delivered right to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full bg-gray-800 text-white  focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full font-secondary"
              />
            </div>
            <button className="bg-white text-gray-900 font-medium px-4 py-2 rounded-full mt-5 font-secondary">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm mx-10 text-center">
            &copy; 2024 DigiGrowth. All Rights Reserved | Designed by Laiba Farooq & Developed by Gideon Korbla Hoenyefia
          </p>
          <div className="mt-4 lg:mt-0 flex space-x-4 px-12">
            <Link href="https://facebook.com" aria-label="Facebook">
              <Facebook className="w-6 h-6 hover:opacity-75" />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <Instagram className="w-6 h-6 hover:opacity-75" />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 hover:opacity-75" />
            </Link>
            <Link href="https://youtube.com" aria-label="YouTube">
              <Youtube className="w-6 h-6 hover:opacity-75" />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
