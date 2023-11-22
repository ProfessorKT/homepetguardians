import React from "react";
import RootLayout from "../app/layout.jsx"; // replace with the correct path to your layout.js file
import HomeSection from "@/components/HomeSection.jsx";
import ServicesSection from "@/components/ServicesSection.jsx";
import AboutUsSection from "@/components/AboutUsSection.jsx";
import ContactSection from "@/components/ContactSection.jsx";
import Footer from "@/components/Footer.jsx";

export default function Home() {
  return (
    <RootLayout>
      <HomeSection />
      <ServicesSection />
      <AboutUsSection />
      <ContactSection />
      <Footer />
    </RootLayout>
  );
}
