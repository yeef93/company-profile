"use client";
import Title from "@/components/Title";
import programdata from "@/utils/program";
import Image from "next/image";
import Testimonials from "../components/Testimonials";

function Programs() {
  return (
    <section>
      <div className="mx-auto max-w-screen-sm text-center ">
        <h2 className=" lg:text-sm md:text-xs text-center uppercase text-gray-500">
          Programs
        </h2>
        <Title>
          <span className=" highlight">Bon Appétit</span> Program
        </Title>
      </div>

      {programdata.map((item) => {
        return (
          <div
            key={item.id}
            className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6  border-b-2"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl tracking-tight font-bold text-primary-800">
                {item.groupName}
              </h2>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="mr-0 md:mr-8 mb-6 md:mb-0">
                <Image
                  className="w-1/2 md:w-full mx-auto"
                  src={`/assets/program/${item.image}`}
                  alt={item.groupName}
                  width={300}
                  height={300}
                />
              </div>

              <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                <div className="w-full sm:w-1/2 mb-4 px-2 ">
                  <div className="h-full py-4 px-6 border border-yellow-300 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">
                      Overview:
                    </h3>
                    <p className="text-sm">{item.overview}</p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 mb-4 px-2 ">
                  <div className="h-full py-4 px-6 border border-yellow-300 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">
                      Curriculum:
                    </h3>
                    <ul className="list-disc ml-4">
                      {item.curriculum.map((highlight, index) => (
                        <li key={index} className="text-sm">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 mb-4 px-2 ">
                  <div className="h-full py-4 px-6 border border-yellow-300 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">
                      Opportunities:
                    </h3>
                    <p className="text-sm">{item.opportunities}</p>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 mb-4 px-2">
                  <div className="h-full py-4 px-6 border border-yellow-500 border-t-0 border-l-0 rounded-br-xl bg-yellow-500 font-bold">
                    Price:
                    <h3 className=" text-8xl font-bold text-md mb-6 text-white">
                      {item.price}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <Testimonials />
    </section>
  );
}

export default Programs;
