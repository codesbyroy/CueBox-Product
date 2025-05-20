import { memo } from "react";
import { motion } from "framer-motion";

// Props interface for component configuration
interface AnimatedTextProps {
    text: string;
    className?: string;
    once?: boolean;
}

// Animation variants for container
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

// Animation variants for individual words
const wordVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
};

const AnimatedText = memo(
    ({ text, className = "", once = true }: AnimatedTextProps) => {
        // Split text into words for individual animation
        const words = text.split(" ");

        return (
            <div className="w-full flex justify-center">
                <motion.div
                    className={className}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once }}
                >
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            style={{ display: "inline-block" }}
                            variants={wordVariants}
                        >
                            {word}
                            {/* Add space between words except for last word */}
                            {index !== words.length - 1 ? "\u00A0" : ""}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        );
    },
);

AnimatedText.displayName = "AnimatedText";

export default AnimatedText;
