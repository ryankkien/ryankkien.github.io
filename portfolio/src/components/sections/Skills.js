import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Cpu, Database, Code, Zap, Server, Settings } from 'lucide-react'; // Icons for categories

const skillsData = {
  "Programming Languages": { icon: <Code className="mr-2 h-5 w-5" />, list: ["Python", "Java", "JavaScript", "SQL", "C++"] },
  "Libraries/Frameworks": { icon: <Cpu className="mr-2 h-5 w-5" />, list: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "React", "Node.js", "Flask"] },
  "Web Technologies": { icon: <Zap className="mr-2 h-5 w-5" />, list: ["REST APIs", "JSON"] },
  "Databases": { icon: <Database className="mr-2 h-5 w-5" />, list: ["MySQL", "MongoDB", "PostgreSQL"] },
  "Tools & Platforms": { icon: <Server className="mr-2 h-5 w-5" />, list: ["Git", "Docker", "AWS (Core Services)", "Linux/Unix", "Bash", "Jupyter Notebooks"] },
  "Operating Systems": { icon: <Settings className="mr-2 h-5 w-5" />, list: ["Linux/Unix", "Windows", "macOS"] },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, { icon, list }]) => (
            <div key={category} className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                {icon}
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {list.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 