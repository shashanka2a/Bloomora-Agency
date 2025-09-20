'use client';

import { useEffect, useRef } from 'react';

interface Web3GLProps {
  className?: string;
  type?: 'floating' | 'grid' | 'particles' | 'geometric';
}

export function Web3GL({ className = "", type = 'floating' }: Web3GLProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const drawFloating = () => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      
      const centerX = canvas.width / (2 * window.devicePixelRatio);
      const centerY = canvas.height / (2 * window.devicePixelRatio);
      
      // Floating geometric shapes
      for (let i = 0; i < 8; i++) {
        const angle = (time * 0.001 + i * Math.PI / 4) % (Math.PI * 2);
        const radius = 80 + Math.sin(time * 0.002 + i) * 20;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.save();
        ctx.globalAlpha = 0.1 + Math.sin(time * 0.003 + i) * 0.05;
        ctx.fillStyle = i % 2 === 0 ? '#3B82F6' : '#8B5CF6';
        
        if (i % 3 === 0) {
          // Circle
          ctx.beginPath();
          ctx.arc(x, y, 8 + Math.sin(time * 0.004 + i) * 3, 0, Math.PI * 2);
          ctx.fill();
        } else if (i % 3 === 1) {
          // Square
          ctx.fillRect(x - 6, y - 6, 12, 12);
        } else {
          // Triangle
          ctx.beginPath();
          ctx.moveTo(x, y - 8);
          ctx.lineTo(x - 7, y + 6);
          ctx.lineTo(x + 7, y + 6);
          ctx.closePath();
          ctx.fill();
        }
        
        ctx.restore();
      }
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      
      const gridSize = 40;
      const offsetX = (time * 0.05) % gridSize;
      const offsetY = (time * 0.03) % gridSize;
      
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 1;
      
      for (let x = -offsetX; x < canvas.width / window.devicePixelRatio + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height / window.devicePixelRatio);
        ctx.stroke();
      }
      
      for (let y = -offsetY; y < canvas.height / window.devicePixelRatio + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width / window.devicePixelRatio, y);
        ctx.stroke();
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      
      for (let i = 0; i < 50; i++) {
        const x = (Math.sin(time * 0.001 + i * 0.1) + 1) * (canvas.width / (2 * window.devicePixelRatio));
        const y = (Math.cos(time * 0.0008 + i * 0.15) + 1) * (canvas.height / (2 * window.devicePixelRatio));
        const size = 2 + Math.sin(time * 0.002 + i) * 1;
        
        ctx.save();
        ctx.globalAlpha = 0.3 + Math.sin(time * 0.003 + i) * 0.2;
        ctx.fillStyle = i % 3 === 0 ? '#3B82F6' : i % 3 === 1 ? '#8B5CF6' : '#EC4899';
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    };

    const drawGeometric = () => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      
      const centerX = canvas.width / (2 * window.devicePixelRatio);
      const centerY = canvas.height / (2 * window.devicePixelRatio);
      
      // Rotating hexagon
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(time * 0.001);
      
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = Math.cos(angle) * 60;
        const y = Math.sin(angle) * 60;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
      
      // Inner rotating triangle
      ctx.rotate(time * 0.002);
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.4)';
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3;
        const x = Math.cos(angle) * 30;
        const y = Math.sin(angle) * 30;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
      
      ctx.restore();
    };

    const animate = () => {
      time += 16;
      
      switch (type) {
        case 'floating':
          drawFloating();
          break;
        case 'grid':
          drawGrid();
          break;
        case 'particles':
          drawParticles();
          break;
        case 'geometric':
          drawGeometric();
          break;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [type]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  );
}
