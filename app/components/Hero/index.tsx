import Image from "next/image";
import hero from "@/public/assets/hero.jpg";
import Button from "@/components/Button";
import DottedPattern from "@/components/DottedPattern";

function Hero() {
  return (
    <div className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center lg:py-24 lg:px-20 md:px-0 sm:pt-10 ">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-left">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Ignite Your Passion,
            <span className="highlight"> Refine Your Skills</span>
          </h2>
          <h3>Where Culinary Dreams Take Flight!</h3>
          <p className="hidden text-gray-500 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <Button text="Join Us" />
        </div>
        <div className=" flex flex-row border mt-12">
          <div>Total student</div>
          <div>eioqwue</div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className="relative inline-block">
          <DottedPattern />
        </span>
        <Image
          alt="cta"
          src={hero}
          className="w-[30vw] object-cover sm:h-[calc(100%-2rem)] sm:self-end sm:rounded-[30px] md:h-[calc(100%-4rem)] md:rounded-[60px] "
        />
      </div>
    </div>
  );
}

export default Hero;
