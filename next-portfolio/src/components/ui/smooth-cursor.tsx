"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function SmoothCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      document.body.classList.add('touch-device');
    }

    let inactivityTimer: NodeJS.Timeout;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", updateMousePosition);

    const interactiveElements = document.querySelectorAll(
      "a, button, [data-cursor-hover]"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    inactivityTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      clearTimeout(inactivityTimer);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [pathname]);

  return (
    <>
      <div
        className={`hover:block custom-cursor-dot fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out`}
        style={{
          transform: `translate(${mousePosition.x - 6}px, ${mousePosition.y - 6}px) scale(${isHovering ? 2.5 : 1})`,
          mixBlendMode: "difference",
          opacity: isVisible ? 1 : 0,
        }}
      />

      <div
        className={`hover:block custom-cursor-outline fixed top-0 left-0 w-7 h-7 border rounded-full pointer-events-none z-50 transition-opacity duration-300`}
        style={{
          transform: `translate(${mousePosition.x - 14}px, ${mousePosition.y - 14}px) scale(${isHovering ? 1.5 : 1})`,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
