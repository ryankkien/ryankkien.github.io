import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-20">
      <div className="container mx-auto px-4 py-4 flex justify-center space-x-8">
        <a href="#projects" className="text-foreground hover:text-primary">projects</a>
        <a href="#skills" className="text-foreground hover:text-primary">skills</a>
        <a href="#contact" className="text-foreground hover:text-primary">contact</a>
      </div>
    </nav>
  );
};

export default NavBar; 