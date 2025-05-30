import React, { useEffect } from 'react';
import './App.css';
// import { Button } from '@/components/ui/button'; // No longer needed here
import NavBar from '@/components/layout/NavBar';
import HeroSection from '@/components/layout/Header';
import ExperienceSection from '@/components/sections/Experience';
import SkillsSection from '@/components/sections/Skills';
import InterestsSection from '@/components/sections/Interests';
import ContactSection from '@/components/sections/Contact';
// import EducationSection from '@/components/sections/Education'; // Remove Education

function App() {
  useEffect(() => {
    let velocity = 0;
    let ticking = false;
    let animationFrame;

    const onWheel = (e) => {
      e.preventDefault();
      velocity += e.deltaY;
      if (!ticking) {
        ticking = true;
        animationFrame = requestAnimationFrame(updateScroll);
      }
    };

    const updateScroll = () => {
      window.scrollBy(0, velocity);
      velocity *= 0.9; //friction
      if (Math.abs(velocity) > 0.5) {
        animationFrame = requestAnimationFrame(updateScroll);
      } else {
        ticking = false;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', onWheel);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <HeroSection />
      {/* <header className="p-4 border-b">
        <h1 className="text-2xl font-bold">Ryan Kien - Portfolio</h1>
        <Button>Test Button</Button> 
      </header> */} {/* Replaced by Header component */}
      <main className="container mx-auto p-4 md:p-6 space-y-16 md:space-y-24">
        <ExperienceSection />
        <SkillsSection />
        <InterestsSection />
        <ContactSection />
        {/* <EducationSection /> */}
      </main>
      <footer className="p-4 border-t text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Ryan Kien</p>
      </footer>
    </div>
  );
}

export default App;
