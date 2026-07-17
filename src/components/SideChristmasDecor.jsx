import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function PineCorner({ side }) {
  const isLeft = side === "left";

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        [isLeft ? "left" : "right"]: 0,
        top: 0,
        width: "220px",
        height: "300px",
        transform: isLeft ? "none" : "scaleX(-1)",
      }}
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <svg viewBox="0 0 220 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        {/* Main branch */}
        <path
          d="M0,0 C30,40 60,100 80,180 C90,230 95,260 100,300"
          stroke="#0A461A"
          strokeWidth="3"
          opacity="0.5"
          strokeLinecap="round"
        />
        <path
          d="M0,0 C25,35 50,85 65,150 C75,200 82,240 88,300"
          stroke="#0A461A"
          strokeWidth="2"
          opacity="0.3"
          strokeLinecap="round"
        />

        {/* Pine needles clusters */}
        {[
          { x: 15, y: 30, r: -30 },
          { x: 30, y: 55, r: -20 },
          { x: 42, y: 85, r: -15 },
          { x: 55, y: 115, r: -10 },
          { x: 65, y: 150, r: -5 },
          { x: 75, y: 185, r: 0 },
          { x: 82, y: 220, r: 5 },
          { x: 25, y: 45, r: -25 },
          { x: 48, y: 100, r: -12 },
          { x: 60, y: 135, r: -8 },
        ].map((needle, i) => (
          <g key={`n${i}`} transform={`translate(${needle.x}, ${needle.y}) rotate(${needle.r})`}>
            <line x1="0" y1="0" x2="18" y2="-4" stroke="#0A461A" strokeWidth="1.2" opacity="0.6" />
            <line x1="0" y1="0" x2="16" y2="2" stroke="#0A461A" strokeWidth="1" opacity="0.5" />
            <line x1="0" y1="0" x2="14" y2="-8" stroke="#154A30" strokeWidth="0.8" opacity="0.4" />
            <line x1="0" y1="0" x2="20" y2="0" stroke="#0A461A" strokeWidth="1.3" opacity="0.55" />
            <line x1="0" y1="0" x2="15" y2="5" stroke="#154A30" strokeWidth="0.9" opacity="0.45" />
          </g>
        ))}

        {/* Secondary branch */}
        <path
          d="M5,10 C20,25 40,60 55,100"
          stroke="#0A461A"
          strokeWidth="1.5"
          opacity="0.35"
          strokeLinecap="round"
        />

        {/* Small red berries */}
        {[
          { cx: 22, cy: 42 },
          { cx: 28, cy: 48 },
          { cx: 25, cy: 52 },
          { cx: 52, cy: 108 },
          { cx: 58, cy: 112 },
          { cx: 55, cy: 116 },
          { cx: 78, cy: 195 },
          { cx: 84, cy: 198 },
          { cx: 81, cy: 202 },
        ].map((berry, i) => (
          <circle key={`b${i}`} cx={berry.cx} cy={berry.cy} r="3" fill="#7E0E0F" opacity="0.7" />
        ))}

        {/* Berry highlights */}
        {[
          { cx: 21, cy: 41 },
          { cx: 51, cy: 107 },
          { cx: 77, cy: 194 },
        ].map((h, i) => (
          <circle key={`h${i}`} cx={h.cx} cy={h.cy} r="1" fill="white" opacity="0.3" />
        ))}

        {/* Small gold ornaments */}
        {[
          { cx: 38, cy: 75, r: 4 },
          { cx: 70, cy: 165, r: 5 },
          { cx: 88, cy: 250, r: 4 },
        ].map((orn, i) => (
          <g key={`o${i}`}>
            <circle cx={orn.cx} cy={orn.cy} r={orn.r} fill="#C9A96E" opacity="0.6" />
            <circle cx={orn.cx - 1} cy={orn.cy - 1} r={orn.r * 0.3} fill="white" opacity="0.25" />
          </g>
        ))}
      </svg>
    </motion.div>
  );
}

function PineSide({ side }) {
  const isLeft = side === "left";

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        [isLeft ? "left" : "right"]: 0,
        top: "300px",
        width: "80px",
        height: "calc(100% - 300px)",
        transform: isLeft ? "none" : "scaleX(-1)",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <svg viewBox="0 0 80 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }} preserveAspectRatio="xMidYMin slice">
        {/* Thin vertical vine */}
        <path
          d="M40,0 C35,50 45,100 40,150 C35,200 45,250 40,300 C35,350 45,400 40,450 C35,500 45,550 40,600"
          stroke="#0A461A"
          strokeWidth="1.5"
          opacity="0.25"
          strokeLinecap="round"
        />

        {/* Scattered small needle clusters */}
        {[80, 180, 300, 420, 540].map((y, i) => (
          <g key={`s${i}`} transform={`translate(40, ${y})`}>
            <line x1="0" y1="0" x2="12" y2="-3" stroke="#0A461A" strokeWidth="0.8" opacity="0.3" />
            <line x1="0" y1="0" x2="10" y2="3" stroke="#0A461A" strokeWidth="0.7" opacity="0.25" />
            <line x1="0" y1="0" x2="-8" y2="-2" stroke="#154A30" strokeWidth="0.6" opacity="0.2" />
          </g>
        ))}

        {/* Tiny berries along the vine */}
        {[130, 270, 400, 520].map((y, i) => (
          <circle key={`vb${i}`} cx={40 + (i % 2 === 0 ? 5 : -5)} cy={y} r="2" fill="#7E0E0F" opacity="0.3" />
        ))}
      </svg>
    </motion.div>
  );
}

export default function SideChristmasDecor() {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const check = () => setIsLarge(window.innerWidth >= 1280);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isLarge) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <PineCorner side="left" />
      <PineCorner side="right" />
      <PineSide side="left" />
      <PineSide side="right" />
    </div>
  );
}
