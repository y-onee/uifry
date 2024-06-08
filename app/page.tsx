import Image from "next/image";
import HeroPage from "./components/HeroPage";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <div>
        Hello World
      </div>
      {/* <img src="./Frame 1.png" alt=""/> */}
      <HeroPage />
      <Features />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Contact />
    </main>
  );
}
