// Footer component displaying project information and technology stack
import React, { useState } from "react";
import {
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiVite,
    SiChromewebstore,
    SiSass,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { footerContent } from "@/content";

// Props for tech stack icon components
interface TechIconProps {
    icon: React.ReactNode;
    name: string;
    color: string;
}

// Individual tech stack icon with hover tooltip
const TechIcon: React.FC<TechIconProps> = ({ icon, name, color }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="relative inline-block">
            {/* Icon */}
            <div
                className="text-2xl cursor-pointer transition-transform hover:scale-125"
                style={{ color }}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                {icon}
            </div>
            {/* Tooltip */}
            {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-center text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded shadow-lg whitespace-nowrap">
                    {name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-white"></div>
                </div>
            )}
        </div>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                    {/* Copyright and tagline */}
                    <div className="text-center md:text-left">
                        <p className="text-lg font-bold">
                            {footerContent.copyright}
                        </p>
                        <p className="text-gray-400 mt-2">
                            {footerContent.tagline}
                        </p>
                    </div>

                    {/* Technology stack section */}
                    <div className="text-center flex flex-col items-center">
                        <div className="flex justify-center gap-6 mb-6">
                            <a href={footerContent.repositoryLink}>
                                <TechIcon
                                    icon={<FaGithub />}
                                    name="GitHub Repository"
                                    color="#ffffff"
                                />
                            </a>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">
                            {footerContent.poweredByText}
                        </p>
                        {/* Tech stack icons grid */}
                        <div className="flex flex-wrap justify-center gap-6 mb-4">
                            <TechIcon
                                icon={<SiReact />}
                                name="React 19"
                                color="#61DAFB"
                            />
                            <TechIcon
                                icon={<SiTypescript />}
                                name="TypeScript"
                                color="#3178C6"
                            />
                            <TechIcon
                                icon={<SiTailwindcss />}
                                name="Tailwind CSS"
                                color="#06B6D4"
                            />
                            <TechIcon
                                icon={<SiVite />}
                                name="Vite"
                                color="#646CFF"
                            />
                            <TechIcon
                                icon={<SiChromewebstore />}
                                name="Chrome Extension"
                                color="#4285F4"
                            />
                            <TechIcon
                                icon={<SiSass />}
                                name="Sass"
                                color="#CC6699"
                            />
                        </div>
                    </div>

                    {/* Links and slogan section */}
                    <div className="text-center md:text-right flex flex-col items-center md:items-end justify-center md:justify-end">
                        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                            <a
                                href="/privacy"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </a>
                        </div>
                        <div className="mt-4 text-right">
                            <p className="text-indigo-400 font-bold">
                                {footerContent.slogan.title}
                            </p>
                            <p className="text-gray-400 text-sm">
                                {footerContent.slogan.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
