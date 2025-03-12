import Hero from "@/components/sections/hero";
import Map from "@/components/sections/Map";
import MoreThanMine from "@/components/sections/more-than-mine";
import WhatIsPerlite from "@/components/sections/what-is-perlite";
import MineralFuture from "@/components/sections/mineral-future";
import Investment from "@/components/sections/investment";
// import StrategicDelivery from "@/components/sections/strategic-delivery";
import Deposits from "@/components/sections/deposits";
import Bibliography from "@/components/sections/bibliography";
import Gallery from "@/components/sections/gallery";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Map />
      <MoreThanMine />
      <WhatIsPerlite />
      <MineralFuture />
      <Investment />
      {/* <StrategicDelivery /> */}
      <Deposits />
      <Bibliography />
      <Gallery />
      <Contact />
    </div>
  );
}