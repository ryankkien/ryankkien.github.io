import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: "Automated Unit Testing Framework",
    description: "Designed and implemented an automated unit testing framework in Python for PIC16A: Introduction to Python, streamlining the grading of over 500 student code assignments.",
    tags: ["Python", "Unit Testing", "Automation"],
    githubLink: "#", // Replace with actual link
    liveLink: null, // Replace with actual link or remove
  },
  {
    title: "Model Training Workflow Automation",
    description: "Engineered and established a comprehensive model training workflow in a Linux environment by automating data preprocessing, model initialization, and hyperparameter tuning.",
    tags: ["Python", "Linux", "Machine Learning", "Automation"],
    githubLink: "#",
    liveLink: null,
  },
  {
    title: "NLP Model Migration (TensorFlow to PyTorch)",
    description: "Successfully migrated critical machine learning modules for natural language processing tasks from TensorFlow to PyTorch, enhancing model flexibility and reducing average training time.",
    tags: ["PyTorch", "TensorFlow", "NLP", "Python"],
    githubLink: "#",
    liveLink: null,
  },
  {
    title: "UCLA DataFest 2022 - Best Insight Award",
    description: "Developed statistical models and ML algorithms (K-Means, Logistic Regression) to analyze large-scale video game telemetry data, identifying behavioral patterns indicating lack of attentiveness.",
    tags: ["Python", "Pandas", "Scikit-learn", "Data Analysis", "K-Means"],
    githubLink: "#",
    liveLink: null,
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                {project.tags && project.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2 pt-4 border-t">
                {project.githubLink && project.githubLink !== '#' && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
                {project.liveLink && project.liveLink !== '#' && (
                  <Button variant="default" size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 