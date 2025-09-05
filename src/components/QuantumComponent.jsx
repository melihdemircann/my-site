import React, { useState, useEffect } from 'react';

// Kuantum Bit Partikülü
export const QuantumAtom = ({ delay = 0, type = 'qubit' }) => {
    const [position, setPosition] = useState({
        x: Math.random() * 100,
        y: Math.random() * 100
    });
    
    const [isSuperposition, setIsSuperposition] = useState(false);
    
    const qubitTypes = {
        qubit: { symbol: '|0⟩', symbol2: '|1⟩', color: '#3b82f6', size: '12px' },
        entangled: { symbol: '|ψ⟩', symbol2: '|φ⟩', color: '#8b5cf6', size: '10px' },
        quantum: { symbol: '◉', symbol2: '◎', color: '#06b6d4', size: '8px' }
    };

    const qubit = qubitTypes[type];

    useEffect(() => {
        // Süperpozisyon animasyonu
        const superpositionInterval = setInterval(() => {
            setIsSuperposition(prev => !prev);
        }, 2000 + Math.random() * 2000);

        // Yavaş hareket
        const moveInterval = setInterval(() => {
            setPosition(prev => ({
                x: (prev.x + (Math.random() - 0.5) * 3) % 100,
                y: (prev.y + (Math.random() - 0.5) * 3) % 100
            }));
        }, 4000);

        return () => {
            clearInterval(superpositionInterval);
            clearInterval(moveInterval);
        };
    }, []);

    return (
        <div
            className="absolute pointer-events-none transition-all duration-1000 ease-in-out"
            style={{
                left: `${Math.abs(position.x)}%`,
                top: `${Math.abs(position.y)}%`,
                color: qubit.color,
                fontSize: qubit.size,
                textShadow: `0 0 8px ${qubit.color}40`,
                animationDelay: `${delay}s`,
                opacity: 0.4
            }}
        >
            <div className="transition-all duration-1000">
                {isSuperposition ? qubit.symbol2 : qubit.symbol}
            </div>
        </div>
    );
};

// Minimal Kuantum Izgara
export const QuantumGrid = () => {
    return (
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0"
            >
                <defs>
                    <pattern
                        id="quantumComputerGrid"
                        width="80"
                        height="80"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 80 0 L 0 0 0 80"
                            fill="none"
                            stroke="#1e293b"
                            strokeWidth="0.3"
                        />
                        <circle
                            cx="0"
                            cy="0"
                            r="0.5"
                            fill="#475569"
                            opacity="0.4"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#quantumComputerGrid)" />
            </svg>
        </div>
    );
};

// Kuantum Dalga Animasyonu (Çok Sade)
export const QuantumWave = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
            {Array.from({ length: 2 }, (_, i) => (
                <div
                    key={i}
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(ellipse at ${40 + i * 20}% ${50}%, #3b82f620 0%, transparent 60%)`,
                        animation: `gentleQuantumPulse ${12 + i * 4}s infinite ease-in-out ${i * 3}s`
                    }}
                />
            ))}
        </div>
    );
};

