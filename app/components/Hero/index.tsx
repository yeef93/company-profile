"use client";
import Image from "next/image";
import hero from "@/public/assets/hero/hero.webp";
import Button from "@/components/Button";
import DottedPattern from "@/components/DottedPattern";

function Hero() {
  return (
    <section>
      <div className="h-screen w-full flex lg:flex-row md:flex-col justify-center py-20 gap-6">
        <div>
          <div className="mx-auto max-w-xl text-left pt-16">
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
              professional chef in the industry.
            </p>
            <p className="text-gray-500">
              Culinary & Pastry Course Program For 6 Months
              <br />
              Don&apos;t miss the chance to learn from export chefs and become
              professional chef in the industry
            </p>
            <Button text="Join Us" />
          </div>
          <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-y-8 ">
            <div className="mb-12 text-center border-r-0 md:mb-0 md:border-r-2 md:last:border-r-0">
              <div className="font-heading text-4xl font-bold sm:text-2xl lg:text-6xl text-darkTangerine">
                6
              </div>
              <p className="text-sm font-medium uppercase tracking-widest text-gray-800 lg:text-base">
                Years
              </p>
            </div>
            <div className="mb-12 text-center border-r-0 md:mb-0 md:border-r-2 md:last:border-r-0">
              <div className="font-heading text-4xl font-bold sm:text-2xl lg:text-6xl text-darkTangerine">
                300+
              </div>
              <p className="text-sm font-medium uppercase tracking-widest text-gray-800 lg:text-base">
                Alumni
              </p>
            </div>
            <div className="mb-12 text-center border-r-0 md:mb-0 md:last:border-r-0">
              <div className="font-heading text-4xl font-bold sm:text-2xl lg:text-6xl text-darkTangerine">
                10
              </div>
              <p className="text-sm font-medium uppercase tracking-widest text-gray-800 lg:text-base">
                Awards
              </p>
            </div>
          </div>
        </div>
        <div>
          <span className="relative inline-block">
            <DottedPattern />
          </span>
          <Image
            alt="hero"
            src={hero}
            className="object-cover rounded-s-3xl h-auto"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
