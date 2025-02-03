import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="px-6 md:px-12 lg:px-24">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              SandovalCoder
            </h3>
            <p className="text-gray-400 text-sm max-w-md">
              Apasionado por crear soluciones tecnológicas innovadoras y
              eficientes, enfocadas en mejorar la experiencia del usuario
              mediante aplicaciones web modernas, responsivas y de alto
              rendimiento.
            </p>
          </div>

          {/* Social links */}
          <div className="flex space-x-8">
            <a
              href="https://github.com/SandovalCoder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com/in/SandovalCoder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Copyright */}
        <div className="flex justify-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 SandovalCoder. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
