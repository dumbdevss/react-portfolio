import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Writing from '../components/Writing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollRefresh from '../components/ScrollRefresh';

export default function Home() {
  return (
    <>
      <ScrollRefresh />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Work />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
