import Header from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <HeroSection />
          <AboutSection />
          <Project />
        </div>
      </main>
      <Footer />
    </div>
  );
}
