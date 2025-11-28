import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="max-w-2xl mx-auto">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-panel p-8 border-pink-500/30"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-orbitron text-pink-400 mb-2">Establish Connection</h2>
                    <p className="text-gray-400">Send a transmission to my frequency.</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-pink-300 text-sm font-orbitron mb-2">Identifier (Name)</label>
                        <input
                            type="text"
                            className="w-full bg-black/30 border border-pink-500/30 rounded p-3 text-white focus:border-pink-500 focus:outline-none focus:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-pink-300 text-sm font-orbitron mb-2">Frequency (Email)</label>
                        <input
                            type="email"
                            className="w-full bg-black/30 border border-pink-500/30 rounded p-3 text-white focus:border-pink-500 focus:outline-none focus:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-pink-300 text-sm font-orbitron mb-2">Transmission (Message)</label>
                        <textarea
                            rows={4}
                            className="w-full bg-black/30 border border-pink-500/30 rounded p-3 text-white focus:border-pink-500 focus:outline-none focus:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all"
                            placeholder="Enter your message"
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full py-4 bg-pink-600/20 border border-pink-500 rounded text-pink-300 font-orbitron tracking-widest uppercase hover:bg-pink-600/40 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all flex items-center justify-center gap-2"
                    >
                        <Send className="w-5 h-5" /> Send Transmission
                    </button>
                </form>

                <div className="mt-8 flex justify-center gap-6">
                    <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors">
                        <Mail className="w-4 h-4" /> aswin@example.com
                    </a>
                    <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors">
                        <MessageSquare className="w-4 h-4" /> LinkedIn
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
