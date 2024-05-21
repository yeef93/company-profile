import React from "react";
import { aboutData } from "@/utils/aboutUs";
import Title from "@/components/Title";
import TeamList from "../components/TeamList";
import RunningText from "@/components/RunningText";
import TwoContentImg from "@/components/TwoContentImg";
import cuisine from "@/public/assets/program/cuisineimage.webp";

function About() {
  return (
    <div>
      <TwoContentImg className=" flex-row-reverse -mt-3 " image={cuisine}>
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
      </TwoContentImg>
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
