"use client";
import TwoContent from "@/components/TwoContent";
import Image from "next/image";
import Button from "@/components/Button";
import programdata from "@/utils/program";

function Program() {
  return (
    <section>
      <TwoContent title="Bon Appétit Programs">
        <div className=" grid grid-cols-1 gap-10">
          {programdata.map((item) => {
            return (
              <a key={item.id}
                href="/programs"
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 "
              >
                <Image
                  className=" w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={`/assets/program/${item.image}`}
                  alt=""
                  width={300}
                  height={300}
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {item.programName}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 ">
                    {item.detail}
                  </p>
                </div>
                <Button text="See Programs" />
              </a>
            );
          })}
        </div>
      </TwoContent>
    </section>
  );
}

export default Program;
