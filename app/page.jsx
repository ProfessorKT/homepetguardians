import Image from "next/image";
import HomeSection from "./components/HomeSection";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HomeSection />
      <Services />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
}
