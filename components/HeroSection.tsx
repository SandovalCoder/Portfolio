"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const stats = [
    {
      value: "1+",
      label: "Años de experiencia",
    },
    {
      value: "10+",
      label: "Proyectos completados",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: "https://github.com/SandovalCoder",
      label: "GitHub",
      bgColor: "bg-[#24292e]",
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/vilder-luis-sandoval-verde-19230b305/",
      label: "LinkedIn",
      bgColor: "bg-[#0077b5]",
    },
    {
      icon: <Mail size={24} />,
      href: "mailto:luisvilders@gmail.com",
      label: "Email",
      bgColor: "bg-[#ea4335]",
    },
  ];

  return (
    <section className="lg:py-16" id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
              Hola, soy
            </span>
            <br />
            <TypeAnimation
              sequence={["SandovalCoder", 1000, "Desarrollador Web", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Enfocado en Tecnología y Soluciones Innovadoras
          </p>

          <div>
            {/* Botón "Contáctame" que abre WhatsApp */}
            <Link
              href="https://wa.me/900899586"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 transform transition-transform duration-300 hover:scale-105"
            >
              Contáctame
            </Link>

            {/* Botón "Descargar CV" que descarga un archivo PDF */}
            <Link
              href="/SANDOVAL_CV.docx.pdf"
              download="CV_Luis_Sandoval.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-3 transform transition-transform duration-300 hover:scale-105"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white">
                Descargar CV
              </span>
            </Link>
          </div>

          {/* Simplified Statistics Section */}
          <div className="grid grid-cols-2 gap-4 mt-8 max-w-md">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-800 transition-all duration-300"
              >
                <p className="text-3xl font-bold text-white mb-1 text-center">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Pre-colored Social Icons */}
          <div className="flex items-center justify-center sm:justify-start space-x-4 mt-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className={`p-3 rounded-full ${link.bgColor} transition-all duration-300 group relative hover:brightness-110`}
              >
                <div className="text-white">{link.icon}</div>
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden bg-[#181818] flex items-center justify-center">
            <Image
              src="/Luis.jpg"
              alt="hero image"
              className="w-full h-full object-cover"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
