import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase } from 'lucide-react'; // Using Briefcase as a generic icon for education/work

const educationData = [
  {
    institution: "Georgia Institute of Technology",
    location: "Atlanta, GA (Online)",
    degree: "Master of Science in Computer Science",
    dates: "Jan 2025 – Expected Graduation: Dec 2026",
    details: ["Specialization: Machine Learning, Computer Vision"],
  },
  {
    institution: "University of California, Los Angeles (UCLA)",
    location: "Los Angeles, CA",
    degree: "Bachelor of Science in Cognitive Science; Specialization in Computing",
    dates: "Sep 2020 – Jun 2024",
    details: [], // No specific details listed for BS, can add if needed
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-12 md:py-16">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Education</h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="flex flex-row items-start bg-muted/50 px-6 py-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground mr-4">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-xl font-semibold">{edu.institution}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {edu.degree} | {edu.location} | {edu.dates}
                </CardDescription>
              </div>
            </CardHeader>
            {edu.details && edu.details.length > 0 && (
              <CardContent className="px-6 py-4">
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default EducationSection; 