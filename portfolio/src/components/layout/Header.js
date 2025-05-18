import React, { useEffect, useState } from "react";
import { Globe2, Activity, BookTemplate, Twitter, Github } from "lucide-react";
import face from "./face.jpg";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="flex items-center justify-center min-h-screen px-4 py-12 bg-background text-foreground">
      <div className={`container mx-auto flex flex-col md:flex-row items-center justify-center transition-opacity transition-transform duration-[2000ms] ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="flex-shrink-0 mb-8 md:mb-0">
          <img src={face} alt="Ryan" className="w-64 h-64 rounded-lg shadow-lg object-cover" />
        </div>
        <div className="md:ml-12 text-center md:text-left space-y-6">
          <h1 className="text-5xl font-bold">Hey, I'm Ryan.</h1>
          <p className="text-lg max-w-md">I've done plenty of things: from building websites to preprocessing data for machine learning. I'm currently a master's student at Georgia Tech studying computer science.</p>
          <div>
            <h2 className="text-xl font-semibold mb-4">Creator of:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center bg-card/60 backdrop-blur-sm rounded-md p-4 shadow border border-border">
                <Globe2 className="w-6 h-6 mr-3 text-muted-foreground" />
                <div>
                  <div className="font-semibold">Anki Plugins</div>
                  <div className="text-sm text-muted-foreground">lock-in your learning</div>
                </div>
              </div>
              <div className="flex items-center bg-card/60 backdrop-blur-sm rounded-md p-4 shadow border border-border">
                <Activity className="w-6 h-6 mr-3 text-muted-foreground" />
                <div>
                  <div className="font-semibold">DateableAI.com</div>
                  <div className="text-sm text-muted-foreground">fix your profile, dude</div>
                </div>
              </div>
              {/* <div className="flex items-center bg-card/60 backdrop-blur-sm rounded-md p-4 shadow border border-border">
                <BookTemplate className="w-6 h-6 mr-3 text-muted-foreground" />
                <div>
                  <div className="font-semibold">react academy</div>
                  <div className="text-sm text-muted-foreground">learn the right way</div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold">47+</div>
              <div className="text-sm text-muted-foreground">conferences</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">47+</div>
              <div className="text-sm text-muted-foreground">workshops</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">70k+</div>
              <div className="text-sm text-muted-foreground">x followers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">5k+</div>
              <div className="text-sm text-muted-foreground">twitch followers</div>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-8 pt-8">
            <div className="flex items-center">
              <img src="/techcrunch.png" alt="TechCrunch" className="h-6" />
              <span className="ml-2 text-sm">featured on</span>
            </div>
            <div className="flex items-center">
              <img src="/ycombinator.png" alt="Y Combinator" className="h-6" />
              <span className="ml-2 text-sm">7x viral on</span>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-6 pt-8">
            <a href="#" className="text-foreground hover:text-primary"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="text-foreground hover:text-primary"><Github className="w-6 h-6" /></a>
            <a href="#" className="text-foreground hover:text-primary"><Globe2 className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 