"use client";
import React from "react";
import Image from "next/image";
import TabsComponent from "./Tabs";

const AboutSection = () => {
  return (
    <section className="w-full text-white py-20" id="about">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/pro.png"
                  alt="About me image"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-8">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Sobre Mi
              </h2>
              <p className="text-justify text-gray-300 leading-relaxed text-lg">
                Estudiante de 8vo ciclo de Ingeniería de Sistemas de Información
                y Desarrollador Web apasionado por crear soluciones tecnológicas
                innovadoras y eficientes. Con experiencia en frontend y backend,
                me especializo en aplicaciones web modernas, responsivas y de
                alto rendimiento. Mi objetivo es combinar tecnología y
                creatividad para resolver problemas y mejorar la experiencia del
                usuario. ¡Siempre listo para nuevos desafíos!
              </p>
            </div>
          </div>

          <TabsComponent />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
