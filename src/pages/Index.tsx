// Main landing page component for CueBox
import React from "react";
import Header from "@/components/Header";
import FeatureItem from "@/components/FeatureItem";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedText from "@/components/AnimatedText";
import AIModelsSection from "@/components/AIModelsSection";
import UseCaseSection from "@/components/UseCaseSection";
import { motion } from "framer-motion";
import { heroContent, featureItems } from "@/content";

const Index = () => {
    return (
        // Main container with theme-aware background
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 overflow-hidden">
            {/* Top navigation and hero section */}
            <Header />

            <main>
                {/* Hero section with animated title and description */}
                <section className="py-12 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-4 text-center">
                        <AnimatedText
                            text={heroContent.title}
                            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 inline-block mx-auto"
                        />
                        <motion.p
                            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            {heroContent.description}
                        </motion.p>
                        <div className="mt-8">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/v2T51B1nBAk?si=x5CnSRDMlmnrvprM" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                                className="mx-auto shadow-lg rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                </section>

                {/* Feature list with alternating layouts */}
                {featureItems.map((feature, index) => (
                    <FeatureItem
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        image={feature.image}
                        imageAlt={feature.imageAlt}
                        reversed={index % 2 !== 0}
                        callout={feature.callout}
                        bulletPoints={feature.bulletPoints}
                    />
                ))}

                {/* Use cases and AI models sections */}
                <UseCaseSection />
                <AIModelsSection />
            </main>

            {/* Call to action and footer */}
            <CTASection />
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Index;
