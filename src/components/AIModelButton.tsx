import React from "react";
// Interactive button component for displaying AI model options with animations
import { motion } from "framer-motion";
import { IconType } from "react-icons";

// Props interface for button configuration
interface AIModelButtonProps {
    name: string;
    color: string;
    icon: React.ReactNode;
    url: string;
}

const AIModelButton: React.FC<AIModelButtonProps> = ({
    name,
    color,
    icon,
    url,
}) => {
    const handleClick = () => {
        window.open(url, "_blank");
    };

    return (
        // Animated button container with hover effects
        <motion.div
            className={`text-xl font-semibold ${color} bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
            onClick={handleClick}
        >
            {/* Model icon */}
            <span className="w-6 h-6 flex items-center justify-center">
                {icon}
            </span>
            {/* Model name */}
            <span>{name}</span>
        </motion.div>
    );
};

export default AIModelButton;
