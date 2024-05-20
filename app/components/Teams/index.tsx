import Title from "@/components/Title";
import Image from "next/image";

function Teams() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className=" lg:text-sm md:text-xs text-center uppercase text-gray-500">
          The Team
        </h2>
        <Title>
          Our <span className=" highlight">People</span>
        </Title>
        <div className=" mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <blockquote className="rounded-lg bg-gray-50 p-0 shadow-sm sm:p-8 hover:shadow-lg hover:bg-yellow-200">
            <div className="flex items-center gap-4">
              <Image
                alt=""
                src="/assets/testimoni/testimonial1.png"
                className="size-14 rounded-full object-cover"
                width={200}
                height={200}
              />

              <div>
                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  jdhsd
                </p>
                <span className=" text-stabiloOrange text-sm ">
                  Student From sdfsdf
                </span>
              </div>
            </div>
            <p className="mt-4 text-gray-700">dfdfsd</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default Teams;
