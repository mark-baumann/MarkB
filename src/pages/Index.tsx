
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <Navigation />
        <Hero />
        <Timeline />
        <Skills />
        <Projects />
        <Blog />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
