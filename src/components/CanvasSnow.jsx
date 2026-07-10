import React, { useEffect, useRef } from "react";

export default function CanvasSnow() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Dynamic density of flakes based on screen width
    const getFlakeCount = (w) => {
      if (w < 640) return 40; // Mobile
      if (w < 1024) return 70; // Tablet
      return 110; // Desktop
    };

    let flakeCount = getFlakeCount(width);
    let flakes = [];

    // Initialize flakes
    const initFlakes = () => {
      flakes = [];
      for (let i = 0; i < flakeCount; i++) {
        flakes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 2.8 + 0.8, // radius: 0.8px to 3.6px
          d: Math.random() * flakeCount, // density/wind swing
          speed: Math.random() * 0.9 + 0.3, // fall speed: 0.3px/s to 1.2px/s
          opacity: Math.random() * 0.45 + 0.15, // opacity: 0.15 to 0.60
        });
      }
    };

    initFlakes();

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      flakeCount = getFlakeCount(width);
      initFlakes();
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let angle = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.beginPath();

      angle += 0.005;

      for (let i = 0; i < flakeCount; i++) {
        const f = flakes[i];
        
        // Draw individual flake
        ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity})`;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
        ctx.fill();

        // Update positions
        // Falling speed + wind horizontal sway
        f.y += f.speed;
        f.x += Math.sin(angle + f.d) * 0.35;

        // If flake reaches the bottom, reset to top
        if (f.y > height) {
          flakes[i] = {
            x: Math.random() * width,
            y: -10,
            r: f.r,
            d: f.d,
            speed: f.speed,
            opacity: f.opacity,
          };
        }

        // If flake goes too far left/right, wrap around
        if (f.x > width + 5) {
          flakes[i].x = -5;
        } else if (f.x < -5) {
          flakes[i].x = width + 5;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    // Start Loop
    draw();

    // Pause when tab is inactive
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        draw();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
