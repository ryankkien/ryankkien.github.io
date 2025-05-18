import React from 'react';
import { BookOpen, Gamepad } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

const interestsData = [
  {
    icon: BookOpen,
    title: "Japanese Language Studies",
    description: "Intermediate fluency in Japanese, self-studying toward JLPT N1 proficiency.",
  },
  {
    icon: Gamepad,
    title: "Competitive Gaming",
    description: "Former competitive League of Legends player for UCLA's team; ranked in the top 300 in North America.",
  },
];

const InterestsSection = () => {
  return (
    <section id="interests" className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-8">Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interestsData.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="flex items-center space-x-3 p-4 bg-muted/50">
                <item.icon className="h-6 w-6 text-primary" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 py-2">
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection; 