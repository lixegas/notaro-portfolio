import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Home from "@/components/home/home";
import Navbar from "@/components/navbar/navbar";
import Projects from "@/components/projects";
import Reviews from "@/components/reviews";

export default function Site() {
  return (
    <div className="w-screen h-screen overflow-y-scroll overflow-x-hidden">
      <Navbar/>
      <Home/>
      <Projects/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  );
}
