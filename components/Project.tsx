"use client";
import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";

import RidenOn from "../assets/RidenOn.png";
import Calculator from "../assets/Calculator.png";
import UniTrack from "../assets/UniTrack.png";
import OrganAlzer from "../assets/OrganAlzer.png";
import Portfolio from "../assets/Portfolio.png";

const Project = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;

  const techIcons = {
    HTML5:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    Bootstrap:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    TypeScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Next.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    Tailwind:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  };

  const projects = [
    {
      id: 1,
      name: "Portfolio",
      technologies: ["Next.js", "Tailwind", "TypeScript"],
      image: Portfolio,
      description:
        "Mi portafolio personal construido con Next.js, Tailwind CSS, TypeScript y Framer Motion.",
      github: "",
    },
    {
      id: 2,
      name: "RidenOn",
      technologies: ["HTML5", "CSS3", "Bootstrap"],
      image: RidenOn,
      description:
        "RideOn es una plataforma de compra de autos en línea con diseño responsivo, construida con HTML5, CSS3 y Bootstrap.",
      github: "https://github.com/SandovalCoder/RideOn_Landing_Page",
    },
    {
      id: 3,
      name: "Calculator",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      image: Calculator,
      description:
        "Calculadora simple con operaciones básicas y diseño responsivo, construida con HTML, CSS, Bootstrap 5 y JavaScript.",
      github: "https://github.com/SandovalCoder/Calculator",
    },
    {
      id: 4,
      name: "UniTrack",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      image: UniTrack,
      description:
        "UniTrack es una plataforma para gestionar y hacer seguimiento de tu rendimiento académico. Registra tus cursos, calcula tu promedio ponderado y más.",
      github: "https://github.com/SandovalCoder/PoderadoUniversitario",
    },
    {
      id: 5,
      name: "OrganAlzer",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: OrganAlzer,
      description:
        "OrganAIzer es un asistente de productividad inteligente que te ayuda a organizar tareas, establecer recordatorios y gestionar tu tiempo de manera eficiente.",
      github: "https://github.com/SandovalCoder/Coder.github.io",
    },
  ];

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const getTechIcon = (tech: keyof typeof techIcons) => {
    return <Image src={techIcons[tech]} alt={tech} width={16} height={16} />;
  };

  return (
    <section className="w-full  bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-4">
              Mis Proyectos
            </h2>
            <p className="text-gray-400 text-lg">
              Aquí puedes encontrar algunos de mis proyectos. ¡Echa un vistazo!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentProjects.map((project) => (
              <div key={project.id} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <Card className="relative bg-gray-900/50 border-gray-800 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                        >
                          <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="GitHub"
                            width={30}
                            height={30}
                            className="text-white"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                      {project.name}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full text-sm"
                        >
                          {getTechIcon(tech as keyof typeof techIcons)}
                          <span className="text-gray-300">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{project.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    className={`${
                      currentPage === 1
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-white"
                    }`}
                    aria-disabled={currentPage === 1}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => setCurrentPage(page)}
                        className={`${
                          currentPage === page
                            ? "bg-gradient-to-r from-blue-500 to-purple-500"
                            : "hover:bg-white"
                        }`}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    className={`${
                      currentPage === totalPages
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-white"
                    }`}
                    aria-disabled={currentPage === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
