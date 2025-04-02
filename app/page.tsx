import Header from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* <div className="container mx-auto px-4 md:px-8 lg:px-12"> */}

          <HeroSection />
          <AboutSection />
          <Project />
        </div>
      </main>
      <Footer />
    </div>
  );
}
