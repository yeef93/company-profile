import Title from "@/components/Title";
import testimonidata from "@/utils/testimonials";
import Image from "next/image";

function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Title text="What people are saying." />
        <div className=" mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {testimonidata.map((item) => {
            return (
              <blockquote
                key={item.id}
                className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <Image
                    alt=""
                    src={`/assets/testimoni/${item.image}`}
                    className="size-14 rounded-full object-cover"
                    width={200}
                    height={200}
                  />

                  <div>
                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      {item.name}
                    </p>
                    <span className=" text-gray-500 text-sm ">
                      Student From {item.origin}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{item.testimoni}</p>
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
