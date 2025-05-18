import React, { useCallback } from "react";

const NavBar = () => {
  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const navHeight = document.querySelector('nav').offsetHeight;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;
    const easeOutQuad = (t) => t * (2 - t);

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * easeOutQuad(percent));
      if (progress < duration) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-20 font-bold">
      <div className="container mx-auto px-4 py-4 flex justify-center space-x-8">
        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-foreground hover:text-primary">projects</a>
        <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="text-foreground hover:text-primary">skills</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-foreground hover:text-primary">contact</a>
      </div>
    </nav>
  );
};

export default NavBar; 