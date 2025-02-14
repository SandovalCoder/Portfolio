import { StaticImageData } from 'next/image';

export interface ProjectItem {
    id: number;
    name: string;
    technologies: string[];
    image: string | StaticImageData;
    description: string;
    github?: string;
}

export interface ServiceItem {
    id: number;
    name: string;
    technologies: string[];
    image: string | StaticImageData;
    description: string;
    company: string;
}