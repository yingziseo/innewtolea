import { useEffect, useRef } from 'react';

export default function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let mouseX = 0.5;
    let mouseY = 0.5;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const blobs = [
      {
        baseX: 0.3,
        baseY: 0.3,
        radius: 350,
        color: { r: 197, g: 163, b: 203, a: 0.28 },
        speed: 0.0008,
        amplitude: 0.15,
        phase: 0,
      },
      {
        baseX: 0.7,
        baseY: 0.6,
        radius: 300,
        color: { r: 224, g: 179, b: 194, a: 0.28 },
        speed: 0.001,
        amplitude: 0.12,
        phase: Math.PI / 2,
      },
      {
        baseX: 0.5,
        baseY: 0.8,
        radius: 280,
        color: { r: 212, g: 137, b: 154, a: 0.22 },
        speed: 0.0006,
        amplitude: 0.18,
        phase: Math.PI,
      },
      {
        baseX: 0.2,
        baseY: 0.7,
        radius: 250,
        color: { r: 169, g: 125, b: 176, a: 0.2 },
        speed: 0.0012,
        amplitude: 0.1,
        phase: Math.PI * 1.5,
      },
      {
        baseX: 0.8,
        baseY: 0.2,
        radius: 320,
        color: { r: 194, g: 170, b: 133, a: 0.18 },
        speed: 0.0007,
        amplitude: 0.14,
        phase: Math.PI * 0.5,
      },
    ];

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      time += 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      blobs.forEach((blob) => {
        const baseOffsetX = Math.sin(time * blob.speed + blob.phase) * blob.amplitude;
        const baseOffsetY = Math.cos(time * blob.speed * 0.8 + blob.phase) * blob.amplitude;

        const mouseInfluence = 0.05;
        const targetX = blob.baseX + baseOffsetX + (mouseX - 0.5) * mouseInfluence;
        const targetY = blob.baseY + baseOffsetY + (mouseY - 0.5) * mouseInfluence;

        const x = lerp(blob.baseX, targetX, 0.1) * width;
        const y = lerp(blob.baseY, targetY, 0.1) * height;

        const pulseScale = 1 + Math.sin(time * blob.speed * 2) * 0.05;
        const radius = blob.radius * pulseScale;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${blob.color.a})`);
        gradient.addColorStop(0.5, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${blob.color.a * 0.5})`);
        gradient.addColorStop(1, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      const noiseIntensity = 0.02;
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * noiseIntensity * 255;
        data[i] = Math.min(255, Math.max(0, data[i] + noise));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
      }
      ctx.putImageData(imageData, 0, 0);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
