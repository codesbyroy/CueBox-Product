// Call-to-Action section component to drive user engagement
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { ctaContent } from "@/content";

const CTASection: React.FC = () => {
    return (
        // Section container with gradient background
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMCAxIDEgMiAyIDJzMi0xIDItMi0xLTItMi0yLTIgMS0yIDJ6bTAtMThjMCAxIDEgMiAyIDI')]"></div>
            </div>

            {/* Content container with animations */}
            <motion.div
                className="container mx-auto px-4 text-center relative z-[5]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Section title */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    {ctaContent.title}
                </motion.h2>

                {/* Section description */}
                <motion.p
                    className="text-xl text-white/90 max-w-2xl mx-auto mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {ctaContent.description}
                </motion.p>

                {/* Call-to-action button group */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {/* Main CTA button with animation */}
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                        whileTap={{
                            scale: 0.95,
                            transition: { duration: 0.1 },
                        }}
                        className="mx-auto"
                    >
                        <Button
                            size="lg"
                            className="bg-white text-indigo-700 hover:bg-gray-100 font-medium text-lg px-8 group shadow-lg"
                            asChild
                        >
                            <a
                                href={ctaContent.buttonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {ctaContent.buttonText}
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </motion.span>
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CTASection;
