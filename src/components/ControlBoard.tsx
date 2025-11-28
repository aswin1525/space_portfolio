import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, ChevronLeft, ChevronRight } from "lucide-react";

interface ControlBoardProps {
    onSelectPlanet: (planet: string) => void;
    onExit: () => void;
}

const planets = [
    { id: "home", name: "Home", color: "text-teal-400", image: "/assets/planets/planet-home.png" },
    { id: "about", name: "About", color: "text-purple-400", image: "/assets/planets/planet-about.png" },
    { id: "skills", name: "Skills", color: "text-blue-400", image: "/assets/planets/planet-skills.png" },
    { id: "projects", name: "Projects", color: "text-orange-400", image: "/assets/planets/planet-projects.png" },
    { id: "internship", name: "Internship", color: "text-green-400", image: "/assets/planets/planet-internship.png" },
    { id: "contact", name: "Contact", color: "text-pink-400", image: "/assets/planets/planet-contact.png" },
];

export default function ControlBoard({ onSelectPlanet, onExit }: ControlBoardProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextPlanet = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % planets.length);
    };

    const prevPlanet = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + planets.length) % planets.length);
    };

    const handleSelect = () => {
        onSelectPlanet(planets[currentIndex].id);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.5,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.5,
        }),
    };

    return (
        <div
            className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(/control_board_bg.png)`,
            }}
        >

            {/* Overlay for readability if needed - Removed blur */}
            <div className="absolute inset-0 bg-black/10" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-4xl p-8 flex flex-col items-center"
            >
                {/* Header */}
                <div className="text-center mb-4">
                    <motion.h2
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-4xl font-orbitron font-bold text-cyan-400 tracking-[0.2em] uppercase drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                    >
                        Command Center
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-cyan-200/60 font-inter text-sm mt-2 tracking-widest"
                    >
                        Select Destination System
                    </motion.p>
                </div>

                {/* Main Interface - Carousel */}
                <div className="relative w-full aspect-video max-h-[600px] bg-transparent rounded-3xl border border-cyan-500/20 p-8 flex flex-col items-center justify-center overflow-hidden">

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevPlanet}
                        className="absolute left-4 z-20 p-2 rounded-full bg-black/40 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:scale-110 transition-all"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <button
                        onClick={nextPlanet}
                        className="absolute right-4 z-20 p-2 rounded-full bg-black/40 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:scale-110 transition-all"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Planet Display */}
                    <div className="relative w-[450px] h-[450px] flex items-center justify-center cursor-pointer" onClick={handleSelect}>
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                    scale: { duration: 0.2 }
                                }}
                                className="absolute w-full h-full"
                            >
                                <img
                                    src={planets[currentIndex].image}
                                    alt={planets[currentIndex].name}
                                    className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-300"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Planet Name */}
                    <motion.div
                        key={`name-${currentIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 text-center"
                    >
                        <h3 className={`text-3xl font-orbitron font-bold tracking-[0.2em] uppercase ${planets[currentIndex].color} drop-shadow-lg`}>
                            {planets[currentIndex].name}
                        </h3>
                        <p className="text-white/40 text-xs tracking-widest mt-2 uppercase">
                            Click Planet to Initiate Travel
                        </p>
                    </motion.div>

                    {/* Decorative Rings */}
                    <div className="absolute inset-0 rounded-full border border-cyan-500/10 scale-[0.7] pointer-events-none animate-spin-slow" />
                    <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/10 scale-[0.85] pointer-events-none" />

                </div>

                {/* Exit Button */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    onClick={onExit}
                    className="mt-8 flex items-center gap-2 text-red-400/80 hover:text-red-400 font-orbitron text-sm tracking-widest transition-colors px-6 py-2 border border-red-500/20 rounded-full hover:bg-red-500/10"
                >
                    <LogOut className="w-4 h-4" />
                    ABORT MISSION
                </motion.button>
            </motion.div>
        </div>
    );
}
