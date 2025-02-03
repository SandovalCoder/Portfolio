"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre Mi", href: "#about" },
    { name: "Proyectos", href: "#projects" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.2 },
    }),
  };

  const mobileMenuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="fixed top-0 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md z-50 h-16">
      <div className="container mx-auto h-full px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400  bg-clip-text hover:scale-105 transition-transform duration-300"
        >
          SandovalCoder
        </motion.a>

        {/* Menú desktop */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              variants={navVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <a
                href={item.href}
                className="relative text-gray-300 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-blue-500 to-purple-500  transition-all duration-300"
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-blue-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Botón móvil */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-white transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú móvil */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="fixed top-0 right-0 h-screen w-64 bg-black/95 backdrop-blur-xl p-6 shadow-2xl"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={toggleMenu}
                  className="text-gray-300 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={toggleMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white text-lg py-2 px-4 rounded-lg hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-blue-500 to-purple-500  transition-all duration-300"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Header;
