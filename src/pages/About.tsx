import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Profile Hologram */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="glass-panel p-8 flex flex-col items-center justify-center border-purple-500/30"
            >
                <div className="w-48 h-48 rounded-full bg-purple-500/20 border-2 border-purple-400 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(124,58,237,0.3)]">
                    <span className="font-orbitron text-4xl text-purple-300">AM</span>
                </div>
                <h3 className="text-2xl font-orbitron text-purple-400 mb-2">Aswin M</h3>
                <p className="text-gray-400 text-center">Full Stack Developer & UI Enthusiast</p>
            </motion.div>

            {/* Details */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
            >
                <div className="glass-panel p-6 border-purple-500/30">
                    <h3 className="text-xl font-orbitron text-purple-400 mb-4">About Me</h3>
                    <p className="text-gray-300 leading-relaxed">
                        I aim to contribute meaningfully to every project I take on by applying strong problem-solving, programming, and analytical skills. I constantly explore modern technologies, stay updated with industry trends, and focus on growing as a developer while delivering value to the organization.
                    </p>
                </div>

                <div className="glass-panel p-6 border-purple-500/30">
                    <h3 className="text-xl font-orbitron text-purple-400 mb-4">Interests</h3>
                    <div className="flex flex-wrap gap-3">
                        {["Full-stack Development", "UI/UX Design", "Digital Art", "Problem Solving"].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
