import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Programs from "@/components/Programs";
import Pricing from "@/components/Pricing";
import Scheduling from "@/components/Scheduling";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Programs />
      <Pricing />
      <Scheduling />
      <Contact />
      <Footer />
    </>
  );
}
