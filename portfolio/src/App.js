import React from 'react';
import './App.css';
// import { Button } from '@/components/ui/button'; // No longer needed here
import NavBar from '@/components/layout/NavBar';
import HeroSection from '@/components/layout/Header';
import ProjectsSection from '@/components/sections/Projects';
import SkillsSection from '@/components/sections/Skills';
import ContactSection from '@/components/sections/Contact';
// import EducationSection from '@/components/sections/Education'; // Remove Education

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <HeroSection />
      {/* <header className="p-4 border-b">
        <h1 className="text-2xl font-bold">Ryan Kien - Portfolio</h1>
        <Button>Test Button</Button> 
      </header> */} {/* Replaced by Header component */}
      <main className="container mx-auto p-4 md:p-6 space-y-16 md:space-y-24">
        <ProjectsSection />
        <SkillsSection />
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
