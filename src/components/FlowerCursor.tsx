import { useEffect, useState } from 'react';

export default function FlowerCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationId: number;
    let currentRotation = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // 缓慢旋转动画
    const animate = () => {
      currentRotation += 0.3;
      setRotation(currentRotation);
      animationId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    animate();

    // 隐藏默认光标
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationId);
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  const scale = isClicking ? 0.8 : 1;
  const size = 28;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-100"
      style={{
        left: position.x - size / 2,
        top: position.y - size / 2,
        transform: `scale(${scale}) rotate(${rotation}deg)`,
      }}
    >
      {/* 生命之花 SVG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 2px 6px rgba(139, 90, 155, 0.25))' }}
      >
        {/* 外圈 */}
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke="url(#cursorGradient)"
          strokeWidth="1.5"
          fill="rgba(255,255,255,0.6)"
        />
        {/* 花瓣 - 6片 */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <ellipse
            key={i}
            cx="24"
            cy="14"
            rx="6"
            ry="10"
            fill="url(#cursorGradient)"
            opacity="0.4"
            transform={`rotate(${angle} 24 24)`}
          />
        ))}
        {/* 中心圆 */}
        <circle cx="24" cy="24" r="6" fill="url(#cursorGradient)" opacity="0.8" />
        <circle cx="24" cy="24" r="3" fill="#fff" opacity="0.9" />
        <defs>
          <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5A9B" />
            <stop offset="100%" stopColor="#6E4580" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
