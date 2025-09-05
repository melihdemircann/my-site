import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import { FaDownload, FaGithub, FaLinkedin, FaInstagram, FaTrophy, FaRocket, FaUsers } from 'react-icons/fa';
import { QuantumAtom, QuantumParticleSystem } from '../components/QuantumComponent';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { theme, language } = useTheme();
    const navigate = useNavigate();
    const [firstLanding, setFirstLanding] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    const content = {
        tr: {
            greeting: "Merhaba, Ben:",
            name: "Melih Demircan",
            title: "Bilgisayar Mühendisi",
            subtitle: "Teknoloji Tutkunu • Problem Çözücü • İnovasyon Odaklı",
            description: "Yazılım dünyasında sınırları zorlayan çözümler üretiyorum. Modern teknolojilerle yüksek performanslı uygulamalar geliştiriyor, kullanıcı deneyimini ön planda tutarak yenilikçi dijital çözümler yaratıyorum.",
            achievements: [
                "4. Sınıf",
                "Kütahya Dumlupınar Üniversitesi",
                "Bilgisayar Mühendisi"
            ],
            downloadCV: "CV İndir",
            viewProjects: "Projeleri Gör",
            contact: "İletişim",
            achievementsTitle: "Başarılarım"
        },
        en: {
            greeting: "Hello, I'm:",
            name: "Melih Demircan",
            title: "Computer Engineer",
            subtitle: "Tech Enthusiast • Problem Solver • Innovation Focused",
            description: "I create cutting-edge solutions in the software world. Developing high-performance applications with modern technologies, prioritizing user experience to create innovative digital solutions.",
            achievements: [
            "4th Year",
            "Kütahya Dumlupınar University",
            "Computer Engineer"
            ],
            downloadCV: "Download CV",
            viewProjects: "View Projects",
            contact: "Contact",
            achievementsTitle: "My Achievements"
        }
    };

    // Safe content selection with fallback
    const currentContent = content[language] || content.tr;

    const handleDownloadCV = useCallback(() => {
        try {
            const link = document.createElement('a');
            link.href = '/melih-demircan-cv.pdf';
            link.download = 'melih-demircan-cv.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.warn('CV download error:', error);
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFirstLanding(false);
            setIsVisible(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const socialIcons = [
        { icon: FaGithub, url: "https://github.com/melihdemircann", label: "GitHub" },
        { icon: FaLinkedin, url: "https://www.linkedin.com/in/melihdemircann/", label: "LinkedIn" },
        { icon: FaInstagram, url: "https://www.instagram.com/mlh_demircan/", label: "Instagram" }
    ];

    const achievementIcons = [FaTrophy, FaRocket, FaUsers];

    return (
        <div className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
            theme === 'dark'
                ? 'bg-gradient-to-br from-slate-900 via-indigo-900 to-gray-900'
                : 'bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50'
        }`}>
            {/* Background Effects */}
            <QuantumParticleSystem />
            <QuantumAtom delay={0} className="top-20 left-10 hidden lg:block" />
            <QuantumAtom delay={1.5} className="top-40 right-20 hidden lg:block" />
            <QuantumAtom delay={3} className="bottom-32 left-1/4 hidden lg:block" />
            <QuantumAtom delay={4.5} className="top-60 right-1/3 hidden lg:block" />

            <motion.div 
                className="max-w-7xl mx-auto w-full relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Content Section */}
                    <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left space-y-6">
                        <motion.div variants={itemVariants} className="space-y-4">
<motion.p
    className={`mt-20 text-base sm:text-lg font-medium tracking-wide ${
        theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'
    }`}
>
    {currentContent.greeting}
</motion.p>


                            <motion.h1
                                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight ${
                                    theme === 'dark'
                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400'
                                        : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600'
                                }`}
                                style={{
                                    textShadow: theme === 'dark' ? '0 0 30px rgba(0, 255, 255, 0.3)' : 'none'
                                }}
                            >
                                {currentContent.name}
                            </motion.h1>

                            <motion.h2
                                className={`text-xl sm:text-2xl lg:text-3xl font-semibold ${
                                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                                }`}
                            >
                                {currentContent.title}
                            </motion.h2>

                            <motion.p
                                className={`text-sm sm:text-base font-medium ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                }`}
                            >
                                {currentContent.subtitle}
                            </motion.p>
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className={`text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}
                        >
                            {currentContent.description}
                        </motion.p>

                        {/* Achievements */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h3 className={`text-lg font-semibold ${
                                theme === 'dark' ? 'text-white' : 'text-gray-800'
                            }`}>
                                {currentContent.achievementsTitle}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {currentContent.achievements && currentContent.achievements.map((achievement, index) => {
                                    const IconComponent = achievementIcons[index] || FaTrophy;
                                    return (
                                        <motion.div
                                            key={`achievement-${index}`}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                                                theme === 'dark'
                                                    ? 'bg-gray-800/50 border border-gray-700 hover:border-cyan-400'
                                                    : 'bg-white/70 border border-gray-200 hover:border-purple-300 shadow-sm'
                                            }`}
                                        >
                                            <IconComponent className={`text-xl ${
                                                theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'
                                            }`} />
                                            <span className={`font-medium text-sm ${
                                                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                                            }`}>
                                                {achievement}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.button
                                onClick={handleDownloadCV}
                                whileHover={{ 
                                    scale: 1.05, 
                                    boxShadow: theme === 'dark' 
                                        ? '0 0 25px rgba(0, 255, 255, 0.5)' 
                                        : '0 10px 25px rgba(0, 0, 0, 0.2)' 
                                }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg ${
                                    theme === 'dark'
                                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white border border-cyan-400'
                                        : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                                }`}
                            >
                                <FaDownload />
                                {currentContent.downloadCV}
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/projects')}
                                className={`px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 ${
                                    theme === 'dark'
                                        ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                                        : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                                }`}
                            >
                                {currentContent.viewProjects}
                            </motion.button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            variants={itemVariants}
                            className="flex gap-6 justify-center lg:justify-start"
                        >
                            {socialIcons.map((item, index) => (
                                <motion.a
                                    key={`social-${index}`}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.label}
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    className={`text-2xl transition-all duration-300 p-3 rounded-full ${
                                        theme === 'dark'
                                            ? 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800'
                                            : 'text-gray-600 hover:text-purple-600 hover:bg-gray-100'
                                    }`}
                                    style={{
                                        filter: theme === 'dark' ? 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.3))' : 'none'
                                    }}
                                >
                                    <item.icon />
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
                        <motion.div
                            variants={itemVariants}
                            className="relative"
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, 5, 0, -5, 0],
                                    scale: [1, 1.02, 1, 1.02, 1]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className={`relative ${
                                    theme === 'dark'
                                        ? 'bg-gradient-to-br from-cyan-400 to-purple-600'
                                        : 'bg-gradient-to-br from-purple-400 to-blue-600'
                                } p-1 rounded-full shadow-2xl`}
                                style={{
                                    boxShadow: theme === 'dark'
                                        ? '0 0 50px rgba(0, 255, 255, 0.3), inset 0 0 50px rgba(0, 255, 255, 0.1)'
                                        : '0 20px 50px rgba(0, 0, 0, 0.2)'
                                }}
                            >
                                <div className={`w-64 h-64 sm:w-80 sm:h-80 rounded-full ${
                                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                                } flex items-center justify-center overflow-hidden`}>
                                    <img 
                                        src="./my.jpeg" 
                                        alt="Melih Demircan" 
                                        className="w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover transition-transform duration-300 hover:scale-105" 
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </div>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className={`absolute inset-0 rounded-full border-4 border-dashed opacity-50 ${
                                        theme === 'dark' ? 'border-cyan-400' : 'border-purple-400'
                                    }`}
                                />
                            </motion.div>

                            {/* Floating Tech Icons */}
                            {achievementIcons.map((Icon, index) => (
                                <motion.div
                                    key={`floating-${index}`}
                                    className={`absolute w-12 h-12 rounded-full flex items-center justify-center ${
                                        theme === 'dark'
                                            ? 'bg-gray-800 border-2 border-cyan-400'
                                            : 'bg-white border-2 border-purple-400 shadow-lg'
                                    }`}
                                    style={{
                                        top: index === 0 ? '10%' : index === 1 ? '50%' : '80%',
                                        right: index === 1 ? '-10px' : '10%',
                                        left: index === 1 ? 'auto' : '10%'
                                    }}
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 360]
                                    }}
                                    transition={{
                                        y: { duration: 2, repeat: Infinity, delay: index * 0.5 },
                                        rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                                    }}
                                >
                                    <Icon className={`text-lg ${
                                        theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'
                                    }`} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;