// Ana Kuantum Bilgisayar Arkaplan Sistemi
export const QuantumParticleSystem = ({ 
    intensity = 'low',
    qubitCount = 8,
    showGrid = true,
    showWaves = false,
    className = ""
}) => {
    const intensityConfig = {
        minimal: { opacity: 0.8, qubitCount: 5 },
        low: { opacity: 0.9, qubitCount: 8 },
        medium: { opacity: 0.95, qubitCount: 12 }
    };

    const config = intensityConfig[intensity] || intensityConfig.low;
    const totalQubits = Math.min(qubitCount, config.qubitCount);

    return (
        <div className={`fixed inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
            {/* Ultra Dark Gradient Background */}
            <div 
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(135deg, #020617 0%, #0f172a 30%, #1e293b 100%)',
                    opacity: config.opacity
                }}
            />

            {/* Kuantum Izgara */}
            {showGrid && <QuantumGrid />}

            {/* Çok Hafif Dalga Efekti */}
            {showWaves && <QuantumWave />}

            {/* Kuantum Bit Partikülleri */}
            {Array.from({ length: totalQubits }, (_, i) => {
                const qubitTypes = ['qubit', 'entangled', 'quantum'];
                const randomType = qubitTypes[Math.floor(Math.random() * qubitTypes.length)];
                
                return (
                    <QuantumAtom
                        key={i}
                        delay={i * 1}
                        type={randomType}
                    />
                );
            })}

            {/* Minimal Corner Indicators */}
            <div className="absolute top-8 left-8 opacity-15">
                <div 
                    className="w-2 h-2 border border-blue-400/50 rounded-full animate-pulse"
                    style={{ animationDuration: '3s' }}
                />
            </div>
            <div className="absolute top-8 right-8 opacity-15">
                <div 
                    className="w-2 h-2 border border-purple-400/50 rounded-full animate-pulse"
                    style={{ animationDuration: '4s' }}
                />
            </div>

            <style jsx>{`
                @keyframes gentleQuantumPulse {
                    0%, 100% {
                        transform: scale(0.8);
                        opacity: 0.03;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 0.08;
                    }
                }
            `}</style>
        </div>
    );
};

// Kullanım Demo Komponenti
export const QuantumComputerDemo = () => {
    const [backgroundType, setBackgroundType] = useState('low');
    
    return (
        <div className="relative min-h-screen">
            {/* Kuantum Bilgisayar Arkaplanı */}
            <QuantumComputerBackground 
                intensity={backgroundType}
                qubitCount={10}
                showGrid={true}
                showWaves={false}
            />
            
            {/* Demo İçeriği */}
            <div className="relative z-10 p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-mono font-bold text-white mb-4">
                            Kuantum Bilgisayar Interface
                        </h1>
                        <p className="text-slate-400 font-mono text-sm">
                            Minimal ve sade kuantum bilgisayar arkaplan sistemi
                        </p>
                    </div>
                    
                    {/* Arkaplan Kontrolleri */}
                    <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-6 mb-8">
                        <h3 className="text-lg font-mono text-slate-300 mb-4">Arkaplan Yoğunluğu</h3>
                        <div className="flex gap-3">
                            {['minimal', 'low', 'medium'].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setBackgroundType(type)}
                                    className={`px-4 py-2 rounded-md font-mono text-sm transition-all ${
                                        backgroundType === type
                                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                            : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:bg-slate-700/50'
                                    }`}
                                >
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    {/* Kuantum Özellikleri */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-lg p-6">
                            <h4 className="text-md font-mono text-slate-300 mb-3">Kuantum Bit Durumları</h4>
                            <div className="space-y-2 text-sm text-slate-400 font-mono">
                                <div className="flex items-center gap-3">
                                    <span className="text-blue-400">|0⟩</span>
                                    <span>Temel durum (0)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-blue-400">|1⟩</span>
                                    <span>Uyarılmış durum (1)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-purple-400">|ψ⟩</span>
                                    <span>Süperpozisyon durumu</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-lg p-6">
                            <h4 className="text-md font-mono text-slate-300 mb-3">Kullanım</h4>
                            <div className="bg-slate-800/60 p-3 rounded-md">
                                <code className="text-blue-300 text-xs">
                                    {`<QuantumComputerBackground 
  intensity="low"
  qubitCount={8}
  showGrid={true}
/>`}
                                </code>
                            </div>
                        </div>
                    </div>
                    
                    {/* Sistem Bilgileri */}
                    <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-lg p-6">
                        <h3 className="text-lg font-mono text-slate-300 mb-4">Sistem Özellikleri</h3>
                        <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-400 font-mono">
                            <div>
                                <div className="text-slate-300 mb-1">Kuantum Bitleri</div>
                                <div className="text-blue-400">25-35 aktif qubit</div>
                            </div>
                            <div>
                                <div className="text-slate-300 mb-1">Enerji Çizgileri</div>
                                <div className="text-green-400">14 aktif hat</div>
                            </div>
                            <div>
                                <div className="text-slate-300 mb-1">Floating Orbs</div>
                                <div className="text-purple-400">12 kuantum orb</div>
                            </div>
                            <div>
                                <div className="text-slate-300 mb-1">Süperpozisyon</div>
                                <div className="text-purple-400">Dinamik geçiş</div>
                            </div>
                            <div>
                                <div className="text-slate-300 mb-1">Dalga Efektleri</div>
                                <div className="text-cyan-400">8 dalga katmanı</div>
                            </div>
                            <div>
                                <div className="text-slate-300 mb-1">Performans</div>
                                <div className="text-green-400">Optimize edilmiş</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuantumComputerDemo;