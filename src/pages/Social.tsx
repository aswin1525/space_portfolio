import { motion } from "framer-motion";
import { Github, Linkedin, Keyboard, ExternalLink } from "lucide-react";

const socials = [
    {
        name: "LinkedIn",
        role: "Professional Network",
        url: "https://www.linkedin.com/in/aswinmaheswaran/",
        icon: Linkedin,
        color: "text-blue-400",
        border: "border-blue-500/30",
        bg: "bg-blue-500/10",
        desc: "Connect for professional opportunities and updates."
    },
    {
        name: "GitHub",
        role: "Code Repository",
        url: "https://github.com/aswin1525",
        icon: Github,
        color: "text-purple-400",
        border: "border-purple-500/30",
        bg: "bg-purple-500/10",
        desc: "Explore my open-source projects and contributions."
    },
    {
        name: "Monkeytype",
        role: "Typing Speed",
        url: "https://monkeytype.com/profile/aswin1525",
        icon: Keyboard,
        color: "text-yellow-400",
        border: "border-yellow-500/30",
        bg: "bg-yellow-500/10",
        desc: "Check out my typing stats and speed tests."
    }
];

export default function Social() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {socials.map((social, index) => (
                    <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`glass-panel p-6 border ${social.border} hover:bg-white/5 transition-all group relative overflow-hidden`}
                    >
                        <div className={`absolute -right-10 -top-10 w-32 h-32 ${social.bg} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className={`p-4 rounded-full ${social.bg} ${social.color} mb-4 group-hover:scale-110 transition-transform`}>
                                <social.icon size={32} />
                            </div>

                            <h3 className={`text-xl font-orbitron ${social.color} mb-1`}>{social.name}</h3>
                            <p className="text-xs font-inter text-gray-400 uppercase tracking-wider mb-4">{social.role}</p>

                            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                {social.desc}
                            </p>

                            <div className={`flex items-center gap-2 text-sm ${social.color} opacity-80 group-hover:opacity-100`}>
                                <span>Visit Profile</span>
                                <ExternalLink size={14} />
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
