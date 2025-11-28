import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="max-w-lg mx-auto">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-panel p-6 border-pink-500/30"
            >
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-orbitron text-pink-400 mb-1">Establish Connection</h2>
                    <p className="text-gray-400 text-sm">Send a transmission to my frequency.</p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-pink-300 text-xs font-orbitron mb-1">Identifier (Name)</label>
                        <input
                            type="text"
                            className="w-full bg-black/30 border border-pink-500/30 rounded p-2 text-sm text-white focus:border-pink-500 focus:outline-none focus:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-pink-300 text-xs font-orbitron mb-1">Frequency (Email)</label>
                        <input
                            type="email"
                            className="w-full bg-black/30 border border-pink-500/30 rounded p-2 text-sm text-white focus:border-pink-500 focus:outline-none focus:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-pink-300 text-xs font-orbitron mb-1">Transmission (Message)</label>
                        <textarea
                            rows={3}
                            className="w-full bg-black/30 border border-pink-500/30 rounded p-2 text-sm text-white focus:border-pink-500 focus:outline-none focus:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all"
                            placeholder="Enter your message"
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full py-3 bg-pink-600/20 border border-pink-500 rounded text-pink-300 font-orbitron text-sm tracking-widest uppercase hover:bg-pink-600/40 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all flex items-center justify-center gap-2"
                    >
                        <Send className="w-4 h-4" /> Send Transmission
                    </button>
                </form>

            </motion.div>
        </div>
    );
}
