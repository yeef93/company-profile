import BackgroundImage from "@/components/BackgroundImage";
import Title from "@/components/Title";
import TeamList from "../components/TeamList";

function About() {
  return (
    <section className="bg-white ">
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className=" lg:text-sm md:text-xs text-center uppercase text-gray-500">
            About Us
          </h2>
          <Title>
           About 
            <span className=" highlight"> Bon Appétit</span>
          </Title>          
        </div>
      </div>
      <TeamList/>
    </section>
  );
}

export default About;
