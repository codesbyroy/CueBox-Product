import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdLightMode } from "react-icons/md";
import { PiLampPendantFill } from "react-icons/pi";
import useDarkMode from "@/hooks/useDarkMode";

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useDarkMode();
    const [isScrolled, setIsScrolled] = useState(false);
    const isPrivacyPage = window.location.pathname === "/privacy";

    useEffect(() => {
        const handleScroll = () => {
            // Assuming header height is around 120px, adjust this value based on your actual header height
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 120);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {theme === "dark" ? (
                <MdLightMode className="w-5 h-5" />
            ) : (
                <PiLampPendantFill
                    className={`w-5 h-5 ${isPrivacyPage || isScrolled ? "text-[#5544e5]" : "text-white"}`}
                />
            )}
        </motion.button>
    );
};

export default ThemeToggle;
