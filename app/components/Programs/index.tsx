import TwoContent from "@/components/TwoContent";
import Image from "next/image";
import Button from "@/components/Button";
import cuisine from "@/public/assets/program/cuisine.webp"

function Program() {
  return (
    <section className=" h-full">
      <TwoContent title="Bon Appétit Programs">
        <div className=" grid grid-cols-1 gap-4">
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 "
          >
            <Image
              className=" w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={cuisine}
              alt=""
              width={300}
              height={300}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
            <Button text="See Programs" />
          </a>
        </div>
      </TwoContent>
    </section>
  );
}

export default Program;
