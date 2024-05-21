import React from "react";
import { aboutData } from "@/utils/aboutUs";
import Title from "@/components/Title";
import TeamList from "../components/TeamList";
import RunningText from "@/components/RunningText";
import ContentImgRight from "@/components/TwoContentImg";
import barista from "@/public/assets/program/barista.webp";

function About() {
  return (
    <div>
      <ContentImgRight className=" flex-row-reverse -mt-3 " image={barista}>
        <div className="mx-auto max-w-screen-sm text-center ">
          <h2 className=" lg:text-sm md:text-xs text-center uppercase text-gray-500">
            About
          </h2>
          <Title>
            <span className=" highlight">Bon Appétit</span> <br />
            Cuisine & Patisserie School
          </Title>
        </div>
        <p className=" p-2">{aboutData.aboutUs}</p>
        <Title>Vision</Title>
        <p className=" p-2">{aboutData.vision}</p>
        <Title>Mision</Title>
        <p className=" p-2">{aboutData.mission}</p>
      </ContentImgRight>
      <RunningText className=" bg-tangerine p-2">
        <p className=" text-white lg:text-4xl md:text-xl">
          {aboutData.culture.values}
        </p>
      </RunningText>
      <TeamList />
    </div>
  );
}

export default About;
