    import React, { useEffect, useRef } from 'react';
    import { motion, useInView, useScroll, useTransform } from 'framer-motion';
    import { useTheme } from '../ThemeContext';
    import { FaCode, FaGraduationCap, FaHeart, FaGamepad, FaBook, FaRocket } from 'react-icons/fa';
    import { QuantumAtom, QuantumParticleSystem } from '../components/QuantumComponent';

    const About = () => {
        const { theme, language } = useTheme();
        const [firstLanding, setFirstLanding] = React.useState(true);
        const containerRef = useRef(null);
        const { scrollYProgress } = useScroll();
        const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50]);
        
        const content = {
            tr: {
                title: "Hakkımda",
                subtitle: "Ben Kimim ?  ",
                intro: "Merhaba! Ben Melih Demircan. Yazılım geliştirmek benim için bir meslekten öte, hayatımın merkezinde olan bir tutku. Her gün yeni teknolojilerle kendimi geliştirmeye devam ediyorum.",
                story: "Yazılım ve teknoloji yolculuğum, farklı alanlarda yeteneklerimi geliştirme isteğimle şekillendi. Rust, C ve C++ ile güçlü ve verimli programlar geliştiriyor; HTML, CSS ve JavaScript ile modern web arayüzleri tasarlıyorum. Flutter ile mobil uygulamalar üretirken, Unity (C#) ile oyun ve simülasyon projeleri üzerinde çalışıyorum. Ayrıca Yapay Zeka, IoT ve gömülü sistemler üzerine deneyimimle teknolojiyi daha akıllı ve işlevsel hale getirmeye çalışıyorum. Problem çözmek ve projelere etkili dokunuşlar katmak benim için her zaman keyifli bir süreç.",
                passion: "Teknoloji ve Yenilik Tutkum",
                passionDesc: "Teknoloji benim için sadece bir araç değil, aynı zamanda sürekli öğrenme ve keşfetme motivasyonumun kaynağı. Yeni diller, platformlar ve sistemlerle çalışmak, yeteneklerimi geliştirmek ve projelere değer katmak için beni sürekli ileriye taşıyor.",
                education: "Eğitim & Gelişim",
                educationDesc: "Şu anda Kütahya Dumlupınar Üniversitesi Bilgisayar Mühendisliği bölümünde 4. sınıf öğrencisiyim. Üniversite hayatım boyunca Model Uydu, Roket ve Denizaltı kulüplerinde aktif olarak yer aldım ve projelerde yazılım ve sistem geliştirme alanında görev aldım. Öğrenmeye ve kendimi geliştirmeye devam etmek benim için her zaman öncelikli.",
                hobbies: "Hobiler & Yaşam",
                hobbiesDesc: "Boş zamanlarımda gitar ve piyano çalmak, futbol ve tenis oynamak gibi aktivitelerle ilgileniyorum. Müzik ve spor, hem yaratıcılığımı hem de disiplinimi geliştirmeme yardımcı oluyor.",
                values: "Değerlerim",
                valuesDesc: "Dürüstlük, sorumluluk ve sürekli öğrenme benim temel değerlerim. Her projede titizlikle çalışmayı, ekip içinde yapıcı ve paylaşımcı olmayı önemsiyorum. Yeniliklere açık olmak ve bilgi birikimimi sürekli artırmak da hayatımın vazgeçilmez parçaları.",
                journey: "Yolculuğum",
                stats: {
                    projects: "20+",
                    projectsLabel: "Tamamlanan Proje",
                    skills: "5",
                    skillsLabel: "Uzmanlık Alanı",
                    contributions: "∞",
                    contributionsLabel: "Öğrenme ve Gelişim",
                }
            },
            en: {
                title: "About Me",
                subtitle: "Get to know who I am",
                intro: "Hi! I'm Melih Demircan. Coding is not just my job—it's my passion. I've been working professionally in software development since 2018 and keep improving myself with new technologies every day.",
                story: "My web development journey is driven by a desire to create solutions that users actually enjoy and find useful. I design mobile apps with HTML5, JavaScript, and Ionic, and build modern, functional web panels using React.js. Solving problems and adding small but impactful touches makes my work fun.",
                passion: "My passion for technology",
                passionDesc: "New technology = a new playground. I get that first-day excitement every time I dive into something new. Nerd fun included.",
                education: "Education & Growth",
                educationDesc: "I didn't attend university, but that didn't stop me. I've kept learning and improving—and still am. Knowledge is power, coffee is fuel!",
                hobbies: "Hobbies & Life",
                hobbiesDesc: "In my free time, I love gaming, camping, and cooking. Especially cooking—sometimes I treat recipes like code and debug them!",
                values: "My Values",
                valuesDesc: "Quality code, teamwork, and continuous development are my core values. Also, I can never forget coffee.",
                journey: "My Journey",
                stats: {
                    projects: "20+",
                    projectsLabel: "Completed Projects",
                    skills: "5",
                    skillsLabel: "Areas of Expertise",
                    contributions: "∞",
                    contributionsLabel: "Continuous Learning",
                }
            }
        };

        const text = content[language];

        const features = [
            {
                icon: FaCode,
                title: text.passion,
                description: text.passionDesc,
                color: theme === 'dark' ? 'from-cyan-400 to-blue-500' : 'from-purple-500 to-blue-600',
            },
            {
                icon: FaGraduationCap,
                title: text.education,
                description: text.educationDesc,
                color: theme === 'dark' ? 'from-purple-400 to-pink-500' : 'from-indigo-500 to-purple-600',
            },
            {
                icon: FaGamepad,
                title: text.hobbies,
                description: text.hobbiesDesc,
                color: theme === 'dark' ? 'from-green-400 to-cyan-500' : 'from-green-500 to-teal-600',
            },
            {
                icon: FaHeart,
                title: text.values,
                description: text.valuesDesc,
                color: theme === 'dark' ? 'from-pink-400 to-red-500' : 'from-pink-500 to-red-600',
            }
        ];

        const stats = [
            {
                value: text.stats.projects,
                label: text.stats.projectsLabel,
                icon: FaRocket,
                color: 'from-cyan-400 to-blue-500'
            },
            {
                value: text.stats.skills,
                label: text.stats.skillsLabel,
                icon: FaCode,
                color: 'from-purple-400 to-pink-500'
            },
            {
                value: text.stats.contributions,
                label: text.stats.contributionsLabel,
                icon: FaBook,
                color: 'from-amber-400 to-orange-500'
            }
        ];

        useEffect(() => {
            setFirstLanding(false);
        }, []);

        const FeatureCard = ({ feature, index }) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });

            return (
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50, rotateX: -10 }}
                    animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                    transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                    }}
                    whileHover={{
                        scale: 1.05,
                        y: -5,
                        rotateX: 5,
                        transition: { duration: 0.2 }
                    }}
                    className={`group relative overflow-hidden feature-card p-8 rounded-2xl border transition-all duration-500 ${
                        theme === 'dark'
                            ? 'bg-gray-800/60 border-gray-700/50 hover:border-cyan-400/50'
                            : 'bg-white/80 border-gray-200/50 hover:border-purple-300/50 shadow-lg hover:shadow-xl'
                    }`}
                    style={{
                        backdropFilter: 'blur(25px)',
                        WebkitBackdropFilter: 'blur(25px)',
                        transform: 'perspective(1000px) rotateX(0deg)'
                    }}
                >
                    {/* Animated background gradient */}
                    <motion.div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${feature.color}`}
                        animate={{
                            background: [
                                `linear-gradient(45deg, transparent, transparent)`,
                                `linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))`,
                                `linear-gradient(45deg, transparent, transparent)`
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Floating emoji */}
                    <motion.div
                        className="absolute top-4 right-4 text-2xl opacity-50 group-hover:opacity-100"
                        animate={{ 
                            y: [0, -5, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {feature.emoji}
                    </motion.div>

                    <div className="flex items-start space-x-6 relative z-10">
                        <motion.div
                            className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <feature.icon className="text-2xl text-white drop-shadow-lg" />
                        </motion.div>
                        <div className="flex-1 space-y-3">
                            <motion.h3
                                className={`text-2xl font-bold ${
                                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                                }`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: index * 0.1 + 0.2 }}
                            >
                                {feature.title}
                            </motion.h3>
                            <motion.p
                                className={`text-lg leading-relaxed ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                }`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: index * 0.1 + 0.3 }}
                            >
                                {feature.description}
                            </motion.p>
                        </div>
                    </div>

                    {/* Hover effect border */}
                    <motion.div
                        className={`absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 ${
                            theme === 'dark' ? 'border-cyan-400/50' : 'border-purple-400/50'
                        }`}
                        initial={false}
                        animate={{
                            background: [
                                `conic-gradient(from 0deg, transparent, transparent)`,
                                `conic-gradient(from 360deg, rgba(59, 130, 246, 0.3), transparent)`
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            );
        };

        const StatCard = ({ stat, index }) => (
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                }}
                whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                }}
                className={`text-center p-6 rounded-xl ${
                    theme === 'dark'
                        ? 'bg-gray-800/60 border border-gray-700/50'
                        : 'bg-white/80 border border-gray-200/50 shadow-lg'
                }`}
                style={{
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)'
                }}
            >
                <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4 shadow-lg`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    <stat.icon className="text-2xl text-white" />
                </motion.div>
                <motion.div
                    className={`text-3xl font-bold mb-2 ${
                        theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'
                    }`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    {stat.value}
                </motion.div>
                <div className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                    {stat.label}
                </div>
            </motion.div>
        );

        return (
            <div className={`min-h-screen py-20 px-4 relative overflow-hidden ${
                theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-900 via-purple-900/50 to-black'
                    : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
            }`} ref={containerRef}>

                {/* Enhanced Background Effects */}
                <QuantumParticleSystem />
                
                {/* Floating Quantum Atoms with better positioning */}
                <QuantumAtom delay={0} className="top-20 left-10 opacity-60" />
                <QuantumAtom delay={1.5} className="top-40 right-20 opacity-40" />
                <QuantumAtom delay={3} className="bottom-32 left-1/4 opacity-50" />
                <QuantumAtom delay={4.5} className="top-60 right-1/3 opacity-30" />

                {/* Parallax background elements */}
                <motion.div 
                    className="absolute inset-0 opacity-5"
                    style={{ y: parallaxY }}
                >
                    <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl ${
                        theme === 'dark' ? 'bg-cyan-400/20' : 'bg-purple-400/20'
                    }`} />
                    <div className={`absolute top-3/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${
                        theme === 'dark' ? 'bg-purple-400/20' : 'bg-blue-400/20'
                    }`} />
                </motion.div>

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Enhanced Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, type: "spring", stiffness: 100 }}
                        className="text-center mb-20"
                    >
                        <motion.h1
                            className={`interactive-title text-6xl md:text-8xl font-black mb-8 lightning-text ${
                                theme === 'dark'
                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400'
                                    : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600'
                            }`}
                            style={{
                                textShadow: theme === 'dark' ? '0 0 40px rgba(0, 255, 255, 0.4)' : '0 0 20px rgba(147, 51, 234, 0.3)',
                                filter: 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.3))'
                            }}
                            animate={{
                                textShadow: theme === 'dark' 
                                    ? [
                                        '0 0 40px rgba(0, 255, 255, 0.4)',
                                        '0 0 60px rgba(0, 255, 255, 0.6)',
                                        '0 0 40px rgba(0, 255, 255, 0.4)'
                                    ]
                                    : [
                                        '0 0 20px rgba(147, 51, 234, 0.3)',
                                        '0 0 30px rgba(147, 51, 234, 0.5)',
                                        '0 0 20px rgba(147, 51, 234, 0.3)'
                                    ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >

                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className={`text-2xl font-medium ${
                                theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'
                            }`}
                        >
                            {text.subtitle}
                        </motion.p>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
                    >
                        {stats.map((stat, index) => (
                            <StatCard key={index} stat={stat} index={index} />
                        ))}
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 mb-20">
                        {/* Story Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="space-y-8"
                        >
                            <motion.div
                                className={`p-8 rounded-2xl border-2 ${
                                    theme === 'dark'
                                        ? 'bg-gradient-to-br from-gray-800/70 to-gray-900/70 border-cyan-400/30'
                                        : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-purple-200 shadow-xl'
                                }`}
                                style={{
                                    boxShadow: theme === 'dark' 
                                        ? '0 0 40px rgba(0, 255, 255, 0.15), inset 0 0 40px rgba(0, 255, 255, 0.05)' 
                                        : '0 25px 50px rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(30px)',
                                    WebkitBackdropFilter: 'blur(30px)'
                                }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.h3
                                    className={`text-2xl font-bold mb-6 ${
                                        theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'
                                    }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    {text.journey} 🚀
                                </motion.h3>
                                <motion.p
                                    className={`text-lg leading-relaxed mb-6 ${
                                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    {text.intro}
                                </motion.p>
                                <motion.p
                                    className={`text-lg leading-relaxed ${
                                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    {text.story}
                                </motion.p>
                            </motion.div>
                        </motion.div>

                        {/* Enhanced Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="flex justify-center items-center"
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
                                className={`relative w-96 h-96 rounded-3xl ${
                                    theme === 'dark'
                                        ? 'bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500'
                                        : 'bg-gradient-to-br from-purple-400 via-blue-500 to-indigo-600'
                                } p-2 shadow-2xl`}
                                style={{
                                    boxShadow: theme === 'dark'
                                        ? '0 0 60px rgba(0, 255, 255, 0.4), inset 0 0 60px rgba(0, 255, 255, 0.1)'
                                        : '0 30px 60px rgba(0, 0, 0, 0.3)',
                                    transform: 'perspective(1000px) rotateX(0deg)'
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className={`w-full h-full rounded-2xl ${
                                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                                } overflow-hidden shadow-inner`}>
                                    <img 
                                        className='w-full h-full object-cover object-top rounded-2xl' 
                                        src='./my.jpeg' 
                                        alt="Melih Demircan"
                                    />
                                </div>

                                {/* Enhanced Orbiting Elements */}
                                {[0, 72, 144, 216, 288].map((rotation, index) => (
                                    <motion.div
                                        key={index}
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 20 + index * 3,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        className="absolute inset-0"
                                        style={{ transform: `rotate(${rotation}deg)` }}
                                    >
                                        <motion.div
                                            className={`absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                                                index === 0 ? 'bg-cyan-400' :
                                                index === 1 ? 'bg-purple-400' :
                                                index === 2 ? 'bg-pink-400' :
                                                index === 3 ? 'bg-yellow-400' : 'bg-green-400'
                                            }`}
                                            style={{
                                                boxShadow: `0 0 25px ${
                                                    index === 0 ? 'rgba(0, 255, 255, 0.8)' :
                                                    index === 1 ? 'rgba(147, 51, 234, 0.8)' :
                                                    index === 2 ? 'rgba(236, 72, 153, 0.8)' :
                                                    index === 3 ? 'rgba(251, 191, 36, 0.8)' : 'rgba(34, 197, 94, 0.8)'
                                                }`
                                            }}
                                            animate={{ 
                                                scale: [1, 1.5, 1],
                                                opacity: [0.7, 1, 0.7]
                                            }}
                                            transition={{ 
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: index * 0.2
                                            }}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Enhanced Features Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    >
                        {features.map((feature, index) => (
                            <FeatureCard key={index} feature={feature} index={index} />
                        ))}
                    </motion.div>
                </div>
            </div>
        );
    };

    export default About;