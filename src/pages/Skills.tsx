import { motion } from "framer-motion";

const skills = [
    { category: "Frontend", items: ["React", "Tailwind CSS", "TypeScript", "JavaScript", "HTML", "CSS"], color: "border-blue-400 text-blue-400" },
    { category: "Backend", items: ["Spring Boot", "Node.js", "Supabase", "Firebase", "Python"], color: "border-blue-400 text-blue-400" },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL"], color: "border-blue-400 text-blue-400" },
    { category: "Tools", items: ["Git", "VS Code", "Figma", "Postman", "Docker"], color: "border-blue-400 text-blue-400" },
];

export default function Skills() {
    return (
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {skills.map((skillGroup, index) => (
                <motion.div
                    key={skillGroup.category}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`glass-panel p-6 border ${skillGroup.color.split(" ")[0]} bg-opacity-5 hover:bg-opacity-10 transition-all`}
                >
                    <h3 className={`text-2xl font-orbitron mb-6 ${skillGroup.color.split(" ")[1]}`}>
                        {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {skillGroup.items.map((item) => (
                            <div key={item} className="relative group">
                                <div className={`absolute inset-0 bg-current opacity-10 blur-sm rounded-lg ${skillGroup.color.split(" ")[1]}`} />
                                <div className={`relative px-4 py-2 rounded-lg border border-white/10 bg-black/40 text-gray-200 font-inter`}>
                                    {item}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
