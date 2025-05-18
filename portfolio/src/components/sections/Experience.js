import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    institution: "Numao Lab, Osaka University",
    role: "Software Developer / Researcher",
    location: "Osaka, Japan",
    dates: "Sep 2023 – Feb 2024",
    details: [
      "Enhanced CNN models for EEG-based emotion recognition",
      "Built automated training pipelines with PyTorch and Docker",
      "Updated and maintained the lab's website",
    ],
  },
  {
    institution: "UCLA Department of Computer Science",
    role: "Learning Assistant",
    location: "Los Angeles, CA, USA",
    dates: "Sep 2022 – Jun 2023",
    details: [
      "Designed automated unit testing framework for Python assignments",
      "Mentored over 200 students in Python programming workshops",
    ],
  },
  {
    institution: "Language Processing Lab, UCLA",
    role: "Data Analyst",
    location: "Los Angeles, CA, USA",
    dates: "May 2022 – Aug 2023",
    details: [
      "Automated preprocessing and analysis of audio and linguistic data",
      "Applied signal processing techniques to improve data quality",
    ],
  },
  {
    institution: "Credent Real Estate",
    role: "Full Stack Developer",
    location: "Huntington Beach, CA, USA",
    dates: "Jun 2020 – Aug 2021",
    details: [
      "Developed responsive features and interfaces for real estate platform",
      "Collaborated with backend APIs and participated in UI/UX design discussions",
    ],
  },
  {
    institution: "UCLA DataFest Hackathon",
    role: "Best Insight Award Winner",
    location: "Los Angeles, CA, USA",
    dates: "May 2022",
    details: [
      "Analyzed large-scale video game telemetry using Python and ML models",
      "Secured Best Insight Award among 300+ teams at UCLA DataFest 2022",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="flex bg-muted/50 px-6 py-4 items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground mr-4">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold">{exp.role} @ {exp.institution}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {exp.dates} | {exp.location}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="px-6 py-4">
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 