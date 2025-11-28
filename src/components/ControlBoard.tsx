import { motion } from "framer-motion";
import { Home, User, Code, Briefcase, Send, Cpu, LogOut } from "lucide-react";

interface ControlBoardProps {
    onSelectPlanet: (planet: string) => void;
    onExit: () => void;
}

const planets = [
    { id: "home", name: "Home", icon: Home, color: "text-teal-400", border: "border-teal-400/50" },
    { id: "about", name: "About", icon: User, color: "text-purple-400", border: "border-purple-400/50" },
    { id: "skills", name: "Skills", icon: Cpu, color: "text-blue-400", border: "border-blue-400/50" },
    { id: "projects", name: "Projects", icon: Code, color: "text-orange-400", border: "border-orange-400/50" },
    { id: "internship", name: "Internship", icon: Briefcase, color: "text-green-400", border: "border-green-400/50" },
    { id: "contact", name: "Contact", icon: Send, color: "text-pink-400", border: "border-pink-400/50" },
];

export default function ControlBoard({ onSelectPlanet, onExit }: ControlBoardProps) {
    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black/40 backdrop-blur-sm">
            {/* Cockpit Frame (Glass) */}
            <div className="absolute inset-0 pointer-events-none border-[20px] border-gray-900/80 rounded-[3rem] m-4 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-4xl p-8"
            >
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-3xl font-orbitron font-bold text-cyan-400 tracking-widest uppercase drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                    >
                        Control Board
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-cyan-200/60 font-inter text-sm mt-2 tracking-widest"
                    >
                        Select Destination Coordinates
                    </motion.p>
                </div>

                {/* Grid of Planets */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {planets.map((planet, index) => (
                        <motion.button
                            key={planet.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            onClick={() => onSelectPlanet(planet.id)}
                            className={`group relative flex flex-col items-center justify-center p-6 rounded-xl bg-gray-900/60 border ${planet.border} backdrop-blur-md transition-all duration-300 hover:bg-gray-800/80 hover:scale-105 hover:shadow-[0_0_20px_rgba(14,165,164,0.3)]`}
                        >
                            {/* Scanline Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <planet.icon className={`w-10 h-10 ${planet.color} mb-3 group-hover:animate-pulse`} />
                            <span className="font-orbitron text-white tracking-wider text-sm">{planet.name}</span>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />
                        </motion.button>
                    ))}
                </div>

                {/* Exit Button */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    onClick={onExit}
                    className="absolute -bottom-20 right-0 flex items-center gap-2 text-red-400/80 hover:text-red-400 font-orbitron text-sm tracking-widest transition-colors"
                >
                    <LogOut className="w-4 h-4" />
                    ABORT / EXIT SHIP
                </motion.button>
            </motion.div>
        </div>
    );
}
