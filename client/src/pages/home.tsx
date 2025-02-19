import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Deposits from "@/components/sections/deposits";
import Gallery from "@/components/sections/gallery";
import Investment from "@/components/sections/investment";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Deposits />
      <Gallery />
      <Investment />
      <Contact />
    </div>
  );
}