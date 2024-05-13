import Title from "@/components/Title";

interface TestimoniProps {
  name: string;
  origin: string;
  image: string;
  testimoni: string;
}

function Testimonials({ name, origin, image, testimoni }: TestimoniProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Title text="Testimonials" />
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="size-14 rounded-full object-cover"
              />

              <div>
                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  {name}
                </p>
                <span className=" text-gray-500 text-sm ">
                  Student From {origin}
                </span>
              </div>
            </div>

            <p className="mt-4 text-gray-700">{testimoni}</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;