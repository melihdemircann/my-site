import React, { useEffect, useRef, useState } from 'react';

const QuantumMouse = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(true);
    const quantumBitsRef = useRef([]);
    const trailPointsRef = useRef([]);
    const quantumGatesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let time = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const addQuantumBit = (x, y, speed = 0) => {
            const bitValue = Math.random() < 0.5 ? 0 : 1;
            const superposition = Math.random() < 0.3;

            quantumBitsRef.current.push({
                x: x + (Math.random() - 0.5) * 40,
                y: y + (Math.random() - 0.5) * 40,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                life: 80 + Math.random() * 60,
                maxLife: 80 + Math.random() * 60,
                value: bitValue,
                superposition: superposition,
                phase: Math.random() * Math.PI * 2,
                frequency: 0.05 + Math.random() * 0.1,
                size: 8 + Math.random() * 4
            });
        };

        const handleMouseMove = (e) => {
            const prevMouse = { ...mouseRef.current };
            mouseRef.current = { x: e.clientX, y: e.clientY };
            setIsVisible(true);

            const speed = Math.sqrt(
                Math.pow(e.clientX - prevMouse.x, 2) +
                Math.pow(e.clientY - prevMouse.y, 2)
            );

            if (Math.random() < 0.3) {
                addQuantumBit(e.clientX, e.clientY, speed);
            }

            trailPointsRef.current.push({
                x: e.clientX,
                y: e.clientY,
                time: time,
                life: 60
            });

            if (trailPointsRef.current.length > 15) {
                trailPointsRef.current.shift();
            }

            if (speed > 10 && Math.random() < 0.1) {
                quantumGatesRef.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    life: 120,
                    maxLife: 120,
                    type: Math.random() < 0.5 ? 'hadamard' : 'pauli'
                });
            }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleClick = (e) => {
            for (let i = 0; i < 8; i++) {
                const angle = (Math.PI * 2 * i) / 8;
                addQuantumBit(
                    e.clientX + Math.cos(angle) * 30,
                    e.clientY + Math.sin(angle) * 30,
                    20
                );
            }
        };

        const drawQuantumBit = (bit) => {
            const alpha = bit.life / bit.maxLife;
            ctx.globalAlpha = alpha * 0.8;

            if (bit.superposition) {
                const offset = Math.sin(time * 10 + bit.phase) * 3;

                ctx.font = `${bit.size}px 'Courier New', monospace`;
                ctx.fillStyle = '#00ff88';
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#00ff88';

                ctx.fillText('0', bit.x - offset, bit.y);
                ctx.fillText('1', bit.x + offset, bit.y);

                ctx.strokeStyle = '#00ff8840';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(bit.x - offset + 4, bit.y - 3);
                ctx.lineTo(bit.x + offset + 4, bit.y - 3);
                ctx.stroke();

            } else {
                ctx.font = `${bit.size}px 'Courier New', monospace`;
                ctx.fillStyle = bit.value === 1 ? '#0099ff' : '#ff6600';
                ctx.shadowBlur = 8;
                ctx.shadowColor = ctx.fillStyle;

                ctx.fillText(bit.value.toString(), bit.x, bit.y);

                ctx.strokeStyle = ctx.fillStyle + '30';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(bit.x + 4, bit.y - 4, bit.size + 2, 0, Math.PI * 2);
                ctx.stroke();
            }

            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1;
        };

        const drawQuantumGate = (gate) => {
            const alpha = gate.life / gate.maxLife;
            ctx.globalAlpha = alpha * 0.6;

            const size = 30;

            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#ffffff';

            ctx.beginPath();
            ctx.rect(gate.x - size / 2, gate.y - size / 2, size, size);
            ctx.stroke();

            ctx.fillStyle = '#ffffff';
            ctx.font = '12px Courier New';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            if (gate.type === 'hadamard') {
                ctx.fillText('H', gate.x, gate.y);
            } else {
                ctx.fillText('X', gate.x, gate.y);
            }

            ctx.strokeStyle = '#ffffff60';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(gate.x - size, gate.y);
            ctx.lineTo(gate.x + size, gate.y);
            ctx.stroke();

            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1;
            ctx.textAlign = 'start';
            ctx.textBaseline = 'alphabetic';
        };

        const drawBinaryWave = (centerX, centerY, targetX, targetY) => {
            const distance = Math.sqrt(Math.pow(targetX - centerX, 2) + Math.pow(targetY - centerY, 2));
            const steps = Math.floor(distance / 10);

            ctx.globalAlpha = 0.3;
            ctx.strokeStyle = '#00ff88';
            ctx.lineWidth = 1;
            ctx.shadowBlur = 5;
            ctx.shadowColor = '#00ff88';

            ctx.beginPath();
            for (let i = 0; i <= steps; i++) {
                const t = i / steps;
                const x = centerX + (targetX - centerX) * t;
                const y = centerY + (targetY - centerY) * t;

                const waveOffset = Math.sin((distance * t + time * 3) * Math.PI / 20) * 15;
                const perpAngle = Math.atan2(targetY - centerY, targetX - centerX) + Math.PI / 2;

                const finalX = x + Math.cos(perpAngle) * waveOffset;
                const finalY = y + Math.sin(perpAngle) * waveOffset;

                if (i === 0) {
                    ctx.moveTo(finalX, finalY);
                } else {
                    ctx.lineTo(finalX, finalY);
                }
            }
            ctx.stroke();

            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1;
        };

        const updateQuantumBits = () => {
            quantumBitsRef.current = quantumBitsRef.current.filter(bit => {
                bit.life -= 1;
                bit.x += bit.vx;
                bit.y += bit.vy;
                bit.phase += bit.frequency;

                bit.x += Math.sin(bit.phase) * 0.5;
                bit.y += Math.cos(bit.phase) * 0.5;

                drawQuantumBit(bit);

                return bit.life > 0;
            });
        };

        const updateQuantumGates = () => {
            quantumGatesRef.current = quantumGatesRef.current.filter(gate => {
                gate.life -= 1;
                drawQuantumGate(gate);
                return gate.life > 0;
            });
        };

        const animate = () => {
            time += 0.016;
            const { x: mouseX, y: mouseY } = mouseRef.current;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // sadece temizleme yap


            if (isVisible) {
                trailPointsRef.current.forEach((point) => {
                    const age = time - point.time;
                    const alpha = Math.max(0, (1 - age / 2) * 0.4);
                    const radius = 3 + age * 2;

                    ctx.globalAlpha = alpha;
                    ctx.fillStyle = '#ffffff';
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = '#ffffff';
                    ctx.beginPath();
                    ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.shadowBlur = 0;
                });

                const interactiveElements = document.querySelectorAll(
                    'button, a, [role="button"], input, textarea, select, h1, h2, h3'
                );

                interactiveElements.forEach((element) => {
                    const rect = element.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    const distance = Math.sqrt(Math.pow(centerX - mouseX, 2) + Math.pow(centerY - mouseY, 2));

                    if (distance < 200) {
                        drawBinaryWave(mouseX, mouseY, centerX, centerY);

                        const probability = Math.max(0.1, (1 - distance / 200) * 0.5);

                        ctx.globalAlpha = probability;
                        ctx.strokeStyle = '#00ff88';
                        ctx.lineWidth = 1;
                        ctx.shadowBlur = 10;
                        ctx.shadowColor = '#00ff88';

                        ctx.beginPath();
                        ctx.rect(rect.left - 5, rect.top - 5, rect.width + 10, rect.height + 10);
                        ctx.stroke();

                        const corners = [
                            [rect.left, rect.top],
                            [rect.right, rect.top],
                            [rect.left, rect.bottom],
                            [rect.right, rect.bottom]
                        ];

                        ctx.font = '10px Courier New';
                        ctx.fillStyle = '#00ff88';
                        corners.forEach((corner) => {
                            const binary = Math.floor(Math.random() * 2).toString();
                            ctx.fillText(binary, corner[0], corner[1]);
                        });

                        ctx.shadowBlur = 0;
                        ctx.globalAlpha = 1;
                    }
                });

                updateQuantumBits();
                updateQuantumGates();

                const fieldRadius = 25 + Math.sin(time * 3) * 5;

                ctx.globalAlpha = 0.6;
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 1;
                ctx.shadowBlur = 15;
                ctx.shadowColor = '#ffffff';
                ctx.beginPath();
                ctx.arc(mouseX, mouseY, fieldRadius, 0, Math.PI * 2);
                ctx.stroke();

                for (let i = 0; i < 6; i++) {
                    const angle = (Math.PI * 2 * i) / 6 + time * 2;
                    const r = fieldRadius + Math.sin(time * 4 + i) * 8;
                    const px = mouseX + Math.cos(angle) * r;
                    const py = mouseY + Math.sin(angle) * r;

                    const bit = Math.floor(time * 2 + i) % 2;
                    ctx.font = '12px Courier New';
                    ctx.fillStyle = bit === 1 ? '#0099ff' : '#ff6600';
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = ctx.fillStyle;
                    ctx.fillText(bit.toString(), px - 3, py + 4);
                }

                ctx.globalAlpha = 0.8;
                ctx.fillStyle = '#ffffff';
                ctx.shadowBlur = 20;
                ctx.shadowColor = '#ffffff';
                ctx.beginPath();
                ctx.arc(mouseX, mouseY, 3, 0, Math.PI * 2);
                ctx.fill();

                ctx.shadowBlur = 0;
                ctx.globalAlpha = 1;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('click', handleClick);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', resizeCanvas);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('click', handleClick);
        };
    }, []);

return (
    <canvas
        ref={canvasRef}
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none', // tıklamaları engellemez
            zIndex: 9999,          // üstte görünmesi için
            background: 'transparent' // tamamen şeffaf yapar
        }}
    />
);
};

export default QuantumMouse;
