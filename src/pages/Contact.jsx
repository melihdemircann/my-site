import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram, FaCopy, FaCheck } from 'react-icons/fa';

// Demo için basit theme hook'u
const useTheme = () => ({
    theme: 'dark',
    language: 'tr'
});

// Gelişmiş Quantum Background Component'i
const QuantumComputerBackground = ({ intensity = 'low' }) => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 1,
            duration: Math.random() * 20 + 10,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/50 to-purple-950/50" />
            
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="0.5"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Floating particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-blue-400/30"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Quantum orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <motion.div
                className="absolute top-3/4 right-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    );
};

const Contact = () => {
    const { theme, language } = useTheme();
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [hoveredSocial, setHoveredSocial] = useState(null);

    const content = {
        tr: {
            title: "İletişim",
            subtitle: "Benimle iletişime geçin",
            description: "Bir proje hakkında konuşmak veya sadece merhaba demek isterseniz, mesaj göndermekten çekinmeyin!",
            contactInfo: "İletişim Bilgileri",
            phone: "Telefon",
            followMe: "Sosyal Medya",
            copied: "Kopyalandı!",
            clickToCopy: "Kopyalamak için tıklayın"
        },
        en: {
            title: "Contact",
            subtitle: "Get in touch with me",
            description: "Whether you want to discuss a project or just say hello, don't hesitate to reach out!",
            contactInfo: "Contact Information",
            phone: "Phone",
            followMe: "Social Media",
            copied: "Copied!",
            clickToCopy: "Click to copy"
        }
    };

    const text = content[language];

    const copyToClipboard = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text);
            if (type === 'email') {
                setCopiedEmail(true);
                setTimeout(() => setCopiedEmail(false), 2000);
            } else {
                setCopiedPhone(true);
                setTimeout(() => setCopiedPhone(false), 2000);
            }
        } catch (err) {
            console.error('Copy failed:', err);
        }
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: "E-mail",
            value: "melihdemircan14@gmail.com",
            link: "mailto:melihdemircan14@gmail.com",
            type: "email"
        },
        {
            icon: FaPhone,
            title: text.phone,
            value: "+90 539 639 07 76",
            link: "tel:+905396390776",
            type: "phone"
        }
    ];

    const socialLinks = [
        {
            icon: FaGithub,
            name: "GitHub",
            url: "https://github.com/melihdemircann",
            color: "#4F46E5",
            description: "Projelerim"
        },
        {
            icon: FaLinkedin,
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/melihdemircann/",
            color: "#0EA5E9",
            description: "Profesyonel"
        },
        {
            icon: FaInstagram,
            name: "Instagram",
            url: "https://www.instagram.com/mlh_demircan/",
            color: "#EC4899",
            description: "Günlük hayat"
        }
    ];

    return (
        <div className="min-h-screen py-16 px-4 relative overflow-hidden">
            <QuantumComputerBackground intensity="medium" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mb-6"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-6 mt-6">
                            <motion.div
                                animate={{ 
                                    rotate: [0, 360],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ 
                                    duration: 4, 
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                <FaEnvelope className="text-3xl text-blue-400" />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-6"
                        style={{ fontFamily: 'ui-monospace, monospace' }}
                    >
                        {text.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        {text.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"
                    />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Contact Information Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-white"></div>
                            </div>
                            {text.contactInfo}
                        </h3>

                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 + index * 0.1 }}
                                className="group relative"
                            >
                                <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-300">
                                                <info.icon className="text-blue-400 text-xl" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-300 text-sm uppercase tracking-wide">
                                                    {info.title}
                                                </p>
                                                <a
                                                    href={info.link}
                                                    className="font-mono text-white hover:text-cyan-400 transition-colors duration-300 text-lg"
                                                >
                                                    {info.value}
                                                </a>
                                            </div>
                                        </div>

                                        <motion.button
                                            onClick={() => copyToClipboard(info.value, info.type)}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 rounded-lg bg-slate-800/50 border border-slate-600/50 text-slate-400 hover:text-white hover:border-blue-400/50 transition-all duration-300"
                                            title={text.clickToCopy}
                                        >
                                            <AnimatePresence mode="wait">
                                                {(info.type === 'email' && copiedEmail) || (info.type === 'phone' && copiedPhone) ? (
                                                    <motion.div
                                                        key="check"
                                                        initial={{ scale: 0, rotate: -180 }}
                                                        animate={{ scale: 1, rotate: 0 }}
                                                        exit={{ scale: 0, rotate: 180 }}
                                                        className="text-green-400"
                                                    >
                                                        <FaCheck />
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key="copy"
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        exit={{ scale: 0 }}
                                                    >
                                                        <FaCopy />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Social Media Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-white"></div>
                            </div>
                            {text.followMe}
                        </h3>

                        <div className="space-y-4">
                            {socialLinks.map((social, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.3 + index * 0.1 }}
                                    onHoverStart={() => setHoveredSocial(index)}
                                    onHoverEnd={() => setHoveredSocial(null)}
                                >
                                    <motion.a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 group"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="flex items-center gap-4">
                                            <motion.div
                                                className="p-4 rounded-xl border transition-all duration-300"
                                                style={{
                                                    backgroundColor: `${social.color}15`,
                                                    borderColor: `${social.color}30`,
                                                }}
                                                animate={{
                                                    rotate: hoveredSocial === index ? [0, 5, -5, 0] : 0,
                                                    scale: hoveredSocial === index ? 1.1 : 1,
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <social.icon 
                                                    className="text-2xl transition-all duration-300"
                                                    style={{ 
                                                        color: social.color,
                                                        filter: hoveredSocial === index ? 'brightness(1.2)' : 'brightness(0.8)'
                                                    }}
                                                />
                                            </motion.div>
                                            <div>
                                                <h4 className="font-semibold text-white text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                                                    {social.name}
                                                </h4>
                                                <p className="text-slate-400 text-sm">
                                                    {social.description}
                                                </p>
                                            </div>
                                            <motion.div
                                                className="ml-auto text-slate-400 group-hover:text-white transition-all duration-300"
                                                animate={{
                                                    x: hoveredSocial === index ? 5 : 0,
                                                }}
                                            >
                                                →
                                            </motion.div>
                                        </div>
                                    </motion.a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Description */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="text-center mt-20"
                >
                    <div className="bg-slate-900/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8 max-w-2xl mx-auto">
                        <motion.p
                            className="text-slate-300 text-lg leading-relaxed"
                            animate={{
                                opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            {text.description}
                        </motion.p>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                .backdrop-blur-xl {
                    backdrop-filter: blur(24px);
                    -webkit-backdrop-filter: blur(24px);
                }
                
                * {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(59, 130, 246, 0.3) transparent;
                }
                
                *::-webkit-scrollbar {
                    width: 8px;
                }
                
                *::-webkit-scrollbar-track {
                    background: transparent;
                }
                
                *::-webkit-scrollbar-thumb {
                    background: rgba(59, 130, 246, 0.3);
                    border-radius: 4px;
                }
                
                *::-webkit-scrollbar-thumb:hover {
                    background: rgba(59, 130, 246, 0.5);
                }
            `}</style>
        </div>
    );
};

export default Contact;