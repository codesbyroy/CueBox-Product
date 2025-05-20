import { cn } from "@/lib/utils";
import React, { useState, useRef, memo } from "react";
import { motion, useInView } from "framer-motion";
import ImageViewer from "./ImageViewer";

// Props interface for the feature item component
interface FeatureItemProps {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    reversed?: boolean;
    callout?: string;
    bulletPoints?: string[];
}

// Animation variants for better reusability and performance
const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

// Animated bullet point sub-component
const BulletPoint = memo(
    ({
        point,
        index,
        isInView,
    }: {
        point: string;
        index: number;
        isInView: boolean;
    }) => (
        // Fade in bullet points sequentially when section is in view
        <motion.li
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
        >
            <motion.span
                className="mr-2 mt-1 bg-indigo-600 rounded-full p-1 w-5 h-5 flex items-center justify-center"
                whileHover={{
                    scale: 1.2,
                    backgroundColor: "#4f46e5",
                    transition: { duration: 0.2 },
                }}
            >
                <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                    ></path>
                </svg>
            </motion.span>
            <span className="text-gray-700 dark:text-gray-300">{point}</span>
        </motion.li>
    ),
);

BulletPoint.displayName = "BulletPoint";

const FeatureItem: React.FC<FeatureItemProps> = ({
    title,
    description,
    image,
    imageAlt,
    reversed = false,
    callout,
    bulletPoints = [],
}) => {
    // State for image viewer modal
    const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
    const handleOpenViewer = () => setIsImageViewerOpen(true);
    const handleCloseViewer = () => setIsImageViewerOpen(false);

    // Track when component is in viewport for animations
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
        <div className="py-16" ref={ref}>
            <motion.div
                className={cn(
                    "container mx-auto px-4 flex flex-col gap-10 items-center",
                    reversed ? "md:flex-row-reverse" : "md:flex-row",
                )}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                {/* Image section with hover animations and modal trigger */}
                <motion.div
                    className="md:w-2/5 relative"
                    initial={{ opacity: 0, x: reversed ? 50 : -50 }}
                    animate={
                        isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: reversed ? 50 : -50 }
                    }
                    transition={{ duration: 0.4, delay: 0.1 }}
                    onClick={handleOpenViewer}
                >
                    <motion.div
                        className="bg-gradient-to-tr from-indigo-100 to-purple-100 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl p-4 shadow-lg cursor-pointer"
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <motion.img
                            src={image}
                            alt={imageAlt}
                            className="w-full h-auto object-contain max-h-[300px]"
                            layoutId={`image-${image}`}
                        />
                    </motion.div>

                    {callout && (
                        // Callout badge with spring animation
                        <motion.div
                            className="absolute -bottom-4 -right-4 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                            initial={{ scale: 0, rotate: -15 }}
                            animate={
                                isInView
                                    ? { scale: 1, rotate: -5 }
                                    : { scale: 0, rotate: -15 }
                            }
                            transition={{
                                delay: 0.3,
                                type: "spring",
                                stiffness: 250,
                            }}
                        >
                            {callout}
                        </motion.div>
                    )}
                </motion.div>

                {/* Content section with text and bullet points */}
                <motion.div
                    className="md:w-3/5 space-y-6"
                    initial={{ opacity: 0, x: reversed ? -50 : 50 }}
                    animate={
                        isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: reversed ? -50 : 50 }
                    }
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {description}
                    </p>

                    {/* Bullet points with sequential animations */}
                    {bulletPoints.length > 0 && (
                        <ul className="space-y-3 pl-1">
                            {bulletPoints.map((point, index) => (
                                <BulletPoint
                                    key={index}
                                    point={point}
                                    index={index}
                                    isInView={isInView}
                                />
                            ))}
                        </ul>
                    )}
                </motion.div>
            </motion.div>

            {/* Image viewer modal for expanded view */}
            <ImageViewer
                isOpen={isImageViewerOpen}
                onClose={handleCloseViewer}
                imageSrc={image}
                imageAlt={imageAlt}
            />
        </div>
    );
};

export default FeatureItem;
