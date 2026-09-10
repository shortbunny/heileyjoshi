import { C } from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Extra from "./components/Extra";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div style={{ background: C.cream }}>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Work />
      <Projects />
      <Extra />
      <Contact />
    </div>
  );
}