
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Timeline />
      <Skills />
      <Projects />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
