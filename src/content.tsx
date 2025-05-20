// Central content configuration file for the CueBox product page
// Contains all text content and configuration used across different components

// Header section content configuration
export const headerContent = {
    title: "CueBox",
    subtitle: "Chrome Extension",
    description:
        "Save, organize, and reuse AI prompts across ChatGPT, Gemini, Claude, Perplexity, and more",
    searchBarText: "Bookmark, search & reuse AI prompts with ease",
};

// Main hero section content
export const heroContent = {
    title: "Your AI Prompt Management Solution",
    description:
        "CueBox helps you save, organize, and reuse your favorite AI prompts across multiple AI platforms like ChatGPT, Gemini, Claude, and Perplexity.",
};

// Feature section with detailed feature descriptions and metadata
export const featureItems = [
    {
        title: "Save AI Prompts with Metadata",
        description:
            "CueBox lets you save your most valuable prompts with all the context you need - prompt text, labels, URLs, and timestamps.",
        image: "/screens/screen_1.png",
        imageAlt: "CueBox Prompts Interface",
        callout: "Quick Access",
        bulletPoints: [
            "Save prompt text with helpful labels for easy identification",
            "Store timestamps to track when prompts were created",
            "Link back to the original page where the prompt was created",
            "Bookmark your favorite prompts for instant retrieval",
        ],
    },
    {
        title: "Direct Links to AI Platforms",
        description:
            "Access your favorite AI platforms with a single click. CueBox provides direct links to ChatGPT, Gemini, Claude, Perplexity, and more.",
        image: "/screens/screen_2.png",
        imageAlt: "CueBox AI Platform Links",
        reversed: true,
        callout: "Instant Access",
        bulletPoints: [
            "Quick links to all major AI platforms in one place",
            "Start fresh conversations using your saved prompts",
            "Seamlessly switch between different AI models",
            "Save time by avoiding multiple browser tabs",
        ],
    },
    {
        title: "Search and Filter Prompts",
        description:
            "Never lose a valuable prompt again. CueBox's powerful search helps you find forgotten prompts instantly, with visual indicators showing which AI platform each prompt is for.",
        image: "/screens/screen_3.png",
        imageAlt: "CueBox Search Functionality",
        callout: "Smart Search",
        bulletPoints: [
            "Easily find forgotten prompts with powerful search capabilities",
            "Visual platform icons (ChatGPT, Claude, Perplexity, Gemini) help identify prompt sources",
            "Choose between local storage or sync with your Google Chrome account",
            "Filter and sort prompts by platform, date, or frequency of use",
        ],
    },
    {
        title: "User-Friendly Popup UI",
        description:
            "Access all your prompts through a sleek, intuitive popup interface that makes prompt management a breeze.",
        image: "/screens/screen_4.png",
        imageAlt: "CueBox Popup UI",
        reversed: true,
        callout: "Easy to Use",
        bulletPoints: [
            "Clean, intuitive interface for prompt management",
            "One-click access to your most used prompts",
            "Easily add new prompts while browsing",
            "Streamlined workflow for maximum productivity",
        ],
    },
    {
        title: "Coming Soon: Advanced Features",
        description:
            "We're constantly improving CueBox with new features to make your AI interactions even more powerful.",
        image: "/screens/screen_5.png",
        imageAlt: "CueBox Future Features",
        callout: "Coming Soon",
        bulletPoints: [
            "AI-powered assistance for creating new prompts",
            "Smart prompt enhancer for refining your inputs",
            "Cross-platform prompt syncing and navigation",
            "Option to share prompts with other users",
        ],
    },
];

// Use case section showcasing different scenarios and examples
export const useCaseContent = {
    title: "Use Case Scenarios",
    description:
        "Discover how CueBox can enhance your productivity across various scenarios",
    useCases: [
        {
            title: "Software Development",
            description:
                "Save code snippets and programming prompts for different languages and frameworks.",
            examples: [
                "Explain this code and suggest improvements: [code snippet]",
                "Generate unit tests for this function using Jest",
            ],
        },
        {
            title: "Academic Research",
            description:
                "Organize research queries and literature review prompts across different databases.",
            examples: [
                "Summarize the key findings of this research paper: [paper title]",
                "What are the main arguments for and against [research topic]?",
            ],
        },
        {
            title: "Business Communication",
            description:
                "Store templates for emails, reports, and business documents.",
            examples: [
                "Write a professional email to apply for leave to my manager",
                "Create a project status update report for this week with sections for progress & challenges faced",
            ],
        },
        {
            title: "Creative Experimentation",
            description:
                "Keep track of creative prompts for art, writing, and design projects.",
            examples: [
                "Generate a detailed scene description for a sci-fi story set in [setting]",
                "Create a color palette and design elements for a minimalist brand identity",
            ],
        },
        {
            title: "Content Creation",
            description:
                "Maintain a library of content creation prompts for blogs and social media.",
            examples: [
                "Write a compelling blog post introduction about [topic]",
                "Generate 5 engaging Twitter threads ideas about [industry] trends",
            ],
        },
        {
            title: "Language Learning",
            description:
                "Store language learning exercises and translation prompts.",
            examples: [
                "Explain the difference between [similar words] in [language] with examples",
                "Create a dialogue practicing [specific grammar point] in a real-life situation",
            ],
        },
    ],
};

// AI Models section showing supported platforms
export const aiModelsContent = {
    title: "Compatible with Leading AI Models",
    models: [
        {
            name: "ChatGPT",
            color: "text-gray-800 dark:text-gray-200",
            url: "https://chatgpt.com/",
        },
        {
            name: "Perplexity",
            color: "text-purple-600 dark:text-purple-400",
            url: "https://www.perplexity.ai/",
        },
        {
            name: "Claude",
            color: "text-blue-600 dark:text-blue-400",
            url: "https://claude.ai/",
        },
        {
            name: "Google Gemini",
            color: "text-orange-500",
            url: "https://gemini.google.com/",
        },
    ],
};

// Call-to-Action section content
export const ctaContent = {
    title: "Ready to supercharge your AI workflow?",
    description:
        "Try CueBox today and never lose your valuable AI prompts again. Save, reuse, and optimize your interactions across all your favorite AI platforms.",
    buttonText: "Download CueBox",
    buttonLink:
        "https://chromewebstore.google.com/detail/flihmekgclecklblbnocoagjdapgeakm",
};

// Footer content configuration
export const footerContent = {
    copyright: "© 2025 CueBox by Hablar",
    tagline: "Your AI prompt management solution",
    poweredByText: "Powered by",
    repositoryLink: "https://github.com/codesbyroy/cuebox-extension",
    slogan: {
        title: "CueBox",
        subtitle: "Bookmark Cues, Get Smart Prompts",
    },
};
