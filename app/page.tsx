import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import About from "./components/About";
import Promote from "./components/Promote";
import Programs from "./programs/page";
import Teams from "./components/Teams";

export default function Home() {
  return (
    <>
      <Hero />        
      <About/>   
      <Promote/>
      <Programs/>
      <Testimonials/>
      <Faq/>    
      <Teams/>
    </>
  );
}
