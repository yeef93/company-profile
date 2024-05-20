import Title from "@/components/Title";
import Image from "next/image";
import promotedata from "@/utils/promote";

function Promote() {
  return (
    <section className="bg-yellow-300 py-4 ">
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
        <Title>
           <span className=" highlight">Bon Appétit?</span>
        </Title>
        <p className=" text-center text-gray-800">
          With over 6 years of dedicated teaching, we have honed our curriculum
          to provide the best education in baking and patisserie.
        </p>
      </div>
      <div className="grid grid-cols-1 text-center sm:grid-cols-1 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0">
        {promotedata.map((item) => {
          return (
            <div
              key={item.id}
              className="md:p-8 flex flex-col justify-center items-center"
            >
              <div
                className={`w-14 h-14 rounded-full flex justify-center items-center bg-stabiloOrange`}
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
              <p className="mt-5 text-base text-gray-800">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Promote;
