import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { Values } from "@/components/Values";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Values />
      <Reviews />
      <About />
      <Contact />
    </main>
  );
}
