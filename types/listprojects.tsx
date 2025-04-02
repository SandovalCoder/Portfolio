import { StaticImageData } from "next/image";
import RidenOn from "../assets/RidenOn.png";
import Calculator from "../assets/Calculator.png";
import UniTrack from "../assets/UniTrack.png";
import OrganAlzer from "../assets/OrganAlzer.png";
import Portfolio from "../assets/Portfolio.png";
import ContigoVoy from "../assets/ContigoVoy.png";
import AsdenPeru from "../assets/AsdenPeru.png";
import NovaTech from "../assets/NovaTech.png";
import CodeJourney from "../assets/CodeJourney.png";

export interface Project {
  id: number;
  name: string;
  technologies: string[];
  image: StaticImageData;
  description: string;
  github: string;
  demo?: string;
}

export interface Service {
  id: number;
  name: string;
  technologies: string[];
  image: StaticImageData;
  description: string;
  company: string;
}

const ProjectsOwn = [
  {
    id: 1,
    name: "Portfolio",
    technologies: ["Nextjs", "Tailwind", "TypeScript"],
    image: Portfolio,
    description:
      "Mi portafolio personal construido con Next.js, Tailwind CSS, TypeScript y Framer Motion.",
    github: "https://github.com/SandovalCoder/Portfolio",
    demo: "https://sandovalcoder-portfolio.vercel.app/",
  },
  {
    id: 2,
    name: "CodeJourney",
    technologies: [
      "TypeScript",
      "Tailwind",
      "Nextjs",
      "Express",
      "MongoDB",
      "Nodejs",
    ],
    image: CodeJourney,
    description:
      "CodeJourney es una plataforma social de blogging técnico diseñada para desarrolladores. Permite publicar y compartir conocimientos mediante posts, utilizando una arquitectura moderna y escalable.",
    github: "https://github.com/SandovalCoder/front-CodeJourney",
    demo: "https://code-journey-phi.vercel.app",
  },
  {
    id: 3,
    name: "NovaTech",
    technologies: ["Vite", "TypeScript", "Tailwind"],
    image: NovaTech,
    description:
      "NovaTech es una aplicación de comercio electrónico moderna dedicada a la venta de tecnologías de punta: smartphones, laptops, televisores y más.",
    github: "https://github.com/SandovalCoder/NovaTech",
    demo: "https://nova-tech-two.vercel.app/",
  },
  {
    id: 4,
    name: "RidenOn",
    technologies: ["HTML5", "CSS3", "Bootstrap"],
    image: RidenOn,
    description:
      "RideOn es una plataforma de compra de autos en línea con diseño responsivo, construida con HTML5, CSS3 y Bootstrap.",
    github: "https://github.com/SandovalCoder/RideOn_Landing_Page",
    demo: "https://rideon-y.vercel.app/",
  },
  {
    id: 5,
    name: "Calculator",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    image: Calculator,
    description:
      "Calculadora simple con operaciones básicas y diseño responsivo, construida con HTML, CSS, Bootstrap 5 y JavaScript.",
    github: "https://github.com/SandovalCoder/Calculator",
  },
  {
    id: 6,
    name: "UniTrack",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    image: UniTrack,
    description:
      "UniTrack es una plataforma para gestionar y hacer seguimiento de tu rendimiento académico. Registra tus cursos, calcula tu promedio ponderado y más.",
    github: "https://github.com/SandovalCoder/PoderadoUniversitario",
  },
  {
    id: 7,
    name: "OrganAlzer",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: OrganAlzer,
    description:
      "OrganAIzer es un asistente de productividad inteligente que te ayuda a organizar tareas, establecer recordatorios y gestionar tu tiempo de manera eficiente.",
    github: "https://github.com/SandovalCoder/Coder.github.io",
  },
];

// Datos de servicios profesionales
const services= [
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

export { ProjectsOwn, services };