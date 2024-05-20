import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import About from "./components/About";
import Promote from "./components/Promote";
import Programs from "./components/Programs";
import TeamList from "./components/TeamList";

export default function Home() {
  return (
    <>
      <Hero />        
      <About/>   
      <Promote/>
      <Programs/>
      <Testimonials/>
      <Faq/>   
      <TeamList/>
    </>
  );
}
