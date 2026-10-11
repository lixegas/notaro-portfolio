import Contact from "@/components/contact";
import Effects from "@/components/effects";
import Footer from "@/components/footer";
import Home from "@/components/home/home";
import Navbar from "@/components/navbar/navbar";
import Projects from "@/components/projects";
import Reviews from "@/components/reviews";
import TechRibbon from "@/components/tech-ribbon";

export default function Site() {
  return (
    <>
      <Effects/>
      <Navbar/>
      <main>
        <Home/>
        <TechRibbon/>
        <Projects/>
        <Reviews/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}
