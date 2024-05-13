import Image from "next/image";
import hero from "@/public/assets/hero.jpg";

function Hero() {
  return (
    <div className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center px-10">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>
          <p className="hidden text-gray-500 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded bg-emerald-600 px-12 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      <Image
        alt="cta"
        src={hero}
        className="w-[30vw] object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </div>
  );
}

export default Hero;
