"use client";
import { aboutData } from "@/utils/aboutUs";
import Button from "@/components/Button";
import TwoContent from "@/components/TwoContent";
import BackgroundImage from "@/components/BackgroundImage";

function About() {
  return (
    <section className="h-screen w-full">
      <BackgroundImage imageUrl="bg1.jpg">-</BackgroundImage>
      <TwoContent title="About Us">
        <div>
          <span className="text-3xl highlight">Bon Appétit</span> 
          <p>{aboutData.aboutUs}</p>
        </div>
        <Button text="Read More" link="/about" />
      </TwoContent>
    </section>
  );
}

export default About;
