"use client";

import { motion, useSpring } from "motion/react";
import { FC, JSX, useEffect, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export interface SmoothCursorProps {
  cursor?: JSX.Element;
  springConfig?: {
    damping: number;
    stiffness: number;
    mass: number;
    restDelta: number;
  };
}

const DefaultCursorSVG: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
    >
      <circle cx="16" cy="16" r="13" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  );
};

export function SmoothCursor({
  cursor = <DefaultCursorSVG />,
  springConfig = {
    damping: 25,
    stiffness: 600,
    mass: 1,
    restDelta: 0.001,
  },
}: SmoothCursorProps) {
  const [pos, setPos] = useState<Position>({ x: 0, y: 0 });
  // For delayed small circle
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    document.body.style.cursor = "none";
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Hollow circle follows instantly */}
      <motion.div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 100,
          pointerEvents: "none",
          willChange: "transform",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      >
        {cursor}
      </motion.div>
      {/* Small solid circle follows with delay */}
      <motion.div
        style={{
          position: "fixed",
          left: cursorX,
          top: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 101,
          pointerEvents: "none",
          willChange: "transform",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      >
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "white" }} />
      </motion.div>
    </>
  );
}
