import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContactInfo from "@/components/ContactInfo";
import ServicesSection from "@/components/ServicesSection";
import AboutUsSection from "@/components/AboutUsSection";
import DoctorsCarousel from "@/components/DoctorsCarousel";
import WhyUsSection from "@/components/WhyUsSection";
import DentalHealthSection from "@/components/DentalHealthSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ContactInfo />
      <ServicesSection />
      <AboutUsSection />
      <DoctorsCarousel />
      <WhyUsSection />
      <DentalHealthSection />
    </div>
  );
}
