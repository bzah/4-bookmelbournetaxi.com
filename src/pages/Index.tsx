import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MelbourneInfoWidget from "@/components/MelbourneInfoWidget";
import TaxiRoutesSection from "@/components/TaxiRoutesSection";
import AttractionsSection from "@/components/AttractionsSection";
import ToursSection from "@/components/ToursSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <TaxiRoutesSection />
      <AttractionsSection />
      <ToursSection />
      <FAQSection />
    </main>
    <Footer />
  </>
);

export default Index;
