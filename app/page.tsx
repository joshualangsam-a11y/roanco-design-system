import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Research />
      <Contact />
    </main>
  );
}
