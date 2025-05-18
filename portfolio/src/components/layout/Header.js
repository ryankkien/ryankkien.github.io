import React, { useEffect, useState } from "react";
import { Globe2, Activity, Cpu, Code, Users, Award, Twitter, Github, Linkedin } from "lucide-react";
import face from "./face.jpg";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="flex items-center justify-center min-h-screen px-4 py-12 bg-background text-foreground">
      <div className={`container mx-auto flex flex-col md:flex-row items-center justify-center transition-all duration-[2000ms] ease-out ${loaded ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-10 blur-sm"}`}>
        <div className="flex-shrink-0 mb-8 md:mb-0">
          <img src={face} alt="Ryan Kien" className="w-80 h-80 rounded-lg shadow-lg object-cover" />
        </div>
        <div className="md:ml-12 text-center md:text-left space-y-6 max-w-3xl">
          <h1 className="text-5xl font-bold">Hey, I'm Ryan Kien.</h1>
          <p className="text-lg">
            I'm a software developer and AI researcher with experience in full-stack development, machine learning, and data analysis. I build solutions that drive efficiency and uncover insights. Currently pursuing a Master's in Computer Science at Georgia Tech with a focus on Machine Learning and Computer Vision.
          </p>
          <div>
            <h2 className="text-xl font-semibold mb-4">Highlights:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center bg-card/60 backdrop-blur-sm rounded-md p-4 shadow border border-border">
                <Cpu className="w-6 h-6 mr-3 text-muted-foreground" />
                <div>
                  <div className="font-semibold">AI & ML Research</div>
                  <div className="text-sm text-muted-foreground">Improved EEG emotion recognition by 13%</div>
                </div>
              </div>
              <div className="flex items-center bg-card/60 backdrop-blur-sm rounded-md p-4 shadow border border-border">
                <Code className="w-6 h-6 mr-3 text-muted-foreground" />
                <div>
                  <div className="font-semibold">Full-Stack Development</div>
                  <div className="text-sm text-muted-foreground">Launched DateableAI.com (Java Spring Boot & React)</div>
                </div>
              </div>
              <div className="flex items-center bg-card/60 backdrop-blur-sm rounded-md p-4 shadow border border-border">
                <Activity className="w-6 h-6 mr-3 text-muted-foreground" />
                <div>
                  <div className="font-semibold">Data-Driven Insights</div>
                  <div className="text-sm text-muted-foreground">Award-winning analysis (UCLA DataFest, top 1/300+)</div>
                </div>
              </div>
              <div className="flex items-center bg-card/60 backdrop-blur-sm rounded-md p-4 shadow border border-border">
                <Users className="w-6 h-6 mr-3 text-muted-foreground" />
                <div>
                  <div className="font-semibold">Academic Mentorship</div>
                  <div className="text-sm text-muted-foreground">Tutored 300+ students in Python</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-6 pt-8">
            <a href="https://linkedin.com/in/ryankien" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary"><Linkedin className="w-6 h-6" /></a>
            <a href="https://github.com/ryankkien" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary"><Github className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;