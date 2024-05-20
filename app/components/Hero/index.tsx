"use client";
import Image from "next/image";
import hero from "@/public/assets/hero/hero.webp";
import Button from "@/components/Button";
import DottedPattern from "@/components/DottedPattern";

function Hero() {
  return (
    <section className="relative overflow-hidden lg:px-20 sm:px-2">
      <div className="container mx-auto py-20 lg:py-32 px-4 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="pt-8 lg:pt-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
                Ignite Your Passion,
                <span className="highlight"> Refine Your Skills</span>
              </h2>
              <h3 className="animate-typing overflow-hidden font-mono whitespace-nowrap border-r-4 border-r-white pr-5 font-bold text-base sm:text-lg md:text-xl">
                Where Culinary Dreams Take Flight!
              </h3>
              <p className="hidden text-gray-500 md:mt-4 md:block">
                Bon Appétit has been trusted since 2018
                <br />
                and has transformed more than 300 high-quality
                <br />
                professional chefs in the industry.
              </p>
              <p className="text-gray-500 mt-4 md:mt-0">
                Culinary & Pastry Course Program For 6 Months
                <br />
                Don&apos;t miss the chance to learn from expert chefs and become
                a professional chef in the industry.
              </p>
              <Button text="Join Us" link="/register" />
            </div>
            <div className="pt-8 lg:pt-16 grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-y-0 sm:gap-x-8 w-full">
              <div className="text-center sm:border-r-2 sm:last:border-r-0">
                <div className="font-heading text-4xl font-bold sm:text-2xl lg:text-6xl text-darkTangerine">
                  6
                </div>
                <p className="text-sm font-medium uppercase tracking-widest text-gray-800 lg:text-base">
                  Years
                </p>
              </div>
              <div className="text-center sm:border-r-2 sm:last:border-r-0">
                <div className="font-heading text-4xl font-bold sm:text-2xl lg:text-6xl text-darkTangerine">
                  300+
                </div>
                <p className="text-sm font-medium uppercase tracking-widest text-gray-800 lg:text-base">
                  Alumni
                </p>
              </div>
              <div className="text-center">
                <div className="font-heading text-4xl font-bold sm:text-2xl lg:text-6xl text-darkTangerine">
                  10
                </div>
                <p className="text-sm font-medium uppercase tracking-widest text-gray-800 lg:text-base">
                  Awards
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative inline-block">
              <DottedPattern />
              <Image
                alt="hero"
                src={hero}
                className="object-cover rounded-s-3xl h-auto"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
