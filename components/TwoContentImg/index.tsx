import Image, { StaticImageData } from "next/image";
import React from "react";
import { ReactNode } from "react";

interface TwoContentImgProps {
    image:StaticImageData;
    className?: string;
    children: ReactNode;
}

function TwoContentImg({image, className, children}:TwoContentImgProps) {
  return (
    <section className={`relative flex flex-wrap lg:h-screen lg:items-center ${className}`}>
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        {children}
      </div>
      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <Image
          alt=""
          src={image}
          className="absolute inset-0 h-full w-full object-cover"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}

export default TwoContentImg;
