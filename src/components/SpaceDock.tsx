import { motion } from "framer-motion";
import { useState } from "react";

interface SpaceDockProps {
    onEnter: () => void;
}

const planets = [
    { name: "Home", image: "/assets/planets/planet-home.png", top: "10%", left: "15%", size: "w-64 h-64", delay: 0, glow: "drop-shadow-[0_0_30px_rgba(45,212,191,0.8)]" },
    { name: "About", image: "/assets/planets/planet-about.png", top: "20%", left: "80%", size: "w-80 h-80", delay: 1, glow: "drop-shadow-[0_0_30px_rgba(192,132,252,0.8)]" },
    { name: "Projects", image: "/assets/planets/planet-projects.png", top: "60%", left: "10%", size: "w-72 h-72", delay: 2, glow: "drop-shadow-[0_0_30px_rgba(251,146,60,0.8)]" },
    { name: "Skills", image: "/assets/planets/planet-skills.png", top: "75%", left: "75%", size: "w-56 h-56", delay: 3, glow: "drop-shadow-[0_0_30px_rgba(96,165,250,0.8)]" },
    { name: "Social", image: "/assets/planets/planet-internship.png", top: "40%", left: "5%", size: "w-48 h-48", delay: 1.5, glow: "drop-shadow-[0_0_30px_rgba(74,222,128,0.8)]" },
    { name: "Contact", image: "/assets/planets/planet-contact.png", top: "5%", left: "50%", size: "w-40 h-40", delay: 2.5, glow: "drop-shadow-[0_0_30px_rgba(244,114,182,0.8)]" },
];

export default function SpaceDock({ onEnter }: SpaceDockProps) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black/20">
            {/* Scattered Planets Background */}
            <div className="absolute inset-0 pointer-events-none">
                {planets.map((planet, index) => (
                    <motion.div
                        key={planet.name}
                        className={`absolute ${planet.size}`}
                        style={{ top: planet.top, left: planet.left }}
                        animate={{
                            y: [0, -15, 0],
                            x: [0, 10, 0],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                            duration: 5 + index,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: planet.delay,
                        }}
                    >
                        <img
                            src={planet.image}
                            alt={planet.name}
                            className={`w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-500 ${planet.glow}`}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Spaceship (Central Interactive Element) */}
            <motion.div
                className="relative z-10 cursor-pointer group flex flex-col items-center"
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
                {/* Spaceship Image */}
                <div className="relative w-96 h-96 transition-transform duration-500 transform group-hover:scale-105 group-hover:-translate-y-2">
                    {/* Engine Glow */}
                    <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 w-24 h-32 bg-cyan-500/40 blur-3xl rounded-full transition-all duration-500 ${isHovering ? "opacity-100 scale-125" : "opacity-50"}`} />

                    <img
                        src="/assets/spaceship.png"
                        alt="Spaceship"
                        className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(14,165,164,0.3)]"
                    />
                </div>

                {/* Text Prompt */}
                <div className="mt-4 text-center">
                    <h1 className="text-4xl font-orbitron font-bold text-white mb-2 tracking-[0.2em] drop-shadow-lg">
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
