import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="hologram-card p-10 max-w-3xl"
            >
                <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-teal-400 mb-4 neon-text">
                    ASWIN M
                </h1>
                <h2 className="text-2xl md:text-3xl font-orbitron text-cyan-200 mb-6">
                    B.Tech IT Student
                </h2>
                <p className="text-lg md:text-xl text-gray-300 font-inter leading-relaxed max-w-2xl mx-auto mb-8">
                    Explore my universe, where every idea sparks a new world.
                    Journey through the work I create with passion and detail.
                    Enjoy the experience as you travel through my digital space.
                </p>

                <div className="flex gap-4 justify-center">
                    <button className="px-8 py-3 bg-teal-500/20 border border-teal-500/50 rounded hover:bg-teal-500/40 transition-all font-orbitron tracking-widest uppercase">
                        Be Creative
                    </button>
                    <button className="px-8 py-3 bg-transparent border border-white/20 rounded hover:bg-white/10 transition-all font-orbitron tracking-widest uppercase">
                        Be Positive
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
