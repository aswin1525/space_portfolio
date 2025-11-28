import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PlanetLayoutProps {
    children: ReactNode;
    planetName: string;
    onReturn: () => void;
    colorTheme: string; // e.g., "cyan", "purple", "orange"
}

export default function PlanetLayout({ children, planetName, onReturn, colorTheme }: PlanetLayoutProps) {
    // Map color names to Tailwind classes dynamically or use a lookup
    // For simplicity, we'll assume the passed colorTheme is a valid color name for border/text
    // But Tailwind doesn't support dynamic class construction like `text-${colorTheme}-400` unless safelisted.
    // Better to pass specific classes or use style objects.
    // Let's use a simple mapping for now.

    const themeColors: Record<string, { border: string; text: string; bg: string; glow: string; image: string }> = {
        teal: { border: "border-teal-500", text: "text-teal-400", bg: "bg-teal-900/20", glow: "shadow-teal-500/50", image: "/assets/backgrounds/bg-home.png" },
        purple: { border: "border-purple-500", text: "text-purple-400", bg: "bg-purple-900/20", glow: "shadow-purple-500/50", image: "/assets/backgrounds/bg-about.png" },
        blue: { border: "border-blue-500", text: "text-blue-400", bg: "bg-blue-900/20", glow: "shadow-blue-500/50", image: "/assets/backgrounds/bg-skills.png" },
        orange: { border: "border-orange-500", text: "text-orange-400", bg: "bg-orange-900/20", glow: "shadow-orange-500/50", image: "/assets/backgrounds/bg-projects.png" },
        green: { border: "border-green-500", text: "text-green-400", bg: "bg-green-900/20", glow: "shadow-green-500/50", image: "/assets/backgrounds/bg-internship.png" },
        pink: { border: "border-pink-500", text: "text-pink-400", bg: "bg-pink-900/20", glow: "shadow-pink-500/50", image: "/assets/backgrounds/bg-contact.png" },
    };

    const theme = themeColors[colorTheme] || themeColors.teal;

    return (
        <div
            className="relative w-full min-h-screen pt-20 pb-10 px-4 md:px-10 overflow-y-auto bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: `url(${theme.image})` }}
        >
            {/* Dark Overlay for readability */}
            <div className="fixed inset-0 bg-black/60 pointer-events-none" />

            {/* Header */}
            <motion.header
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 flex items-center justify-between mb-10 border-b border-white/10 pb-4"
            >
                <div>
                    <h1 className={`text-4xl md:text-6xl font-orbitron font-bold ${theme.text} uppercase tracking-wider`}>
                        {planetName}
                    </h1>
                    <div className={`h-1 w-20 mt-2 ${theme.bg} rounded-full`} />
                </div>

                <button
                    onClick={onReturn}
                    className={`px-6 py-2 rounded border ${theme.border} ${theme.text} hover:bg-white/5 transition-all font-orbitron text-sm tracking-widest uppercase`}
                >
                    Return to Ship
                </button>
            </motion.header>

            {/* Content Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative z-10"
            >
                {children}
            </motion.div>
        </div>
    );
}
