// Component for displaying supported AI platforms and their integration
import React from "react";
import AnimatedText from "./AnimatedText";
import AIModelButton from "./AIModelButton";
import {
    SiClaude,
    SiOpenai,
    SiGooglegemini,
    SiPerplexity,
} from "react-icons/si";
import { aiModelsContent } from "@/content";

const AIModelsSection: React.FC = () => {
    // Map AI model names to their respective icons
    const getIconForModel = (name: string) => {
        switch (name) {
            case "ChatGPT":
                return <SiOpenai />;
            case "Perplexity":
                return <SiPerplexity />;
            case "Claude":
                return <SiClaude />;
            case "Google Gemini":
                return <SiGooglegemini />;
            default:
                return <SiOpenai />;
        }
    };

    return (
        <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40">
            <div className="container mx-auto px-4 text-center">
                {/* Animated section title */}
                <AnimatedText
                    text={aiModelsContent.title}
                    className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 inline-block mb-8 mx-auto pb-4"
                />
                {/* Grid of AI model buttons with links */}
                <div className="flex flex-wrap justify-center gap-8 items-center">
                    {aiModelsContent.models.map((model, index) => (
                        <AIModelButton
                            key={model.name}
                            name={model.name}
                            color={model.color}
                            icon={getIconForModel(model.name)}
                            url={model.url}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIModelsSection;
