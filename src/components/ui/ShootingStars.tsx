// components/ui/ShootingStars.tsx
"use client";
import React, { useEffect, useRef } from "react";

interface ShootingStarsProps {
  starColor: string;
  trailColor: string;
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
}

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  starColor,
  trailColor,
  minSpeed = 15,
  maxSpeed = 35,
  minDelay = 1000,
  maxDelay = 3000,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createStar = () => {
      const star = document.createElement("div");
      const size = Math.random() * 2 + 1;

      star.style.position = "absolute";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.background = starColor;
      star.style.boxShadow = `0 0 6px 2px ${trailColor}`;
      star.style.borderRadius = "50%";
      star.style.opacity = "0.9";
      star.style.zIndex = "0";

      const animationDuration =
        Math.random() * (maxSpeed - minSpeed) + minSpeed;
      star.style.animation = `shoot ${animationDuration}s linear`;

      container.appendChild(star);

      setTimeout(() => {
        container.removeChild(star);
      }, animationDuration * 1000);
    };

    const spawnStars = () => {
      createStar();
      const delay =
        Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(spawnStars, delay);
    };

    spawnStars();
  }, [starColor, trailColor, minSpeed, maxSpeed, minDelay, maxDelay]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
    >
      <style jsx>{`
        @keyframes shoot {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-500px) translateY(500px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
