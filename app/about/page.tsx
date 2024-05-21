import React from "react";
import { aboutData } from "@/utils/aboutUs";
import TwoContent from "@/components/TwoContent";
import Title from "@/components/Title";
import TwoContentRight from "@/components/TwoContentRight";
import TeamList from "../components/TeamList";
import RunningText from "@/components/RunningText";

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
        <TwoContentRight title="Vision">
          <p>{aboutData.vision}</p>
        </TwoContentRight>
      </div>
      <div>
        <TwoContent title="Mission">
          <p>{aboutData.mission}</p>
        </TwoContent>
      </div>
      <RunningText className=" bg-stabiloOrange p-2">
        <p className=" lg:text-4xl md:text-xl" >{aboutData.culture.values}</p>
      </RunningText>
      <TeamList />
    </div>
  );
}

export default About;
