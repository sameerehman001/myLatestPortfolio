import Navbar from "@/components/navbar/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
import Experience from "./sections/Experience";
import StartProject from "./sections/StartProject";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div className="pt-20 pb-0 px-20 max-[1000px]:px-10 max-[1000px]:pt-10 max-[550px]:px-5 max-[550px]:pt-5">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Work />
      <Experience />
      <StartProject />
      <Footer />
    </div>
  );
}
