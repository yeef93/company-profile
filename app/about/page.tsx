import React from "react";
import { aboutData } from "@/utils/aboutUs";
import TwoContent from "@/components/TwoContent";
import Title from "@/components/Title";

function About() {
  return (
    <div>
      <div className="mx-auto max-w-screen-sm text-center ">
        <h2 className=" lg:text-sm md:text-xs text-center uppercase text-gray-500">
          About
        </h2>
        <Title>
          <span className=" highlight">Bon Appétit</span> <br />
          Cuisine & Patisserie School
        </Title>
      </div>
      <div>
        <TwoContent title="Overview">
          <p>{aboutData.companyHistory}</p>
        </TwoContent>
      </div>
      <div>
        <TwoContent title="Vision">
          <p>{aboutData.vision}</p>
        </TwoContent>
      </div>
      <div>
        <TwoContent title="Mission">
          <p>{aboutData.mission}</p>
        </TwoContent>
      </div>
      <div>
        <h2>Culture</h2>
        <p>{aboutData.culture.values}</p>
      </div>
    </div>
  );
}

export default About;
