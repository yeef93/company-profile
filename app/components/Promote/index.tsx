import Title from "@/components/Title";
import Image from "next/image";
import promotedata from "@/utils/promote";

function Promote() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Title>
          Why <span className=" highlight">Bon Appétit?</span>
        </Title>
        <p className=" text-center text-gray-500">
          With over 6 years of dedicated teaching, we have honed our curriculum
          to provide the best education in baking and patisserie.
        </p>
      </div>
      <div className="grid grid-cols-1 text-center sm:grid-cols-1 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0">
        {promotedata.map((item) => {
          return (
            <div
              key={item.id}
              className="md:p-8 lg:p-14 flex flex-col justify-center items-center"
            >
              <div
                className={`w-14 h-14 rounded-full flex justify-center items-center ${item.bg}`}
              >
                <Image
                  alt={item.title}
                  src={`/assets/promote/${item.image}`}
                  className="text-3xl text-gray-900"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-5 text-base text-gray-600">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Promote;
