import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: "Weather Dashboard",
    description: "A real-time weather application that displays current weather conditions and forecasts for multiple cities. Built with JavaScript and OpenWeather API."
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A full-stack task management application with user authentication, task categorization, and deadline tracking. Developed using React and Node.js."
  },
  {
    id: 3,
    title: "Recipe Finder",
    description: "An application that helps users discover recipes based on available ingredients. Features filtering options and nutritional information."
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive personal portfolio website showcasing my projects and skills. Built with HTML, CSS, and modern web design principles."
  }
];

const ProjectCard = ({ title, description }) => (
  <Card className="mb-6 hover:shadow-lg transition-shadow duration-200">
    <CardHeader>
      <CardTitle className="text-xl text-gray-800">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          My Projects
        </h1>
        <div className="space-y-6 w-full">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;