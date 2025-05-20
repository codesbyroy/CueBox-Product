// Floating scroll-to-top button with smooth animation and visibility control
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop: React.FC = () => {
    // Track when to show scroll button
    const [isVisible, setIsVisible] = useState(false);

    // Update visibility based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled more than 500px
            setIsVisible(window.scrollY > 500);
        };

        // Add scroll event listener
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    // Smooth scroll to top handler
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    // Button styling with gradient and hover effects
                    className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl focus:outline-none"
                    onClick={scrollToTop}
                    // Entry animation
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    // Hover animation
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ArrowUp className="w-6 h-6" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
