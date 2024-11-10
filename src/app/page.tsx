
import Hero from "./components/hero";
import Contact from "./components/contact";
import About from "./components/about";
import Skill from "./components/skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Contact />
    </div>
  );
}
