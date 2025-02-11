import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Product from "@/components/sections/product";
import Investment from "@/components/sections/investment";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Product />
      <Investment />
      <Contact />
    </div>
  );
}
