"use client";
import Button from "@/components/Button";
import TwoContent from "@/components/TwoContent";
import BackgroundImage from "@/components/BackgroundImage";

function About() {
  return (
    <section className=" h-full">
      <BackgroundImage imageUrl="bg1.jpg">-</BackgroundImage>
      <TwoContent title="About Us">
        <div>
          {" "}
          <span className=" text-3xl highlight"> Bon Appétit</span> is a market
          leading educator that is revolving around the Cookery and Pastry
          industry. As a school who dedicates all of the passion in Cookery and
          Pastry industry, we value our students and we are very student
          oriented. With the guidance provided by our educators, we will help
          our students to grow their culinary skills and meanwhile we are trying
          our best to build their character and creativity as a chef. All
          students who are from Bon Appétit School shall be ready for working
          environment, especially in their respective expertise in both Cookery
          and Pastry. Graduates from Bon Appétit School shall be also with critical
          thinking skill that will help them to strive in their career..
        </div>
        <Button text="Read More" />
      </TwoContent>
    </section>
  );
}

export default About;
