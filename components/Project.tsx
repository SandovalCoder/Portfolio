"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ProjectItem, ServiceItem } from "@/types/Projects";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import techIcons from "@/types/icons";

import RidenOn from "../assets/RidenOn.png";
import Calculator from "../assets/Calculator.png";
import UniTrack from "../assets/UniTrack.png";
import OrganAlzer from "../assets/OrganAlzer.png";
import Portfolio from "../assets/Portfolio.png";
import ContigoVoy from "../assets/ContigoVoy.png";
import AsdenPeru from "../assets/AsdenPeru.png";

// Define interfaces for items

type PortfolioItem = ProjectItem | ServiceItem;

const Project = () => {
  // Estados para la paginación
  const [currentProjectPage, setCurrentProjectPage] = useState(1);
  const [currentServicePage, setCurrentServicePage] = useState(1);
  const itemsPerPage = 2; // Número de elementos por página

  // Datos de proyectos personales
  const ProjectsOwn: ProjectItem[] = [
    {
      id: 1,
      name: "Portfolio",
      technologies: ["Nextjs", "Tailwind", "TypeScript"],
      image: Portfolio,
      description:
        "Mi portafolio personal construido con Next.js, Tailwind CSS, TypeScript y Framer Motion.",
      github: "https://github.com/SandovalCoder/Portfolio",
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

  // Datos de servicios profesionales
  const services: ServiceItem[] = [
    {
      id: 1,
      name: "ContigoVoy",
      technologies: [
        "Nextjs",
        "TypeScript",
        "Supabase",
        "Tailwind",
        "PostgreSQL",
      ],
      image: ContigoVoy,
      description:
        "Plataforma integral de atención psicológica que ofrece terapias virtuales, reserva de citas y acompañamiento personalizado para usuarios en su proceso de bienestar emocional.",
      company: "NeonHouseLed",
    },
    {
      id: 2,
      name: "AsdenPerú",
      technologies: [
        "Nextjs",
        "TypeScript",
        "MongoDB",
        "Express",
        "Nodejs",
        "Tailwind",
      ],
      image: AsdenPeru,
      description:
        "Plataforma digital que centraliza la gestión y difusión de iniciativas de desarrollo sostenible.\nImpulsa la innovación, transparencia y compromiso social para un Perú más justo.",
      company: "NeonHouseLed",
    },
  ];

  // Lógica de paginación para proyectos
  const indexOfLastProject = currentProjectPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = ProjectsOwn.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalProjectPages = Math.ceil(ProjectsOwn.length / itemsPerPage);

  // Lógica de paginación para servicios
  const indexOfLastService = currentServicePage * itemsPerPage;
  const indexOfFirstService = indexOfLastService - itemsPerPage;
  const currentServices = services.slice(
    indexOfFirstService,
    indexOfLastService
  );
  const totalServicePages = Math.ceil(services.length / itemsPerPage);

  // Función para obtener íconos de tecnologías
  const getTechIcon = (tech: keyof typeof techIcons) => {
    return <Image src={techIcons[tech]} alt={tech} width={16} height={16} />;
  };

  // Componente para renderizar tarjetas
  const renderCard = (item: PortfolioItem, type: "project" | "service") => (
    <div key={item.id} className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
      <Card className="relative bg-gray-900/50 border-gray-800 overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
            fill
          />
          {type === "project" && "github" in item && item.github && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div>
          )}
        </div>
        <CardHeader>
          <CardTitle className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            {item.name}
          </CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {item.technologies.map((tech: string, index: number) => (
              <div
                key={index}
                className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {getTechIcon(tech as keyof typeof techIcons)}
                <span className="text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
          {type === "service" && "company" in item && (
            <p className="text-sm text-purple-400 mt-2">
              Desarrollado para: {item.company}
            </p>
          )}
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">{item.description}</p>
        </CardContent>
      </Card>
    </div>
  );

  // Componente para renderizar paginación
  const renderPagination = (
    currentPage: number,
    totalPages: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
  ) => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className={`${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-white"
            }`}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => setPage(page)}
              className={`${
                currentPage === page
                  ? "bg-gradient-to-r from-blue-500 to-purple-500"
                  : "hover:bg-white"
              }`}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
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
  );

  return (
    <section className="w-full bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-4">
              Proyectos y Servicios
            </h2>
            <p className="text-gray-400 text-md">
              Explora mis proyectos personales y servicios profesionales.
            </p>
          </div>

          {/* Sección de Proyectos */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Proyectos Personales
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {currentProjects.map((project) => renderCard(project, "project"))}
            </div>
            <div className="mt-8">
              {renderPagination(
                currentProjectPage,
                totalProjectPages,
                setCurrentProjectPage
              )}
            </div>
          </div>

          {/* Sección de Servicios */}
          <div>
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Servicios Profesionales
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {currentServices.map((service) => renderCard(service, "service"))}
            </div>
            <div className="mt-8">
              {renderPagination(
                currentServicePage,
                totalServicePages,
                setCurrentServicePage
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
