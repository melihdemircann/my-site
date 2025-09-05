import React, { useState, useEffect, useRef } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
    const [commandsCompleted, setCommandsCompleted] = useState([]);
    const [showCursor, setShowCursor] = useState(true);
    const [progress, setProgress] = useState(0);
    const hasRun = useRef(false);

    const terminalCommands = [
        'npm install portfolio-dependencies',
        'Initializing React components...',
        'Loading Framer Motion animations...',
        'Setting up Tailwind CSS...',
        'Configuring dark/light themes...',
        'Establishing router connections...',
        'Optimizing performance...',
        'Portfolio ready! 🚀',
    ];

    useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;

        setCommandsCompleted([]);
        setProgress(0);

        terminalCommands.forEach((command, index) => {
            setTimeout(() => {
                setCommandsCompleted(prev => [...prev, `$ ${command}`]);
                setProgress(((index + 1) / terminalCommands.length) * 100);
                
                if (index === terminalCommands.length - 1) {
                    setTimeout(() => {
                        onLoadingComplete && onLoadingComplete();
                    }, 1000);
                }
            }, index * 600);
        });

        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => {
            clearInterval(cursorInterval);
        };
    }, [onLoadingComplete]);

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center z-50">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            {/* Main terminal container */}
            <div className="relative bg-gray-900/90 backdrop-blur-sm border border-cyan-400/50 rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl shadow-cyan-400/20">
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-xl -z-10"></div>
                
                {/* Terminal header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <div className="flex space-x-2">
                            <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer"></div>
                            <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer"></div>
                            <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer"></div>
                        </div>
                        <div className="text-gray-400 text-sm font-medium">portfolio@terminal</div>
                    </div>
                    <div className="text-cyan-400 text-sm font-mono">{Math.round(progress)}%</div>
                </div>

                {/* Terminal content */}
                <div className="font-mono text-sm min-h-[280px] bg-black/50 rounded-lg p-6 border border-gray-700/50">
                    <div className="text-cyan-400 mb-4 text-xs opacity-70">
                        Building your portfolio experience...
                    </div>
                    
                    {commandsCompleted.map((command, index) => (
                        <div
                            key={index}
                            className={`transform transition-all duration-500 ease-out mb-2 ${
                                index === commandsCompleted.length - 1 ? 'scale-105' : ''
                            }`}
                            style={{
                                animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
                            }}
                        >
                            <span className="text-gray-500 mr-2">›</span>
                            <span className={`${
                                command.includes('ready') ? 'text-green-400 font-bold' : 'text-green-300'
                            }`}>
                                {command}
                            </span>
                            {command.includes('ready') && (
                                <span className="ml-2 animate-bounce">✨</span>
                            )}
                        </div>
                    ))}
                    
                    {/* Cursor */}
                    <div className="flex items-center mt-2">
                        <span className="text-gray-500 mr-2">›</span>
                        <span className={`w-3 h-5 bg-cyan-400 transition-opacity duration-300 ${
                            showCursor ? 'opacity-100' : 'opacity-30'
                        }`}>
                            |
                        </span>
                    </div>
                </div>

                {/* Enhanced progress bar */}
                <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-xs text-gray-400">
                        <span>Loading Components</span>
                        <span className="font-mono">{Math.round(progress)}%</span>
                    </div>
                    <div className="relative w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out shadow-lg shadow-cyan-400/50"
                            style={{ width: `${progress}%` }}
                        >
                            <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                        </div>
                        {/* Progress bar glow */}
                        <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400/50 to-purple-500/50 blur-sm rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                {/* Status indicator */}
                <div className="flex items-center justify-center mt-6 space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="text-cyan-400 text-sm font-medium">
                        {progress < 100 ? 'Initializing...' : 'Ready to launch!'}
                    </div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default LoadingScreen;