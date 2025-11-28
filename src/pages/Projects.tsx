import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "College Attendance Portal",
        desc: "A comprehensive system for tracking student attendance and CAT marks.",
        tech: ["React", "Supabase", "Tailwind"],
        color: "border-orange-500/50",
    },
    {
        title: "AI Image Generator",
        desc: "Transform simple prompts into visuals with the power of models.",
        tech: ["python", "Stable Diffusion", "kaggle"],
        color: "border-orange-500/50",
    },
    {
        title: "Space Themed Portfolio",
        desc: "A futuristic, space-themed interactive portfolio where users explore my work by navigating across planets.",
        tech: ["React", "TypeScript", "Vite"],
        color: "border-orange-500/50",
    },
];

export default function Projects() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`hologram-card group ${project.color}`}
                >
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-5 h-5 text-orange-400" />
                    </div>

                    <h3 className="text-xl font-orbitron text-orange-400 mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 h-12">{project.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                            <span key={t} className="text-xs px-2 py-1 rounded bg-orange-500/10 text-orange-300 border border-orange-500/20">
                                {t}
                            </span>
                        ))}
                    </div>

                    <button className="w-full py-2 rounded border border-orange-500/30 text-orange-300 hover:bg-orange-500/20 transition-colors font-orbitron text-sm uppercase flex items-center justify-center gap-2">
                        <Github className="w-4 h-4" /> View Code
                    </button>
                </motion.div>
            ))}
        </div>
    );
}
