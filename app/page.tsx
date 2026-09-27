import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Approach from "../components/Approach";
import Writing from "../components/Writing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PortfolioMotion from "../components/PortfolioMotion";

export default function Home() {
  return (
    <>
      <Navigation />
      <PortfolioMotion>
        <main id="main">
          <Hero />
          <About />
          <Work />
          <Approach />
          <Writing />
          <Contact />
        </main>
        <Footer />
      </PortfolioMotion>
    </>
  );
}
