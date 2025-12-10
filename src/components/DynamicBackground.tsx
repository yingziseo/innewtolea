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
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX / window.innerWidth;
      targetMouseY = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 主要光晕 - 更大更柔和
    const blobs = [
      {
        baseX: 0.25, baseY: 0.25, radius: 420,
        color: { r: 197, g: 163, b: 203, a: 0.32 },
        speed: 0.0006, amplitude: 0.18, phase: 0,
      },
      {
        baseX: 0.75, baseY: 0.55, radius: 380,
        color: { r: 224, g: 179, b: 194, a: 0.30 },
        speed: 0.0008, amplitude: 0.15, phase: Math.PI / 2,
      },
      {
        baseX: 0.5, baseY: 0.85, radius: 350,
        color: { r: 212, g: 137, b: 154, a: 0.25 },
        speed: 0.0005, amplitude: 0.20, phase: Math.PI,
      },
      {
        baseX: 0.15, baseY: 0.7, radius: 300,
        color: { r: 169, g: 125, b: 176, a: 0.22 },
        speed: 0.001, amplitude: 0.12, phase: Math.PI * 1.5,
      },
      {
        baseX: 0.85, baseY: 0.2, radius: 360,
        color: { r: 194, g: 170, b: 133, a: 0.20 },
        speed: 0.0007, amplitude: 0.16, phase: Math.PI * 0.5,
      },
    ];

    // 流动光带
    const flowingLights = [
      { startX: 0, startY: 0.3, speed: 0.0003, width: 200, opacity: 0.08 },
      { startX: 1, startY: 0.6, speed: 0.00025, width: 180, opacity: 0.06 },
      { startX: 0.5, startY: 0, speed: 0.00035, width: 160, opacity: 0.07 },
    ];

    // 微粒子
    const particles: Array<{
      x: number; y: number; size: number; speed: number;
      opacity: number; drift: number; phase: number;
    }> = [];

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.0002 + 0.0001,
        opacity: Math.random() * 0.15 + 0.05,
        drift: Math.random() * 0.1,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      time += 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // 平滑鼠标跟随
      mouseX = lerp(mouseX, targetMouseX, 0.03);
      mouseY = lerp(mouseY, targetMouseY, 0.03);

      // 清除并填充基础渐变
      const baseGradient = ctx.createLinearGradient(0, 0, width, height);
      baseGradient.addColorStop(0, 'rgba(253, 251, 247, 1)');
      baseGradient.addColorStop(0.5, 'rgba(250, 248, 244, 1)');
      baseGradient.addColorStop(1, 'rgba(248, 245, 240, 1)');
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, width, height);

      // 绘制流动光带
      flowingLights.forEach((light, index) => {
        const progress = (time * light.speed + index * 0.3) % 1;
        const x = light.startX * width + Math.sin(time * 0.001 + index) * 100;
        const y = progress * height * 1.5 - height * 0.25;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, light.width);
        gradient.addColorStop(0, `rgba(200, 170, 190, ${light.opacity})`);
        gradient.addColorStop(0.5, `rgba(200, 170, 190, ${light.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(200, 170, 190, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(x, y, light.width, light.width * 2, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // 绘制主要光晕
      blobs.forEach((blob) => {
        const baseOffsetX = Math.sin(time * blob.speed + blob.phase) * blob.amplitude;
        const baseOffsetY = Math.cos(time * blob.speed * 0.7 + blob.phase) * blob.amplitude;
        const secondaryWave = Math.sin(time * blob.speed * 1.5 + blob.phase) * 0.03;

        const mouseInfluence = 0.08;
        const targetX = blob.baseX + baseOffsetX + secondaryWave + (mouseX - 0.5) * mouseInfluence;
        const targetY = blob.baseY + baseOffsetY + secondaryWave + (mouseY - 0.5) * mouseInfluence;

        const x = targetX * width;
        const y = targetY * height;

        // 呼吸效果
        const breathe = 1 + Math.sin(time * blob.speed * 2.5) * 0.08;
        const radius = blob.radius * breathe;

        // 多层渐变增加深度
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${blob.color.a})`);
        gradient.addColorStop(0.3, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${blob.color.a * 0.7})`);
        gradient.addColorStop(0.6, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${blob.color.a * 0.3})`);
        gradient.addColorStop(1, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 绘制微粒子
      particles.forEach((p) => {
        const px = (p.x + Math.sin(time * p.speed * 10 + p.phase) * p.drift) * width;
        const py = (p.y + time * p.speed) % 1 * height;
        const twinkle = 0.5 + Math.sin(time * 0.05 + p.phase) * 0.5;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 180, 190, ${p.opacity * twinkle})`;
        ctx.fill();
      });

      // 添加柔和的光晕叠加
      const overlayGradient = ctx.createRadialGradient(
        width * (0.5 + (mouseX - 0.5) * 0.2),
        height * (0.4 + (mouseY - 0.5) * 0.2),
        0,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8
      );
      overlayGradient.addColorStop(0, 'rgba(255, 250, 245, 0.15)');
      overlayGradient.addColorStop(0.5, 'rgba(255, 250, 245, 0.05)');
      overlayGradient.addColorStop(1, 'rgba(255, 250, 245, 0)');
      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, width, height);

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
      style={{ opacity: 0.85 }}
    />
  );
}
