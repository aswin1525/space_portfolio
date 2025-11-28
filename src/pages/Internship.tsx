import { motion } from "framer-motion";

export default function Internship() {
    return (
        <div className="max-w-4xl mx-auto">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="glass-panel p-8 border-green-500/30 relative overflow-hidden"
            >
                {/* Background Decoration */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-3xl font-orbitron text-green-400">Humeen</h2>
                            <p className="text-green-200/60 font-inter">Back-End Developer Intern</p>
                        </div>
                        <div className="px-4 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm">
                            Current
                        </div>
                    </div>

                    <div className="space-y-6 text-gray-300">
                        <div>
                            <h3 className="text-lg font-orbitron text-white mb-2">Role Overview</h3>
                            <p>
                                Working on designing and implementing scalable backend architectures for modern web applications.
                                Collaborating with the frontend team to ensure seamless integration and optimal performance.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-orbitron text-white mb-2">Key Contributions</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Developed RESTful APIs using Node.js and Express.</li>
                                <li>Optimized database queries for faster response times.</li>
                                <li>Implemented authentication and authorization flows.</li>
                                <li>Participated in code reviews and agile development cycles.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-orbitron text-white mb-2">Tech Stack</h3>
                            <div className="flex gap-3">
                                {["Node.js", "Express", "MongoDB", "Docker"].map((tech) => (
                                    <span key={tech} className="px-3 py-1 rounded bg-green-900/30 border border-green-500/20 text-green-300 text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
