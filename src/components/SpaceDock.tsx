import { motion } from "framer-motion";
import { useState } from "react";

interface SpaceDockProps {
    onEnter: () => void;
}

const planets = [
    { name: "Home", color: "bg-teal-500", orbit: "w-[300px] h-[300px]" },
    { name: "About", color: "bg-purple-500", orbit: "w-[400px] h-[400px]" },
    { name: "Projects", color: "bg-orange-500", orbit: "w-[500px] h-[500px]" },
    { name: "Skills", color: "bg-blue-500", orbit: "w-[600px] h-[600px]" },
    { name: "Internship", color: "bg-green-500", orbit: "w-[700px] h-[700px]" },
    { name: "Contact", color: "bg-pink-500", orbit: "w-[800px] h-[800px]" },
];

export default function SpaceDock({ onEnter }: SpaceDockProps) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Orbit Rings & Planets */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {planets.map((planet, index) => (
                    <motion.div
                        key={planet.name}
                        className={`absolute rounded-full border border-white/5 ${planet.orbit}`}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 20 + index * 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <motion.div
                            className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${planet.color} shadow-[0_0_10px_currentColor]`}
                            whileHover={{ scale: 1.5, boxShadow: "0 0 20px currentColor" }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Spaceship (Central Interactive Element) */}
            <motion.div
                className="relative z-10 cursor-pointer group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={onEnter}
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {/* Spaceship Visual (SVG Placeholder) */}
                <div className="relative w-32 h-64 transition-all duration-500 transform group-hover:scale-110">
                    {/* Engine Glow */}
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-20 bg-cyan-500/50 blur-xl rounded-full transition-all duration-500 ${isHovering ? "opacity-100 scale-125" : "opacity-50"}`} />

                    {/* Ship Body */}
                    <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(14,165,164,0.5)]">
                        <path
                            d="M50 0 L80 60 L90 150 L50 180 L10 150 L20 60 Z"
                            fill="#0f172a"
                            stroke="#0ea5a4"
                            strokeWidth="2"
                            className="transition-colors duration-300 group-hover:stroke-cyan-400"
                        />
                        <path
                            d="M50 20 L50 180"
                            stroke="#0ea5a4"
                            strokeWidth="1"
                            opacity="0.5"
                        />
                        <circle cx="50" cy="50" r="5" fill="#0ea5a4" className="animate-pulse" />
                    </svg>
                </div>

                {/* Text Prompt */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-8 text-center w-64">
                    <h1 className="text-2xl font-orbitron font-bold text-white mb-2 tracking-wider">
                        ASWIN'S UNIVERSE
                    </h1>
                    <p className="text-cyan-400/80 text-sm font-inter tracking-widest uppercase animate-pulse">
                        {isHovering ? "Click to Enter Ship" : "Touch the Ship"}
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
