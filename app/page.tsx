import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContactInfo from "@/components/ContactInfo";
import ServicesSection from "@/components/ServicesSection";
import AboutUsSection from "@/components/AboutUsSection";
import DoctorsCarousel from "@/components/DoctorsCarousel";
import WhyUsSection from "@/components/WhyUsSection";
import DentalHealthSection from "@/components/DentalHealthSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OnlineBookingSection from "@/components/OnlineBookingSection";
import Footer from "@/components/Footer";
import StickyTopBar from "@/components/StickyTopBar";
import ScrollToTop from "@/components/ScrollToTop";
import MapSection from "@/components/MapSection";

export default function Home() {
  return (
    <div>
      <StickyTopBar />
      <Header />
      <HeroSection />
      <ContactInfo />
      <ServicesSection />
      <AboutUsSection />
      <DoctorsCarousel />
      <WhyUsSection />
      <DentalHealthSection />
      <TestimonialsSection />
      <OnlineBookingSection />
      <MapSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
