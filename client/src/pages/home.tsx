import Hero from "@/components/sections/hero";
import Map from "@/components/sections/Map";
import MainUses from "@/components/sections/main-uses";
import Investment from "@/components/sections/investment";
import Gallery from "@/components/sections/gallery";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Map />
      <MainUses />
      <Investment />
      <Gallery />
      <Contact />
    </div>
  );
}