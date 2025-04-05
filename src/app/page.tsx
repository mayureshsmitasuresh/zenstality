import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <div>
        <HeroSection />
      </div>
      <Footer />
    </section>
  );
}
