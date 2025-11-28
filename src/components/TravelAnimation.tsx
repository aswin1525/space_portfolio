import { motion } from "framer-motion";

export default function TravelAnimation() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
            {/* Star Streaks */}
            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-[2px] bg-cyan-400/80 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: "50%",
                            width: `${Math.random() * 200 + 100}px`,
                        }}
                        animate={{
                            x: [-1000, 1000],
                            y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                            opacity: [0, 1, 0],
                            scaleX: [1, 5, 1],
                        }}
                        transition={{
                            duration: Math.random() * 0.5 + 0.2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 0.5,
                        }}
                    />
                ))}
            </div>

            {/* Central Tunnel Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`ring-${i}`}
                        className="absolute rounded-full border-2 border-cyan-500/30"
                        style={{ width: "100px", height: "100px" }}
                        animate={{
                            scale: [1, 20],
                            opacity: [0, 1, 0],
                            rotate: [0, 90],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeIn",
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </div>

            {/* Speed Lines */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-900/20 to-transparent"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 0.2, repeat: Infinity }}
            />

            <motion.h2
                className="relative z-10 text-4xl font-orbitron text-white tracking-[0.5em] uppercase italic"
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.98, 1.02, 0.98] }}
                transition={{ duration: 0.1, repeat: Infinity }}
            >
                Warp Speed
            </motion.h2>
        </div>
    );
}
