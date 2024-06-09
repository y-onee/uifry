import Image from "next/image";
import HeroPage from "./components/HeroPage";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import "../public/Fonts/WEB/css/clash-display.css"


export default function Home() {
  return (
    <main>
      <HeroPage />
      <Features />
      <Testimonials />
      <Pricing />
      <Gallery />
      <Contact />
    </main>
  );
}
