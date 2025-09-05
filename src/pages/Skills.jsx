import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaCode,
    FaGitAlt,
    FaDocker,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaPython,
    FaLinux,
    FaMicrosoft,
    FaAndroid,
    FaUnity,
    FaCuttlefish, // C++ yerine benzer ikon
    FaMobileAlt, // Flutter/Dart yerine mobil ikon
    FaServer, // Express/Backend yerine sunucu ikonu
    FaBoxOpen // Firebase yerine paket/box ikonu
} from 'react-icons/fa';
import { QuantumAtom, QuantumParticleSystem } from '../components/QuantumComponent';

const Skills = () => {
    const { theme, language } = useTheme();
    const [firstLanding, setFirstLanding] = React.useState(true);

    const content = {
        tr: {
            title: "Yeteneklerim",
            subtitle: "Teknoloji yığınım ve uzmanlık alanlarım",
            frontendMobile: "Frontend & Mobile",
            BackendServer: "Backend & Server",
            Databases: "Databases",
            ProgrammingLanguages: "Programming Languages",
            gameVrAr: "Game & AR/VR",
            toolsplatforms: "Tools & Platforms",
            technologies: "İstatistiklerim"
        },
        en: {
            title: "My Skills",
            subtitle: "My technology stack and areas of expertise",
            frontendMobile: "Frontend & Mobile",
            BackendServer: "Backend & Server",
            Databases: "Databases",
            ProgrammingLanguages: "Programming Languages",
            gameVrAr: "Game & AR/VR",
            toolsplatforms: "Tools & Platforms",
            technologies: "My Stats"
        }
    };

    const text = content[language];

    const skillCategories = [
        {
            title: text.frontendMobile,
            color: theme === 'dark' ? 'from-cyan-400 to-blue-500' : 'from-blue-500 to-indigo-600',
            skills: [
                { name: 'React', icon: FaReact, color: '#61DAFB' },
                { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
                { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
                { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
                { name: 'Tailwind CSS', icon: FaCss3Alt, color: '#06B6D4' }, // SiTailwind -> FaCSS
                { name: 'Flutter', icon: FaMobileAlt, color: '#02569B' },
                { name: 'Dart', icon: FaMobileAlt, color: '#0175C2' },
                { name: 'Android', icon: FaAndroid, color: '#3DDC84' }
            ]
        },
        {
            title: text.BackendServer,
            color: theme === 'dark' ? 'from-green-400 to-emerald-500' : 'from-green-500 to-emerald-600',
            skills: [
                { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
                { name: 'Express.js', icon: FaServer, color: '#000000' },
                { name: 'RESTful APIs', icon: FaCode, color: '#FF6B6B' },
                { name: 'Rust', icon: FaCode, color: '#000000' }, // Rust -> FaCode
                { name: 'Firebase', icon: FaBoxOpen, color: '#FFCA28' }
            ]
        },
        {
            title: text.Databases,
            color: theme === 'dark' ? 'from-purple-400 to-pink-500' : 'from-purple-500 to-pink-600',
            skills: [
                { name: 'PostgreSQL', icon: FaDatabase, color: '#336791' },
                { name: 'MySQL', icon: FaDatabase, color: '#4479A1' }
            ]
        },
        {
            title: text.ProgrammingLanguages,
            color: theme === 'dark' ? 'from-yellow-400 to-orange-500' : 'from-yellow-500 to-orange-600',
            skills: [
                { name: 'Python', icon: FaPython, color: '#3776AB' },
                { name: 'C', icon: FaCuttlefish, color: '#A8B9CC' },
                { name: 'C++', icon: FaCuttlefish, color: '#00599C' },
                { name: 'C#', icon: FaCode, color: '#239120' }
            ]
        },
        {
            title: text.gameVrAr,
            color: theme === 'dark' ? 'from-pink-400 to-red-500' : 'from-pink-500 to-red-600',
            skills: [
                { name: 'Unity', icon: FaUnity, color: '#000000' },
                { name: 'Vuforia', icon: FaCode, color: '#0D65A4' }, // Vuforia -> FaCode
                { name: 'Arduino', icon: FaBoxOpen, color: '#00979D' } // Arduino -> FaBoxOpen
            ]
        },
        {
            title: text.toolsplatforms,
            color: theme === 'dark' ? 'from-orange-400 to-red-500' : 'from-orange-500 to-red-600',
            skills: [
                { name: 'Git', icon: FaGitAlt, color: '#F05032' },
                { name: 'Docker', icon: FaDocker, color: '#2496ED' },
                { name: 'VS Code', icon: FaMicrosoft, color: '#007ACC' },
                { name: 'Visual Studio', icon: FaMicrosoft, color: '#5C2D91' },
                { name: 'Linux', icon: FaLinux, color: '#FCC624' }
            ]
        }
    ];

    useEffect(() => {
        setFirstLanding(false);
    }, []);

    return (
        <div className={`min-h-screen py-20 px-4 relative ${theme === 'dark'
            ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-black'
            : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
            }`}>
            <QuantumParticleSystem />
            <QuantumAtom top="10%" left="5%" delay="0s" />
            <QuantumAtom top="30%" right="8%" delay="2s" />
            <QuantumAtom bottom="25%" left="10%" delay="4s" />
            <QuantumAtom bottom="40%" right="5%" delay="1.5s" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.h1
                        className={`interactive-title text-5xl md:text-6xl font-bold mb-6 lightning-text ${theme === 'dark'
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400'
                            : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600'
                            }`}
                        style={{
                            textShadow: theme === 'dark' ? '0 0 30px rgba(0, 255, 255, 0.3)' : 'none'
                        }}
                    >
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: firstLanding ? 0.2 : 0 }}
                        className={`text-xl ${theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'
                            }`}
                    >
                        {text.subtitle}
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: firstLanding ? 0.3 + categoryIndex * 0.2 : 0 }}
                            className={`skill-card p-6 rounded-xl border ${theme === 'dark'
                                ? 'bg-gray-800/50 border-gray-700'
                                : 'bg-white/70 border-gray-200 shadow-lg'
                                }`}
                            style={{
                                boxShadow: theme === 'dark' ? '0 0 30px rgba(0, 255, 255, 0.1)' : 'none',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)'
                            }}
                        >
                            <div className="flex items-center mb-6">
                                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                                    <FaCode className="text-2xl text-white" />
                                </div>
                                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'
                                    }`}>{category.title}</h3>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: firstLanding ? 0.5 + categoryIndex * 0.2 + skillIndex * 0.05 : 0 }}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: `0 10px 25px ${skill.color}30`
                                        }}
                                        className={`skill-item p-4 rounded-lg border transition-all duration-300 ${theme === 'dark'
                                            ? 'bg-gray-700/50 border-gray-600 hover:border-gray-500'
                                            : 'bg-white/80 border-gray-200 hover:border-gray-300 shadow-sm'
                                            }`}
                                        style={{
                                            backdropFilter: 'blur(10px)',
                                            WebkitBackdropFilter: 'blur(10px)'
                                        }}
                                    >
                                        <div className="flex flex-col items-center text-center space-y-2">
                                            <skill.icon
                                                className="text-3xl"
                                                style={{ color: skill.color }}
                                            />
                                            <span className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-800'
                                                }`}>
                                                {skill.name}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: firstLanding ? 1.5 : 0 }}
                    className="mt-16 text-center"
                >
                    <h3 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'
                        }`}>
                        {text.technologies}
                    </h3>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                        {[
                            { years: '30+', label: language === 'tr' ? 'Kullanılan Teknoloji' : 'Technologies Used' },
                            { years: '20+', label: language === 'tr' ? 'Tamamlanan Proje' : 'Completed Projects' }, 
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: firstLanding ? 1.7 + index * 0.2 : 0 }}
                                whileHover={{ scale: 1.05 }}
                                className={`p-6 rounded-xl border ${theme === 'dark'
                                    ? 'bg-gray-800/50 border-cyan-400/30'
                                    : 'bg-white/70 border-purple-200 shadow-lg'
                                    }`}
                                style={{
                                    boxShadow: theme === 'dark' ? '0 0 30px rgba(0, 255, 255, 0.1)' : 'none',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)'
                                }}
                            >
                                <motion.div
                                    animate={{
                                        textShadow: theme === 'dark' ? [
                                            '0 0 20px rgba(0, 255, 255, 0.5)',
                                            '0 0 40px rgba(0, 255, 255, 0.8)',
                                            '0 0 20px rgba(0, 255, 255, 0.5)'
                                        ] : 'none'
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className={`text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'
                                        }`}
                                >
                                    {stat.years}
                                </motion.div>
                                <div className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                    }`}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
