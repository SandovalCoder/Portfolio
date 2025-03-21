"use client";
import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Code } from "lucide-react";
import technologies from "@/types/technologies";

const TabsComponent = () => {
  const experience = {
    title: "Desarrollador Web Jr",
    company: "NeonHouseLed",
    date: "Diciembre 2024 - Marzo 2025",
    responsibilities: [
      "Optimicé el panel de administración de ContigoVoy, mejorando su rendimiento, accesibilidad y experiencia de usuario mediante el uso de HTML5, CSS3, JavaScript y Bootstrap.",
      "Corregí errores en el backend (PHP/MySQL) que impedían la correcta comunicación con el frontend.",
      "Diseñe formularios y elementos de navegación, logrando una interfaz más intuitiva y responsive.",
      "Participé en la migración tecnológica de ContigoVoy hacia Next.js, TypeScript, Tailwind CSS, Laravel y MySQL.",
      "Integré componentes reutilizables utilizando librerías como HeroUI y Shadcn, e implementé animaciones para mejorar la interactividad.",
      "Lideré el desarrollo de la página web de AsdenPeru, utilizando Next.js, TypeScript, Tailwind CSS, Laravel y MySQL.",
      "Diseñé interfaces modernas y responsive, asegurando una experiencia de usuario óptima.",
      "Facilité integraciones con APIs para mejorar la funcionalidad del sitio web.",
    ],
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4 md:px-0">
      <Tabs defaultValue="Skills">
        <TabsList className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 mb-20 bg-transparent text-white w-full">
          <TabsTrigger
            value="Skills"
            className="flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 text-base md:text-lg transition-all rounded-xl data-[state=active]:bg-gradient-to-r from-blue-500 to-purple-500 w-full md:w-auto"
          >
            <Code className="w-5 h-5" />
            Habilidades
          </TabsTrigger>
          <TabsTrigger
            value="Experience"
            className="flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 text-base md:text-lg transition-all rounded-xl data-[state=active]:bg-gradient-to-r from-blue-500 to-purple-500 w-full md:w-auto"
          >
            <Briefcase className="w-5 h-5" />
            Experiencia
          </TabsTrigger>
          <TabsTrigger
            value="Education"
            className="flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 text-base md:text-lg transition-all rounded-xl data-[state=active]:bg-gradient-to-r from-blue-500 to-purple-500 w-full md:w-auto"
          >
            <GraduationCap className="w-5 h-5" />
            Educación
          </TabsTrigger>
        </TabsList>

        {/* Habilidades */}
        <TabsContent value="Skills" className="mt-6 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {["Frontend", "Backend", "Languages"].map((section) => {
              type SectionType = "frontend" | "backend" | "languages";
              const sectionKey = section.toLowerCase() as SectionType;
              return (
                <div key={section} className="bg-gray-900 p-6 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-center">
                    {section}
                  </h3>
                  <ul className="space-y-2">
                    {technologies[sectionKey].map((tech) => (
                      <li key={tech.name} className="flex items-center gap-2">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={20}
                          height={20}
                          className="inline-block"
                        />
                        <span>{tech.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </TabsContent>

        {/* Experiencia */}
        <TabsContent value="Experience" className="mt-6 pb-8">
          <div className="bg-gray-900/50 p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-gray-800 space-y-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Experiencia Profesional
            </h3>
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 w-8 h-8">
                <Briefcase className="h-6 w-6 text-blue-400 bg-black rounded-full p-1 border-2 border-blue-500" />
              </div>
              <div className="absolute left-4 top-8 w-0.5 h-[calc(100%-2rem)] bg-gradient-to-b from-blue-400 to-purple-400" />
              <div className="space-y-6 pl-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">
                    {experience.title}
                  </h4>
                  <p className="text-blue-400">{experience.company}</p>
                  <p className="text-gray-400 text-sm">{experience.date}</p>
                  <ul className="space-y-4">
                    {experience.responsibilities.map((resp, index) => (
                      <li
                        key={index}
                        className="text-gray-300 pl-4 border-l-2 border-blue-500/30"
                      >
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Educación */}
        <TabsContent value="Education" className="mt-6 pb-8">
          <div className="bg-gray-900/50 p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-gray-800 space-y-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Educación
            </h3>
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 w-8 h-8">
                <GraduationCap className="h-6 w-6 text-purple-400 bg-black rounded-full p-1 border-2 border-purple-500" />
              </div>
              <div className="absolute left-4 top-8 w-0.5 h-[calc(100%-2rem)] bg-gradient-to-b from-purple-400 to-blue-400" />
              <div className="space-y-6 pl-8">
                <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 space-y-4">
                  <h4 className="text-xl font-semibold text-white">
                    Universidad Peruana de Ciencias Aplicadas
                  </h4>
                  <p className="text-purple-400">
                    Ingeniería de Sistemas de Información
                  </p>
                  <p className="text-gray-300">
                    Octavo ciclo - Tercio superior
                  </p>
                  <p className="text-gray-400 text-sm">
                    Becario Pronabec Beca 18 por Excelencia Académica
                  </p>
                  <p className="text-gray-400 text-sm">2021 - Presente</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
